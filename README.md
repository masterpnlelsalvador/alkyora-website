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
N8N_CONTACT_WEBHOOK_URL=
N8N_FREE_REVIEW_WEBHOOK_URL=
```

The n8n webhook URLs are server-only and should be added in Vercel Project Settings, not exposed in client code.

`N8N_FREE_REVIEW_WEBHOOK_URL` receives submissions from `/free-mini-review`. In Vercel, add it under Project Settings > Environment Variables for Production, Preview, and Development as needed, then redeploy.

## Free Mini AI System Review

- Page route: `/free-mini-review`
- API route: `/api/free-mini-review`
- Server-only environment variable: `N8N_FREE_REVIEW_WEBHOOK_URL`

To connect n8n, create a POST webhook in n8n, copy the production webhook URL, and set it as `N8N_FREE_REVIEW_WEBHOOK_URL` in Vercel. The payload includes the submitted contact details, review context, `source: "Alkyora Free Mini Review"`, and `submittedAt`.

To test the form, run `npm run dev`, open `/free-mini-review`, submit with valid required fields, and confirm the success state. With the webhook configured, confirm the execution arrives in n8n. Temporarily using a failing webhook URL should show the friendly failure state.

## Deployment

The app is designed for Vercel using the Next.js App Router. See `docs/architecture.md` for deployment notes, route inventory, and form integration details.
