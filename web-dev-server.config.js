/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {legacyPlugin} from '@web/dev-server-legacy';

const mode = process.env.MODE || 'dev';
if (!['dev', 'prod'].includes(mode)) {
  throw new Error(`MODE must be "dev" or "prod", was "${mode}"`);
}

export default {
  nodeResolve: {exportConditions: mode === 'dev' ? ['development'] : []},
  rootDir: './', // Your project root
  appIndex: 'index.html', // Entry point
  preserveSymlinks: true,
  open: true,
  plugins: [
    legacyPlugin({
      polyfills: {
        // Manually imported in index.html file
        webcomponents: false,
      },
    }),
  ],
  middleware: [
    (context, next) => {
      if (
        !context.url.startsWith('/api') && // Allow API calls
        !context.url.includes('.')        // Ignore file requests (like app.js)
      ) {
        context.url = '/';                // Redirect to index.html
      }
      return next();
    },
  ],
};
