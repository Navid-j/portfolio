// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages as a project site:
// https://navid-j.github.io/portfolio/
export default defineConfig({
  site: 'https://navid-j.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
