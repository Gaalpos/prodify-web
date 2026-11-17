# Prodify website

Live at https://prodify.gaalpos.dev/

The showcase site for [Prodify](https://github.com/Gaalpos/prodify), built with [Astro](https://astro.build).

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # static site in dist/
```

- English is served at `/`, Spanish at `/es/`. `src/i18n.ts` has the helpers; each page in `src/views/` renders both languages and `src/pages/` and `src/pages/es/` just point at it. The site picks the language from the browser until the visitor uses the EN/ES switch in the header (saved in `localStorage` as `prodify.lang`)
- `src/views/Home.astro`: the landing page (hero, sections, your files, privacy, download)
- `src/views/DocsIndex.astro`, `DocPage.astro`, `Faq.astro`: the docs index, each guide and the FAQ
- `src/content/docs/` and `src/content/docs-es/`: the guides in English and Spanish, one Markdown file each with the same name (title, group and order in front matter; `group` stays in English)
- `src/data/features.ts` / `features.es.ts`: the sections, colored like the app's sidebar
- `src/data/faq.ts` / `faq.es.ts`: FAQ questions and answers
- `src/assets/screens/`: real app screenshots, light and dark, shown by `src/components/Screen.astro`
- `src/fonts/`: JetBrains Mono, the same font the app bundles (OFL)
- `.github/workflows/deploy.yml`: builds and publishes to GitHub Pages on every push to `main`
- `src/data/site.ts`: the Prodify Cloud address. The server (in the app repo, `cloud/`) serves the web app at `/app/`, the downloads and the feedback board

The screenshots are taken from the app itself with demo data, at 1440×900 (Home) and 960×720 (sections) at 2× scale.
