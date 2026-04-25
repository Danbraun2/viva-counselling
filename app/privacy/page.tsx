import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How VIVA Counselling collects, uses, and protects your personal information.",
};

const updated = "April 25, 2026";

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Legal</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>

      <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-base leading-relaxed text-foreground/90">
        <p>
          VIVA Counselling (&ldquo;VIVA,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information you share with us. This policy describes how we collect, use, and safeguard information through this website and through our counselling services. We follow the principles of Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA) and British Columbia&apos;s Personal Information Protection Act (PIPA).
        </p>

        <h2 className="font-serif text-2xl">Information we collect</h2>
        <p>
          When you contact us through this website or book a session, we may collect your name, email address, phone number, and any details you choose to share in your message. When you become a client, we collect additional information necessary to provide care, including health and emotional well-being information, payment information, and notes from your sessions.
        </p>

        <h2 className="font-serif text-2xl">How we use your information</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>To respond to inquiries and book consultations.</li>
          <li>To provide and document counselling services.</li>
          <li>To process payments and issue receipts.</li>
          <li>To meet legal, regulatory, and professional-college obligations.</li>
        </ul>

        <h2 className="font-serif text-2xl">Confidentiality</h2>
        <p>
          What you share in session is confidential. The exceptions required by law include: a real risk of serious harm to yourself or another person; a reasonable suspicion that a child or vulnerable adult is being abused or neglected; a court subpoena; and an audit by my regulatory college. We will discuss these limits in detail at your first session.
        </p>

        <h2 className="font-serif text-2xl">Booking & payments</h2>
        <p>
          Bookings and payments are handled through Jane App, a Canadian-hosted practice-management platform with its own privacy and security practices. Please refer to <a href="https://jane.app/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">Jane&apos;s privacy policy</a> for details on how that information is processed.
        </p>

        <h2 className="font-serif text-2xl">Cookies & analytics</h2>
        <p>
          This website uses minimal, privacy-respecting analytics to understand how the site is used and to improve it. We do not sell your information or share it for advertising.
        </p>

        <h2 className="font-serif text-2xl">Your rights</h2>
        <p>
          You may request access to the personal information we hold about you, ask that we correct inaccuracies, or withdraw consent for certain uses. To make a request, email us at{" "}
          <a href={`mailto:${site.email}`} className="text-primary hover:underline">{site.email}</a>.
        </p>

        <h2 className="font-serif text-2xl">Contact</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${site.email}`} className="text-primary hover:underline">{site.email}</a>{" "}
          or mailed to {site.address.full}.
        </p>

        <p className="text-sm text-muted">
          This page is provided for general information and is not legal advice. We may update this policy from time to time; the &ldquo;last updated&rdquo; date above will reflect the most recent revision.
        </p>
      </div>
    </article>
  );
}
