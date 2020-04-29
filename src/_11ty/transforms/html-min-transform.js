const htmlmin = require('html-minifier');

module.exports = function htmlMinTransform(value, outputPath) {
  if (!outputPath.endsWith('.html')) {
    return value;
  }

  let minified = htmlmin.minify(value, {
    useShortDoctype: true,
    removeComments: true,
    collapseWhitespace: true,
    minifyCSS: false,
  });
  return minified;
};
