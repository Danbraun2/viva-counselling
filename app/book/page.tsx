import { site } from "@/lib/site";

export const metadata = {
  title: "Book",
  description:
    "Book a free 15-minute consultation or a counselling session with VIVA Counselling through Jane App.",
};

export default function BookPage() {
  return (
    <section className="bg-background pt-32 sm:pt-36">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <div className="text-center">
          <h1
            className="text-4xl leading-[1.05] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            Book a session
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] text-muted-foreground">
            Booking is handled through Jane App. Start with a free 15-minute
            consultation, or book a full session below.
          </p>
        </div>
        <div className="mt-12 overflow-hidden border border-border">
          <iframe
            title="Jane App booking — VIVA Counselling"
            src={site.bookingUrl}
            className="block h-[1100px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mb-20 mt-6 text-center text-[14px] text-muted-foreground">
          Trouble loading?{" "}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="text-accent-dark hover:underline"
          >
            Open Jane App in a new tab →
          </a>
        </p>
      </div>
    </section>
  );
}
