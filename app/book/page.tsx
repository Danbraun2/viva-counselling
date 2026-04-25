import { site } from "@/lib/site";

export const metadata = {
  title: "Book a Session",
  description:
    "Book a free 15-minute consultation or a counselling session with VIVA Counselling through our Jane App booking system.",
};

export default function BookPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Book</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Schedule a session,{" "}
          <span className="italic text-primary">on your time.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Booking is handled through Jane App. Start with a free 15-minute
          consultation, or book a full session if you&apos;ve already chatted.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-surface">
          <iframe
            title="Jane App booking — VIVA Counselling"
            src={site.bookingUrl}
            className="block h-[1100px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mt-4 text-center text-sm text-muted">
          Trouble loading?{" "}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            Open Jane App in a new tab →
          </a>
        </p>
      </section>
    </>
  );
}
