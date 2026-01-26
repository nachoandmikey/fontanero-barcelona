export interface Service {
  id: string;
  slugEs: string;
  slugEn: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'waterLeaks',
    slugEs: 'fugas-agua',
    slugEn: 'water-leaks',
    icon: '💧',
  },
  {
    id: 'unclogging',
    slugEs: 'desatascos',
    slugEn: 'unclogging',
    icon: '🚿',
  },
  {
    id: 'emergency',
    slugEs: 'urgencias',
    slugEn: 'emergency',
    icon: '🚨',
  },
];

export function getServiceBySlug(slug: string, lang: 'es' | 'en'): Service | undefined {
  return services.find(s => 
    lang === 'es' ? s.slugEs === slug : s.slugEn === slug
  );
}

export function getServiceSlug(service: Service, lang: 'es' | 'en'): string {
  return lang === 'es' ? service.slugEs : service.slugEn;
}
