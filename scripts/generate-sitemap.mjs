import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPathEs = path.join(__dirname, '../dist/sitemap-es.xml');
const outputPathEn = path.join(__dirname, '../dist/sitemap-en.xml');
const outputPathIndex = path.join(__dirname, '../dist/sitemap.xml');

const esSite = 'https://fontanero.barcelona';
const enSite = 'https://plumber.barcelona';

// Import neighborhood data
const { districts } = await import('../src/data/neighborhoods.ts');

const allNeighborhoods = districts.flatMap(d => d.neighborhoods);

// Spanish URLs
const esUrls = [
  { loc: '/', priority: '1.0' },
  { loc: '/servicios', priority: '0.9' },
  { loc: '/servicios/fugas-agua', priority: '0.8' },
  { loc: '/servicios/desatascos', priority: '0.8' },
  { loc: '/servicios/urgencias', priority: '0.8' },
  { loc: '/zonas', priority: '0.9' },
  { loc: '/contacto', priority: '0.7' },
];

// Add all neighborhood pages
allNeighborhoods.forEach(n => {
  esUrls.push({ loc: `/zonas/${n.id}`, priority: '0.7' });
});

// English URLs
const enUrls = [
  { loc: '/', priority: '1.0' },
  { loc: '/services', priority: '0.9' },
  { loc: '/services/water-leaks', priority: '0.8' },
  { loc: '/services/unclogging', priority: '0.8' },
  { loc: '/services/emergency', priority: '0.8' },
  { loc: '/areas', priority: '0.9' },
  { loc: '/contact', priority: '0.7' },
];

// Add all neighborhood pages
allNeighborhoods.forEach(n => {
  enUrls.push({ loc: `/areas/${n.id}`, priority: '0.7' });
});

function generateSitemap(urls, baseUrl, langPrefix) {
  const today = new Date().toISOString().split('T')[0];
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(u => `  <url>
    <loc>${baseUrl}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
}

function generateSitemapIndex() {
  const today = new Date().toISOString().split('T')[0];
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${esSite}/sitemap-es.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${enSite}/sitemap-en.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;
}

// Ensure dist directory exists
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Generate sitemaps
fs.writeFileSync(outputPathEs, generateSitemap(esUrls, esSite, 'es'));
fs.writeFileSync(outputPathEn, generateSitemap(enUrls, enSite, 'en'));
fs.writeFileSync(outputPathIndex, generateSitemapIndex());

console.log(`✅ Spanish sitemap generated with ${esUrls.length} URLs`);
console.log(`✅ English sitemap generated with ${enUrls.length} URLs`);
console.log(`✅ Sitemap index generated`);
