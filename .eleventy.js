const glob = require('fast-glob');
const path = require('path');

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

	const pack11tyPluginOptions = {
		markdown: { firstLevel: 2, containers: ['new'] },
	};

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
