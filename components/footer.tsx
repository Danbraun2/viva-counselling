import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-3 max-w-md text-sm text-muted">{site.description}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Visit</p>
          <p className="mt-3 text-sm">
            {site.address.line1}
            <br />
            {site.address.line2}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Connect</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="hover:text-primary" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary"
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                Book a free consultation
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <nav className="flex flex-wrap gap-4">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
