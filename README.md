# pack11ty, an opinionated template for Eleventy projects.

## Key features

- Collections
  - built automatically from the subfolders of `src/`
  - Pagination for archives are built automatically for months and years
- JavaScript and CSS assets
  - split in inline critical and external additional parts, with hashes for cache busting
  - JavaScript, CSS and HTML built separately
  - Dev mode with live reload
- PWA
  - Service Worker with pre-caching of UI assets, auto caching of visited pages and offline fallback
  - Manifest for installation
- Images written as simple Markdown are automatically responsive
- Extensive set of Markdow-it plugins for enhanced contribution: footnotes, attributes, headings anchors, abbreviations, containers
- Support for receiving Webmentions
- Atom feed for all collections combined
- A set of Eleventy filters and shortcodes are provided, including a better `slugify`

## Collections

Every root folder in `src/` which name doesn't start with an `_` automaticaly becomes a collection, as well as pagination for their archives.

The `pages` collection has a special behavior regarding permalinks.

### Permalinks and layouts

Any `permalink` and `layout` properties set directly in a content Front Matter will not be overriden by the global ones shown above.

There are 3 cases to consider for permalink and layout:

#### Pages

Contents in the `pages` collection have:

- permalinks relative to the site root
- the `pages` layout

Examples:

| source                     | permalink           | layout  |
| -------------------------- | ------------------- | ------- |
| `src/pages/index.md`       | `/index.html`       | `pages` |
| `src/pages/about.md`       | `/about.html`       | `pages` |
| `src/pages/about/index.md` | `/about/index.html` | `pages` |
| `src/pages/about/other.md` | `/about/other.html` | `pages` |

#### Other collections

Other collections have:

- permalinks mapped to their source folders hierarchy, including the content type (aka "collection") folder
- the content type as layout, if it exists, or the `pages` layout

| source                                        | permalink                                    | layout     |
| --------------------------------------------- | -------------------------------------------- | ---------- |
| `src/articles/index.md`                       | `/articles/index.html`                       | `articles` |
| `src/articles/2020/04/first-article/index.md` | `/articles/2020/04/first-article/index.html` | `articles` |
| `src/articles/first-article.md`               | `/articles/first-article.html`               | `articles` |
| `src/notes/2020/0001/first-note.md`           | `/notes/2020/0001/first-note.html`           | `notes`    |

_**Note:** default behavior of Eleventy without permalink definition is to transform `src/articles/first-article.md` into `/articles/first-article/index.html`, which leads to unnecessary abundance of folders._

#### Other content

Files directly in `src/` or in folder prefixed with `_` have:

- permalinks mapped to their source folders hierarchy
- no layout

| source                       | permalink                   | layout |
| ---------------------------- | --------------------------- | ------ |
| `src/index.md`               | `/index.html`               | `null` |
| `src/index.njk`              | `/index.html`               | `null` |
| `src/_should/not/be/here.md` | `/_should/not/be/here.html` | `null` |

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
