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

// Domain configuration
const DOMAINS = {
  es: 'https://fontanero.barcelona',
  en: 'https://plumber.barcelona',
};

export function getAlternateUrls(currentPath: string, currentLang: Lang) {
  // Normalize: remove lang prefix and trailing slash
  let pathWithoutLang = currentPath.replace(/^\/(es|en)/, '').replace(/\/$/, '') || '/';
  
  // Map ES paths to EN paths
  const pathMappings: Record<string, string> = {
    '': '',
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
    // Check exact match first, then try zone/area replacement
    if (pathMappings[pathWithoutLang] !== undefined) {
      enPath = pathMappings[pathWithoutLang];
    } else if (pathWithoutLang.startsWith('/zonas/')) {
      // Map neighborhood: /zonas/eixample -> /areas/eixample
      enPath = pathWithoutLang.replace('/zonas/', '/areas/');
    }
  } else {
    // Check exact match first, then try area/zone replacement
    if (reverseMappings[pathWithoutLang] !== undefined) {
      esPath = reverseMappings[pathWithoutLang];
    } else if (pathWithoutLang.startsWith('/areas/')) {
      // Map neighborhood: /areas/eixample -> /zonas/eixample
      esPath = pathWithoutLang.replace('/areas/', '/zonas/');
    }
  }
  
  // Add trailing slash for consistency
  const addSlash = (p: string) => p === '' ? '/' : (p.endsWith('/') ? p : p + '/');
  
  // Return full URLs with correct domains
  // Each domain handles its own language via Vercel rewrites
  return {
    es: `${DOMAINS.es}${addSlash(esPath)}`,
    en: `${DOMAINS.en}${addSlash(enPath)}`,
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  return `/${lang}${path}`;
}
