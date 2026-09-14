import { siteConfig } from "@/data/site";

export function RestaurantSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",

    name: siteConfig.name,

    description:
      "Tavern is a warm, atmospheric restaurant serving thoughtful food, crafted drinks, and memorable experiences.",

    image: [
      "/images/hero/tavern-hero.webp",
      "/images/about/tavern-about.webp",
    ],

    servesCuisine: [
      "International",
      "Contemporary",
    ],

    priceRange: "$$",

    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.address,
      addressLocality: siteConfig.location.city,
      addressCountry: siteConfig.location.country,
    },

    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,

    url: "https://tavern.example.com",

    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "12:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "12:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "12:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "12:00",
        closes: "00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "12:00",
        closes: "00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "12:00",
        closes: "23:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}