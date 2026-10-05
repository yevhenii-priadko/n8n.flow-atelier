// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.flow-atelier.studio',
  build: {
    // Inline the CSS into the HTML so it isn't a separate render-blocking request
    inlineStylesheets: 'always',
  },
  i18n: {
    locales: ['en', 'uk'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
