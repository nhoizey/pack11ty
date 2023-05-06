import { precacheAndRoute } from 'workbox-precaching';
import {
	offlineFallback,
	pageCache,
	staticResourceCache,
	imageCache,
} from 'workbox-recipes';

// precache static assets with hashes in filenames
// See the "serviceworker" npm script and "workbox.config.js" configuration
precacheAndRoute(self.__WB_MANIFEST);

// Serve pages as network first, with 2 seconds timeout and cache fallback
// https://developer.chrome.com/docs/workbox/modules/workbox-recipes/#page-cache
pageCache({
	networkTimoutSeconds: 2,
	warmCache: ['/', '/documentation/', '/news/', '/offline/'],
});

// Serve static assets from immediately from cache, and update (aka "Stale While Revalidate")
// https://developer.chrome.com/docs/workbox/modules/workbox-recipes/#static-resources-cache
staticResourceCache({
	warmCache: ['./manifest.webmanifest', './images/logo-192px.png'],
});

// Cache a maximum of 100 images, for 90 days each at most
// https://developer.chrome.com/docs/workbox/modules/workbox-recipes/#image-cache
imageCache({ maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 90 });

// Provide offline fallbacks for HTML and images
// https://developer.chrome.com/docs/workbox/modules/workbox-recipes/#offline-fallback
offlineFallback({
	pageFallback: '/offline/fallback.html',
	imageFallback: '/offline/fallback.svg',
});
