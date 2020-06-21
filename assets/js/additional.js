// Get additional CSS for Rollup
import '../sass/additional.scss';

// Add horizontal scroll to overflowing content tables
window.addEventListener('load', () => {
  document.querySelectorAll('main table').forEach((table) => {
    // create wrapper container
    let wrapper = document.createElement('div');
    wrapper.style.overflowX = 'scroll';

    // insert wrapper before el in the DOM tree
    table.parentNode.insertBefore(wrapper, table);

    // move table into wrapper
    wrapper.appendChild(table);
  });

  // Install Service Worker only on production
  if (process.env.NODE_ENV === 'production') {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js');
    }
  }
});
