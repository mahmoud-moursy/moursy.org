// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), mdx()],
  adapter: cloudflare(),
  output: 'server',
  vite: {
    ssr: {
      external: ['node:events']
    }
  }
});