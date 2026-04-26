"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Header sits transparent over the homepage hero, opaque elsewhere.
  const overlayOnHome = pathname === "/" && !scrolled;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = overlayOnHome && !open;
  const textClass = onHero ? "text-white" : "text-foreground";
  const mutedClass = onHero ? "text-white/80" : "text-muted-foreground";
  const headerBg = onHero
    ? "bg-transparent"
    : "bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border-soft";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${headerBg}`}
    >
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 sm:px-10">
        <Link href="/" className={`flex items-baseline ${textClass}`}>
          <span
            className="text-[34px] tracking-[0.06em] leading-none"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            VIVA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[17px] tracking-wide transition ${
                  active ? textClass : mutedClass
                } hover:${textClass.replace("text-", "text-")}`}
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
              >
                {item.label}
                {active && (
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-px ${
                      onHero ? "bg-white" : "bg-foreground"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-[15px] tracking-wide text-white transition hover:bg-accent-dark"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            Book now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden inline-flex h-9 w-9 items-center justify-center ${textClass}`}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-1 h-px w-5 bg-current transition ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-5 bg-current transition ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border-soft bg-background md:hidden">
          <nav className="mx-auto flex max-w-[1500px] flex-col px-6 py-4 sm:px-10">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-border-soft py-3 text-xl text-foreground last:border-0"
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-accent py-3 text-base tracking-wide text-white"
              style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
            >
              Book now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
