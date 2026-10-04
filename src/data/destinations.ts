/* ─────────────────────────────────────────────
   ANC Events — Destinations Data
   ───────────────────────────────────────────── */

import { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    id: "dest-001",
    slug: "udaipur",
    name: "Udaipur",
    tagline: "The City of Lakes",
    description:
      "Udaipur offers an unparalleled setting for destination weddings — where Rajput architecture meets shimmering lakes, and heritage properties provide a backdrop of timeless grandeur. Its intimate scale and romantic atmosphere make it one of India's most sought-after wedding destinations.",
    whyThisDestination:
      "Udaipur's unique combination of lakeside settings, heritage palace hotels, and intimate city scale creates an atmosphere that few destinations can match. The city's architecture provides a natural stage for celebrations, while its relatively compact geography makes multi-venue events practical and guest-friendly.",
    venuePossibilities:
      "Heritage palace hotels, lakeside properties, courtyard venues, rooftop spaces with panoramic lake views, and private estate celebrations.",
    eventFormats: [
      "Multi-day destination weddings",
      "Intimate celebrations",
      "Heritage property takeovers",
      "Lakeside ceremonies",
      "Royal-themed receptions",
    ],
    coverImage: {
      src: "/images/placeholder-wedding-1.jpg",
      alt: "Udaipur lakeside venue for destination weddings",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    relatedProjects: ["a-celebration-by-the-lake"],
    published: true,
  },
  {
    id: "dest-002",
    slug: "jaipur",
    name: "Jaipur",
    tagline: "The Pink City",
    description:
      "Jaipur combines royal heritage with modern luxury. Its fort hotels, palace venues, and sprawling estate properties offer some of India's most dramatic celebration settings — spaces where centuries of Rajasthani craftsmanship meet contemporary hospitality.",
    whyThisDestination:
      "Jaipur's scale and infrastructure support celebrations of any size, while its architectural heritage provides a visual richness that elevates every event. The city's proximity to Delhi and strong flight connectivity make it accessible for guests from across India and internationally.",
    eventFormats: [
      "Grand destination weddings",
      "Fort and palace celebrations",
      "Large-scale receptions",
      "Pre-wedding events",
      "Cultural immersion experiences",
    ],
    coverImage: {
      src: "/images/placeholder-wedding-2.jpg",
      alt: "Jaipur palace venue for celebrations",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    relatedProjects: ["an-evening-of-art-and-celebration"],
    published: true,
  },
  {
    id: "dest-003",
    slug: "goa",
    name: "Goa",
    tagline: "Where the Sea Meets Celebration",
    description:
      "Goa offers a relaxed, resort-style destination wedding experience — where beachfront venues, tropical landscapes, and a laid-back atmosphere create celebrations that feel like extended vacations for your guests.",
    whyThisDestination:
      "Goa's coastal setting provides a naturally beautiful canvas that requires minimal transformation. Its resort infrastructure, excellent food culture, and warm climate create an environment where guests can truly relax and enjoy the celebration over multiple days.",
    eventFormats: [
      "Beach weddings",
      "Resort celebrations",
      "Pool-side events",
      "Tropical garden ceremonies",
      "Sunset receptions",
    ],
    coverImage: {
      src: "/images/placeholder-wedding-3.jpg",
      alt: "Goa beachfront wedding setting",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    relatedProjects: [],
    published: true,
  },
  {
    id: "dest-004",
    slug: "jodhpur",
    name: "Jodhpur",
    tagline: "The Blue City",
    description:
      "Jodhpur's dramatic forts, blue-washed streets, and vast desert landscapes create a wedding destination unlike any other — a place where celebrations feel cinematic in scale yet intimate in character.",
    whyThisDestination:
      "Jodhpur offers a visual drama that photographs beautifully and creates lasting impressions. Its fort venues provide extraordinary settings for ceremonies and receptions, while the surrounding desert landscape opens possibilities for unique pre-wedding experiences.",
    eventFormats: [
      "Fort weddings",
      "Desert celebrations",
      "Heritage venue events",
      "Multi-day destination experiences",
    ],
    coverImage: {
      src: "/images/placeholder-wedding-1.jpg",
      alt: "Jodhpur fort venue for destination wedding",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    relatedProjects: [],
    published: true,
  },
  {
    id: "dest-005",
    slug: "ahmedabad",
    name: "Ahmedabad",
    tagline: "Where Heritage Meets Home",
    description:
      "As our home city, Ahmedabad holds a special place in our work. Its blend of heritage architecture, modern venues, and rich cultural traditions makes it a compelling setting for weddings and celebrations of every scale.",
    whyThisDestination:
      "Ahmedabad's diverse venue landscape — from heritage havelis and club properties to modern five-star ballrooms and private farmhouses — provides options for celebrations ranging from intimate gatherings to grand affairs. Our deep local knowledge ensures seamless execution.",
    eventFormats: [
      "City weddings",
      "Club & hotel celebrations",
      "Heritage venue events",
      "Home functions",
      "Large-scale receptions",
    ],
    coverImage: {
      src: "/images/placeholder-wedding-2.jpg",
      alt: "Ahmedabad wedding venue",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    relatedProjects: ["the-grand-reception", "intimate-garden-engagement"],
    published: true,
  },
];

/* ── Content API ─────────────────────────── */

export function getAllDestinations(): Destination[] {
  return destinations.filter((d) => d.published);
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug && d.published);
}
