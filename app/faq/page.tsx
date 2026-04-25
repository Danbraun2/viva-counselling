import Link from "next/link";
import { site } from "@/lib/site";
import { SectionHero } from "@/components/section-hero";
import { CtaButton } from "@/components/cta-button";

export const metadata = {
  title: "FAQ & Fees",
  description:
    "Common questions about counselling sessions, fees, insurance, cancellation, and getting started at VIVA Counselling.",
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
        No pressure to book.
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
        individual work. See the{" "}
        <Link href="/services" className="text-accent-dark hover:underline">
          services page
        </Link>{" "}
        for details.
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <>
      <SectionHero
        image="/images/office-wait-room.webp"
        overlay={0.4}
        theme="black"
        height="medium"
        align="center"
      >
        <div className="text-center">
          <h1
            className="text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-[68px]"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            Frequently asked
          </h1>
        </div>
      </SectionHero>

      <section className="bg-background">
        <div className="mx-auto max-w-[820px] px-6 py-28 sm:px-10 lg:py-36">
          <ul className="divide-y divide-border-soft border-y border-border-soft">
            {faqs.map((f, i) => (
              <li key={i}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left transition hover:bg-surface-cream/40">
                    <span
                      className="text-[22px] leading-tight sm:text-2xl"
                      style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
                    >
                      {f.q}
                    </span>
                    <span className="inline-flex h-7 w-7 flex-none items-center justify-center text-muted-foreground transition group-open:rotate-45 group-open:text-accent-dark">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </summary>
                  <div className="pb-6 text-[17px] leading-[1.8] text-foreground/85">{f.a}</div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-[1100px] px-6 py-28 text-center sm:px-10 lg:py-36">
          <h2
            className="text-4xl leading-[1.1] sm:text-5xl md:text-[56px]"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            Still have questions?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CtaButton href="/contact">Contact us</CtaButton>
            <CtaButton href={site.bookingUrl} external variant="outline-light">
              Book a free consult
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
