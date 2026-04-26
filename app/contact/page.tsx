import { site } from "@/lib/site";
import { ContactForm } from "@/components/contact-form";
import { SectionHero } from "@/components/section-hero";
import { CtaButton } from "@/components/cta-button";

// Mirrors www.vivacounselling.ca/contact

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <SectionHero
        image="/images/stefan-pflaum-7QlDy1eTt1M.jpg"
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
            Contact us
          </h1>
        </div>
      </SectionHero>

      {/* Contact details + form */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-12 lg:gap-20 lg:py-28">
          <div className="lg:col-span-5">
            <h2
              className="text-3xl leading-tight sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
            >
              Get in touch
            </h2>
            <p className="mt-6 text-[18px] leading-[1.75] text-foreground/85">
              The simplest way to begin is a free 15-minute consultation through
              Jane. Prefer a question first? Send a note and I&apos;ll respond
              within two business days.
            </p>
            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
                  Email
                </dt>
                <dd className="mt-2">
                  <a className="hover:text-accent-dark" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
                  Office
                </dt>
                <dd className="mt-2 leading-relaxed">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
                  Online sessions
                </dt>
                <dd className="mt-2">Available across British Columbia.</dd>
              </div>
            </dl>
            <div className="mt-10">
              <CtaButton href={site.bookingUrl} external>
                Book through Jane
              </CtaButton>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-surface-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-12 sm:px-10">
          <div className="overflow-hidden">
            <iframe
              title="VIVA Counselling office on Granville Street, Vancouver"
              src="https://www.google.com/maps?q=2780+Granville+Street,+Vancouver,+BC&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full border-0"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-[1100px] px-6 py-20 text-center sm:px-10 sm:py-24 lg:py-28">
          <h2
            className="text-4xl leading-[1.1] sm:text-5xl md:text-[56px]"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            Get started with Viva Counselling today.
          </h2>
          <div className="mt-10 flex justify-center">
            <CtaButton href={site.bookingUrl} external>
              Book now
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
