import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How VIVA Counselling collects, uses, and protects your personal information.",
};

const updated = "April 25, 2026";

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-[820px] px-6 pb-32 pt-32 sm:px-10 sm:pt-40">
      <p className="text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
        Legal
      </p>
      <h1
        className="mt-3 text-4xl leading-[1.1] sm:text-5xl md:text-6xl"
        style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
      >
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>

      <div className="mt-12 space-y-6 text-[17px] leading-[1.8] text-foreground/85">
        <p>
          VIVA Counselling (&ldquo;VIVA,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information you share with us. This policy describes how we collect, use, and safeguard information through this website and through our counselling services. We follow Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA) and British Columbia&apos;s Personal Information Protection Act (PIPA).
        </p>

        <h2 className="text-3xl mt-12">Information we collect</h2>
        <p>
          When you contact us through this website or book a session, we may collect your name, email address, phone number, and any details you choose to share. When you become a client, we collect additional information to provide care, including health and emotional well-being information, payment information, and notes from your sessions.
        </p>

        <h2 className="text-3xl mt-12">How we use your information</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li>To respond to inquiries and book consultations.</li>
          <li>To provide and document counselling services.</li>
          <li>To process payments and issue receipts.</li>
          <li>To meet legal, regulatory, and professional-college obligations.</li>
        </ul>

        <h2 className="text-3xl mt-12">Confidentiality</h2>
        <p>
          What you share in session is confidential. The exceptions required by law include: a real risk of serious harm to yourself or another person; a reasonable suspicion that a child or vulnerable adult is being abused or neglected; a court subpoena; and an audit by my regulatory college. We will discuss these limits in detail at your first session.
        </p>

        <h2 className="text-3xl mt-12">Booking & payments</h2>
        <p>
          Bookings and payments are handled through Jane App, a Canadian-hosted practice-management platform with its own privacy and security practices. Please refer to{" "}
          <a href="https://jane.app/privacy" target="_blank" rel="noreferrer" className="text-accent-dark hover:underline">
            Jane&apos;s privacy policy
          </a>{" "}
          for details.
        </p>

        <h2 className="text-3xl mt-12">Cookies & analytics</h2>
        <p>
          This website uses minimal, privacy-respecting analytics to understand how the site is used and to improve it. We do not sell your information or share it for advertising.
        </p>

        <h2 className="text-3xl mt-12">Your rights</h2>
        <p>
          You may request access to the personal information we hold about you, ask that we correct inaccuracies, or withdraw consent for certain uses. To make a request, email{" "}
          <a href={`mailto:${site.email}`} className="text-accent-dark hover:underline">
            {site.email}
          </a>
          .
        </p>

        <h2 className="text-3xl mt-12">Contact</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${site.email}`} className="text-accent-dark hover:underline">
            {site.email}
          </a>{" "}
          or mailed to {site.address.full}.
        </p>

        <p className="text-[14px] text-muted-foreground">
          This page is provided for general information and is not legal advice. We may update this policy from time to time; the &ldquo;last updated&rdquo; date above will reflect the most recent revision.
        </p>
      </div>
    </article>
  );
}
