import Link from "next/link";
import { focusAreas, services, site, testimonials } from "@/lib/site";
import { FocusIcon } from "@/components/focus-icon";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs uppercase tracking-widest text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Now accepting new clients
              </span>
              <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                A grounded, compassionate space to feel{" "}
                <span className="italic text-primary">seen and heard.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted">
                {site.tagline} VIVA Counselling supports adults, youth, couples,
                and families across British Columbia.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary-hover"
                >
                  Book a free consultation
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium hover:bg-surface-muted"
                >
                  Explore services
                </Link>
              </div>
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 text-sm">
                <div>
                  <dt className="text-muted">Sessions from</dt>
                  <dd className="mt-1 font-serif text-2xl">$185</dd>
                </div>
                <div>
                  <dt className="text-muted">Format</dt>
                  <dd className="mt-1 font-serif text-2xl">Online or in-person</dd>
                </div>
                <div>
                  <dt className="text-muted">Length</dt>
                  <dd className="mt-1 font-serif text-2xl">50 min</dd>
                </div>
              </dl>
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30" />
                <svg
                  className="absolute inset-0 h-full w-full opacity-60"
                  viewBox="0 0 400 500"
                  fill="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 380 C 80 320, 160 420, 240 360 S 400 300, 400 360 L 400 500 L 0 500 Z"
                    fill="url(#g1)"
                    className="text-primary"
                  />
                  <path
                    d="M0 420 C 100 380, 200 460, 300 410 S 400 380, 400 420 L 400 500 L 0 500 Z"
                    fill="url(#g1)"
                    className="text-accent"
                  />
                  <circle cx="300" cy="120" r="48" className="fill-current text-primary/30" />
                </svg>
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-border bg-background/80 p-5 backdrop-blur">
                  <p className="font-serif text-lg leading-snug">
                    &ldquo;What we don&apos;t need in the midst of struggle is shame for being human.&rdquo;
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-muted">
                    — Brené Brown
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-border bg-surface p-8 sm:p-12 lg:grid-cols-3 lg:p-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Welcome
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              You have a story to tell.
            </h2>
            <p className="mt-2 font-serif text-2xl text-muted sm:text-3xl">
              VIVA Counselling is here to listen.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-base leading-relaxed text-foreground/90">
              VIVA is a Vancouver-based practice offering thoughtful counselling
              support — in person at our Granville Street office, or online from
              anywhere in British Columbia. Our work centres warmth, safety, and
              evidence-based approaches that meet you where you are.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/90">
              Whether you&apos;re navigating the early seasons of parenthood,
              processing grief, or simply ready to feel more like yourself again,
              there is a path forward — and you don&apos;t need to walk it alone.
            </p>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Services
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">How we can work together</h2>
          </div>
          <Link href="/services" className="hidden text-sm text-primary hover:underline sm:inline">
            View all services →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.slug}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition hover:border-primary/40 hover:shadow-sm"
            >
              <p className="text-xs uppercase tracking-widest text-muted">{s.duration}</p>
              <h3 className="mt-2 font-serif text-xl">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted">{s.blurb}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-serif text-lg">{s.price}</span>
                <Link href="/services" className="text-sm text-primary group-hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Areas of focus */}
      <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-surface-muted/50 p-8 sm:p-12 lg:p-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Areas of focus
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Specialized care for life&apos;s biggest transitions
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            From the first flicker of fertility to the long arc of parenting and
            beyond, our practice holds space for the whole journey.
          </p>
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

      {/* Testimonials */}
      <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-3xl border border-border bg-surface p-8 sm:p-10"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-primary/60" aria-hidden>
                <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3l3-3V9a2 2 0 0 0-1-2zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3l3-3V9a2 2 0 0 0-1-2z" />
              </svg>
              <blockquote className="mt-4 font-serif text-xl leading-relaxed sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-medium">{t.author}</span>
                <span className="text-muted"> · {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-primary px-8 py-14 text-primary-foreground sm:px-12 lg:px-16">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl">Ready when you are.</h2>
              <p className="mt-3 max-w-md text-primary-foreground/80">
                Book a free 15-minute consultation to see if we&apos;re the right
                fit. No pressure — just a conversation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-surface-muted"
              >
                Book a free consult
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
