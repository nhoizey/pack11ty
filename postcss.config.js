module.exports = (ctx) => ({
  plugins: {
    'postcss-hash': {
      manifest: './src/_data/hashes_css.json',
    },
  },
});
