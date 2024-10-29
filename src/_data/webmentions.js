// https://sia.codes/posts/webmentions-eleventy-in-depth/

import fs from "node:fs";

import { unionBy } from "lodash-es";
import sanitizeHTML from "sanitize-html";

// import pkg from '../../package.json' with { type: 'json' };
// Not supported, see https://github.com/11ty/eleventy/issues/3128#issuecomment-1878745864
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const pkg = require("../../package.json");
const domain = new URL(pkg.homepage).hostname;

// Load .env variables with dotenv
import "dotenv/config";

// Define Cache Location and API Endpoint
const CACHE_FILE_PATH = "_cache/webmentions.json";
const API = "https://webmention.io/api";
const TOKEN = process.env.WEBMENTION_IO_TOKEN;

async function fetchWebmentions(since, perPage = 10000) {
	// If we dont have a domain name or token, abort
	if (!domain || !TOKEN) {
		console.warn(">>> unable to fetch webmentions: missing domain or token");
		return false;
	}

	let url = `${API}/mentions.jf2?domain=${domain}&token=${TOKEN}&per-page=${perPage}`;
	if (since) url += `&since=${since}`; // only fetch new mentions

	const response = await fetch(url);
	if (response.ok) {
		const feed = await response.json();
		const webmentions = feed.children;
		const cleanedWebmentions = cleanWebmentions(webmentions);
		if (cleanedWebmentions.length === 0) {
			return [];
		}
		console.log(`[Webmention] ${cleanedWebmentions.length} new webmentions`);
		return cleanedWebmentions;
	}

	return null;
}

function cleanWebmentions(webmentions) {
	// https://mxb.dev/blog/using-webmentions-on-static-sites/#h-parsing-and-filtering
	const hasRequiredFields = (entry) => {
		const { published, url } = entry;
		return published && url;
	};
	const sanitize = (entry) => {
		const { content } = entry;
		if (content && content["content-type"] === "text/html") {
			let html = content.html;
			html = html
				.replace(/<a [^>]+><\/a>/gm, "")
				.trim()
				.replace(/\n/g, "<br />");
			html = sanitizeHTML(html, {
				allowedTags: [
					"b",
					"i",
					"em",
					"strong",
					"a",
					"blockquote",
					"ul",
					"ol",
					"li",
					"code",
					"pre",
					"br",
				],
				allowedAttributes: {
					a: ["href", "rel"],
					img: ["src", "alt"],
				},
				allowedIframeHostnames: [],
			});
			content.html = html;
		}
		return entry;
	};

	return (
		webmentions
			//.filter(hasRequiredFields)
			.map(sanitize)
	);
}

// Merge fresh webmentions with cached entries, unique per id
function mergeWebmentions(a, b) {
	if (b.length === 0) {
		return a;
	}
	const union = unionBy(a, b, "wm-id");
	union.sort((a, b) => {
		const aDate = new Date(a.published || a["wm-received"]);
		const bDate = new Date(b.published || b["wm-received"]);
		return aDate - bDate;
	});
	return union;
}

// save combined webmentions in cache file
function writeToCache(data) {
	const dir = "_cache";
	const fileContent = JSON.stringify(data, null, 2);
	// create cache folder if it doesnt exist already
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}
	// write data to cache json file
	fs.writeFile(CACHE_FILE_PATH, fileContent, (err) => {
		if (err) throw err;
	});
}

// get cache contents from json file
function readFromCache() {
	if (fs.existsSync(CACHE_FILE_PATH)) {
		const cacheFile = fs.readFileSync(CACHE_FILE_PATH);
		return JSON.parse(cacheFile);
	}

	// no cache found.
	return {
		lastFetched: null,
		webmentions: [],
	};
}

export default async function () {
	const cached = readFromCache();

	// Only fetch new mentions in production
	if (process.env.ELEVENTY_RUN_MODE === "build") {
		const fetchedAt = new Date().toISOString();
		const newWebmentions = await fetchWebmentions(cached.lastFetched);
		if (newWebmentions) {
			const webmentions = {
				lastFetched: fetchedAt,
				webmentions: mergeWebmentions(cached.webmentions, newWebmentions),
			};

			writeToCache(webmentions);
			return webmentions.webmentions;
		}
	}

	return cached.webmentions;
}
