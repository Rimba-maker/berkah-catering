# Berkah Catering — Landing Page

Landing page untuk **Berkah Catering**, jasa katering aqiqah & syukuran berbasis di Padang, Sumatera Barat.

## Tech Stack

- [Astro 6](https://astro.build) — static-first site framework
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [Framer Motion](https://www.framer.com/motion/) — animasi (React islands)
- [Phosphor Icons](https://phosphoricons.com) — icon set
- TypeScript (strict, checked with `astro check`)
- Prettier + Astro plugin — formatting

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server → localhost:4321
npm run check        # TypeScript and Astro diagnostics
npm run format       # format source files
npm run format:check # verify formatting
npm run build        # type-check, then build ke ./dist/
npm run preview      # preview build lokal
```

## Struktur Project

```
src/
├── components/   # 14 section (Hero, Paket Aqiqah, Testimonial, dll.)
├── layouts/      # BaseLayout
├── pages/        # index.astro
└── styles/       # global.css
public/           # static assets
```
