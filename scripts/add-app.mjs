// Copies the Prodify app (its src/ folder) into the built site as dist/app/, the web app.
// APP_SRC points at the app's src folder; by default the checkout next to this repo (../prodify/src).
import { cpSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const src = resolve(process.env.APP_SRC || '../prodify/src');
const out = resolve('dist/app');
if (!existsSync(resolve(src, 'index.html')) || !existsSync(resolve(src, 'app.js'))) {
  console.error(`No Prodify app found in ${src}. Set APP_SRC to the app's src folder.`);
  process.exit(1);
}
cpSync(src, out, { recursive: true });
const v = (readFileSync(resolve(src, '../package.json'), 'utf8').match(/"version":\s*"([^"]+)"/) || [])[1];
// The app shows this version at the bottom of Settings (the desktop app reads its own).
if (v) {
  const page = resolve(out, 'index.html');
  writeFileSync(page, readFileSync(page, 'utf8').replace('<head>', `<head>\n<script>window.PRODIFY_VERSION=${JSON.stringify(v)}</script>`));
}
console.log(`Web app ${v || ''} copied from ${src} to ${out}`);
