---
title: Pack11ty now uses Eleventy v3
date: 2024-11-08 13:56:27 +01:00
description: Big Pack11ty update with Eleventy v3 and modernized code base!
tags: [eleventy, esm]
---

[Pack11ty]{.pack11ty} is now based on the [Eleventy v3](https://www.11ty.dev/blog/eleventy-v3/) version!

Also, the code has been fully rewritten to integrate modern JavaScript features like [ECMAScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) (aka ESM), just like Eleventy.

Both [the plugin](/#a-plugin) and [the template repository](/#a-template-repository) (aka Eleventy Starter) have been updated.

Also, the assets are now processed with a combination of Eleventy's [Custom template languages](https://www.11ty.dev/docs/languages/custom/), [Render plugin](https://www.11ty.dev/docs/plugins/render/) and [Bundle plugin](https://www.11ty.dev/docs/plugins/bundle/). `sass` and `esbuild` are used to process Sass and JavaScript code directly within Eleventy build process. For example, for JavaScript assets, the external build script with Rollup, Babel, Terser, etc., is gone.

There are still some missing parts in the documentation, or some that need updates, it will be done ASAP.

Feel free to [open an issue](https://github.com/nhoizey/pack11ty/issues/new/choose) is you find bugs or struggle using this new version.
