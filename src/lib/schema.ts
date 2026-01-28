/**
 * Schema.org structured data utilities for SEO
 * Language-aware LocalBusiness and Service schemas
 */

import { PHONE, SITES } from './constants';
import type { Lang } from '../i18n/utils';

// Business details per language
const BUSINESS_INFO = {
  es: {
    name: 'Fontanero Barcelona',
    description: 'Fontaneros urgentes en Barcelona 24 horas. Reparamos fugas de agua, desatascos y averías. Llegamos en menos de 1 hora. Presupuesto gratis.',
    slogan: 'Fontaneros profesionales en Barcelona 24h',
    region: 'Cataluña',
  },
  en: {
    name: 'Plumber Barcelona',
    description: 'Emergency plumbers in Barcelona 24 hours. We fix water leaks, unclog drains and repair plumbing issues. We arrive in less than 1 hour. Free quote.',
    slogan: 'Professional plumbers in Barcelona 24h',
    region: 'Catalonia',
  },
};

// Service definitions per language
export const SERVICES = {
  plumbing: {
    es: {
      name: 'Fontanería',
      description: 'Servicios completos de fontanería en Barcelona. Instalación, reparación y mantenimiento de tuberías, grifos y sistemas de agua.',
      serviceType: 'Plumbing',
    },
    en: {
      name: 'Plumbing',
      description: 'Complete plumbing services in Barcelona. Installation, repair and maintenance of pipes, faucets and water systems.',
      serviceType: 'Plumbing',
    },
  },
  unclogging: {
    es: {
      name: 'Desatascos',
      description: 'Servicio profesional de desatascos en Barcelona. Desatascamos tuberías, desagües, fregaderos, WC y bajantes con equipos de alta presión.',
      serviceType: 'Drain Unclogging',
    },
    en: {
      name: 'Drain Unclogging',
      description: 'Professional drain unclogging service in Barcelona. We unclog pipes, drains, sinks, toilets and downpipes with high-pressure equipment.',
      serviceType: 'Drain Unclogging',
    },
  },
  emergency: {
    es: {
      name: 'Urgencias 24h',
      description: 'Servicio de fontanería de urgencias 24 horas en Barcelona. Disponibles todos los días del año para cualquier emergencia de fontanería.',
      serviceType: 'Emergency Plumbing',
    },
    en: {
      name: '24h Emergency',
      description: '24-hour emergency plumbing service in Barcelona. Available every day of the year for any plumbing emergency.',
      serviceType: 'Emergency Plumbing',
    },
  },
  waterLeaks: {
    es: {
      name: 'Fugas de Agua',
      description: 'Detección y reparación de fugas de agua en Barcelona. Utilizamos equipos profesionales para localizar fugas sin romper.',
      serviceType: 'Water Leak Repair',
    },
    en: {
      name: 'Water Leaks',
      description: 'Water leak detection and repair in Barcelona. We use professional equipment to locate leaks without breaking walls.',
      serviceType: 'Water Leak Repair',
    },
  },
};

/**
 * Get the LocalBusiness schema with full structured data
 */
export function getLocalBusinessSchema(lang: Lang) {
  const info = BUSINESS_INFO[lang];
  const site = lang === 'es' ? SITES.es : SITES.en;
  
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${site}/#organization`,
    "name": info.name,
    "description": info.description,
    "slogan": info.slogan,
    "url": site,
    "telephone": PHONE.international,
    "email": "info@fontanero.barcelona",
    "logo": `${site}/logo.png`,
    "image": `${site}/og-image${lang === 'en' ? '-en' : ''}.jpg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Barcelona",
      "addressLocality": "Barcelona",
      "addressRegion": info.region,
      "postalCode": "08001",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.3851,
      "longitude": 2.1734
    },
    "areaServed": {
      "@type": "City",
      "name": "Barcelona",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": info.region
      }
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.3851,
        "longitude": 2.1734
      },
      "geoRadius": "20 km"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": lang === 'es' 
      ? "Efectivo, Tarjeta de crédito, Transferencia bancaria"
      : "Cash, Credit Card, Bank Transfer",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": lang === 'es' ? "Servicios de Fontanería" : "Plumbing Services",
      "itemListElement": Object.entries(SERVICES).map(([key, service]) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service[lang].name,
          "description": service[lang].description,
        }
      }))
    },
    "knowsAbout": lang === 'es' 
      ? ["Fontanería", "Desatascos", "Fugas de agua", "Urgencias 24h", "Reparación de tuberías"]
      : ["Plumbing", "Drain unclogging", "Water leaks", "24h Emergency", "Pipe repair"],
    "makesOffer": Object.entries(SERVICES).map(([key, service]) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "@id": `${site}/#service-${key}`,
        "name": service[lang].name,
      }
    })),
  };
}

/**
 * Get a Service schema for a specific service type
 */
export function getServiceSchema(
  lang: Lang,
  serviceKey: keyof typeof SERVICES,
  customDescription?: string
) {
  const service = SERVICES[serviceKey][lang];
  const info = BUSINESS_INFO[lang];
  const site = lang === 'es' ? SITES.es : SITES.en;
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site}/#service-${serviceKey}`,
    "name": service.name,
    "description": customDescription || service.description,
    "serviceType": service.serviceType,
    "provider": {
      "@type": "Plumber",
      "@id": `${site}/#organization`,
      "name": info.name,
      "telephone": PHONE.international,
      "url": site,
    },
    "areaServed": {
      "@type": "City",
      "name": "Barcelona",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": info.region
      }
    },
    "serviceOutput": lang === 'es' 
      ? "Reparación completada con garantía"
      : "Repair completed with warranty",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "providerMobility": "dynamic",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "EUR",
      },
      "eligibleRegion": {
        "@type": "City",
        "name": "Barcelona"
      }
    },
    "termsOfService": lang === 'es'
      ? "Presupuesto gratuito sin compromiso. Garantía en todos los trabajos."
      : "Free quote with no obligation. Warranty on all work."
  };
}

/**
 * Get combined LocalBusiness + Service schemas for homepage
 */
export function getHomepageSchema(lang: Lang) {
  const localBusiness = getLocalBusinessSchema(lang);
  const services = Object.keys(SERVICES).map(key => 
    getServiceSchema(lang, key as keyof typeof SERVICES)
  );
  
  return {
    "@context": "https://schema.org",
    "@graph": [localBusiness, ...services]
  };
}

/**
 * Get schema for a service page (Service + LocalBusiness combined)
 */
export function getServicePageSchema(
  lang: Lang,
  serviceKey: keyof typeof SERVICES,
  customDescription?: string
) {
  const localBusiness = getLocalBusinessSchema(lang);
  const service = getServiceSchema(lang, serviceKey, customDescription);
  
  return {
    "@context": "https://schema.org",
    "@graph": [localBusiness, service]
  };
}
