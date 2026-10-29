# Prodify website

Live at https://gaalpos.github.io/prodify-web/

The showcase site for [Prodify](https://github.com/Gaalpos/prodify), built with [Astro](https://astro.build).

```bash
npm install
npm run dev      # http://localhost:4321/prodify-web/
npm run build    # static site in dist/
```

- `src/pages/index.astro`: the landing page (hero, sections, your files, privacy, download)
- `src/pages/docs/`: the docs index, each guide (`[...slug].astro`) and the FAQ (`faq.astro`)
- `src/content/docs/`: the guides, one Markdown file each (title, group and order in front matter)
- `src/data/features.ts`: the twelve sections, colored like the app's sidebar
- `src/data/faq.ts`: FAQ questions and answers
- `src/assets/screens/`: real app screenshots, light and dark, shown by `src/components/Screen.astro`
- `src/fonts/`: Figtree and Literata, the same fonts the app bundles (OFL)
- `.github/workflows/deploy.yml`: builds and publishes to GitHub Pages on every push to `main`

The screenshots are taken from the app itself with demo data, at 1440×900 (Home) and 960×720 (sections) at 2× scale.
