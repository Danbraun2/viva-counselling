import Image from "next/image";

type Variant = "primary" | "accent" | "soft";

type Props = {
  src?: string;
  alt?: string;
  caption?: React.ReactNode;
  className?: string;
  ratio?: "4/5" | "1/1" | "16/10" | "3/4";
  variant?: Variant;
};

const ratios: Record<NonNullable<Props["ratio"]>, string> = {
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "16/10": "aspect-[16/10]",
  "3/4": "aspect-[3/4]",
};

const variants: Record<Variant, { from: string; to: string }> = {
  primary: { from: "from-primary/30", to: "to-accent/30" },
  accent: { from: "from-accent/30", to: "to-primary/30" },
  soft: { from: "from-primary/20", to: "to-accent/15" },
};

export function MediaSlot({
  src,
  alt = "",
  caption,
  className = "",
  ratio = "4/5",
  variant = "primary",
}: Props) {
  const v = variants[variant];
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-border bg-surface-muted ${ratios[ratio]} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${v.from} via-transparent ${v.to}`} />
          <svg
            className="absolute inset-0 h-full w-full opacity-60"
            viewBox="0 0 400 500"
            fill="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="ms-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 380 C 80 320, 160 420, 240 360 S 400 300, 400 360 L 400 500 L 0 500 Z"
              fill="url(#ms-grad)"
              className="text-primary"
            />
            <path
              d="M0 420 C 100 380, 200 460, 300 410 S 400 380, 400 420 L 400 500 L 0 500 Z"
              fill="url(#ms-grad)"
              className="text-accent"
            />
            <circle cx="300" cy="120" r="48" className="fill-current text-primary/30" />
          </svg>
        </>
      )}
      {caption && (
        <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-border bg-background/85 p-5 backdrop-blur">
          {caption}
        </div>
      )}
    </div>
  );
}
