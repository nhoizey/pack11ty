// Install the Service Worker
window.addEventListener('load', () => {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/service-worker.js');
	}
});
