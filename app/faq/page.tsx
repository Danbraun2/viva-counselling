import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "FAQ & Fees",
  description:
    "Common questions about counselling sessions, fees, insurance coverage, cancellation policy, and getting started at VIVA Counselling.",
};

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "How long are sessions, and what do they cost?",
    a: (
      <>
        Sessions are 50 minutes. Individual and youth counselling are{" "}
        <strong>$185</strong>; couples and family consultations are{" "}
        <strong>$215</strong>. A free 15-minute consultation is offered before
        booking your first session.
      </>
    ),
  },
  {
    q: "Are sessions in person or online?",
    a: (
      <>
        Both. You&apos;re welcome to meet in person at our Granville Street
        office, or online via secure video from anywhere in British Columbia.
      </>
    ),
  },
  {
    q: "Is counselling covered by my insurance?",
    a: (
      <>
        As a Registered Social Worker (RSW), my services are typically covered
        under the social worker / counselling benefit of most extended-health
        plans in Canada. After each session you&apos;ll receive a receipt with
        my registration number, which you can submit directly to your insurer
        for reimbursement.
      </>
    ),
  },
  {
    q: "Do you offer direct billing?",
    a: (
      <>
        At this time we do not offer direct billing — payment is collected at
        the time of session, and you submit your receipt to your insurer for
        reimbursement.
      </>
    ),
  },
  {
    q: "What forms of payment are accepted?",
    a: (
      <>
        Credit card on file via the Jane App booking system. You&apos;ll add
        your card during your first booking.
      </>
    ),
  },
  {
    q: "What is your cancellation policy?",
    a: (
      <>
        Sessions cancelled with less than 24 hours&apos; notice are charged the
        full session fee. Life happens, and we always do our best to
        accommodate genuine emergencies.
      </>
    ),
  },
  {
    q: "What happens in a free consultation?",
    a: (
      <>
        A 15-minute conversation by phone or video — a chance to share what you
        are looking for, ask any questions, and see if we feel like a good fit.
        There is no pressure to book.
      </>
    ),
  },
  {
    q: "How often will we meet?",
    a: (
      <>
        Most clients begin weekly or every other week, then taper as goals are
        met. Your pace and your goals lead the way.
      </>
    ),
  },
  {
    q: "Is what I share confidential?",
    a: (
      <>
        Yes. Confidentiality is a foundation of therapy, with the rare
        exceptions required by law (risk of harm to self or others, suspected
        abuse of a child, or a court order). We&apos;ll go through these in
        your first session.
      </>
    ),
  },
  {
    q: "Do you work with couples and families?",
    a: (
      <>
        Yes — couples therapy and family consultations are offered alongside
        individual work. See the <Link href="/services" className="text-primary hover:underline">services page</Link> for details.
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          FAQ & Fees
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Practical answers to{" "}
          <span className="italic text-primary">the things people ask first.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Don&apos;t see your question? Reach out — I&apos;m happy to chat
          before you book.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
        <ul className="divide-y divide-border rounded-3xl border border-border bg-surface">
          {faqs.map((f, i) => (
            <li key={i}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-serif text-lg transition hover:bg-surface-muted/50 sm:px-8">
                  <span>{f.q}</span>
                  <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-border text-muted transition group-open:rotate-45 group-open:border-primary group-open:text-primary">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-base leading-relaxed text-foreground/90 sm:px-8">
                  {f.a}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary px-8 py-12 text-primary-foreground sm:px-12">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <h2 className="font-serif text-3xl sm:text-4xl">
              Still have questions?
            </h2>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-surface-muted"
              >
                Book a free consult
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium hover:bg-primary-hover"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
