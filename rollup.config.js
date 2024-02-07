import vue from 'rollup-plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/my-library.js',
    format: 'umd',
    name: 'MyLibrary',
    globals: {
      vue: 'Vue'
    }
  },
  plugins: [
    css({ output: 'bundle.css' }),
    vue(),
    nodeResolve(),
    commonjs()
  ],
  external: ['vue']
};
