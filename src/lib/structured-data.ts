/* ─────────────────────────────────────────────
   ANC Events — Structured Data (JSON-LD)
   ───────────────────────────────────────────── */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ancevents.in";
const sitePhone = process.env.NEXT_PUBLIC_PHONE || "+91 98250 00000";
const siteEmail = process.env.NEXT_PUBLIC_EMAIL || "contact@ancevents.in";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ANC Events",
    legalName: "ANC Events Atelier",
    url: siteUrl,
    logo: `${siteUrl}/images/placeholder-wedding-1.jpg`,
    description:
      "ANC Events creates destination weddings and bespoke celebrations through thoughtful planning, distinctive design, guest experiences, and seamless execution. Based in Bodakdev, Ahmedabad, Gujarat.",
    telephone: sitePhone,
    email: siteEmail,
    founders: [
      {
        "@type": "Person",
        name: "Ashish Nahata",
        jobTitle: "Founder & Director of Production",
      },
      {
        "@type": "Person",
        name: "Anushka Nahata",
        jobTitle: "Founder & Director of Design & Experience",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bodakdev",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380054",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: sitePhone,
        contactType: "customer service",
        areaServed: ["IN", "AE", "US", "GB", "TH"],
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "Place",
        name: "Rajasthan, Gujarat, Goa, Kerala, Pan-India & Worldwide",
      },
    ],
    sameAs: [
      "https://www.instagram.com/ancevents",
      "https://www.linkedin.com/company/anc-events",
      "https://www.pinterest.com/ancevents",
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EventPlanner",
    "@id": `${siteUrl}/#atelier`,
    name: "ANC Events — Destination Weddings & Bespoke Celebrations",
    url: siteUrl,
    image: `${siteUrl}/images/placeholder-wedding-1.jpg`,
    telephone: sitePhone,
    email: siteEmail,
    description:
      "Premier luxury destination wedding planner and bespoke event atelier based in Bodakdev, Ahmedabad, producing evocative celebrations across Udaipur, Jaipur, Jodhpur, Goa, and Gujarat.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bodakdev",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380054",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.0338,
      longitude: 72.507,
    },
    priceRange: "$$$$",
    currenciesAccepted: "INR, USD, EUR, GBP, AED",
    paymentAccepted: "Bank Transfer, Cheque, Wire",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ANC Events",
    url: siteUrl,
    description:
      "ANC Events | Destination Weddings & Bespoke Celebrations in Ahmedabad, Udaipur, Jaipur & Goa",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/work?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

export function articleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  author,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${siteUrl}${url}`,
    image,
    datePublished,
    author: {
      "@type": "Organization",
      name: author,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "ANC Events",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/placeholder-wedding-1.jpg`,
      },
    },
  };
}

export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteUrl}${url}`,
    provider: {
      "@type": "Organization",
      name: "ANC Events",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: "Luxury Destination Event Planning & Design",
  };
}

export function eventCreativeWorkSchema({
  name,
  description,
  location,
  image,
  url,
}: {
  name: string;
  description: string;
  location: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    image,
    url: `${siteUrl}${url}`,
    creator: {
      "@type": "Organization",
      name: "ANC Events",
      url: siteUrl,
    },
    contentLocation: {
      "@type": "Place",
      name: location,
    },
  };
}
