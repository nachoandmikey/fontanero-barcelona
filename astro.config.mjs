import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://fontanero.barcelona',
  output: 'static',
  integrations: [
    tailwind(),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  prefetch: true,
});
