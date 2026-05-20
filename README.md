# Alkyora Website

Production-ready Next.js site for Alkyora, an AI Systems Studio with Security Built In.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Environment

Copy `.env.example` into your local environment file and set the production values in Vercel.

```env
NEXT_PUBLIC_SITE_URL=https://alkyora.com
N8N_CHECKLIST_WEBHOOK_URL=
```

`N8N_CHECKLIST_WEBHOOK_URL` is server-only and should be added in Vercel Project Settings, not exposed in client code.

## Deployment

The app is designed for Vercel using the Next.js App Router. See `docs/architecture.md` for deployment notes, route inventory, and form integration details.
