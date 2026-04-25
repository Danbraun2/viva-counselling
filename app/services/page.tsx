import Link from "next/link";
import { focusAreas, services, site } from "@/lib/site";
import { FocusIcon } from "@/components/focus-icon";

export const metadata = { title: "Services & Rates" };

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Services</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          You have a story to tell.{" "}
          <span className="italic text-primary">VIVA is here to listen.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          All sessions are 50 minutes and offered online or in person at our
          Granville Street office. A free 15-minute consultation is available so
          we can get a feel for one another before booking.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <ul className="grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <li
              key={s.slug}
              id={s.slug}
              className="flex flex-col rounded-3xl border border-border bg-surface p-8 sm:p-10"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-2xl sm:text-3xl">{s.title}</h2>
                <span className="font-serif text-2xl text-primary">{s.price}</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted">
                {s.duration} · Online or in-person
              </p>
              <p className="mt-5 text-base leading-relaxed text-foreground/90">
                {s.description}
              </p>
              <div className="mt-8">
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
                >
                  Book {s.title.toLowerCase()} →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-surface-muted/50 p-8 sm:p-12 lg:p-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Areas of focus
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Where I&apos;m especially well-suited to support you
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((f) => (
              <li key={f.title}>
                <Link
                  href={`/focus/${f.slug}`}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 text-sm transition hover:border-primary/40 hover:bg-surface-muted"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FocusIcon name={f.icon} />
                  </span>
                  <span className="flex-1">{f.title}</span>
                  <span className="text-muted">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl">
          Insurance & receipts
        </h2>
        <p className="mt-4 text-muted">
          As a Registered Social Worker (RSW), sessions are typically covered
          under the social worker / counselling benefit of most extended-health
          plans. A receipt with my registration number is provided after each
          session for direct submission to your insurer.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:bg-surface-muted"
          >
            Ask a question
          </Link>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
          >
            Book a free consult
          </a>
        </div>
      </section>
    </>
  );
}
