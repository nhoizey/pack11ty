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
      let permalinkBase = data.page.filePathStem.split('/').slice(2).join('/');
      return `${permalinkBase}.html`;
    },
  },
};
