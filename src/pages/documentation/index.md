---
title: Documentation
nav:
  order: 2
---

# Usage

Take some time to read the detailled documentation about:

- [installation](installation/)
- [site development](development/)
- [content creation](content/).

# Key features

## A plugin

The [Pack11ty]{.pack11ty} plugin ([`eleventy-plugin-pack11ty`](https://github.com/nhoizey/eleventy-plugin-pack11ty)) provides many features out of the box, which you can enjoy on any Eleventy project:

- [Collections](/documentation/collections/) built automatically from root folders, with pagination for yearly and monthly archives
- [Navigation](/documentation/navigation/) configuration
- [JavaScript and Sass/CSS assets](/documentation/assets/) optimized for performance
  - inline critical JavaScript and CSS
  - external and asynchronous additional JavaScript and CSS, with hashes for cache busting
  - JavaScript, CSS and HTML built separately
  - Dev mode with live reload
- [Responsive images](/documentation/responsive-images/) built from simple Markdown and presets
- **Enhanced Markdown** thanks to an extensive set of Markdown-it plugins for better contribution: footnotes, attributes, headings anchors, abbreviations, containers
- A set of Eleventy [filters](/documentation/filters/) and shortcodes are provided, including an enhanced `slugify`
- A simple and responsible way to share YouTube [videos](/documentation/videos/)

## A template repository

Additionnaly, the [Pack11ty]{.pack11ty} template repository ([`pack11ty`](https://github.com/nhoizey/pack11ty)) helps starting a new project from scratch with even more nice features:

- [Responsive Layout](/documentation/layout/) without any Media Query, thanks to CSS Flexible Box Layout (Flexbox) and layouts from Every Layout
- [PWA](/documentation/pwa/) for performance, installation and offline support
  - Service Worker with pre-caching of UI assets, auto caching of visited pages and offline fallback
  - Manifest for PWA installation
- Indieweb
  - Support for receiving Webmentions
  - Atom feed for all collections combined
- More default containers

::: success
This is a `success` container
:::

::: warning
This is a `warning` container
:::

::: error
This is an `error` container
:::

- Etc.
