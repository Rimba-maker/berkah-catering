// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rimba-maker.github.io',
  base: '/berkah-catering',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});