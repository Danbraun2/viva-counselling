import Link from "next/link";
import Image from "next/image";
import { homeImages, homeServices, site, testimonials } from "@/lib/site";

// Section order mirrors www.vivacounselling.ca exactly:
//   1. Hero (theme:black) — paul-summers forest, 40% black overlay, bottom-left text
//   2. Approach (theme:white) — h2 + paragraph
//   3. About me (theme:light cream) — Elle-Group-29 portrait + bio
//   4. Services (theme:white) — 4-up grid (Youth / Adult / Couples / Family)
//   5. Testimonial (theme:light cream) — Lauren H. quote
//   6. CTA (theme:dark) — Get started

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative">
        <div className="relative h-[100vh] min-h-[640px] w-full overflow-hidden bg-foreground">
          <Image
            src={homeImages.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: `${homeImages.heroFocal.x}% ${homeImages.heroFocal.y}%`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex h-full items-end">
            <div className="mx-auto w-full max-w-[1500px] px-6 pb-20 sm:px-10 sm:pb-24 lg:pb-28">
              <div className="max-w-[920px] text-white">
                <p
                  className="text-[15px] tracking-[0.04em]"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
                >
                  Welcome to Viva Counselling
                </p>
                <h1
                  className="mt-4 text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-[68px]"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
                >
                  Accessible and personalized mental health support in-person or
                  from your home.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Approach */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1100px] px-6 py-28 sm:px-10 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <h2
                className="text-4xl leading-[1.1] sm:text-5xl md:text-[56px]"
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
              >
                Approach
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[19px] leading-[1.7] text-foreground/85 sm:text-[20px]">
                Viva Counselling is a Vancouver-based practice offering in-person
                services in Vancouver and online services across British
                Columbia. Viva Counselling specializes in supporting individuals,
                couples and families navigating prenatal and postpartum wellness,
                fertility struggles, identity shifts, pregnancy loss, parenting,
                adolescence, eating disorders, grief and trauma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About me */}
      <section className="bg-surface-cream">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-6 py-28 sm:px-10 lg:grid-cols-12 lg:gap-20 lg:py-36">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-background">
              <Image
                src={homeImages.portrait}
                alt="Jaclyn — founder, MSW, RSW"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2
              className="text-4xl leading-[1.1] sm:text-5xl md:text-[56px]"
              style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
            >
              About me
            </h2>
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
            </div>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center rounded-md bg-accent px-6 py-3 text-[15px] tracking-wide text-white transition hover:bg-accent-dark"
              style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
            >
              Read more
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1500px] px-6 py-28 sm:px-10 lg:py-36">
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {homeServices.map((s) => (
              <li key={s.title} className="flex flex-col">
                <Link href={s.href} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-surface-cream">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3
                    className="mt-6 text-[26px] leading-tight"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
                  >
                    {s.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center rounded-md bg-accent px-7 py-3 text-[15px] tracking-wide text-white transition hover:bg-accent-dark"
              style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Testimonial */}
      <section className="bg-surface-cream">
        <div className="mx-auto max-w-[900px] px-6 py-28 text-center sm:px-10 lg:py-36">
          <figure>
            <blockquote
              className="text-2xl italic leading-[1.4] text-foreground sm:text-3xl md:text-[34px]"
              style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
            >
              &ldquo;{testimonials[0].quote}&rdquo;
            </blockquote>
            <figcaption
              className="mt-10 text-[15px] tracking-wide text-muted-foreground"
              style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
            >
              {testimonials[0].author}, {testimonials[0].role}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-[1100px] px-6 py-28 text-center sm:px-10 lg:py-36">
          <h2
            className="text-4xl leading-[1.1] sm:text-5xl md:text-[56px]"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            Get started with Viva Counselling today.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-accent px-7 py-3 text-[15px] tracking-wide text-white transition hover:bg-accent-dark"
              style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
            >
              Book now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
