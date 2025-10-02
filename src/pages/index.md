---
title: Welcome to Pack11ty!
nav:
  order: 1
  title: Home
---

[Pack11ty]{.pack11ty} is an heavily opinionated [Eleventy](https://www.11ty.dev/) template project created by [Nicolas Hoizey](https://nicolas-hoizey.com/).

Feel free to use it, enhance it, and share your ideas/comments with [issues](https://github.com/nhoizey/pack11ty/issues/new/choose), or (even better) [pull requests](https://github.com/nhoizey/pack11ty/compare)!

If you want to try it and you're in a hurry, try one of these quick options to run [Pack11ty]{.pack11ty} for free:

[Deploy to **Netlify**](https://app.netlify.com/start/deploy?repository=https://github.com/nhoizey/pack11ty&stack=cms){.button}{.netlify} [Deploy to **StackBlitz**](https://stackblitz.com/github/nhoizey/pack11ty){.button}{.stackblitz}

There are multiple [options for installation/deployment](/documentation/installation/).

# Key features

## A plugin

The [Pack11ty]{.pack11ty} plugin ([`eleventy-plugin-pack11ty`](https://github.com/nhoizey/eleventy-plugin-pack11ty)) provides many features out of the box, which you can enjoy on any Eleventy project:

- **Collections** built automatically from root folders, with pagination for yearly and monthly archives
- **Navigation** configuration
- **JavaScript and Sass/CSS assets** optimized for performance
  - inline critical JavaScript and CSS
  - external and asynchronous additional JavaScript and CSS, with hashes for cache busting
  - JavaScript, CSS and HTML built separately
  - Dev mode with live reload
- **Responsive images** built from simple Markdown and presets
- **Enhanced Markdown** thanks to an extensive set of Markdown-it plugins for better contribution: footnotes, attributes, headings anchors, abbreviations, containers
- A set of Eleventy **filters** and shortcodes are provided, including an enhanced `slugify`
- A simple and responsible way to share YouTube **videos**

## A template repository

Additionnaly, the [Pack11ty]{.pack11ty} template repository ([`pack11ty`](https://github.com/nhoizey/pack11ty)) helps starting a new project from scratch with even more nice features:

- **Responsive Layout** without any Media Query, thanks to CSS Flexible Box Layout (Flexbox) and layouts from Every Layout
- A default configuration for responsive images
- **PWA** for performance, installation and offline support
  - Service Worker with pre-caching of UI assets, auto caching of visited pages and offline fallback
  - Manifest for PWA installation
- **Indieweb**
  - Support for receiving Webmentions
  - Atom feed for all collections combined
- More default containers: `success`, `warning`, `error`
- Etc.

# Would you like to know more?

Read [the full documentation](/documentation/)!

# Do you have different needs?

No problem, there are [many other Eleventy starters available](https://www.11ty.dev/docs/starter/).
