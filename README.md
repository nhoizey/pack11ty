# pack11ty

A template repository for Eleventy projects.

Key features:

- Collections
  - built automatically from the subfolders of `src/content/`
  - Pagination for archives are built automatically for months and years
- JavaScript and CSS assets
  - split in inline critical and external additional parts, with hashes for cache busting
  - JavaScript, CSS and HTML built separately
  - Dev mode with live reload
- PWA:
  - Service Worker with pre-caching of UI assets, auto caching of visited pages and offline fallback
  - Manifest for installation
- Images written as simple Markdown are automatically responsive
- Extensive set of Markdow-it plugins for enhanced contribution: footnotes, attributes, headings anchors, abbreviations, containers
- Support for receiving Webmentions
- Atom feed for all collections combined
- A set of Eleventy filters and shortcodes are provided, including a better `slugify`

## Collections

### Permalinks

Permalinks for contents in the `pages` collections are relative to the site root:

| source                         | destination         |
| ------------------------------ | ------------------- |
| `content/pages/index.md`       | `/index.html`       |
| `content/pages/about.md`       | `/about.html`       |
| `content/pages/about/index.md` | `/about/index.html` |

Permalinks for other contents are mapped to their source folders hierarchy, including the content type (aka "collection") folder:

| source                                            | destination                                  |
| ------------------------------------------------- | -------------------------------------------- |
| `content/articles/index.md`                       | `/articles/index.html`                       |
| `content/articles/2020/04/first-article/index.md` | `/articles/2020/04/first-article/index.html` |
| `content/articles/first-article.md`               | `/articles/first-article.html`               |

### Pagination

## Responsive images

## CSS and JavaScript assets

Both CSS and JavaScript are split (manually) in two parts:

- one **critical** for performance is included inline in all HTML pages
- one additional, less important for performance, is loaded in the end of the HTML, with a hash to prevent caching issues

### JavaScript

Additional JavaScript is loaded as ES6 module in modern browsers, and as IIFE in older ones, using the module/nomodule pattern.

JavaScript is compiled with `Rollup`, with a few plugins: `babel` for transpiling to ES5, `terser`for minification

### CSS

CSS is compiled with `postcss` with a few plugins: `scss` for syntax, import, nested, simple-vars

### Dev mode with Live Reload

## PWA: Service Worker and Manifest

### Service Worker with offline support

- Built with Workbox 5
- Pre-caching of UI assets
- Automatic caching of visited pages
- Offline fallback with index of available contents

### Manifest

## Responsive images

## Webmention

## Atom feed

## Eleventy filters and shortcodes
