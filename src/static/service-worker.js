import {
	offlineFallback,
	pageCache,
	staticResourceCache,
	imageCache,
} from 'workbox-recipes';

// Enable navigation preload
// https://web.dev/navigation-preload/
// https://hachyderm.io/@jeffposnick/110466221983186607
import { enable } from 'workbox-navigation-preload';
enable();

// Serve pages as network first, with 2 seconds timeout and cache fallback
// https://developer.chrome.com/docs/workbox/modules/workbox-recipes/#page-cache
pageCache({
	networkTimoutSeconds: 2,
	warmCache: ['/', '/documentation/', '/news/', '/offline/'],
});

// Serve static assets from immediately from cache, and update (aka "Stale While Revalidate")
// https://developer.chrome.com/docs/workbox/modules/workbox-recipes/#static-resources-cache
//
// Also precache static assets with hashes in filenames
// See the "serviceworker" npm script and "workbox.config.js" configuration
// https://developer.chrome.com/docs/workbox/precaching-with-workbox/#precaching-with-injectmanifest
staticResourceCache({
	warmCache: self.__WB_MANIFEST,
});

// Cache a maximum of 100 images, for 90 days each at most
// https://developer.chrome.com/docs/workbox/modules/workbox-recipes/#image-cache
imageCache({
	maxEntries: 100,
	maxAgeSeconds: 60 * 60 * 24 * 90,
	warmCache: ['./images/logo-192px.png', './images/logo-512px.png'],
});

// Provide offline fallbacks for HTML and images
// https://developer.chrome.com/docs/workbox/modules/workbox-recipes/#offline-fallback
offlineFallback({
	pageFallback: '/offline/fallback.html',
	imageFallback: '/offline/fallback.svg',
});
