module.exports = {
	globDirectory: '_site',
	globPatterns: [
		'./css/additional.*.css',
		'./js/additional-*.*.js',
		'./manifest.webmanifest',
	],
	swSrc: '_site/service-worker.js',
	swDest: '_site/service-worker.js',
};
