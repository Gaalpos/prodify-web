# Prodify website

Live at https://gaalpos.github.io/prodify-web/

The showcase site for [Prodify](https://github.com/Gaalpos/prodify), built with [Astro](https://astro.build).

```bash
npm install
npm run dev      # http://localhost:4321/prodify-web/
npm run build    # static site in dist/
```

- `src/pages/index.astro`: the landing page (hero, features, your files, download)
- `src/components/AppMockup.astro`: a hand-built preview of the app's Home view
- `src/data/features.ts`: the feature list, colored like the app's sidebar
- `src/fonts/`: Figtree and Literata, the same fonts the app bundles (OFL)
- `.github/workflows/deploy.yml`: builds and publishes to GitHub Pages on every push to `main`
