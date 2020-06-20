import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';
import entrypointHashmanifest from 'rollup-plugin-entrypoint-hashmanifest';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
const config = require('./pack11ty.config.js');

const SRC_DIR = config.dir.src;
const ASSETS_DIR = config.dir.assets;
const DIST_DIR = config.dir.dist;

const JS_SRC = path.join(ASSETS_DIR, 'js');
const JS_DIST = path.join(DIST_DIR, 'js');
const CSS_SRC = path.join(ASSETS_DIR, 'sass');
const CSS_DIST = path.join(DIST_DIR, 'css');
const HASH = path.join(SRC_DIR, '_data');

const createHashedCssFile = function (folder, srcFile, destFile, styles) {
  // Get the 8 first chars of the md5 hash of these styles
  const hash = crypto
    .createHash('md5')
    .update(styles)
    .digest('hex')
    .substring(0, 8);
  const hashedDestFile = destFile.replace('[hash]', hash);
  fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, hashedDestFile), styles);

  // create or update the JSON file listing hashed CSS files
  const hashesFile = path.join(HASH, 'hashes_css.json');
  let hashes = {};
  if (fs.existsSync(hashesFile)) {
    hashes = JSON.parse(
      fs.readFileSync(hashesFile, {
        encoding: 'utf8',
      })
    );
  }
  hashes[srcFile] = hashedDestFile;
  fs.writeFileSync(hashesFile, JSON.stringify(hashes, null, ' '));

  // Make sure Rollup removes the "import" from the JavaScript
  return false;
};

const plugins_critical = [
  commonjs(),
  resolve(),
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  babel({
    exclude: 'node_modules/**',
  }),
  process.env.NODE_ENV === 'production' && terser(),
  scss({
    failOnError: true,
    outputStyle: 'compressed',
    output: function (styles, styleNodes) {
      createHashedCssFile(
        CSS_DIST,
        'critical.css',
        'critical.[hash].css',
        styles
      );
    },
    watch: CSS_SRC,
  }),
  entrypointHashmanifest({
    manifestName: path.join(HASH, 'hashes_critical.json'),
  }),
];

const plugins_additional_iife = [
  commonjs(),
  resolve(),
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  babel({
    exclude: 'node_modules/**',
  }),
  process.env.NODE_ENV === 'production' && terser(),
  scss({
    failOnError: true,
    outputStyle: 'compressed',
    output: function (styles, styleNodes) {
      createHashedCssFile(
        CSS_DIST,
        'additional.css',
        'additional.[hash].css',
        styles
      );
    },
    watch: CSS_SRC,
  }),
  entrypointHashmanifest({
    manifestName: path.join(HASH, 'hashes_additional_iife.json'),
  }),
];

const plugins_additional_es = [
  commonjs(),
  resolve(),
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  babel({
    exclude: 'node_modules/**',
  }),
  process.env.NODE_ENV === 'production' && terser(),
  scss({
    // just here to clean the CSS import from the JS
    output: false,
  }),
  entrypointHashmanifest({
    manifestName: path.join(HASH, 'hashes_additional_es.json'),
  }),
];

export default [
  {
    input: path.join(JS_SRC, 'critical.js'),
    output: {
      dir: JS_DIST,
      entryFileNames: '[name]-[format].[hash].js',
      format: 'iife',
      name: 'critical',
      sourcemap: true,
    },
    plugins: plugins_critical,
  },
  {
    input: path.join(JS_SRC, 'additional.js'),
    output: {
      dir: JS_DIST,
      entryFileNames: '[name]-[format].[hash].js',
      format: 'iife',
      name: 'additional',
      sourcemap: true,
    },
    plugins: plugins_additional_iife,
  },
  {
    input: path.join(JS_SRC, 'additional.js'),
    output: {
      dir: JS_DIST,
      entryFileNames: '[name]-[format].[hash].js',
      format: 'es',
      sourcemap: true,
    },
    plugins: plugins_additional_es,
  },
  {
    input: path.join(JS_SRC, 'service-worker.js'),
    plugins: [
      resolve(),
      replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      babel({
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                browsers: ['chrome >= 71'],
              },
              modules: false,
            },
          ],
        ],
      }),
      process.env.NODE_ENV === 'production' && terser(),
    ],
    output: {
      file: path.join(DIST_DIR, 'service-worker.js'),
      format: 'iife',
    },
  },
];
