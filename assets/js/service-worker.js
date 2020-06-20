import { clientsClaim, skipWaiting } from 'workbox-core';
import {
  cleanupOutdatedCaches,
  precacheAndRoute,
  matchPrecache,
} from 'workbox-precaching';
import {
  registerRoute,
  setDefaultHandler,
  setCatchHandler,
} from 'workbox-routing';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import {
  CacheFirst,
  StaleWhileRevalidate,
  NetworkFirst,
  NetworkOnly,
} from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { BroadcastUpdatePlugin } from 'workbox-broadcast-update';
import * as googleAnalytics from 'workbox-google-analytics';

const OFFLINE_FALLBACK = '/offline-fallback.html';

precacheAndRoute(self.__WB_MANIFEST, {
  // Ignore all URL parameters:
  // https://developers.google.com/web/tools/workbox/modules/workbox-precaching#ignore_url_parameters
  ignoreURLParametersMatching: [/.*/],
});

cleanupOutdatedCaches();

// default strategy
setDefaultHandler(
  new StaleWhileRevalidate({
    cacheName: 'default',
    plugins: [new BroadcastUpdatePlugin()],
  })
);

// Never cache ranged requests (videos)
registerRoute(({ request }) => request.headers.has('range'), new NetworkOnly());

// Google Analytics
registerRoute(
  ({ request }) =>
    request.url === 'https://www.google-analytics.com/analytics.js',
  new CacheFirst({
    cacheName: 'shell',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 10 * 24 * 60 * 60, // 10 Days
      }),
    ],
  })
);

// Pages
// Try to get fresh HTML from network, but don't wait for more than 2 seconds
registerRoute(
  ({ request }) => request.destination === 'document',
  new NetworkFirst({
    cacheName: 'pages',
    networkTimeoutSeconds: 2,
    plugins: [new BroadcastUpdatePlugin()],
  })
);

// Images
registerRoute(
  ({ request }) => request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 200,
        maxAgeSeconds: 90 * 24 * 60 * 60, // 90 Days
      }),
    ],
  })
);

setCatchHandler(({ event }) => {
  switch (event.request.destination) {
    case 'document':
      return matchPrecache(OFFLINE_FALLBACK);

    case 'image':
      return new Response(
        '<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><title id="offline-title">Offline</title><path fill="rgba(145,145,145,0.5)" d="M0 0h400v225H0z" /><text fill="rgba(0,0,0,0.33)" font-family="Georgia,serif" font-size="27" text-anchor="middle" x="200" y="113" dominant-baseline="central">offline</text></svg>',
        { headers: { 'Content-Type': 'image/svg+xml' } }
      );

    default:
      // If we don't have a fallback, just return an error response.
      return new Response('Service Temporarily Unavailable', {
        status: 503,
        statusText: 'Service Temporarily Unavailable',
        contentType: 'text/plain',
      });
  }
});

googleAnalytics.initialize({
  hitFilter: params => {
    const queueTimeInSeconds = Math.round(params.get('qt') / 1000);
    params.set('cm1', queueTimeInSeconds);
  },
  parameterOverrides: {
    cd4: 'offline',
  },
});

self.addEventListener('message', event => {
  console.log(`[SW] Receiving a message: ${event.data.type}`);
});

skipWaiting();
clientsClaim();
