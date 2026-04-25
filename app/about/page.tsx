import Link from "next/link";
import { site, testimonials } from "@/lib/site";

export const metadata = { title: "About" };

const modalities = [
  {
    title: "Somatic psychotherapy",
    body: "Listening to the body as much as the story — gently working with sensation, breath, and nervous-system patterns.",
  },
  {
    title: "Attachment theory",
    body: "Understanding how early relationships shape the way we connect, trust, and protect ourselves today.",
  },
  {
    title: "Trauma-informed practice",
    body: "Pacing the work with safety, choice, and consent at every step — never pushing beyond what feels manageable.",
  },
  {
    title: "EFFT",
    body: "Emotion-Focused Family Therapy to support parents and caregivers in repairing and strengthening connection.",
  },
  {
    title: "CBT & DBT",
    body: "Practical, skills-based approaches for anxious thoughts, intense emotions, and getting unstuck.",
  },
  {
    title: "Compassionate collaboration",
    body: "Above all, the relationship — a partnership that respects your goals, your pace, and your wisdom.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">About</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Meet Jaclyn —{" "}
          <span className="italic text-primary">founder & therapist.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          MSW, RSW. Registered social worker and somatic therapist based in
          Vancouver, supporting clients across British Columbia.
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-5xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface-muted">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-primary/30" />
            <svg className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 400 500" fill="none" aria-hidden>
              <circle cx="200" cy="200" r="120" className="fill-current text-primary/30" />
              <circle cx="120" cy="380" r="80" className="fill-current text-accent/40" />
              <circle cx="320" cy="380" r="60" className="fill-current text-primary/20" />
            </svg>
            <div className="absolute bottom-6 left-6 rounded-2xl border border-border bg-background/85 px-4 py-2 text-sm backdrop-blur">
              Jaclyn · MSW, RSW
            </div>
          </div>
        </div>

        <div className="space-y-6 text-base leading-relaxed text-foreground/90 lg:col-span-3">
          <p>
            I came to this work through a deep respect for the resilience of the
            people I sit with. Every client carries a story shaped by lived
            experience — and that experience is the foundation we build from
            together.
          </p>
          <p>
            My role is to create a space where you feel genuinely seen and heard.
            That means meeting you with warmth, working at a pace that respects
            your nervous system, and building therapy around the goals that
            matter most to you — not a one-size-fits-all template.
          </p>
          <p>
            My approach integrates somatic psychotherapy, attachment theory,
            trauma-informed practice, emotion-focused family therapy (EFFT),
            cognitive behavioural therapy (CBT), and dialectical behaviour
            therapy (DBT). The compassionate, collaborative relationship between
            us is the most important ingredient — change happens in connection.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-surface-muted/50 p-8 sm:p-12 lg:p-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Approach</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">How we&apos;ll work together</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modalities.map((m) => (
              <div key={m.title} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-serif text-lg">{m.title}</h3>
                <p className="mt-2 text-sm text-muted">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-3xl px-4 sm:px-6 lg:px-8">
        <figure className="rounded-3xl border border-border bg-surface p-8 sm:p-12">
          <p className="text-xs uppercase tracking-widest text-primary">Client reflection</p>
          <blockquote className="mt-4 font-serif text-2xl leading-relaxed sm:text-3xl">
            &ldquo;{testimonials[0].quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-sm">
            <span className="font-medium">{testimonials[0].author}</span>
            <span className="text-muted"> · {testimonials[0].role}</span>
          </figcaption>
        </figure>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary px-8 py-12 text-primary-foreground sm:px-12">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <h2 className="font-serif text-3xl sm:text-4xl">
              Curious if we&apos;re a fit?
            </h2>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-surface-muted"
              >
                Book a free consult
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium hover:bg-primary-hover"
              >
                See services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
