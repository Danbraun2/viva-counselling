import Link from "next/link";
import { CtaButton } from "@/components/cta-button";

export default function NotFound() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex max-w-[820px] flex-col items-center px-6 pb-32 pt-40 text-center sm:px-10">
        <p className="text-[12px] uppercase tracking-[0.22em] text-muted-foreground">404</p>
        <h1
          className="mt-4 text-4xl leading-[1.1] sm:text-5xl md:text-6xl"
          style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
        >
          This page took a quiet moment.
        </h1>
        <p className="mt-6 max-w-lg text-[17px] text-muted-foreground">
          We couldn&apos;t find what you were looking for. It may have moved, or
          the link may be slightly off.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <CtaButton href="/">Back to home</CtaButton>
          <Link
            href="/services"
            className="inline-flex items-center rounded-md border border-foreground/40 px-7 py-3 text-[15px] tracking-wide text-foreground transition hover:bg-surface-cream"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            See services
          </Link>
        </div>
      </div>
    </section>
  );
}
