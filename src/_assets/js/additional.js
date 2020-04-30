// Get additional CSS for Rollup
import '../sass/additional.scss';

// Install Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
