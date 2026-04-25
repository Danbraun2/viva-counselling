import { site } from "@/lib/site";

export const metadata = {
  title: "Terms of Use",
  description: "The terms and conditions for using the VIVA Counselling website.",
};

const updated = "April 25, 2026";

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-[820px] px-6 pb-32 pt-32 sm:px-10 sm:pt-40">
      <p className="text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
        Legal
      </p>
      <h1
        className="mt-3 text-4xl leading-[1.1] sm:text-5xl md:text-6xl"
        style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
      >
        Terms of Use
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>

      <div className="mt-12 space-y-6 text-[17px] leading-[1.8] text-foreground/85">
        <h2 className="text-3xl mt-12">Acceptance</h2>
        <p>
          By accessing this website, you agree to these Terms of Use. If you do not agree, please do not use the site.
        </p>

        <h2 className="text-3xl mt-12">Not medical advice</h2>
        <p>
          The content on this website is for general informational purposes only and does not constitute medical, psychological, or therapeutic advice. Reading this site does not create a therapist-client relationship. If you are in crisis, please call 911 or contact a crisis line such as 9-8-8 (Canada Suicide Crisis Helpline).
        </p>

        <h2 className="text-3xl mt-12">Intellectual property</h2>
        <p>
          All content on this site — text, images, design, and code — is the property of VIVA Counselling unless otherwise noted, and is protected by Canadian and international copyright. You may share links to this site, but please do not reproduce content without written permission.
        </p>

        <h2 className="text-3xl mt-12">Third-party links</h2>
        <p>
          This site may link to third-party services such as the Jane App booking system. We are not responsible for the content or practices of those services; please review their own terms and privacy policies.
        </p>

        <h2 className="text-3xl mt-12">Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, VIVA Counselling is not liable for any damages arising from your use of this website. The site is provided &ldquo;as is&rdquo; without warranty of any kind.
        </p>

        <h2 className="text-3xl mt-12">Governing law</h2>
        <p>These terms are governed by the laws of British Columbia, Canada.</p>

        <h2 className="text-3xl mt-12">Contact</h2>
        <p>
          Questions can be sent to{" "}
          <a href={`mailto:${site.email}`} className="text-accent-dark hover:underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
