import Link from "next/link";

type Variant = "primary" | "outline-light" | "outline-dark";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark",
  "outline-light":
    "border border-white/60 text-white hover:bg-white/10",
  "outline-dark":
    "border border-foreground/40 text-foreground hover:bg-surface-cream",
};

const base =
  "inline-flex items-center rounded-md px-7 py-3 text-[15px] tracking-wide transition";

export function CtaButton({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const style = { fontFamily: "var(--font-cormorant), serif", fontWeight: 400 } as const;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls} style={style}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} style={style}>
      {children}
    </Link>
  );
}
