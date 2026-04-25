import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 pb-24 pt-24 text-center sm:px-6 lg:pt-32">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">404</p>
      <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
        This page took a quiet moment.
      </h1>
      <p className="mt-4 max-w-lg text-base text-muted">
        We couldn&apos;t find what you&apos;re looking for. It may have moved,
        or the link may be slightly off. Try one of the paths below.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
        >
          Back to home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium hover:bg-surface-muted"
        >
          See services
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium hover:bg-surface-muted"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
