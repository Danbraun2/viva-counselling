# VIVA Counselling

Marketing site for VIVA Counselling — a Vancouver counselling practice.
Built with Next.js 16 (App Router), Tailwind CSS v4, TypeScript, and Vercel.

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Project structure

```
app/
  page.tsx              Home
  about/, services/     Static pages
  focus/                Index + dynamic [slug] for 10 areas of focus
  contact/              Form (server action) + Jane App link
  faq/, privacy/, terms/, book/
  sitemap.ts, robots.ts, opengraph-image.tsx, icon.tsx
components/
  header, footer, theme-toggle, contact-form, media-slot, focus-icon, json-ld
lib/
  site.ts   Site-wide data (nav, services, address)
  focus.ts  Full content for all 10 focus pages
```

## Configuration

Copy `.env.example` to `.env.local` and fill in the keys you need.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Required for the contact form to actually deliver email. Without it, submissions are logged to the server console. |
| `CONTACT_TO_EMAIL` | Inbox that receives contact-form messages (default: vivamindfulnessgroup@gmail.com). |
| `CONTACT_FROM_EMAIL` | The `From:` line on outgoing email — must be a domain verified in Resend. |

## Adding images

The site renders gradient placeholders wherever a real image is missing. To
swap one in, drop the file into `public/images/` and pass the path to a
`MediaSlot` (e.g. `<MediaSlot src="/images/jaclyn.jpg" alt="…" />`).

## Deploy

Connected to Vercel. Pushes to `main` deploy automatically.
