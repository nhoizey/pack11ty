import Toastify from 'toastify-js';

/*****************************************************************
 * Deal with offline/online events
 * ****************************************************************/

// https://mxb.at/blog/youre-offline/
// https://www.youtube.com/watch?v=7fnpsF9tMXc

let isOffline = false;
const bodyElement = document.querySelector('body');

// check if we're online, set a class on <body> if offline
function updateConnectivityStatus() {
	let notificationToShow = false;
	let notificationClass = '';
	let notificationText = '';
	let notificationDuration = 3000;
	let notificationDestination = false;

	if (typeof navigator.onLine !== 'undefined') {
		if (!navigator.onLine) {
			notificationToShow = true;
			bodyElement.classList.add('offline');

			if ('serviceWorker' in navigator) {
				// If the browser supports Service Workers and the Cache API,
				// getting offline should be less stressful. Use a "warning"
				// message instead of an "error and provide a link to content
				// available in cache.

				// TODO: check if SW active and some content in cache
				notificationClass = 'warning';
				notificationText =
					'It looks like <strong>the connection is lost</strong>.<br />Continue reading this page, or look at <a href="/offline/">other contents you can read while offline</a>.';
				notificationDestination = '/offline/';
				notificationDuration = 10000;
			} else {
				notificationClass = 'error';
				notificationText =
					'It looks like <strong>the connection is lost</strong>.<br />Continue reading this page, until the connection is back.';
			}
			isOffline = true;
			document;
		} else {
			if (isOffline) {
				isOffline = false;
				notificationToShow = true;
				notificationClass = 'success';
				notificationText =
					'<strong>You are back online!</strong><br />You can resume your navigation on the website.';
				bodyElement.classList.remove('offline');
			}
		}

		if (notificationToShow) {
			Toastify({
				text: notificationText,
				escapeMarkup: false,
				destination: notificationDestination,
				className: notificationClass,
				duration: notificationDuration,
				close: true,
				gravity: 'bottom',
			}).showToast();
		}
	}
}

// listen for future changes in connection
function checkConnectivity() {
	window.addEventListener('online', updateConnectivityStatus);
	window.addEventListener('offline', updateConnectivityStatus);
	updateConnectivityStatus();
}

// when the page has finished loading,
window.addEventListener('load', checkConnectivity);
