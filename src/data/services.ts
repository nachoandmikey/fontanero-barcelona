export interface Service {
  id: string;
  slugEs: string;
  slugEn: string;
  nameEs: string;
  nameEn: string;
  shortDescEs: string;
  shortDescEn: string;
  icon: string;
  keywords: {
    es: string[];
    en: string[];
  };
}

export const services: Service[] = [
  {
    id: "urgencias",
    slugEs: "urgencias",
    slugEn: "emergency",
    nameEs: "Fontanero Urgencias",
    nameEn: "Emergency Plumber",
    shortDescEs: "Servicio de fontanería urgente 24 horas",
    shortDescEn: "24-hour emergency plumbing service",
    icon: "🚨",
    keywords: {
      es: ["fontanero urgencias", "fontanero 24 horas", "fontanero urgente", "emergencia fontaneria"],
      en: ["emergency plumber", "24 hour plumber", "urgent plumber", "plumbing emergency"]
    }
  },
  {
    id: "fugas-agua",
    slugEs: "fugas-agua",
    slugEn: "water-leaks",
    nameEs: "Reparación de Fugas de Agua",
    nameEn: "Water Leak Repair",
    shortDescEs: "Detección y reparación de fugas de agua",
    shortDescEn: "Water leak detection and repair",
    icon: "💧",
    keywords: {
      es: ["reparar fuga agua", "fuga de agua", "tuberia rota", "goteras"],
      en: ["water leak repair", "pipe leak", "fix water leak", "leaking pipe"]
    }
  },
  {
    id: "desatascos",
    slugEs: "desatascos",
    slugEn: "unclogging",
    nameEs: "Desatascos",
    nameEn: "Drain Unclogging",
    shortDescEs: "Desatasco de tuberías, desagües y WC",
    shortDescEn: "Unclogging pipes, drains and toilets",
    icon: "🚿",
    keywords: {
      es: ["desatascar tuberia", "desatasco wc", "atasco fregadero", "desatascar desague"],
      en: ["unclog drain", "blocked toilet", "clogged sink", "drain cleaning"]
    }
  },
  {
    id: "instalacion-grifos",
    slugEs: "instalacion-grifos",
    slugEn: "faucet-installation",
    nameEs: "Instalación de Grifos",
    nameEn: "Faucet Installation",
    shortDescEs: "Instalación y reparación de grifos",
    shortDescEn: "Faucet installation and repair",
    icon: "🚰",
    keywords: {
      es: ["instalar grifo", "cambiar grifo", "grifo gotea", "reparar grifo"],
      en: ["install faucet", "replace faucet", "leaky faucet", "faucet repair"]
    }
  },
  {
    id: "calentadores",
    slugEs: "calentadores",
    slugEn: "water-heaters",
    nameEs: "Reparación de Calentadores",
    nameEn: "Water Heater Repair",
    shortDescEs: "Instalación y reparación de calentadores y termos",
    shortDescEn: "Water heater installation and repair",
    icon: "🔥",
    keywords: {
      es: ["reparar calentador", "calentador no enciende", "instalar termo", "termo electrico"],
      en: ["water heater repair", "boiler repair", "install water heater", "hot water tank"]
    }
  },
  {
    id: "cisternas",
    slugEs: "cisternas",
    slugEn: "toilet-cisterns",
    nameEs: "Reparación de Cisternas",
    nameEn: "Toilet Cistern Repair",
    shortDescEs: "Reparación de cisternas y mecanismos de WC",
    shortDescEn: "Toilet cistern and flush mechanism repair",
    icon: "🚽",
    keywords: {
      es: ["cisterna pierde agua", "arreglar cisterna", "cisterna no carga", "mecanismo cisterna"],
      en: ["toilet cistern repair", "running toilet", "cistern not filling", "flush mechanism"]
    }
  },
  {
    id: "tuberias",
    slugEs: "tuberias",
    slugEn: "pipe-repair",
    nameEs: "Reparación de Tuberías",
    nameEn: "Pipe Repair",
    shortDescEs: "Reparación y sustitución de tuberías",
    shortDescEn: "Pipe repair and replacement",
    icon: "🔧",
    keywords: {
      es: ["reparar tuberia", "tuberia rota", "cambiar tuberias", "tuberia atascada"],
      en: ["pipe repair", "broken pipe", "replace pipes", "burst pipe"]
    }
  },
  {
    id: "instalaciones",
    slugEs: "instalaciones",
    slugEn: "installations",
    nameEs: "Instalaciones de Fontanería",
    nameEn: "Plumbing Installations",
    shortDescEs: "Nuevas instalaciones de fontanería",
    shortDescEn: "New plumbing installations",
    icon: "🏗️",
    keywords: {
      es: ["instalacion fontaneria", "nueva instalacion", "reforma baño", "fontaneria obra nueva"],
      en: ["plumbing installation", "new installation", "bathroom renovation", "new build plumbing"]
    }
  }
];

export function getServiceBySlug(slug: string, lang: 'es' | 'en'): Service | undefined {
  return services.find(s => lang === 'es' ? s.slugEs === slug : s.slugEn === slug);
}

export function getAllServiceSlugs(lang: 'es' | 'en'): string[] {
  return services.map(s => lang === 'es' ? s.slugEs : s.slugEn);
}
