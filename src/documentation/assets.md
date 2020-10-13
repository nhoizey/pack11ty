---
title: CSS and JavaScript assets
---

Both CSS and JavaScript are split (manually) in two parts:

- one **critical** for performance is included inline in all HTML pages
- one additional, less important for performance, is loaded in the end of the HTML, with a hash to prevent caching issues

# JavaScript

Additional JavaScript is loaded as [ECMAScript module](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) in modern browsers, and as [Immediately Invoked Function Expression](https://en.wikipedia.org/wiki/Immediately_invoked_function_expression) (IIFE) in older ones, using the `module`/`nomodule` pattern for [differential serving](https://css-tricks.com/differential-serving/)[^modules].

[^modules]: You can watch [this hilarious video](https://www.youtube.com/watch?v=dAIckpwW9ds) by Heydon Pickering, about ES modules, for a few minutes of fun.

JavaScript is compiled with [Rollup](https://rollupjs.org/), with a few plugins:

- `babel` for transpiling to ES5 where necessary
- `terser` for minification

# CSS

CSS is compiled from [Sass](https://sass-lang.com/) code with [Dart Sass](https://sass-lang.com/dart-sass) CLI.

For production build, CSS is then processed with a few PostCSS plugins:

- [autoprefixer](https://github.com/postcss/autoprefixer) adds vendor prefixes to some rules, depending on targeted browsers. See the `/.browserslistrc` file.
- [cssnano](https://cssnano.co/) "runs the CSS through many focused optimisations, to ensure that the final result is as small as possible for a production environment".
- [postcss-hash](https://github.com/dacodekid/postcss-hash) then creates copies of the CSS files with hashed filenames, for cache busting.

::: info
[Pack11ty]{.pack11ty} previously used `postcss` and a few plugins to generate CSS, but it was not as complete as full Sass, and the npm scripts were a mess. It then used [Rollup and Sass](https://github.com/nhoizey/pack11ty/pull/13), which was not ideal because critical and additional CSS were tied to their JavaScript counterparts.
:::

# Dev mode with Live Reload and Source Maps

In development mode, when Sass code is modified, the resulting CSS is automatically updated in the browser with Eleventy's `browsersync` instance.

::: warning
The same behavior for JavaScript is still [WIP](https://github.com/nhoizey/pack11ty/issues/4).
:::

There are also Source Maps to ease understanding of the styles origin.

<!-- prettier-ignore -->
*[CLI]: Command Line Interface
*[WIP]: Work In Progress
