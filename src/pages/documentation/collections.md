---
title: Collections
---

# Auto-collections

Every sub-folder in the `collections/` folder **automaticaly becomes a collection**.

You can **override the auto-collections feature as you wish** with project-specific collections.

# Project-specific collections

Any JavaScript file inside your input folder's subfolder `_11ty/collections/` with exports will create collections with the export's names.

For example, if you want a `some_pages` collection for Markdown files inside a `/pages/sub_folder/` folder (files in the `pages/` subfolder are not in collections by default), create an `_11ty/collections/my_own_pages_collection.js` with this content:

```javascript
module.exports = {
  some_pages: (collection) => collection.getFilteredByGlob('src/pages/sub_folder/**/index.md'),
};
```

The name of the `export` becomes the name of the collection. The name of the JavaScript file has no impact, but it must be in the `_11ty/collections/` folder.

Collections with these names will not be replaced with auto-collections.

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
| `about/about.md`                          | `about/index.html` &#x26A0;&#xFE0E;         |
| `about/other.md`                          | `about/other/index.html`                    |
| `articles/2020/04/first-article/index.md` | `articles/2020/04/first-article/index.html` |

::: warning
As you can see, you can't have both `/about.md` and either `/about/index.md` or `/about/about.md` in sources with [Eleventy default permalink behavior](https://www.11ty.dev/docs/permalinks/), as they would try to create the same HTML file.
:::

# Pagination

_WIP_

# Atom feeds

_WIP_
