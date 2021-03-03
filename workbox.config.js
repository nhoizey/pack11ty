const path = require('path');
const config = require('./pack11ty.config.js');

module.exports = {
  globDirectory: config.dir.dist,
  globPatterns: [
    './css/additional.*.css',
    './js/additional-*.*.js',
    './',
    './offline-fallback.html',
    './manifest.webmanifest',
    './images/logo-192px.png',
  ],
  dontCacheBustURLsMatching: new RegExp('.+.[a-f0-9]{8}..+'),
  swSrc: path.join(config.dir.dist, 'service-worker.js'),
  swDest: path.join(config.dir.dist, 'service-worker.js'),
};
