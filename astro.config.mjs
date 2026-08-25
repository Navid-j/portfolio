// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages as the user site:
// https://navid-j.github.io
export default defineConfig({
  site: 'https://navid-j.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
