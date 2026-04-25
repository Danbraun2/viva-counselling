# Site audit — VIVA new site vs. live Squarespace

Apples-to-apples comparison of what shipped today vs. the existing
vivacounselling.ca, plus the polish layer added on top.

## Pages

| Page | Squarespace | New site | Notes |
| --- | --- | --- | --- |
| Home | ✅ | ✅ | Restructured with sticky CTAs, stats strip, Brené Brown quote retained |
| About | ✅ | ✅ | Same bio + 6-card "Approach" grid (somatic, attachment, trauma-informed, EFFT, CBT, DBT) |
| Services | ✅ | ✅ | Four service cards with full Squarespace copy and prices preserved |
| Areas of Focus index | dropdown only | ✅ dedicated index page | Cards for all 10 areas with hover state |
| 10 Areas of Focus subpages | ✅ | ✅ | All copy migrated, plus per-page "How sessions work" sidebar and related-areas cross-links |
| Contact | ✅ | ✅ | Working server-action form; embedded Google map |
| **FAQ & Fees** | ❌ | ✅ | 10 questions covering fees, insurance, cancellation, confidentiality |
| **Book page (Jane embed)** | ❌ | ✅ | Full booking widget inside the site instead of redirect |
| **Privacy Policy** | ❌ | ✅ | PIPEDA / BC PIPA aware |
| **Terms of Use** | ❌ | ✅ | With "not medical advice" + crisis pointers |
| **404 page** | (default) | ✅ | Custom, on-brand |

## Design / UX

| Capability | Squarespace | New site |
| --- | --- | --- |
| Mobile responsive | ✅ | ✅ |
| Light + dark mode | ❌ | ✅ |
| Theme toggle (no flash) | ❌ | ✅ |
| Sticky header + mobile drawer | partial | ✅ |
| Skip-to-content link (a11y) | ❌ | ✅ |
| Crisis support callout in footer | ❌ | ✅ |
| Custom 404 | ❌ | ✅ |
| Typography (serif/sans pairing) | system default | Fraunces + Inter |
| Animation / hover states | minimal | tasteful (cards lift, focus states) |

## Functionality

| Capability | Squarespace | New site |
| --- | --- | --- |
| Working contact form | mailto: only | Server Action + Resend (configurable) |
| Form validation + spam honeypot | ❌ | ✅ |
| Booking embedded in-site | ❌ (link out) | ✅ on /book |
| Book CTA in nav, hero, every focus page | partial | ✅ |
| Office map | ❌ | ✅ on Contact |

## SEO + share

| Capability | Squarespace | New site |
| --- | --- | --- |
| sitemap.xml | auto | ✅ generated |
| robots.txt | auto | ✅ (currently `Disallow: /` — preview only, see below) |
| Per-page meta titles/descriptions | manual | automatic from page metadata |
| Open Graph image | static | dynamic edge-rendered branded image |
| Favicon | manual upload | auto-generated branded icon |
| JSON-LD `MedicalBusiness` schema | ❌ | ✅ helps Google understand the practice |
| Page speed / static rendering | mixed | 25 pages prerendered as static HTML |

## Operations

| Capability | Squarespace | New site |
| --- | --- | --- |
| Source-controlled (git) | ❌ | ✅ github.com/Danbraun2/viva-counselling |
| Auto-deploy on push | n/a | ✅ Vercel |
| Free tier hosting | ~$23/mo | ✅ Vercel free tier |
| Analytics | basic | Vercel Analytics |
| Image swapping | one-by-one in CMS | drop into `/public/images` and reference |

## Currently set to **noindex**

The site is deployed but blocked from search engines via:

1. `app/robots.ts` returns `Disallow: /` for all user agents.
2. Root metadata sets `robots: { index: false, follow: false }` so every
   page also emits `<meta name="robots" content="noindex, nofollow">`.

This is intentional while we're in preview — it stops Google from
discovering the new site or de-ranking the live Squarespace one. When she
gives the green light to switch over, we flip robots.ts to `Allow: /` and
remove the metadata robots block. That's the entire cutover for SEO; one
edit, one commit.

## Known remaining gaps (require her input)

These are blockers only she can unblock:

1. **Real photography**. The hero, portrait, and tile imagery are calm
   gradient placeholders. Drop files into `public/images/` and update
   `lib/site.ts` (or the relevant `MediaSlot` `src`) — five-minute change.
2. **Testimonials beyond the two on the live site**. Easy add to
   `lib/site.ts → testimonials`.
3. **Phone number** (currently not on the live site either). If she wants
   one displayed, add it to `lib/site.ts → site.phone` and surface it in
   Contact + footer.
4. **Brand-domain email** (e.g. hello@vivacounselling.ca). Optional, but
   it would let us send contact-form replies from her domain. Requires a
   DNS verification in Resend.
5. **Custom domain in Vercel**. When she's ready to switch DNS, we add
   `vivacounselling.ca` to the Vercel project, update DNS records, and
   the noindex flips off.

## Summary

We're at parity on all original Squarespace content, plus we added 4
extra pages (FAQ, Book embed, Privacy, Terms, 404), light/dark mode, a
real working contact form, full SEO infrastructure, accessibility
improvements, and source control. The only remaining items are content
inputs from her — not technical debt.
