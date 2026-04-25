import { site } from "@/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.name,
    description: site.description,
    url: "https://www.vivacounselling.ca",
    email: site.email,
    image: "https://www.vivacounselling.ca/opengraph-image",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: "Vancouver",
      addressRegion: "BC",
      postalCode: "V6H 3J3",
      addressCountry: "CA",
    },
    medicalSpecialty: "Counselling, Psychotherapy",
    areaServed: { "@type": "AdministrativeArea", name: "British Columbia" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
