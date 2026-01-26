import esTranslations from './es.json';
import enTranslations from './en.json';

export type Lang = 'es' | 'en';

const translations = {
  es: esTranslations,
  en: enTranslations,
};

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}

export function useTranslations(lang: Lang) {
  return function t(key: string, replacements?: Record<string, string>): string {
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (typeof value !== 'string') {
      console.warn(`Translation missing: ${key}`);
      return key;
    }
    
    if (replacements) {
      return Object.entries(replacements).reduce(
        (str, [key, val]) => str.replace(new RegExp(`{${key}}`, 'g'), val),
        value
      );
    }
    
    return value;
  };
}

export function getAlternateUrls(currentPath: string, currentLang: Lang) {
  const pathWithoutLang = currentPath.replace(/^\/(es|en)/, '');
  
  // Map ES paths to EN paths
  const pathMappings: Record<string, string> = {
    '/servicios': '/services',
    '/servicios/fugas-agua': '/services/water-leaks',
    '/servicios/desatascos': '/services/unclogging',
    '/servicios/urgencias': '/services/emergency',
    '/zonas': '/areas',
    '/contacto': '/contact',
  };
  
  // Reverse mappings for EN to ES
  const reverseMappings = Object.fromEntries(
    Object.entries(pathMappings).map(([es, en]) => [en, es])
  );
  
  let esPath = pathWithoutLang;
  let enPath = pathWithoutLang;
  
  if (currentLang === 'es') {
    enPath = pathMappings[pathWithoutLang] || pathWithoutLang.replace('/zonas/', '/areas/');
  } else {
    esPath = reverseMappings[pathWithoutLang] || pathWithoutLang.replace('/areas/', '/zonas/');
  }
  
  return {
    es: `/es${esPath}`,
    en: `/en${enPath}`,
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  return `/${lang}${path}`;
}
