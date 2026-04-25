import Link from "next/link";
import { focusAreasFull } from "@/lib/focus";
import { FocusIcon } from "@/components/focus-icon";

export const metadata = {
  title: "Areas of Focus",
  description:
    "Specialized counselling support for prenatal & postpartum wellness, fertility, pregnancy loss, parenthood, adolescence, trauma, eating disorders, relationships, and self-esteem.",
};

export default function FocusIndexPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Areas of focus
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Specialized care for{" "}
          <span className="italic text-primary">life&apos;s biggest transitions.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          From the first flicker of fertility to the long arc of parenting and
          beyond, our practice holds space for the whole journey. Each area
          below is a place I&apos;m especially well-suited to support you.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreasFull.map((f) => (
            <li key={f.slug}>
              <Link
                href={`/focus/${f.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-border bg-surface p-6 transition hover:border-primary/40 hover:shadow-sm"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FocusIcon name={f.icon} />
                </span>
                <h2 className="mt-5 font-serif text-xl">{f.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted">{f.short}</p>
                <span className="mt-6 text-sm text-primary group-hover:underline">
                  Read more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
