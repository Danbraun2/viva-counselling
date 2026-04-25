import Link from "next/link";
import Image from "next/image";
import { services, site, testimonials } from "@/lib/site";
import { focusAreasFull } from "@/lib/focus";
import { SectionHero } from "@/components/section-hero";
import { CtaButton } from "@/components/cta-button";

// Mirrors www.vivacounselling.ca/services:
//   1. Hero — "You have a story to tell." (linda-christiansen, theme=black, overlay=0.25)
//   2. Services — Individual / Youth / Couples / Family with descriptions
//   3. Areas of Focus — icons grid
//   4. Testimonial
//   5. CTA — Questions before getting started?

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <SectionHero
        image="/images/linda-christiansen-BAQsPV1HaS8.jpg"
        overlay={0.25}
        theme="black"
        height="regular"
        align="center"
      >
        <div className="text-center">
          <h1
            className="text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-[68px]"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            You have a story to tell.
          </h1>
        </div>
      </SectionHero>

      {/* Services list */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1100px] px-6 py-28 sm:px-10 lg:py-36">
          <h2
            className="text-center text-4xl leading-[1.1] sm:text-5xl md:text-[56px]"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            Services
          </h2>

          <ul className="mt-16 space-y-20">
            {services.map((s) => (
              <li
                key={s.slug}
                id={s.slug}
                className="grid gap-10 lg:grid-cols-12 lg:gap-16"
              >
                <div className="lg:col-span-4">
                  <h3
                    className="text-3xl leading-tight sm:text-4xl"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[14px] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.duration} · {s.price}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-[18px] leading-[1.75] text-foreground/85">
                    {s.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-20 text-center">
            <CtaButton href={site.bookingUrl} external>
              Book a free consultation
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Areas of Focus icons */}
      <section className="bg-surface-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-28 sm:px-10 lg:py-36">
          <h2
            className="text-center text-4xl leading-[1.1] sm:text-5xl md:text-[56px]"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            Areas of Focus
          </h2>
          <ul className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
            {focusAreasFull.map((f) => (
              <li key={f.slug}>
                <Link
                  href={`/focus/${f.slug}`}
                  className="group flex flex-col items-center text-center transition"
                >
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                    <Image
                      src={f.icon}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-contain transition group-hover:scale-105"
                    />
                  </div>
                  <p
                    className="mt-4 text-[15px] leading-snug text-foreground"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
                  >
                    {f.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-background">
        <div className="mx-auto max-w-[900px] px-6 py-28 text-center sm:px-10 lg:py-36">
          <figure>
            <blockquote
              className="text-2xl italic leading-[1.4] sm:text-3xl md:text-[34px]"
              style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
            >
              &ldquo;{testimonials[2].quote}&rdquo;
            </blockquote>
            <figcaption
              className="mt-10 text-[15px] tracking-wide text-muted-foreground"
              style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
            >
              {testimonials[2].author}, {testimonials[2].role}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-[1100px] px-6 py-28 text-center sm:px-10 lg:py-36">
          <h2
            className="text-4xl leading-[1.1] sm:text-5xl md:text-[56px]"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            Questions before getting started?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CtaButton href="/contact">Contact us</CtaButton>
            <CtaButton href={site.bookingUrl} external variant="outline-light">
              Book now
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
