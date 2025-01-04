// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), mdx()],
  output: 'server',
  vite: {
    ssr: {
      external: ['node:events']
    }
  },
  adapter: node({
    mode: 'standalone'
  })
});