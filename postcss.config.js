module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-hash')({
      manifest: './src/_data/hashes_css.json',
    }),
  ],
};
