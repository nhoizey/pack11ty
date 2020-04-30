---
title: CSS and JavaScript assets
---

Both CSS and JavaScript are split (manually) in two parts:

- one **critical** for performance is included inline in all HTML pages
- one additional, less important for performance, is loaded in the end of the HTML, with a hash to prevent caching issues

# JavaScript

Additional JavaScript is loaded as ES6 module in modern browsers, and as IIFE in older ones, using the `module`/`nomodule` pattern for [differential serving](https://css-tricks.com/differential-serving/)[^modules].

[^modules]: You can also watch [this hilarious video](https://www.youtube.com/watch?v=dAIckpwW9ds) by Heydon Pickering, about ES modules, for a few minutes of fun.

JavaScript is compiled with [rollup.js](https://rollupjs.org/), with a few plugins:

- `babel` for transpiling to ES5 where necessary
- `terser` for minification

# CSS

CSS is compiled from Sass code with Rollup and the [rollup-plugin-scss](https://github.com/thgh/rollup-plugin-scss) plugin.

Critical and additional CSS are thus a little tied to their JavaScript counterparts, which are entries for Rollup.

::: note
[Pack11ty]{.pack11ty} initialy used `postcss` and a few plugins to generate CSS, but it was not as complete as full Sass, and the npm scripts were a mess. Look at the Pull Request that changed this to Rollup and Sass if you want to compare.
:::

# Dev mode with Live Reload

_To be continued…_
