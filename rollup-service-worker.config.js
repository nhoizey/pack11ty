import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/service-worker.js',
    plugins: [
      resolve(),
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
      terser(),
    ],
    output: {
      file: 'dist/service-worker.js',
      format: 'iife',
    },
  },
];
