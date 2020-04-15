---
title: Collections
---

Every root folder in `src/` which name doesn't start with an `_` automaticaly becomes a collection, as well as pagination for their archives.

The `pages` collection has a special behavior regarding permalinks.

# Permalinks and layouts

Any `permalink` and `layout` properties set directly in a content Front Matter will not be overriden by the global ones shown above.

There are 3 cases to consider for permalink and layout:

## Pages

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

## Other collections

Other collections have:

- permalinks mapped to their source folders hierarchy, including the content type (aka "collection") folder
- the content type as layout, if it exists, or the `pages` layout

Examples:

| source                                        | permalink                                    | layout     |
| --------------------------------------------- | -------------------------------------------- | ---------- |
| `src/articles/index.md`                       | `/articles/index.html`                       | `articles` |
| `src/articles/2020/04/first-article/index.md` | `/articles/2020/04/first-article/index.html` | `articles` |
| `src/articles/first-article.md`               | `/articles/first-article.html`               | `articles` |
| `src/notes/2020/0001/first-note.md`           | `/notes/2020/0001/first-note.html`           | `notes`    |
| `src/no/layout.md`                            | `/no/layout.html`                            | `pages`    |

_**Note:** default behavior of Eleventy without permalink definition is to transform `src/articles/first-article.md` into `/articles/first-article/index.html`, which leads to unnecessary abundance of folders._

## Other content

Files directly in `src/` or in folder prefixed with `_` have:

- permalinks mapped to their source folders hierarchy
- no layout

Examples:

| source                       | permalink                   | layout |
| ---------------------------- | --------------------------- | ------ |
| `src/index.md`               | `/index.html`               | `null` |
| `src/index.njk`              | `/index.html`               | `null` |
| `src/_should/not/be/here.md` | `/_should/not/be/here.html` | `null` |

# Pagination

_To be continued…_
