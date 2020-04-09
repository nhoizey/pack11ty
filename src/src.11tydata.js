const type = (data) => {
  let type = null;
  // Let's find if this content is in a root folder without '_' prefix
  let matches = data.page.inputPath.match(/^\.\/src\/([^_][^/]+)\/.*$/);
  if (matches) {
    type = matches[1];
  }
  return type;
};

module.exports = {
  lang: 'en',
  eleventyComputed: {
    layout: (data) => type(data),
    permalink: (data) => {
      if (data.permalink) {
        // A permalink has been set in the content Front Matter
        return data.permalink;
      }
      return `${data.page.filePathStem}.html`;
    },
  },
};
