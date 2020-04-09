# Pack11ty

## An opinionated template for Eleventy projects

This is how I, [Nicolas Hoizey](https://nicolas-hoizey.com/), plan to start all my new [Eleventy](https://www.11ty.dev/) projects.

## Key features

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
- Extensive set of Markdow-it plugins for enhanced contribution: footnotes, attributes, headings anchors, abbreviations, containers
- A set of Eleventy filters and shortcodes are provided, including a better `slugify`

## Documentation

Read the full doc here: <https://nhoizey.github.io/pack11ty/>

## Contribution

Feel free to use it, enhance it, and share your ideas/comments with [issues](https://github.com/nhoizey/pack11ty/issues/new/choose), or (even better) [pull requests](https://github.com/nhoizey/pack11ty/compare)!
