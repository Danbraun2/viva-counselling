import Link from "next/link";
import { notFound } from "next/navigation";
import { focusAreasFull, focusBySlug } from "@/lib/focus";
import { FocusIcon } from "@/components/focus-icon";
import { site } from "@/lib/site";

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
  return {
    title: area.title,
    description: area.short,
  };
}

export default async function FocusPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = focusBySlug[slug];
  if (!area) notFound();

  const others = focusAreasFull.filter((f) => f.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        </div>
        <div className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
          <Link
            href="/focus"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:underline"
          >
            ← All areas of focus
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FocusIcon name={area.icon} />
            </span>
            <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {area.title}
            </h1>
          </div>
          {area.quote.text && (
            <figure className="mt-8 max-w-3xl">
              <blockquote className="font-serif text-xl italic leading-relaxed text-foreground/90 sm:text-2xl">
                &ldquo;{area.quote.text}&rdquo;
              </blockquote>
              {area.quote.author && (
                <figcaption className="mt-3 text-sm text-muted">
                  — {area.quote.author}
                </figcaption>
              )}
            </figure>
          )}
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-5xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-5 text-base leading-relaxed text-foreground/90 lg:col-span-2">
          {area.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <aside className="rounded-3xl border border-border bg-surface-muted/50 p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            How sessions work
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>50 minutes per session</li>
            <li>Online or in person at our Granville Street office</li>
            <li>$185 individual / $215 couples & family</li>
            <li>Free 15-minute consultation to start</li>
          </ul>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
          >
            Book a free consult →
          </a>
        </aside>
      </section>

      <section className="mx-auto mt-20 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 rounded-3xl border border-border bg-surface p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Awareness
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl">
              {area.signsTitle}
            </h2>
            <ul className="mt-6 space-y-3 text-base">
              {area.signs.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Approach
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl">
              {area.helpTitle}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/90">
              {area.help.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Related support
        </p>
        <h2 className="mt-3 font-serif text-2xl sm:text-3xl">
          You might also be exploring
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/focus/${o.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition hover:border-primary/40"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FocusIcon name={o.icon} />
                </span>
                <h3 className="mt-4 font-serif text-base">{o.title}</h3>
                <span className="mt-3 text-xs text-primary group-hover:underline">
                  Read more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-24 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary px-8 py-12 text-primary-foreground sm:px-12">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl">
                Ready when you are.
              </h2>
              <p className="mt-3 text-primary-foreground/80">
                A free 15-minute consult is the easiest way to start.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-surface-muted"
              >
                Book a free consult
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium hover:bg-primary-hover"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
