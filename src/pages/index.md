---
---

This is [Nicolas Hoizey](https://nicolas-hoizey.com/)'s heavily opinionated [Eleventy](https://www.11ty.dev/) template project.

**WARNING: This is Work In Progress, not ready for production!**

[![GitHub stars](https://img.shields.io/github/stars/nhoizey/pack11ty.svg?style=social)](https://github.com/nhoizey/pack11ty/stargazers)
See [Pack11ty on Github](https://github.com/nhoizey/pack11ty).

Feel free to use it, enhance it, and share your ideas/comments with [issues](https://github.com/nhoizey/pack11ty/issues/new/choose), or (even better) [pull requests](https://github.com/nhoizey/pack11ty/compare)!

# Key features

- **Collections** built automatically from subfolders of `src/`
- Pagination for yearly and monthly archives
- **JavaScript and CSS assets**
  - split in inline critical and external additional parts, with hashes for cache busting
  - JavaScript, CSS and HTML built separately
  - Dev mode with live reload
- **Responsive images** built from simple Markdown and presets
- **PWA** for performance and offline support
  - Service Worker with pre-caching of UI assets, auto caching of visited pages and offline fallback
  - Manifest for installation
- **Indieweb**
  - Support for receiving Webmentions
  - Atom feed for all collections combined
- Extensive set of Markdown-it plugins for enhanced contribution: footnotes, attributes, headings anchors, abbreviations, containers
- A set of Eleventy filters and shortcodes are provided, including a better `slugify`

Would you like to know more? Read the [full documentation](documentation/)!
