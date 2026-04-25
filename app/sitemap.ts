import type { MetadataRoute } from "next";
import { focusAreasFull } from "@/lib/focus";

const BASE = "https://www.vivacounselling.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "",
    "/about",
    "/services",
    "/focus",
    "/faq",
    "/contact",
    "/book",
    "/privacy",
    "/terms",
  ];
  const focusPaths = focusAreasFull.map((f) => `/focus/${f.slug}`);
  return [...staticPaths, ...focusPaths].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
