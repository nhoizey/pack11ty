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

	// **********************************************************************************
	// TODO: move to the Pack11ty plugin
	// **********************************************************************************
	eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-bundle'));

	// https://github.com/11ty/eleventy-plugin-bundle#bundle-sass-with-the-render-plugin
	// https://www.11ty.dev/docs/languages/custom/#example-add-sass-support-to-eleventy
	const { EleventyRenderPlugin } = require('@11ty/eleventy');
	eleventyConfig.addPlugin(EleventyRenderPlugin);

	const sass = require('sass');
	eleventyConfig.addTemplateFormats('scss');

	// https://www.11ty.dev/docs/languages/custom/#example-add-sass-support-to-eleventy
	eleventyConfig.addExtension('scss', {
		outputFileExtension: 'css',
		compile: async function (inputContent, inputPath) {
			if (!inputPath.includes('src/assets/')) return;
			let parsed = path.parse(inputPath);
			if (parsed.name.startsWith('_')) return;
			let result = sass.compileString(inputContent, {
				loadPaths: [parsed.dir || '.', 'src/assets/sass'],
				style: 'compressed',
				sourceMap: true,
			});
			// TODO: add sourcemap files generation, see https://github.com/sass/dart-sass/issues/1594#issuecomment-1013208452
			// TODO: Add PostCSS for Autoprefixer and cssnano
			return (data) => {
				return result.css;
			};
		},
	});

	const esbuild = require('esbuild');
	eleventyConfig.addTemplateFormats('js');
	eleventyConfig.addExtension('js', {
		outputFileExtension: 'js',
		compile: async function (inputContent, inputPath) {
			if (!inputPath.includes('src/assets/')) return;
			return async (data) => {
				const output = await esbuild.build({
					entryPoints: [inputPath],
					// nodePaths: ['.', 'src/assets/js'],
					bundle: true,
					format: 'esm',
					target: 'es6',
					minify: data.eleventy.env.runMode === 'build',
					write: false,
					external: ['fs'],
				});

				return output.outputFiles[0].text;
			};
		},
	});
	// **********************************************************************************
	// End TODO
	// **********************************************************************************

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
