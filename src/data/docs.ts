import { getCollection } from 'astro:content';
import type { Lang } from '../i18n';

// The guides in one language, in reading order. A Spanish guide that isn't written yet falls back to English.
export async function docsFor(lang: Lang) {
  const en = await getCollection('docs');
  const es = lang === 'es' ? new Map((await getCollection('docsEs')).map((d) => [d.id, d] as const)) : null;
  const list = es ? en.map((d) => es.get(d.id) ?? d) : en;
  return list.sort((a, b) => a.data.order - b.data.order);
}
