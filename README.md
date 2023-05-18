# [ [Pack11ty](https://pack11ty.dev) ]

[![GitHub stars](https://img.shields.io/github/stars/nhoizey/pack11ty.svg?style=for-the-badge&logo=github)](https://github.com/nhoizey/pack11ty/stargazers)
[![Follow @nhoizey@mamot.fr](https://img.shields.io/mastodon/follow/000262395?domain=https%3A%2F%2Fmamot.fr&style=for-the-badge&logo=mastodon&logoColor=white&color=6364FF)](https://mamot.fr/@nhoizey)

[Pack11ty](https://pack11ty.dev) is an heavily opinionated **[Eleventy](https://www.11ty.dev/) starter** (aka "template project").

If you're in a hurry, try one of these quick options:

[![Deploy to Netlify](https://img.shields.io/badge/deploy_to-Netlify-%232e51ed.svg?style=for-the-badge&logo=netlify&logoColor=white)](https://app.netlify.com/start/deploy?repository=https://github.com/nhoizey/pack11ty&stack=cms) [![Deploy to Vercel](https://img.shields.io/badge/deploy_to-Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/new/clone?repository-url=https://github.com/nhoizey/pack11ty) [![Remix on Glitch](https://img.shields.io/badge/remix_on-glitch-%233333FF.svg?style=for-the-badge&logo=glitch&logoColor=white)](https://glitch.com/edit/#!/import/github/nhoizey/pack11ty)

There are many [other options for installation/deployment](https://pack11ty.dev/documentation/installation/).

Feel free to use it, enhance it, and share your ideas/comments with [issues](https://github.com/nhoizey/pack11ty/issues/new/choose), or (even better) [pull requests](https://github.com/nhoizey/pack11ty/compare).

## Key features

### A plugin

The **Pack11ty plugin** ([`eleventy-plugin-pack11ty`](https://github.com/nhoizey/eleventy-plugin-pack11ty)) provides many features out of the box, which you can enjoy on any Eleventy project:

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

### A template repository

Additionnaly, the **Pack11ty template repository** ([`pack11ty`](https://github.com/nhoizey/pack11ty)) helps starting a new project from scratch with even more nice features:

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

## Would you like to know more?

Read the full documentation on [pack11ty.dev](https://pack11ty.dev/)!

## Do you have different needs?

No problem, there are [many other Eleventy starters available](https://www.11ty.dev/docs/starter/).
