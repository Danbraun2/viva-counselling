import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
export const alt = `${site.name} — ${site.tagline}`;

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #fbf8f3 0%, #e7e0d2 100%)",
          padding: 80,
          fontFamily: "Georgia, serif",
          color: "#2b2a26",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#5b6f54",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            V
          </div>
          <div style={{ fontSize: 28, letterSpacing: 2, color: "#6b675e" }}>
            VIVA COUNSELLING
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 72,
            lineHeight: 1.05,
            maxWidth: 1000,
          }}
        >
          <span>A grounded, compassionate</span>
          <span>
            space to feel <i style={{ color: "#5b6f54" }}>seen and heard.</i>
          </span>
        </div>

        <div style={{ fontSize: 24, color: "#6b675e", display: "flex" }}>
          vivacounselling.ca · Vancouver, BC
        </div>
      </div>
    ),
    size,
  );
}
