// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alamo-agents.pages.dev',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
