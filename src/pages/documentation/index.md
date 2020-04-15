---
title: Documentation
navorder: 2
---

If you're in a hurry, install your own version of [Pack11ty]{.pack11ty} for free on Netlify:

[Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/nhoizey/pack11ty&stack=cms){.netlify-button}{.center}

Take some time to read [detailled installation documentation](installation.html).

You can then [develop your site](development.html) and [create content](content.html).

# Detailed features

[Pack11ty]{.pack11ty} provides many features out of the box:

- [Collections](collections/) built automatically from root folders, with pagination for yearly and monthly archives
- [JavaScript and CSS assets](assets/)
  - inline critical JavaScript and CSS for performance
  - external and asynchronous JavaScript and CSS, with hashes for cache busting
  - JavaScript, CSS and HTML built separately
  - Dev mode with live reload
- [Responsive Layout](layout/) without any Media Query, thanks to CSS Flexible Box Layout (Flexbox) and layouts from Every Layout
- [Responsive images](responsive-images/) built from simple Markdown and presets
- [PWA](pwa/) for performance and offline support
  - Service Worker with pre-caching of UI assets, auto caching of visited pages and offline fallback
  - Manifest for installation
- Indieweb
  - Support for receiving Webmentions
  - Atom feed for all collections combined
- Extensive set of Markdown-it plugins for enhanced contribution: footnotes, attributes, headings anchors, abbreviations, containers
- A set of Eleventy filters and shortcodes are provided, including a better `slugify`
