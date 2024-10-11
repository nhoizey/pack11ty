export default {
	layout: false,
	permalink: (data) => {
		// Only the service worker should generate an actual file
		if (data.page.filePathStem.endsWith('service-worker')) {
			return 'service-worker.js';
		}
		// Other assets will be inlined
		return false;
	},
};
