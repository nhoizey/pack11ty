---
title: Welcome to Pack11ty!
navtitle: Home
navorder: 1
---

[Pack11ty]{.pack11ty} is an heavily opinionated [Eleventy](https://www.11ty.dev/) template project created by [Nicolas Hoizey](https://nicolas-hoizey.com/).

::: warning
**WARNING: This is Work In Progress, not ready for production!**
:::

Feel free to use it, enhance it, and share your ideas/comments with [issues](https://github.com/nhoizey/pack11ty/issues/new/choose), or (even better) [pull requests](https://github.com/nhoizey/pack11ty/compare)!

If you're in a hurry, install your own version of [Pack11ty]{.pack11ty} for free on Netlify:

[Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/nhoizey/pack11ty&stack=cms){.netlify-button}{.center}

# Key features

- **Collections** built automatically from root folders, with pagination for yearly and monthly archives
- **JavaScript and CSS assets**
  - inline critical JavaScript and CSS for performance
  - external and asynchronous JavaScript and CSS, with hashes for cache busting
  - JavaScript, CSS and HTML built separately
  - Dev mode with live reload
- **Responsive Layout** without any Media Query, thanks to CSS Flexible Box Layout (Flexbox) and layouts from Every Layout
- **Responsive images** built from simple Markdown and presets
- **PWA** for performance and offline support
  - Service Worker with pre-caching of UI assets, auto caching of visited pages and offline fallback
  - Manifest for installation
- **Indieweb**
  - Support for receiving Webmentions
  - Atom feed for all collections combined
- Extensive set of Markdown-it plugins for enhanced contribution: footnotes, attributes, headings anchors, abbreviations, containers
- A set of Eleventy filters and shortcodes are provided, including a better `slugify`

# Would you like to know more?

Read the [full documentation](documentation/)!
