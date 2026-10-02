// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/scripts/site.js';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify(),
  integrations: [sitemap()]
});
