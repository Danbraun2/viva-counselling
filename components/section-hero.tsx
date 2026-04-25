import Image from "next/image";

type Theme = "black" | "dark" | "white" | "light";

type Props = {
  image: string;
  alt?: string;
  overlay?: number; // 0..1 — black overlay opacity
  theme?: Theme;
  height?: "regular" | "large" | "medium";
  align?: "bottom" | "center" | "top";
  focal?: { x: number; y: number };
  children: React.ReactNode;
  className?: string;
};

const heightClass = {
  large: "h-[100vh] min-h-[640px]",
  regular: "h-[70vh] min-h-[520px]",
  medium: "h-[60vh] min-h-[460px]",
};

const alignClass = {
  bottom: "items-end pb-20 sm:pb-24 lg:pb-28",
  center: "items-center",
  top: "items-start pt-32",
};

const themeText: Record<Theme, string> = {
  black: "text-white",
  dark: "text-white",
  white: "text-foreground",
  light: "text-foreground",
};

// A full-bleed hero matching Squarespace's section-background semantics.
// Use overlay/theme to mirror the live site's per-section settings.
export function SectionHero({
  image,
  alt = "",
  overlay = 0.2,
  theme = "black",
  height = "regular",
  align = "bottom",
  focal,
  children,
  className = "",
}: Props) {
  const text = themeText[theme];
  return (
    <section className={`relative w-full overflow-hidden bg-foreground ${heightClass[height]} ${className}`}>
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={focal ? { objectPosition: `${focal.x}% ${focal.y}%` } : undefined}
      />
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlay }}
      />
      <div className={`relative z-10 flex h-full ${alignClass[align]}`}>
        <div className={`mx-auto w-full max-w-[1500px] px-6 sm:px-10 ${text}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
