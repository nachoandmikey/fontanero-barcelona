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
      prefixDefaultLocale: false,
    },
  },
  build: {
    // Inline stylesheets under 8KB for faster FCP
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssCodeSplit: false, // Bundle all CSS into one file
    },
  },
  compressHTML: true,
  prefetch: true,
});
