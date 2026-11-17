// English lives at /, Spanish at /es/. Each page picks its language from its URL.
export type Lang = 'en' | 'es';
export const LANGS: Lang[] = ['en', 'es'];

export const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
const esRoot = `${base}es/`;

export const langOf = (path: string): Lang => (path === `${base}es` || path.startsWith(esRoot) ? 'es' : 'en');

// A path inside the site, in the given language: lp('es', 'docs/') → /es/docs/
export const lp = (lang: Lang, p = '') => (lang === 'es' ? esRoot : base) + p.replace(/^\//, '');

// The same page in the other language.
export const swap = (path: string, to: Lang) => {
  const rest = langOf(path) === 'es' ? path.slice(Math.min(path.length, esRoot.length)) : path.slice(base.length);
  return lp(to, rest);
};

// Pick the English or Spanish text.
export const tr = (lang: Lang) => (en: string, es: string) => (lang === 'es' ? es : en);

// Docs groups are stored in English in the front matter.
export const groupName = (lang: Lang, g: string) =>
  lang === 'es' ? ({ 'Getting started': 'Primeros pasos', Sections: 'Secciones', 'Your data': 'Tus datos' } as Record<string, string>)[g] ?? g : g;
