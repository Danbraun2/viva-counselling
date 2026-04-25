# Email to Jane App support — API access request

Send to: **support@jane.app**
From: Jaclyn (the Jane account owner)
Subject suggestion: **API access request — VIVA Counselling**

---

Hi Jane team,

I'm Jaclyn, the account owner for VIVA Counselling (clinic subdomain:
`vivacounsellinggroup.janeapp.com`). I'm in the process of moving our
marketing website off Squarespace onto a custom Next.js site, and I'd love
to keep the booking and clinical experience entirely inside Jane while
having the marketing site stay in sync.

Could you let me know what API access is currently available to me as the
account owner? Specifically, I'd love to use:

1. **Read-only access to my services and rates** so the website's services
   page reflects whatever I've configured in Jane (no manual duplication).
2. **Read-only access to upcoming availability** so the website can show a
   "next available appointment" indicator on my Book CTA.
3. **Read-only access to my practitioner list** so as I add associates,
   their profiles can populate automatically.

I have no need to write data — booking, intake, payment, and clinical notes
should all continue to live in Jane.

I work with a developer (cc'd, optional) who can handle the integration on
our end once credentials are issued. Happy to provide whatever
verification or paperwork is required.

Thank you so much,

Jaclyn
VIVA Counselling
201–2780 Granville Street, Vancouver, BC
vivamindfulnessgroup@gmail.com

---

## What to do with the response

- **If they grant a personal API token**: forward it to your developer.
  We'll add it as `JANE_API_KEY` in the Vercel project env vars and the
  three integrations above will go live within a week.
- **If they say "no public API"**: nothing breaks. The current site already
  embeds the full Jane booking widget on `/book`, and every CTA links to
  Jane. The 2-step (lead → site → Jane) flow keeps working.
- **If they offer a partner program / webhooks**: ask for documentation and
  forward it on. Webhooks alone (e.g. "appointment booked") would let us
  build email automations and a "thank you for booking" page later.
