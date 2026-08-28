# Insaf Arcade 2 — Marketing Website

Single-page marketing site for **Insaf Arcade 2**, B-17 (MPCHS), Islamabad.  
Developed by **Insaf Arcadia Developers**.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — custom design tokens
- **Framer Motion** — orchestrated load + scroll animations
- `next/font` — self-hosted Fraunces (display) + Inter Tight (body)

## Local setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:3000
```

## Adding real images

Replace the 1×1 placeholder files in `public/images/` with the client's supplied assets using these exact filenames:

| Filename                          | Usage                                  |
|-----------------------------------|----------------------------------------|
| `hero-building.jpg`               | Hero section full-bleed background     |
| `building-angle.jpg`              | Secondary building render (parallax)   |
| `plan-commercial-first-floor.jpg` | 1st floor commercial layout plan       |
| `plan-apartments.jpg`             | Residential floor plan                 |
| `plan-3d-750.jpg`                 | 3D layout — 750 sqft apartment         |
| `plan-3d-780.jpg`                 | 3D layout — 780 sqft apartment         |
| `logo-insaf-arcadia.png`          | Developer logo (or supply as .svg)     |
| `map-location.jpg`                | Map graphic for location section       |

Use JPEG for photos (≤ 200 KB each after compression). The site uses `next/image` with explicit `sizes` for responsive loading.

## Editing content

All copy, prices, and strings live in **`content.ts`** at the project root. Edit that file and save — no code changes required for pricing or text updates.

> **Important:** Never recompute prices. Print figures exactly as given in `content.ts`. If prices change, update `content.ts` only.

## Connecting the enquiry form

`app/api/enquiry/route.ts` currently logs submissions to the console. To connect a real email or CRM:

1. Install your preferred SDK (`resend`, `nodemailer`, `@hubspot/api-client`, etc.)
2. Add credentials to `.env.local` (never commit this file)
3. Replace the `console.log` block with your integration call
4. Test locally with `npm run dev`

## Deploy to Vercel

```bash
# One-click via Vercel CLI
npx vercel

# Or push to GitHub and connect the repo in the Vercel dashboard.
# Set environment variables in Vercel's dashboard under Project → Settings → Environment Variables.
```

No additional Vercel config is needed — `next.config.js` is already set up for production.

## Updating SEO metadata

- **Title / description / OG:** edit `site.seo` in `content.ts`
- **Sitemap URL:** update `public/sitemap.xml` with the live domain
- **Structured data:** `app/layout.tsx` contains the JSON-LD `Residence` + `Organization` schema
