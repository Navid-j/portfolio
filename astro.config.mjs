// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages as the user site:
// https://navid-j.github.io
export default defineConfig({
  site: 'https://navid-j.github.io',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
