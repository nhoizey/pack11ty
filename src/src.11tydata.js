const fs = require('fs');

module.exports = {
	lang: 'en',
	eleventyComputed: {
		layout: (data) => {
			if (data.layout !== undefined && data.layout !== '') {
				// A layout has been set in the content Front Matter
				return data.layout;
			}

			// Default layout is a page
			let layout = 'pages';

			// Let's find if this content is in a collection folder
			// (a root folder without a '_' prefix)
			const folderRegex = new RegExp(`^./src/([^_][^/]+)/.*$`);
			let matches = data.page.inputPath.match(folderRegex);

			if (matches) {
				folder = matches[1];
				if (fs.existsSync(`src/_layouts/${folder}.njk`)) {
					layout = folder;
				}
			}
			return layout;
		},
		permalink: (data) => {
			if (data.permalink) {
				// A permalink has been set in the content Front Matter
				return data.permalink;
			}
			// Keep Eleventy default behavior for permalinks
			// BREAKING CHANGE in v2.0.0
			return (
				data.page.filePathStem
					.replace(/^\/(pages|collections)/, '')
					.replace(/\/index$/, '') + '/index.html'
			);
		},
	},
};
