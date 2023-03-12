const glob = require('fast-glob');
const path = require('path');
const config = require('./pack11ty.config.js');

module.exports = function (eleventyConfig) {
	// ------------------------------------------------------------------------
	// Collections
	// ------------------------------------------------------------------------

	glob.sync('src/_11ty/collections/*.js').forEach((file) => {
		let collectionList = require('./' + file);
		Object.keys(collectionList).forEach((name) => {
			eleventyConfig.addCollection(name, collectionList[name]);
		});
	});

	// ------------------------------------------------------------------------
	// Shortcodes
	// ------------------------------------------------------------------------

	glob.sync('src/_11ty/shortcodes/*.js').forEach((file) => {
		let shortcodes = require('./' + file);
		Object.keys(shortcodes).forEach((name) => {
			eleventyConfig.addNunjucksShortcode(name, shortcodes[name]);
		});
	});

	// ------------------------------------------------------------------------
	// Plugins
	// ------------------------------------------------------------------------

	const pack11tyPluginOptions = {};

	if (process.env.NODE_ENV === 'production') {
		pack11tyPluginOptions.responsiver = require(path.join(
			__dirname,
			'src/_11ty/images-responsiver-config.js'
		));
		pack11tyPluginOptions.minifyHtml = true;
	}

	const pack11ty = require('eleventy-plugin-pack11ty');
	eleventyConfig.addPlugin(pack11ty, pack11tyPluginOptions);

	// ------------------------------------------------------------------------
	// Markdown plugins
	// ------------------------------------------------------------------------

	const markdownIt = require('markdown-it');
	const markdownItOptions = {
		html: true,
		breaks: true,
		linkify: true,
	};

	const markdownItFootnote = require('markdown-it-footnote');

	const slugify = require(path.join(__dirname, 'src/_11ty/_utils/slugify.js'));
	const markdownItAnchor = require('markdown-it-anchor');
	// https://www.toptal.com/designers/htmlarrows/punctuation/section-sign/
	const markdownItAnchorOptions = {
		permalink: true,
		permalinkClass: 'deeplink',
		permalinkSymbol: '&#xa7;&#xFE0E;',
		level: [2, 3, 4],
		slugify: function (s) {
			return slugify(s);
		},
	};

	const markdownItAttributes = require('markdown-it-attrs');

	const markdownItSpan = require('markdown-it-bracketed-spans');

	const markdownItContainer = require('markdown-it-container');

	const markdownItAbbr = require('markdown-it-abbr');

	// taken from https://gist.github.com/rodneyrehm/4feec9af8a8635f7de7cb1754f146a39
	function getHeadingLevel(tagName) {
		if (tagName[0].toLowerCase() === 'h') {
			tagName = tagName.slice(1);
		}

		return parseInt(tagName, 10);
	}

	function markdownItHeadingLevel(md, options) {
		var firstLevel = options.firstLevel;

		if (typeof firstLevel === 'string') {
			firstLevel = getHeadingLevel(firstLevel);
		}

		if (!firstLevel || isNaN(firstLevel)) {
			return;
		}

		var levelOffset = firstLevel - 1;
		if (levelOffset < 1 || levelOffset > 6) {
			return;
		}

		md.core.ruler.push('adjust-heading-levels', function (state) {
			var tokens = state.tokens;
			for (var i = 0; i < tokens.length; i++) {
				if (tokens[i].type !== 'heading_close') {
					continue;
				}

				var headingOpen = tokens[i - 2];
				var headingClose = tokens[i];

				var currentLevel = getHeadingLevel(headingOpen.tag);
				var tagName = 'h' + Math.min(currentLevel + levelOffset, 6);

				headingOpen.tag = tagName;
				headingClose.tag = tagName;
			}
		});
	}

	const md = markdownIt(markdownItOptions)
		.disable('code')
		.use(markdownItHeadingLevel, { firstLevel: 2 })
		.use(markdownItFootnote)
		.use(markdownItAnchor, markdownItAnchorOptions)
		.use(markdownItAttributes)
		.use(markdownItSpan)
		.use(markdownItAbbr)
		.use(markdownItContainer, 'info')
		.use(markdownItContainer, 'success')
		.use(markdownItContainer, 'warning')
		.use(markdownItContainer, 'error');
	eleventyConfig.setLibrary('md', md);

	// Add markdownify filter with Markdown-it configuration
	eleventyConfig.addFilter('markdownify', (markdownString) =>
		md.render(markdownString)
	);

	// ------------------------------------------------------------------------
	// Eleventy configuration
	// ------------------------------------------------------------------------

	eleventyConfig
		.addPassthroughCopy('src/**/*.{jpg,jpeg,png,gif}')
		.addPassthroughCopy('src/robots.txt')
		.addPassthroughCopy('src/favicon.ico')
		.addPassthroughCopy('src/_headers');

	eleventyConfig.setDataDeepMerge(true);
	eleventyConfig.setQuietMode(true);

	return {
		templateFormats: ['md', 'njk'],

		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		dir: {
			output: '_site',
			input: 'src',
			includes: '_includes',
			layouts: '_layouts',
			data: '_data',
		},
	};
};
