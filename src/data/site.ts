// Prodify Cloud serves the web app, the downloads and the feedback board (see cloud/src/public.js in the app).
// PUBLIC_CLOUD=http://localhost:8787 npm run build points the site at a local server for testing.
export const CLOUD = import.meta.env.PUBLIC_CLOUD || 'https://prodify-cloud.gaalpos.workers.dev';
export const APP_URL = `${CLOUD}/app/`;
export const download = (platform: 'linux' | 'windows' | 'android') => `${CLOUD}/download/${platform}`;
