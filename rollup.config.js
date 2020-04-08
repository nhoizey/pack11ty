import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import entrypointHashmanifest from 'rollup-plugin-entrypoint-hashmanifest';
import path from 'path';

const SRC_PATH = 'src/_assets/js';
const DEST_PATH = '_site/ui/js';
const HASH_PATH = 'src/_data';

const plugins_critical = [
  commonjs(),
  resolve(),
  babel({
    exclude: 'node_modules/**',
  }),
  terser(),
  entrypointHashmanifest({
    manifestName: path.join(HASH_PATH, 'hashes_critical.json'),
  }),
];

const plugins_additional_iife = [
  commonjs(),
  resolve(),
  babel({
    exclude: 'node_modules/**',
  }),
  terser(),
  entrypointHashmanifest({
    manifestName: path.join(HASH_PATH, 'hashes_additional_iife.json'),
  }),
];

const plugins_additional_es = [
  commonjs(),
  resolve(),
  babel({
    exclude: 'node_modules/**',
  }),
  terser(),
  entrypointHashmanifest({
    manifestName: path.join(HASH_PATH, 'hashes_additional_es.json'),
  }),
];

export default [
  {
    input: path.join(SRC_PATH, 'critical.js'),
    output: {
      dir: DEST_PATH,
      entryFileNames: '[name]-[format].[hash].js',
      format: 'iife',
      name: 'critical',
      sourcemap: true,
    },
    plugins: plugins_critical,
  },
  {
    input: path.join(SRC_PATH, 'additional.js'),
    output: {
      dir: DEST_PATH,
      entryFileNames: '[name]-[format].[hash].js',
      format: 'iife',
      name: 'additional',
      sourcemap: true,
    },
    plugins: plugins_additional_iife,
  },
  {
    input: path.join(SRC_PATH, 'additional.js'),
    output: {
      dir: DEST_PATH,
      entryFileNames: '[name]-[format].[hash].js',
      format: 'es',
      sourcemap: true,
    },
    plugins: plugins_additional_es,
  },
];
