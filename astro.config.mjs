import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://events.acropolis.uz',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'uz'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [sitemap({
    i18n: {
      defaultLocale: 'ru',
      locales: {
        ru: 'ru',
        en: 'en',
        uz: 'uz',
      },
    },
  })],

  adapter: cloudflare()
});