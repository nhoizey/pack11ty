---
title: Simple navigation configuration
---

Configuring the navigation in [Pack11ty]{.pack11ty} should be pretty easy:

First, add a `nav` property to the Front Matter of the page you want to add to the navigation.

Then, set the `order` sub-property to the position it should have in the navigation.

Additionnaly, you can set the `title` sub-property if the main `title` of the page is not relevant enough for the navigation.

You can even add links to other sites in the navigation by creating a file with just the navigation informations[^permalink], including a `away` sub-property for the URL.

[^permalink]: Don't forget to also set the `permalink` to `false` to prevent Eleventy from generating an HTML file.

Look at [the example linking to the project's page on GitHub](https://github.com/nhoizey/pack11ty/blob/master/src/github.md):

```yaml
---
title: GitHub
nav:
  order: 4
  away: https://github.com/nhoizey/pack11ty
permalink: false
---

```
