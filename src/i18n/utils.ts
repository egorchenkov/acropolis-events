import { ui, defaultLang, type Lang } from './ui';

export function t(lang: Lang, key: keyof typeof ui[typeof defaultLang]): string {
  return ui[lang]?.[key] ?? ui[defaultLang][key];
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en' || lang === 'uz') return lang;
  return defaultLang;
}

export function localizedPath(lang: Lang, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return cleanPath;
  return `/${lang}${cleanPath}`;
}

export function getAlternateUrls(url: URL): Record<Lang, string> {
  const pathname = url.pathname;
  let barePath = pathname;
  const [, maybeLang, ...rest] = pathname.split('/');
  if (maybeLang === 'en' || maybeLang === 'uz') {
    barePath = '/' + rest.join('/');
  }
  if (!barePath.startsWith('/')) barePath = '/' + barePath;

  return {
    ru: barePath,
    en: `/en${barePath}`,
    uz: `/uz${barePath}`,
  };
}
