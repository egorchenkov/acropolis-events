import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://events.acropolis.uz',
  integrations: [sitemap()],
});
