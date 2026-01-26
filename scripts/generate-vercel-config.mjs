import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Service slugs (must match src/data/services.ts)
const spanishServices = [
  'urgencias', 'fugas-agua', 'desatascos', 'tuberias', 'grifos', 'duchas', 
  'baneras', 'inodoros', 'cisternas', 'lavabos', 'calentadores', 'termos', 
  'calderas', 'osmosis', 'descalcificadores', 'lavadoras', 'lavavajillas',
  'aire-acondicionado', 'radiadores', 'suelo-radiante', 'gas', 'riego', 
  'piscinas', 'reformas-bano', 'reformas-cocina'
];
const englishServices = [
  'emergency', 'water-leaks', 'unclogging', 'pipes', 'faucets', 'showers',
  'bathtubs', 'toilets', 'cisterns', 'sinks', 'water-heaters', 'electric-heaters',
  'boilers', 'osmosis', 'water-softeners', 'washing-machines', 'dishwashers',
  'air-conditioning', 'radiators', 'underfloor-heating', 'gas', 'irrigation',
  'pools', 'bathroom-renovation', 'kitchen-renovation'
];

// Spanish base paths
const spanishPaths = ['servicios', 'zonas', 'contacto', ...spanishServices];
// English base paths  
const englishPaths = ['services', 'areas', 'contact', ...englishServices];

const rewrites = [];

// Helper to add rewrite for both www and non-www
function addRewrite(source, destination, host) {
  rewrites.push({ source, has: [{ type: 'host', value: host }], destination });
  rewrites.push({ source, has: [{ type: 'host', value: `www.${host}` }], destination });
}

// Root rewrites
addRewrite('/', '/es/', 'fontanero.barcelona');
addRewrite('/', '/en/', 'plumber.barcelona');

// Spanish paths → /es/
spanishPaths.forEach(p => {
  addRewrite(`/${p}`, `/es/${p}`, 'fontanero.barcelona');
  addRewrite(`/${p}/`, `/es/${p}/`, 'fontanero.barcelona');
  addRewrite(`/${p}/:path`, `/es/${p}/:path`, 'fontanero.barcelona');
  addRewrite(`/${p}/:path/`, `/es/${p}/:path/`, 'fontanero.barcelona');
});

// English paths → /en/
englishPaths.forEach(p => {
  addRewrite(`/${p}`, `/en/${p}`, 'plumber.barcelona');
  addRewrite(`/${p}/`, `/en/${p}/`, 'plumber.barcelona');
  addRewrite(`/${p}/:path`, `/en/${p}/:path`, 'plumber.barcelona');
  addRewrite(`/${p}/:path/`, `/en/${p}/:path/`, 'plumber.barcelona');
});

const config = {
  installCommand: 'npm install',
  rewrites,
  headers: [
    {
      source: '/_astro/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
    },
    {
      source: '/fonts/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
    }
  ]
};

const outputPath = path.join(__dirname, '../vercel.json');
fs.writeFileSync(outputPath, JSON.stringify(config, null, 2));

console.log(`✅ Generated vercel.json with ${rewrites.length} rewrites`);
