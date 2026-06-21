// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// base hanya aktif di GitHub Actions — localhost tetap bisa dibuka di /
const isCI = Boolean(process.env.GITHUB_ACTIONS);

export default defineConfig({
  site: 'https://rimba-maker.github.io',
  base: isCI ? '/berkah-catering' : '/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});