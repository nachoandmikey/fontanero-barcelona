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
  // === EMERGENCY ===
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
  
  // === LEAKS & REPAIRS ===
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
    id: "tuberias",
    slugEs: "tuberias",
    slugEn: "pipes",
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
  
  // === BATHROOM ===
  {
    id: "grifos",
    slugEs: "grifos",
    slugEn: "faucets",
    nameEs: "Instalación y Reparación de Grifos",
    nameEn: "Faucet Installation & Repair",
    shortDescEs: "Instalación, cambio y reparación de grifos",
    shortDescEn: "Faucet installation, replacement and repair",
    icon: "🚰",
    keywords: {
      es: ["instalar grifo", "cambiar grifo", "grifo gotea", "reparar grifo", "grifo cocina", "grifo baño"],
      en: ["install faucet", "replace faucet", "leaky faucet", "faucet repair", "kitchen faucet", "bathroom faucet"]
    }
  },
  {
    id: "duchas",
    slugEs: "duchas",
    slugEn: "showers",
    nameEs: "Instalación y Reparación de Duchas",
    nameEn: "Shower Installation & Repair",
    shortDescEs: "Instalación de platos de ducha, mamparas y grifería",
    shortDescEn: "Shower tray, screen and fixture installation",
    icon: "🚿",
    keywords: {
      es: ["instalar ducha", "plato de ducha", "mampara ducha", "ducha gotea", "cambiar ducha"],
      en: ["install shower", "shower tray", "shower screen", "leaking shower", "replace shower"]
    }
  },
  {
    id: "baneras",
    slugEs: "baneras",
    slugEn: "bathtubs",
    nameEs: "Instalación y Reparación de Bañeras",
    nameEn: "Bathtub Installation & Repair",
    shortDescEs: "Instalación, cambio y reparación de bañeras",
    shortDescEn: "Bathtub installation, replacement and repair",
    icon: "🛁",
    keywords: {
      es: ["instalar bañera", "cambiar bañera", "bañera pierde agua", "cambiar bañera por ducha"],
      en: ["install bathtub", "replace bathtub", "leaking bathtub", "bathtub to shower conversion"]
    }
  },
  {
    id: "inodoros",
    slugEs: "inodoros",
    slugEn: "toilets",
    nameEs: "Instalación y Reparación de Inodoros",
    nameEn: "Toilet Installation & Repair",
    shortDescEs: "Instalación, cambio y reparación de WC",
    shortDescEn: "Toilet installation, replacement and repair",
    icon: "🚽",
    keywords: {
      es: ["instalar inodoro", "cambiar wc", "wc atascado", "inodoro pierde agua", "taza wc"],
      en: ["install toilet", "replace toilet", "clogged toilet", "leaking toilet", "toilet bowl"]
    }
  },
  {
    id: "cisternas",
    slugEs: "cisternas",
    slugEn: "cisterns",
    nameEs: "Reparación de Cisternas",
    nameEn: "Toilet Cistern Repair",
    shortDescEs: "Reparación de cisternas y mecanismos de WC",
    shortDescEn: "Toilet cistern and flush mechanism repair",
    icon: "🔄",
    keywords: {
      es: ["cisterna pierde agua", "arreglar cisterna", "cisterna no carga", "mecanismo cisterna"],
      en: ["toilet cistern repair", "running toilet", "cistern not filling", "flush mechanism"]
    }
  },
  {
    id: "lavabos",
    slugEs: "lavabos",
    slugEn: "sinks",
    nameEs: "Instalación y Reparación de Lavabos",
    nameEn: "Sink Installation & Repair",
    shortDescEs: "Instalación y reparación de lavabos y fregaderos",
    shortDescEn: "Sink installation and repair",
    icon: "🪥",
    keywords: {
      es: ["instalar lavabo", "lavabo atascado", "fregadero atascado", "cambiar lavabo"],
      en: ["install sink", "clogged sink", "blocked sink", "replace sink"]
    }
  },
  
  // === WATER HEATING ===
  {
    id: "calentadores",
    slugEs: "calentadores",
    slugEn: "water-heaters",
    nameEs: "Reparación de Calentadores",
    nameEn: "Water Heater Repair",
    shortDescEs: "Instalación y reparación de calentadores de gas",
    shortDescEn: "Gas water heater installation and repair",
    icon: "🔥",
    keywords: {
      es: ["reparar calentador", "calentador no enciende", "calentador gas", "calentador gotea"],
      en: ["water heater repair", "water heater not working", "gas water heater", "leaking water heater"]
    }
  },
  {
    id: "termos",
    slugEs: "termos",
    slugEn: "electric-heaters",
    nameEs: "Instalación de Termos Eléctricos",
    nameEn: "Electric Water Heater Installation",
    shortDescEs: "Instalación y reparación de termos eléctricos",
    shortDescEn: "Electric water heater installation and repair",
    icon: "⚡",
    keywords: {
      es: ["instalar termo", "termo electrico", "termo no calienta", "cambiar termo"],
      en: ["install electric heater", "electric water heater", "heater not heating", "replace water tank"]
    }
  },
  {
    id: "calderas",
    slugEs: "calderas",
    slugEn: "boilers",
    nameEs: "Reparación de Calderas",
    nameEn: "Boiler Repair",
    shortDescEs: "Instalación y reparación de calderas",
    shortDescEn: "Boiler installation and repair",
    icon: "🏠",
    keywords: {
      es: ["reparar caldera", "caldera no enciende", "caldera pierde presion", "instalar caldera"],
      en: ["boiler repair", "boiler not working", "boiler losing pressure", "install boiler"]
    }
  },
  
  // === WATER SYSTEMS ===
  {
    id: "osmosis",
    slugEs: "osmosis",
    slugEn: "osmosis",
    nameEs: "Instalación de Ósmosis Inversa",
    nameEn: "Reverse Osmosis Installation",
    shortDescEs: "Instalación de sistemas de ósmosis y filtrado de agua",
    shortDescEn: "Reverse osmosis and water filtration systems",
    icon: "💎",
    keywords: {
      es: ["instalar osmosis", "osmosis inversa", "filtro agua", "purificador agua", "descalcificador"],
      en: ["install osmosis", "reverse osmosis", "water filter", "water purifier", "water softener"]
    }
  },
  {
    id: "descalcificadores",
    slugEs: "descalcificadores",
    slugEn: "water-softeners",
    nameEs: "Instalación de Descalcificadores",
    nameEn: "Water Softener Installation",
    shortDescEs: "Instalación de descalcificadores de agua",
    shortDescEn: "Water softener installation and maintenance",
    icon: "🧂",
    keywords: {
      es: ["instalar descalcificador", "descalcificador agua", "agua dura", "cal en tuberias"],
      en: ["install water softener", "water softener", "hard water", "limescale removal"]
    }
  },
  
  // === APPLIANCES ===
  {
    id: "lavadoras",
    slugEs: "lavadoras",
    slugEn: "washing-machines",
    nameEs: "Conexión de Lavadoras",
    nameEn: "Washing Machine Connection",
    shortDescEs: "Instalación y conexión de lavadoras y lavavajillas",
    shortDescEn: "Washing machine and dishwasher installation",
    icon: "🧺",
    keywords: {
      es: ["conectar lavadora", "instalar lavadora", "lavadora pierde agua", "toma lavadora"],
      en: ["connect washing machine", "install washer", "leaking washer", "washing machine hookup"]
    }
  },
  {
    id: "lavavajillas",
    slugEs: "lavavajillas",
    slugEn: "dishwashers",
    nameEs: "Conexión de Lavavajillas",
    nameEn: "Dishwasher Connection",
    shortDescEs: "Instalación y conexión de lavavajillas",
    shortDescEn: "Dishwasher installation and connection",
    icon: "🍽️",
    keywords: {
      es: ["conectar lavavajillas", "instalar lavavajillas", "lavavajillas pierde agua"],
      en: ["connect dishwasher", "install dishwasher", "leaking dishwasher"]
    }
  },
  
  // === HVAC (Fontaneros also do this in Spain) ===
  {
    id: "aire-acondicionado",
    slugEs: "aire-acondicionado",
    slugEn: "air-conditioning",
    nameEs: "Instalación de Aire Acondicionado",
    nameEn: "Air Conditioning Installation",
    shortDescEs: "Instalación y mantenimiento de aire acondicionado",
    shortDescEn: "Air conditioning installation and maintenance",
    icon: "❄️",
    keywords: {
      es: ["instalar aire acondicionado", "aire acondicionado", "split", "instalador aire"],
      en: ["install air conditioning", "AC installation", "split system", "HVAC installation"]
    }
  },
  {
    id: "radiadores",
    slugEs: "radiadores",
    slugEn: "radiators",
    nameEs: "Instalación de Radiadores",
    nameEn: "Radiator Installation",
    shortDescEs: "Instalación y purgado de radiadores",
    shortDescEn: "Radiator installation and bleeding",
    icon: "🌡️",
    keywords: {
      es: ["instalar radiador", "purgar radiador", "radiador no calienta", "cambiar radiador"],
      en: ["install radiator", "bleed radiator", "radiator not heating", "replace radiator"]
    }
  },
  {
    id: "suelo-radiante",
    slugEs: "suelo-radiante",
    slugEn: "underfloor-heating",
    nameEs: "Instalación de Suelo Radiante",
    nameEn: "Underfloor Heating Installation",
    shortDescEs: "Instalación de calefacción por suelo radiante",
    shortDescEn: "Underfloor heating system installation",
    icon: "🔆",
    keywords: {
      es: ["suelo radiante", "instalar suelo radiante", "calefaccion suelo"],
      en: ["underfloor heating", "install underfloor heating", "radiant floor heating"]
    }
  },
  
  // === GAS ===
  {
    id: "gas",
    slugEs: "gas",
    slugEn: "gas",
    nameEs: "Instalación de Gas",
    nameEn: "Gas Installation",
    shortDescEs: "Instalación y revisión de gas",
    shortDescEn: "Gas installation and inspection",
    icon: "🔥",
    keywords: {
      es: ["instalador gas", "revision gas", "certificado gas", "fuga gas"],
      en: ["gas installer", "gas inspection", "gas certificate", "gas leak"]
    }
  },
  
  // === OUTDOOR ===
  {
    id: "riego",
    slugEs: "riego",
    slugEn: "irrigation",
    nameEs: "Instalación de Riego",
    nameEn: "Irrigation Installation",
    shortDescEs: "Instalación de sistemas de riego automático",
    shortDescEn: "Automatic irrigation system installation",
    icon: "🌱",
    keywords: {
      es: ["instalar riego", "riego automatico", "riego jardin", "programador riego"],
      en: ["install irrigation", "automatic irrigation", "garden irrigation", "sprinkler system"]
    }
  },
  {
    id: "piscinas",
    slugEs: "piscinas",
    slugEn: "pools",
    nameEs: "Fontanería de Piscinas",
    nameEn: "Pool Plumbing",
    shortDescEs: "Instalación y reparación de fontanería de piscinas",
    shortDescEn: "Pool plumbing installation and repair",
    icon: "🏊",
    keywords: {
      es: ["fontanero piscina", "fuga piscina", "bomba piscina", "filtro piscina"],
      en: ["pool plumber", "pool leak", "pool pump", "pool filter"]
    }
  },
  
  // === RENOVATIONS ===
  {
    id: "reformas-bano",
    slugEs: "reformas-bano",
    slugEn: "bathroom-renovation",
    nameEs: "Reformas de Baño",
    nameEn: "Bathroom Renovation",
    shortDescEs: "Reforma integral de baños",
    shortDescEn: "Complete bathroom renovation",
    icon: "🛠️",
    keywords: {
      es: ["reforma baño", "renovar baño", "cambiar baño completo"],
      en: ["bathroom renovation", "remodel bathroom", "bathroom makeover"]
    }
  },
  {
    id: "reformas-cocina",
    slugEs: "reformas-cocina",
    slugEn: "kitchen-renovation",
    nameEs: "Fontanería para Reformas de Cocina",
    nameEn: "Kitchen Plumbing Renovation",
    shortDescEs: "Fontanería para reformas de cocina",
    shortDescEn: "Plumbing for kitchen renovations",
    icon: "🍳",
    keywords: {
      es: ["fontaneria cocina", "reforma cocina", "mover fregadero"],
      en: ["kitchen plumbing", "kitchen renovation", "move sink"]
    }
  }
];

export function getServiceBySlug(slug: string, lang: 'es' | 'en'): Service | undefined {
  return services.find(s => lang === 'es' ? s.slugEs === slug : s.slugEn === slug);
}

export function getAllServiceSlugs(lang: 'es' | 'en'): string[] {
  return services.map(s => lang === 'es' ? s.slugEs : s.slugEn);
}
