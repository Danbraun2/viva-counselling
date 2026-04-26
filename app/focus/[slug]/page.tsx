import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { focusAreasFull, focusBySlug } from "@/lib/focus";
import { site } from "@/lib/site";
import { SectionHero } from "@/components/section-hero";
import { CtaButton } from "@/components/cta-button";

export function generateStaticParams() {
  return focusAreasFull.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = focusBySlug[slug];
  if (!area) return {};
  return { title: area.title, description: area.short };
}

export default async function FocusPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = focusBySlug[slug];
  if (!area) notFound();

  const others = focusAreasFull.filter((f) => f.slug !== slug);

  return (
    <>
      <SectionHero
        image="/images/stefan-pflaum-7QlDy1eTt1M.jpg"
        overlay={0.5}
        theme="black"
        height="medium"
        align="center"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="text-2xl italic leading-snug sm:text-3xl md:text-[34px]"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300 }}
          >
            &ldquo;{area.quote.text}&rdquo;
          </p>
          {area.quote.author && (
            <p
              className="mt-6 text-[15px] tracking-[0.04em]"
              style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
            >
              — {area.quote.author}
            </p>
          )}
        </div>
      </SectionHero>

      {/* Title + intro */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1100px] px-6 py-20 sm:px-10 sm:py-24 lg:py-28">
          <div className="flex flex-col items-center text-center">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28">
              <Image src={area.icon} alt="" fill sizes="112px" className="icon-tinted object-contain" />
            </div>
            <h1
              className="mt-8 text-4xl leading-[1.1] sm:text-5xl md:text-[56px]"
              style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
            >
              {area.title}
            </h1>
          </div>
          <div className="mx-auto mt-12 max-w-3xl space-y-5 text-[18px] leading-[1.8] text-foreground/85">
            {area.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Signs + Help (two-column) */}
      <section className="bg-surface-cream">
        <div className="mx-auto max-w-[1100px] px-6 py-20 sm:px-10 sm:py-24 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2
                className="text-3xl leading-tight sm:text-4xl"
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
              >
                {area.signsTitle}
              </h2>
              <ul className="mt-8 space-y-4 text-[17px] leading-[1.7]">
                {area.signs.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="mt-3 h-1 w-2 flex-none bg-accent" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2
                className="text-3xl leading-tight sm:text-4xl"
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
              >
                {area.helpTitle}
              </h2>
              <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-foreground/85">
                {area.help.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <CtaButton href={site.bookingUrl} external>
              Book a free consultation
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Other areas */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 sm:py-24 lg:py-28">
          <h2
            className="text-center text-3xl leading-tight sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            Other areas of focus
          </h2>
          <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/focus/${o.slug}`}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                    <Image src={o.icon} alt="" fill sizes="96px" className="icon-tinted object-contain transition group-hover:scale-105" />
                  </div>
                  <p
                    className="mt-4 text-[15px] leading-snug"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
                  >
                    {o.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
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
