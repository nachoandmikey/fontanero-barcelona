# Fontanero Barcelona - Project Spec

## Overview
Local plumber lead generation website for Barcelona, with bilingual support:
- **fontanero.barcelona** → Spanish (locals)
- **plumber.barcelona** → English (expats)

Single codebase, dual deployment.

## Goals
1. Rank for local plumber searches in Barcelona
2. Generate leads via phone calls / WhatsApp
3. Programmatic SEO for all Barcelona neighborhoods
4. Apply learnings from fuga-agua.es

---

## Technical Architecture

### Stack
- **Framework**: Astro (static, fast, proven with fuga-agua)
- **Styling**: Tailwind CSS
- **Hosting**: Cloudflare Pages
- **Analytics**: OpenPanel
- **i18n**: Astro's built-in i18n routing

### Dual Domain Strategy

```
fontanero.barcelona/* → serves /es/* content
plumber.barcelona/*   → serves /en/* content
```

**Implementation Options:**

1. **Cloudflare _redirects** (simplest)
   ```
   # In _redirects file
   # Rewrite rules based on host header
   ```

2. **Cloudflare Functions** (more control)
   ```js
   // functions/_middleware.js
   export async function onRequest({ request, next }) {
     const url = new URL(request.url);
     const host = request.headers.get('host');
     
     if (host.includes('fontanero.barcelona')) {
       url.pathname = `/es${url.pathname}`;
     } else if (host.includes('plumber.barcelona')) {
       url.pathname = `/en${url.pathname}`;
     }
     
     return next(new Request(url, request));
   }
   ```

3. **Build-time separation** (two builds)
   - Build Spanish version → deploy to fontanero.barcelona
   - Build English version → deploy to plumber.barcelona
   - More CI complexity but cleaner URLs

**Recommendation**: Option 2 (Cloudflare Functions middleware) - single deploy, clean URLs, full control.

### URL Structure

```
fontanero.barcelona/
├── /                           → Homepage (Spanish)
├── /servicios/                 → Services overview
├── /servicios/fugas-agua/      → Water leaks
├── /servicios/desatascos/      → Unclogging
├── /servicios/urgencias/       → Emergency
├── /zonas/                     → All neighborhoods
├── /zonas/eixample/            → Eixample
├── /zonas/gracia/              → Gràcia
├── /zonas/[barrio]/            → Programmatic neighborhood pages
├── /blog/                      → SEO articles
└── /contacto/                  → Contact

plumber.barcelona/
├── /                           → Homepage (English)
├── /services/                  → Services overview
├── /services/water-leaks/      → Water leaks
├── /services/unclogging/       → Unclogging
├── /services/emergency/        → Emergency
├── /areas/                     → All neighborhoods
├── /areas/eixample/            → Eixample
├── /areas/[neighborhood]/      → Programmatic neighborhood pages
├── /blog/                      → SEO articles (can be translated or different)
└── /contact/                   → Contact
```

---

## Barcelona Neighborhoods (Programmatic SEO)

### Districts (Distritos) & Barrios

1. **Ciutat Vella**
   - El Raval
   - El Gòtic (Barri Gòtic)
   - La Barceloneta
   - Sant Pere, Santa Caterina i la Ribera (El Born)

2. **Eixample**
   - La Dreta de l'Eixample
   - L'Antiga Esquerra de l'Eixample
   - La Nova Esquerra de l'Eixample
   - Sant Antoni
   - Sagrada Família

3. **Sants-Montjuïc**
   - Sants
   - Hostafrancs
   - La Bordeta
   - Poble Sec
   - La Marina del Prat Vermell
   - La Marina de Port

4. **Les Corts**
   - Les Corts
   - La Maternitat i Sant Ramon
   - Pedralbes

5. **Sarrià-Sant Gervasi**
   - Sarrià
   - Les Tres Torres
   - Sant Gervasi - La Bonanova
   - Sant Gervasi - Galvany
   - El Putxet i el Farró
   - Vallvidrera, el Tibidabo i les Planes

6. **Gràcia**
   - Vila de Gràcia
   - El Camp d'en Grassot i Gràcia Nova
   - La Salut
   - Vallcarca i els Penitents

7. **Horta-Guinardó**
   - El Baix Guinardó
   - Can Baró
   - El Guinardó
   - La Font d'en Fargues
   - El Carmel
   - La Teixonera
   - Sant Genís dels Agudells
   - Montbau
   - La Vall d'Hebron
   - La Clota
   - Horta

8. **Nou Barris**
   - Vilapicina i la Torre Llobeta
   - Porta
   - El Turó de la Peira
   - Can Peguera
   - La Guineueta
   - Canyelles
   - Les Roquetes
   - Verdun
   - La Prosperitat
   - La Trinitat Nova
   - Torre Baró
   - Ciutat Meridiana
   - Vallbona

9. **Sant Andreu**
   - La Trinitat Vella
   - Baró de Viver
   - El Bon Pastor
   - Sant Andreu
   - La Sagrera
   - El Congrés i els Indians
   - Navas

10. **Sant Martí**
    - El Camp de l'Arpa del Clot
    - El Clot
    - El Parc i la Llacuna del Poblenou
    - La Vila Olímpica del Poblenou
    - El Poblenou
    - Diagonal Mar i el Front Marítim del Poblenou
    - El Besòs i el Maresme
    - Provençals del Poblenou
    - Sant Martí de Provençals
    - La Verneda i la Pau

### Programmatic Page Generation

Each neighborhood gets:
- Service landing page: "Fontanero en [Barrio]" / "Plumber in [Neighborhood]"
- Emergency page: "Fontanero urgente [Barrio]"
- Specific services: "Desatascos en [Barrio]", "Fugas de agua [Barrio]"

**Estimated pages per neighborhood**: 4-5
**Total neighborhoods**: ~73
**Programmatic pages**: ~350 per language = ~700 total

---

## Content Strategy

### Homepage
- Hero with phone CTA
- Trust signals (24h, fast response, etc.)
- Service highlights
- Neighborhood quick links
- Testimonials

### Service Pages
- Detailed service description
- Pricing transparency (ranges)
- Process explanation
- FAQ
- CTA

### Neighborhood Pages (Programmatic)
- Localized H1: "Fontanero en [Barrio] - Servicio 24h"
- Brief neighborhood description
- Services available
- Response time for that area
- Local landmarks/references
- Phone CTA
- Schema markup (LocalBusiness + areaServed)

### Blog/Guides
- Can share/translate from fuga-agua.es
- Local-specific content (Barcelona plumbing regulations, etc.)

---

## SEO Strategy

### Technical SEO
- [x] Static generation (fast)
- [ ] XML sitemap (auto-generated)
- [ ] robots.txt
- [ ] hreflang tags (es ↔ en)
- [ ] Schema markup (LocalBusiness, Service, FAQ)
- [ ] Canonical URLs

### Local SEO
- [ ] Google Business Profile (once "real")
- [ ] Local directory submissions
- [ ] NAP consistency
- [ ] Reviews strategy

### On-Page SEO
- Unique title/description per page
- H1 with location + service
- Internal linking between neighborhoods
- Image alt tags

### hreflang Implementation
```html
<!-- On fontanero.barcelona/zonas/eixample/ -->
<link rel="alternate" hreflang="es" href="https://fontanero.barcelona/zonas/eixample/" />
<link rel="alternate" hreflang="en" href="https://plumber.barcelona/areas/eixample/" />
<link rel="alternate" hreflang="x-default" href="https://fontanero.barcelona/zonas/eixample/" />
```

---

## Differences from fuga-agua.es

| Aspect | fuga-agua.es | fontanero.barcelona |
|--------|--------------|---------------------|
| Focus | SEO content | Lead generation |
| Geographic | Spain-wide | Barcelona only |
| Keywords | Informational | Transactional |
| Language | Spanish only | Spanish + English |
| Business Profile | No | Yes (eventually) |
| Programmatic | By city | By neighborhood |

---

## Reusable from fuga-agua.es

- [ ] Base layout structure
- [ ] Phone/WhatsApp CTA components
- [ ] Trust signals section
- [ ] Footer component
- [ ] OpenPanel setup
- [ ] Tailwind config
- [ ] Build/deploy pipeline
- [ ] Sitemap generation script

---

## Project Structure

```
fontanero-barcelona/
├── astro.config.mjs
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── _redirects (or functions/)
├── functions/
│   └── _middleware.js          # Domain routing
├── src/
│   ├── i18n/
│   │   ├── es.json             # Spanish translations
│   │   ├── en.json             # English translations
│   │   └── utils.ts            # i18n helpers
│   ├── data/
│   │   ├── neighborhoods.ts    # All Barcelona barrios
│   │   └── services.ts         # Service definitions
│   ├── layouts/
│   │   └── Base.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PhoneCTA.astro
│   │   ├── WhatsAppButton.astro
│   │   ├── LanguageSelector.astro
│   │   ├── ServiceCard.astro
│   │   └── NeighborhoodCard.astro
│   ├── pages/
│   │   ├── es/
│   │   │   ├── index.astro
│   │   │   ├── servicios/
│   │   │   ├── zonas/
│   │   │   │   ├── index.astro
│   │   │   │   └── [barrio].astro
│   │   │   ├── blog/
│   │   │   └── contacto.astro
│   │   └── en/
│   │       ├── index.astro
│   │       ├── services/
│   │       ├── areas/
│   │       │   ├── index.astro
│   │       │   └── [neighborhood].astro
│   │       ├── blog/
│   │       └── contact.astro
│   └── styles/
│       └── global.css
├── scripts/
│   └── generate-sitemap.mjs
└── SPEC.md
```

---

## MVP Checklist

### Phase 1: Foundation
- [ ] Project setup (Astro + Tailwind)
- [ ] i18n configuration
- [ ] Domain routing middleware
- [ ] Base layout with language selector
- [ ] Phone/WhatsApp CTAs

### Phase 2: Core Pages
- [ ] Homepage (ES + EN)
- [ ] Services overview
- [ ] Contact page
- [ ] 3 main service pages

### Phase 3: Programmatic SEO
- [ ] Neighborhood data file
- [ ] Dynamic [barrio] page template
- [ ] Generate all neighborhood pages
- [ ] Internal linking

### Phase 4: Polish
- [ ] OpenPanel analytics
- [ ] Sitemap generation
- [ ] hreflang tags
- [ ] Schema markup
- [ ] Meta tags optimization

### Phase 5: Launch
- [ ] Deploy to Cloudflare Pages
- [ ] Configure custom domains
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools

---

## Notes

- Keep phone number same as fuga-agua.es for now (can change later)
- WhatsApp prefill message should be localized
- Consider adding a simple contact form (sends to email/WhatsApp)
- Blog can wait - focus on service + neighborhood pages first
