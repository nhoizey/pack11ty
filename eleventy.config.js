import path from "node:path";

import eleventyPluginPack11ty from "eleventy-plugin-pack11ty";

const isProd = process.env.ELEVENTY_RUN_MODE === "build";

export default async function (eleventyConfig) {
	// ------------------------------------------------------------------------
	// Plugins
	// ------------------------------------------------------------------------

	const { responsiverConfig } = await import(
		path.join(import.meta.dirname, "src/_11ty/images-responsiver-config.js")
	);

	const pack11tyConfig = {
		responsiver: isProd && responsiverConfig,
		minifyHtml: isProd,
		markdown: {
			firstLevel: 2,
			containers: ["success", "warning", "error"],
		},
		collectionsLimit: isProd ? false : 10,
	};

	eleventyConfig.addPlugin(eleventyPluginPack11ty, pack11tyConfig);

	eleventyConfig.setDataDeepMerge(true);
	eleventyConfig.setQuietMode(true);

	eleventyConfig.setWatchJavaScriptDependencies(false);

	return {
		templateFormats: ["md", "njk"],

		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		dir: {
			output: "_site",
			input: "src",
			includes: "_includes",
			layouts: "_layouts",
			data: "_data",
		},
	};
}
