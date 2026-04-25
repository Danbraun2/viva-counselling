import type { MetadataRoute } from "next";

// Preview/staging: keep the site out of search results so it does not
// compete with the live Squarespace site for SEO.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
