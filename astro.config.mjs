// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/blog/posts': '/blog',
    '/tags/[...slug]': '/blog'
  },
  integrations: [tailwind()]
});