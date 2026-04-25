import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
  className?: string;
  ratio?: "4/5" | "1/1" | "16/10" | "3/4" | "21/9";
  priority?: boolean;
  caption?: React.ReactNode;
};

const ratios: Record<NonNullable<Props["ratio"]>, string> = {
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "16/10": "aspect-[16/10]",
  "3/4": "aspect-[3/4]",
  "21/9": "aspect-[21/9]",
};

// Photo with editorial-style placeholder. The placeholder is an off-white
// surface with a subtle warm tone — designed to feel like a print plate.
export function Photo({
  src,
  alt = "",
  className = "",
  ratio = "4/5",
  priority,
  caption,
}: Props) {
  return (
    <figure className={`relative overflow-hidden bg-surface-cream ${ratios[ratio]} ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-end">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-cream via-background to-accent-soft/50" />
          <div
            className="relative w-full px-8 py-10 text-muted-foreground/60"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            <span className="text-5xl italic">VIVA</span>
            <span className="block text-[11px] tracking-[0.22em] uppercase mt-1">
              Photograph forthcoming
            </span>
          </div>
        </div>
      )}
      {caption && (
        <figcaption className="absolute bottom-4 left-4 right-4 text-[11px] uppercase tracking-[0.18em] text-background mix-blend-difference">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
