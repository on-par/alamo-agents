// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alamoagents.org',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
