---
title: Collections
---

# Auto-collections

Every sub-folder in the `collections/` folder **automaticaly becomes a collection**.

# Layouts

Any `layout` property set directly in a content's Front Matter will not be overriden by the global ones here after.

If the content comes from one of the collections and a layout exists with the same name as the collection, it is used. The `pages` layout is used as a fallback.

Examples if there are `news` and `notes` layouts:

| source                                            | layout  |
| ------------------------------------------------- | ------- |
| `pages/index.md`                                  | `pages` |
| `pages/about.md`                                  | `pages` |
| `pages/about/index.md`                            | `pages` |
| `pages/about/other.md`                            | `pages` |
| `collections/news/index.md`                       | `news`  |
| `collections/news/first-article.md`               | `news`  |
| `collections/news/2020/04/first-article/index.md` | `news`  |
| `collections/notes/2020/0001/first-note.md`       | `notes` |

# Permalinks

Any `permalink` property set directly in a content's Front Matter will not be overriden by the default one here after:

| **source**                                | **permalink**                               |
| ----------------------------------------- | ------------------------------------------- |
| `index.md`                                | `index.html`                                |
| `about.md`                                | `about/index.html` &#x26A0;&#xFE0E;         |
| `about/index.md`                          | `about/index.html` &#x26A0;&#xFE0E;         |
| `about/other.md`                          | `about/other/index.html`                    |
| `articles/2020/04/first-article/index.md` | `articles/2020/04/first-article/index.html` |

::: warning
As you can see, you can't have both `/about.md` and `/about/index.md` in sources with Eleventy default behavior, as they would try to create the same HTML file.
:::

# Pagination

_WIP_

# Atom feeds

_WIP_
