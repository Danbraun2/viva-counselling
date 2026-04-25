import { site } from "@/lib/site";
import { ContactForm } from "@/components/contact-form";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Let&apos;s find a moment to{" "}
          <span className="italic text-primary">connect.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          The simplest way to begin is a free 15-minute consult through Jane.
          Prefer a question first? Send a note — I respond within two business
          days.
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="rounded-3xl border border-border bg-surface p-8 sm:p-10 lg:col-span-2">
          <h2 className="font-serif text-2xl">Get in touch</h2>
          <dl className="mt-6 space-y-5 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted">Email</dt>
              <dd className="mt-1">
                <a className="hover:text-primary" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted">Office</dt>
              <dd className="mt-1">
                {site.address.line1}
                <br />
                {site.address.line2}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted">Online sessions</dt>
              <dd className="mt-1">Available across British Columbia.</dd>
            </div>
          </dl>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
          >
            Book through Jane →
          </a>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border">
          <iframe
            title="VIVA Counselling office on Granville Street, Vancouver"
            src="https://www.google.com/maps?q=2780+Granville+Street,+Vancouver,+BC&output=embed"
            width="100%"
            height="380"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </section>
    </>
  );
}
