import Link from "next/link";
import { site } from "@/lib/site";

const footerNav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/focus", label: "Areas of Focus" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book" },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-surface-cream">
      <div className="border-b border-border-soft px-6 py-3 text-center text-[12px] tracking-wide text-muted-foreground sm:px-8">
        In crisis?{" "}
        <a href="tel:988" className="text-foreground underline-offset-4 hover:underline">
          Call or text 988
        </a>{" "}
        (Canada Suicide Crisis Helpline) or 911. Therapy is not a crisis service.
      </div>

      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p
            className="text-4xl tracking-[0.01em] text-foreground"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            VIVA
          </p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Counselling
          </p>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            {site.description}
          </p>
        </div>

        <div className="lg:col-span-3">
          <p className="eyebrow">Visit</p>
          <p className="mt-4 text-[15px] leading-relaxed">
            {site.address.line1}
            <br />
            {site.address.line2}
          </p>
          <p className="mt-4 text-[15px]">
            <a className="hover:text-accent-dark" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>

        <div className="lg:col-span-4">
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-[15px]">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted-foreground hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.psychologyToday}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Psychology Today
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-soft">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-3 px-6 py-6 text-[12px] text-muted-foreground sm:flex-row sm:items-center sm:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
