import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

export default {
  input: './app.js', // Update with the actual entry file
  output: [
    {
      dir: 'dist', // Output directory
      format: 'esm', // ES Module format (works with code splitting)
      sourcemap: true, // Enable source maps for easier debugging
    },
  ],
  external: ['lit', '@vaadin/router', 'lit-element-state'],
  plugins: [resolve(), commonjs(), terser()],
};
