const config = require('../_data/config.js');

module.exports = {
  lang: 'en',
  layout: 'pages',
  eleventyComputed: {
    permalink: (data) => {
      if (data.permalink) {
        // A permalink has been set in the content Front Matter
        return data.permalink;
      }
      // Remove the 'page/' folder from path
      let permalinkBase = data.page.filePathStem.replace(/^\/pages/, '');

      if (config.permalinkFolders) {
        // Keep Eleventy default behavior for permalinks
        return permalinkBase.replace(/\/index$/, '') + '/index.html';
      } else {
        return permalinkBase + '.html';
      }
    },
  },
};
