const glob = require('fast-glob');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

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

	const responsiverConfig = require(path.join(
		__dirname,
		'src/_11ty/images-responsiver-config.js'
	));

	const pack11tyPluginOptions = {
		responsiver: isProd && responsiverConfig,
		minifyHtml: isProd,
		markdown: {
			firstLevel: 2,
			containers: ['success', 'warning', 'error'],
		},
	};

	const pack11ty = require('eleventy-plugin-pack11ty');
	eleventyConfig.addPlugin(pack11ty, pack11tyPluginOptions);

	// ------------------------------------------------------------------------
	// Copy static files: images, etc.
	// ------------------------------------------------------------------------

	eleventyConfig.addPassthroughCopy('src/', {
		debug: true,
		filter: ['**/*.{jpg,jpeg,png,gif}', '!static/**/*'],
		rename: (file) => file.replace(/(collections|pages)\//, ''),
	});

	eleventyConfig.addPassthroughCopy('src/', {
		debug: true,
		filter: ['static/**/*'],
		rename: (file) => file.replace(/static\//, ''),
	});

	// ------------------------------------------------------------------------
	// Global Eleventy configuration
	// ------------------------------------------------------------------------

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
