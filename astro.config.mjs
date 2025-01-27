import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), react(), sitemap()],
  site: 'https://blog.huyknguyen.com',
  markdown: {
    shikiConfig: {
      theme: 'material-theme-darker',
      langs: [],
    },
  },
});
