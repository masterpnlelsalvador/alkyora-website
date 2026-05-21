# Alkyora Website Architecture

## Tech Stack

- Next.js App Router with TypeScript
- Tailwind CSS v4 for styling
- Framer Motion for restrained section reveals
- Geist Sans and Geist Mono via `next/font`
- Content-first structure prepared for future bilingual expansion

## Folder Structure

The project uses the scaffolded `src/` layout:

- `src/app/` contains route segments, metadata, and page composition.
- `src/components/layout/` contains the shared header, footer, and navigation.
- `src/components/sections/` contains homepage and reusable marketing sections.
- `src/components/templates/` contains reusable page templates.
- `src/components/ui/` contains small design primitives.
- `src/components/motion/` contains client-only animation wrappers.
- `src/content/en/` contains English content and typed service data.
- `src/content/es/` is reserved for future Spanish content.
- `src/lib/` contains SEO, schema, constants, and utility helpers.
- `public/og/` contains Open Graph artwork placeholders.
- `docs/` contains architecture and brand notes.

## Main Components

- `HeroSection` presents the primary positioning and conversion actions.
- `ProblemSection`, `SolutionSection`, `DifferentiatorSection`, and `FrameworkSection` explain the strategy.
- `ServicesSection` renders service and offer content from `src/content/en/services.ts`.
- `RiskScannerSection` is a front-end-only quiz that provides careful low, medium, or high practical-risk language.
- `LeadMagnetSection` contains the checklist form and comments for later integration.
- `ServiceDetailPage` renders the three service detail routes from shared content.

## Content Structure

English content lives in `src/content/en/`. The core files are:

- `site.ts` for homepage copy, framework, process, and comparison content.
- `services.ts` for service cards and primary offers.
- `faqs.ts` for FAQ entries.
- `resources.ts` for resource cards.
- `navigation.ts` for header and footer links.

## Adding New Services

1. Add a new service object to `offers` in `src/content/en/services.ts`.
2. Create a route in `src/app/services/new-service-slug/page.tsx`.
3. Render it with `ServiceDetailPage` and `getService("new-service-slug")`.
4. Add the service to footer navigation if it should be prominent.

## Adding Spanish Later

1. Mirror English files under `src/content/es/`.
2. Introduce a locale selector or route segment such as `src/app/[locale]/`.
3. Load content by locale through a small dictionary helper.
4. Keep service slugs stable where possible, or add localized slug mapping if Spanish URLs are required.

## Form Integrations

The checklist lead magnet already has a functional first step:

- `src/components/sections/LeadMagnetSection.tsx` submits the form.
- `src/app/api/checklist-lead/route.ts` validates the lead, sends a best-effort server-side POST to n8n, and returns the checklist download URL.
- `src/app/api/contact/route.ts` validates contact requests and sends them to n8n.
- `public/downloads/ai-automation-security-checklist.pdf` is the downloadable PDF.
- `N8N_CHECKLIST_WEBHOOK_URL` configures the n8n webhook endpoint.
- `N8N_CONTACT_WEBHOOK_URL` configures the contact form n8n webhook endpoint.

Recommended next steps:

- Validate inputs with a schema library.
- Extend the n8n workflow to send leads to an email marketing tool, CRM, Google Sheet, or notification channel.
- Add spam protection and submission logging before production traffic.
- Avoid exposing webhook secrets in client-side code.

## Vercel Deployment

The site is compatible with Vercel production deployment using the standard Next.js framework preset.

Production settings:

- Build command: `npm run build`
- Install command: `npm install`
- Output directory: managed by Next.js and Vercel
- Node runtime: Vercel default for the selected Next.js version
- Production domain: `https://alkyora.com`

Environment variables:

- `NEXT_PUBLIC_SITE_URL=https://alkyora.com`
- `N8N_CHECKLIST_WEBHOOK_URL=<your n8n production webhook URL>`
- `N8N_CONTACT_WEBHOOK_URL=<your n8n production contact webhook URL>`

Pre-deployment checklist:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Confirm `NEXT_PUBLIC_SITE_URL` is set to `https://alkyora.com` in Vercel.
4. Confirm `N8N_CHECKLIST_WEBHOOK_URL` uses the production n8n webhook URL.
5. Confirm `N8N_CONTACT_WEBHOOK_URL` uses the production n8n contact webhook URL.
6. Confirm `/downloads/ai-automation-security-checklist.pdf` loads from the deployed domain.
7. Submit the checklist form once in production and confirm the lead arrives in n8n.
8. Submit the contact form once in production and confirm the lead arrives in n8n.
9. Replace placeholder privacy and terms pages before collecting real leads at scale.

Important notes:

- The checklist webhook is best-effort. If n8n fails, the API logs the error and still returns the PDF URL so the user experience does not break.
- The contact webhook is strict. If n8n fails, the API logs the error and returns a friendly failure message so the visitor knows the request did not go through.
- The n8n webhook URL must stay server-side. Do not prefix it with `NEXT_PUBLIC_`.
- SEO metadata, canonical URLs, Open Graph URLs, and JSON-LD use `NEXT_PUBLIC_SITE_URL`, defaulting to `https://alkyora.com`.
