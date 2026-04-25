import Link from "next/link";
import Image from "next/image";
import { focusAreasFull } from "@/lib/focus";
import { site } from "@/lib/site";
import { SectionHero } from "@/components/section-hero";
import { CtaButton } from "@/components/cta-button";

export const metadata = {
  title: "Areas of Focus",
  description:
    "Specialized counselling support for prenatal & postpartum wellness, fertility, pregnancy loss, parenthood, adolescence, trauma, eating disorders, relationships, and self-esteem.",
};

export default function FocusIndexPage() {
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
            Areas of Focus
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-white/90">
            Specialized care for life&apos;s biggest transitions.
          </p>
        </div>
      </SectionHero>

      <section className="bg-background">
        <div className="mx-auto max-w-[1280px] px-6 py-28 sm:px-10 lg:py-36">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-5">
            {focusAreasFull.map((f) => (
              <li key={f.slug}>
                <Link
                  href={`/focus/${f.slug}`}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28">
                    <Image
                      src={f.icon}
                      alt=""
                      fill
                      sizes="112px"
                      className="object-contain transition group-hover:scale-105"
                    />
                  </div>
                  <p
                    className="mt-5 text-[16px] leading-snug text-foreground"
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

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-[1100px] px-6 py-28 text-center sm:px-10 lg:py-36">
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
