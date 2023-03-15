module.exports = {
	globDirectory: '_site',
	globPatterns: [
		'./css/additional.*.css',
		'./js/additional-*.*.js',
		'./',
		'./offline-fallback.html',
		'./manifest.webmanifest',
		'./images/logo-192px.png',
	],
	dontCacheBustURLsMatching: new RegExp('.+.[a-f0-9]{8}..+'),
	swSrc: '_site/service-worker.js',
	swDest: '_site/service-worker.js',
};
