// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

import htmx from 'astro-htmx';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), htmx(), icon(), mdx()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  output: 'server',
  vite: {
    ssr: {
      external: ['node:events']
    }
  }
});