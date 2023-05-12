const glob = require('fast-glob');
const path = require('node:path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = function (eleventyConfig) {
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
		collectionsLimit: isProd ? false : 10,
	};

	const pack11ty = require('eleventy-plugin-pack11ty');
	eleventyConfig.addPlugin(pack11ty, pack11tyPluginOptions);

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
