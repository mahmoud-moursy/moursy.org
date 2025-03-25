// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://moursy.org',
  integrations: [tailwind(), icon(), mdx()],
  output: 'server',
  vite: {
    ssr: {
      external: ['node:events'],
    }
  },
  server: {
    port: 8080,
    host: true
  },
  adapter: node({
    mode: 'standalone',
  }),
});