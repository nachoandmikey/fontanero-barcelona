import esTranslations from './es.json';
import enTranslations from './en.json';

export type Lang = 'es' | 'en';

const translations = {
  es: esTranslations,
  en: enTranslations,
};

export function getLangFromUrl(url: URL): Lang {
  // Spanish is at root, English is at /en/
  if (url.pathname.startsWith('/en')) return 'en';
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
  // Normalize: remove language prefix (/es/ or /en/) and trailing slash
  let pathWithoutLang = currentPath.replace(/^\/(es|en)/, '').replace(/\/$/, '') || '/';
  
  // Map ES paths to EN paths (exact matches)
  const pathMappings: Record<string, string> = {
    '': '',
    '/servicios': '/services',
    '/servicios/fugas-agua': '/services/water-leaks',
    '/servicios/desatascos': '/services/unclogging',
    '/servicios/urgencias': '/services/emergency',
    '/zonas': '/areas',
    '/contacto': '/contact',
  };

  // Map ES service slugs to EN service slugs (for programmatic pages)
  const serviceMappings: Record<string, string> = {
    'urgencias': 'emergency',
    'fugas-agua': 'water-leaks',
    'desatascos': 'unclogging',
    'instalacion-grifos': 'faucet-installation',
    'calentadores': 'water-heaters',
    'cisternas': 'toilet-cisterns',
    'tuberias': 'pipe-repair',
    'instalaciones': 'installations',
  };
  
  // Reverse mappings
  const reverseMappings = Object.fromEntries(
    Object.entries(pathMappings).map(([es, en]) => [en, es])
  );
  const reverseServiceMappings = Object.fromEntries(
    Object.entries(serviceMappings).map(([es, en]) => [en, es])
  );
  
  let esPath = pathWithoutLang;
  let enPath = pathWithoutLang;
  
  if (currentLang === 'es') {
    // Check exact match first
    if (pathMappings[pathWithoutLang] !== undefined) {
      enPath = pathMappings[pathWithoutLang];
    } else if (pathWithoutLang.startsWith('/zonas/')) {
      // Map neighborhood: /zonas/eixample -> /areas/eixample
      enPath = pathWithoutLang.replace('/zonas/', '/areas/');
    } else {
      // Check for service/neighborhood pattern: /urgencias/poblenou -> /emergency/poblenou
      const parts = pathWithoutLang.split('/').filter(Boolean);
      if (parts.length >= 1 && serviceMappings[parts[0]]) {
        parts[0] = serviceMappings[parts[0]];
        enPath = '/' + parts.join('/');
      }
    }
  } else {
    // Check exact match first
    if (reverseMappings[pathWithoutLang] !== undefined) {
      esPath = reverseMappings[pathWithoutLang];
    } else if (pathWithoutLang.startsWith('/areas/')) {
      // Map neighborhood: /areas/eixample -> /zonas/eixample
      esPath = pathWithoutLang.replace('/areas/', '/zonas/');
    } else {
      // Check for service/neighborhood pattern: /emergency/poblenou -> /urgencias/poblenou
      const parts = pathWithoutLang.split('/').filter(Boolean);
      if (parts.length >= 1 && reverseServiceMappings[parts[0]]) {
        parts[0] = reverseServiceMappings[parts[0]];
        esPath = '/' + parts.join('/');
      }
    }
  }
  
  // Add trailing slash for consistency
  const addSlash = (p: string) => p === '' ? '/' : (p.endsWith('/') ? p : p + '/');
  
  // Return full URLs with correct domains
  // fontanero.barcelona serves Spanish (root paths)
  // plumber.barcelona serves English (rewrites to /en/ internally)
  return {
    es: `${DOMAINS.es}${addSlash(esPath)}`,
    en: `${DOMAINS.en}${addSlash(enPath)}`,
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Both languages use root-level paths (no /es/ or /en/ prefix in URLs)
  // Vercel rewrites handle domain-based routing internally
  return path.startsWith('/') ? path : `/${path}`;
}
