module.exports = {
	layout: false,
	permalink: (data) => {
		if (data.page.filePathStem.endsWith('service-worker')) {
			return 'service-worker.js';
		}
		return false;
	},
};
