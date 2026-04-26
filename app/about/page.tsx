import Image from "next/image";
import { site } from "@/lib/site";
import { SectionHero } from "@/components/section-hero";
import { CtaButton } from "@/components/cta-button";

// Mirrors www.vivacounselling.ca/about:
//   1. Hero — Brené Brown quote (artyom-panfilov bg, theme=black, overlay=0.48)
//   2. About Jaclyn — Founder, MSW, RSW (Elle-Group-11 portrait)
//   3. Rates — Individual / Couples / Family Consultations
//   4. CTA — Get started with Viva Counselling today.

export const metadata = { title: "About" };

const rates = [
  {
    title: "Individual Sessions",
    duration: "50 mins",
    price: "$185",
    note: "Online or in-person",
  },
  {
    title: "Couples Sessions",
    duration: "50 mins",
    price: "$215",
    note: "Online or in-person",
  },
  {
    title: "Family Consultations",
    duration: "50 mins",
    price: "$215",
    note: "Online or in-person",
  },
];

export default function AboutPage() {
  return (
    <>
      <SectionHero
        image="/images/artyom-panfilov-tTSkzqDklWk.jpg"
        overlay={0.3}
        theme="black"
        height="regular"
        align="center"
      >
        <div className="max-w-3xl text-center mx-auto">
          <p
            className="text-2xl italic leading-snug sm:text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300 }}
          >
            &ldquo;What we don&apos;t need in the midst of struggle is shame for being
            human.&rdquo;
          </p>
          <p
            className="mt-6 text-[15px] tracking-[0.04em]"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            — Brené Brown
          </p>
        </div>
      </SectionHero>

      {/* About Jaclyn */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-6 py-20 sm:py-24 sm:px-10 lg:grid-cols-12 lg:gap-20 lg:py-28">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-cream">
              <Image
                src="/images/Elle-Group-11.jpg"
                alt="Jaclyn — Founder, MSW, RSW"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h1
              className="text-4xl leading-[1.1] sm:text-5xl md:text-[56px]"
              style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
            >
              About Jaclyn
            </h1>
            <p className="mt-3 text-[15px] uppercase tracking-[0.18em] text-muted-foreground">
              Founder, MSW, RSW
            </p>
            <div className="mt-8 space-y-5 text-[18px] leading-[1.75] text-foreground/85">
              <p>
                I&apos;m Jaclyn, a registered social worker and somatic therapist
                with a deep commitment to supporting people through life&apos;s
                most tender and transformative moments. My professional and
                personal experiences shape how I show up in this work — with
                empathy, humility, and a deep respect for your unique experience.
              </p>
              <p>
                Wherever you are in your journey, I offer a space where you can
                feel safe, supported, and seen, exactly as you are. Together we
                can move towards your therapeutic goals with curiosity and care
                as we explore what coping and healing look like for you.
              </p>
              <p>
                My therapeutic work integrates somatic psychotherapy, attachment
                theory, trauma-informed practice, emotion-focused family therapy
                (EFFT), cognitive behavioural therapy (CBT), and dialectical
                behaviour therapy (DBT). The compassionate, collaborative
                relationship between us is the most important ingredient — change
                happens in connection.
              </p>
            </div>
            <div className="mt-10">
              <CtaButton href={site.bookingUrl} external>
                Book a free consultation
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="bg-surface-cream">
        <div className="mx-auto max-w-[1100px] px-6 py-20 sm:px-10 sm:py-24 lg:py-28">
          <h2
            className="text-center text-4xl leading-[1.1] sm:text-5xl md:text-[56px]"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            Rates
          </h2>
          <ul className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8">
            {rates.map((r) => (
              <li
                key={r.title}
                className="flex flex-col items-center text-center"
              >
                <h3
                  className="text-2xl leading-tight"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
                >
                  {r.title}
                </h3>
                <p className="mt-4 text-[14px] uppercase tracking-[0.18em] text-muted-foreground">
                  {r.duration}
                </p>
                <p
                  className="mt-3 text-5xl"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300 }}
                >
                  {r.price}
                </p>
                <p className="mt-3 text-[15px] text-muted-foreground">{r.note}</p>
              </li>
            ))}
          </ul>
          <div className="mt-16 text-center">
            <CtaButton href={site.bookingUrl} external>
              Book now
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-[1100px] px-6 py-20 sm:py-24 text-center sm:px-10 lg:py-28">
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
