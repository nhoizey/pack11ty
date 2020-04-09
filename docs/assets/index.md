# Pack11ty

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
