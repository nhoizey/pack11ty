module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/ui');

  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setQuietMode(true);

  eleventyConfig.setBrowserSyncConfig({
    ui: false,
    ghostMode: false,
  });

  return {
    templateFormats: ['md', 'njk', 'jpg', 'png', 'gif'],

    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
