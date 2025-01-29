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
  rootDir: './',
  appIndex: 'index.html',
  preserveSymlinks: true,
  open: true,
  plugins: [
    legacyPlugin({
      polyfills: {
        webcomponents: false,
      },
    }),
  ],
  middleware: [
    (context, next) => {
      if (
        !context.url.startsWith('/api') && 
        !context.url.includes('.')       
      ) {
        context.url = '/';
      }
      return next();
    },
  ],
};
