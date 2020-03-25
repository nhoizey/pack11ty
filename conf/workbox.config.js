const path = require('path');

const BUILD_DIR = 'dist';

module.exports = {
  globDirectory: BUILD_DIR,
  globPatterns: [
    './ui/**/*.*',
    './',
    './offline-fallback.html',
    './manifest.webmanifest',
  ],
  swSrc: path.join(BUILD_DIR, 'service-worker.js'),
  swDest: path.join(BUILD_DIR, 'service-worker.js'),
  mode: 'production',
};
