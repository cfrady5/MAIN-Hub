# MAIN Hub — Landing Site

Marketing site for the **Microelectronics for American Innovation and National Security (MAIN) Hub**, the national ecosystem formed by consolidating the Northeast Microelectronics Coalition (NEMC) Hub and the Silicon Crossroads Microelectronics Commons (SCMC) Hub.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, Motion, and Lucide icons. Typeface and palette follow the SCMC brand guidelines (Plus Jakarta Sans; navy `#1f3655`, light blue `#7cc8ea`, green `#279643`, light green `#b9e7a6`, grey `#d5d5d6`).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start
```

## Configuration

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used in metadata, Open Graph tags, `sitemap.xml`, and `robots.txt`. Falls back to the Vercel production URL. |
| `CONTACT_WEBHOOK_URL` | Endpoint that receives contact-form submissions as JSON (Zapier/Make hook, CRM intake, Slack webhook). When unset, the form shows an email fallback instead of accepting submissions. |

## Where things live

| Path | What it is |
| --- | --- |
| `src/content/site.ts` | All landing-page copy: hero, legacy hubs (with links to the NEMC and SCMC sites), stats, mission pillars, pathway steps, technology areas, leadership quotes, FAQ, contact options. Edit copy here. |
| `src/content/press-release.ts` | The launch press release rendered at `/news/nemc-scmc-unite-to-form-main-hub`. |
| `src/components/sections/*` | One component per landing-page section, in page order. |
| `src/components/ui/*` | Buttons, headings, scroll-reveal and counter primitives. |
| `src/components/brand/*` | Vector monogram (`Mark`), lock-up (`Logo`), decorative circuit traces. |
| `src/app/api/contact/route.ts` | Contact form endpoint (validation, honeypot, webhook forwarding). |
| `src/app/opengraph-image.png` | Social share image (1200×630). Regenerate if the headline changes. |
| `public/brand/` | Transparent PNG marks and the traced SVG. |

## Routes

- `/` — landing page
- `/news/nemc-scmc-unite-to-form-main-hub` — full press release
- `/api/contact` — `POST` JSON contact submissions
- `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` — generated

## Notes for launch

- The announcement date shown on the site is set in `siteConfig.announcementDate` and currently assumes the October 1 launch from the communications plan.
- Media contact details come from the approved press release; update them in `siteConfig.contact` if they change.
- Add the MAIN Hub LinkedIn URL to `siteConfig.social.linkedin` once the page exists.
