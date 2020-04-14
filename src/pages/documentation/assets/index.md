---
title: CSS and JavaScript assets
---

Both CSS and JavaScript are split (manually) in two parts:

- one **critical** for performance is included inline in all HTML pages
- one additional, less important for performance, is loaded in the end of the HTML, with a hash to prevent caching issues

# JavaScript

Additional JavaScript is loaded as ES6 module in modern browsers, and as IIFE in older ones, using the `module`/`nomodule` pattern for [differential serving](https://css-tricks.com/differential-serving/).

JavaScript is compiled with [rollup.js](https://rollupjs.org/), with a few plugins:

- `babel` for transpiling to ES5 where necessary
- `terser` for minification

# CSS

CSS is compiled with [postcss](https://postcss.org/) with a few plugins:

- `scss` for syntax
- `import` to include other files with `@import` syntax
- `nested` for nested rules
- `simple-vars` for Sass-like `$varname` vars

# Dev mode with Live Reload

_To be continued…_
