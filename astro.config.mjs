// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://marcvspt.tech/',

  redirects: {
    '/blog/posts': '/blog',
  },

  integrations: [],

  vite: {
    plugins: [tailwindcss()]
  }
});