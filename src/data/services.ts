/* ─────────────────────────────────────────────
   ANC Events — Services Data
   ───────────────────────────────────────────── */

import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "svc-001",
    slug: "destination-weddings",
    title: "Destination Weddings",
    subtitle: "Celebrations that honour both place and people",
    description:
      "We plan and produce destination weddings across India and beyond — transforming extraordinary locations into deeply personal celebrations. From venue selection and guest logistics to design, hospitality, and on-ground coordination, every element is managed with precision and sensitivity to the destination's character.",
    philosophy:
      "A destination wedding is more than a change of scenery. It's an invitation to experience a place together — its light, its textures, its rhythms. We design celebrations that belong to their setting, creating experiences that could only happen in that exact place, at that exact moment.",
    whatWeHandle: [
      "Destination scouting & venue selection",
      "Complete wedding planning & production",
      "Travel & logistics management",
      "Guest accommodation & hospitality",
      "Local vendor curation & coordination",
      "Décor & floral design",
      "Entertainment programming",
      "Food & beverage coordination",
      "On-site event management",
      "Multi-day event orchestration",
    ],
    process: [
      { step: "Discover", description: "Understanding your vision, preferences, and the kind of experience you want to create for your guests." },
      { step: "Scout", description: "Identifying and visiting potential destinations and venues that align with your celebration's character." },
      { step: "Concept", description: "Developing the visual and experiential direction for every event within the wedding." },
      { step: "Curate", description: "Assembling the finest local and national talent — from décor artisans to entertainment and culinary teams." },
      { step: "Coordinate", description: "Managing every logistical detail: travel, accommodation, schedules, and vendor timelines." },
      { step: "Deliver", description: "Executing a seamless celebration where guests experience only the beauty, never the complexity." },
    ],
    coverImage: {
      src: "/images/placeholder-wedding-1.jpg",
      alt: "Destination wedding mandap overlooking a lake",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    relatedProjects: ["a-celebration-by-the-lake"],
  },
  {
    id: "svc-002",
    slug: "wedding-planning",
    title: "Wedding Planning",
    subtitle: "Every detail, considered",
    description:
      "Full-service wedding planning for celebrations of every scale. We manage the entire planning journey — from initial concept through to the last guest's farewell — ensuring that every decision is intentional and every moment is seamless.",
    philosophy:
      "Planning a wedding is not project management. It is the careful orchestration of emotion, logistics, creativity, and hospitality. We treat every wedding as a unique narrative, building each element around the people at its centre.",
    whatWeHandle: [
      "Timeline & budget management",
      "Vendor selection & coordination",
      "Design direction & décor",
      "Ceremony & reception planning",
      "Guest list management",
      "Invitation & stationery coordination",
      "Day-of coordination & management",
      "Multi-function event planning",
      "Pre-wedding events",
      "Post-wedding arrangements",
    ],
    coverImage: {
      src: "/images/placeholder-wedding-2.jpg",
      alt: "Elegant wedding planning details",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    relatedProjects: [],
  },
  {
    id: "svc-003",
    slug: "bespoke-events",
    title: "Bespoke Events",
    subtitle: "Beyond the expected",
    description:
      "For celebrations and occasions that don't follow a template. From milestone birthdays and anniversary celebrations to brand experiences and private gatherings, we design events that are entirely shaped by their purpose and their people.",
    philosophy:
      "Every event begins with a question: What should this feel like? The answer shapes everything — the space, the sequence, the sensory details, the moments of surprise. We create experiences that are remembered not for their grandeur, but for how they made people feel.",
    whatWeHandle: [
      "Concept development & creative direction",
      "Venue selection & transformation",
      "Décor, floral & installation design",
      "Entertainment & performance curation",
      "Food & beverage programming",
      "Guest experience design",
      "Production & logistics",
      "On-site management",
    ],
    coverImage: {
      src: "/images/placeholder-wedding-3.jpg",
      alt: "Bespoke celebration setting with curated design",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    relatedProjects: ["a-bespoke-corporate-evening"],
  },
  {
    id: "svc-004",
    slug: "event-design",
    title: "Event Design",
    subtitle: "The art of atmosphere",
    description:
      "Our design practice encompasses concept development, spatial design, décor curation, floral installations, lighting design, staging, and every visual element that shapes the guest experience. We create environments that tell stories.",
    whatWeHandle: [
      "Concept & mood development",
      "Spatial & layout design",
      "Décor curation & sourcing",
      "Floral design & installations",
      "Lighting design",
      "Stage & mandap design",
      "Entrance design",
      "Table styling & linen selection",
      "Signage & stationery",
      "Installation art",
    ],
    coverImage: {
      src: "/images/placeholder-wedding-1.jpg",
      alt: "Event design and décor installation",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    relatedProjects: [],
  },
  {
    id: "svc-005",
    slug: "decor-floral",
    title: "Décor & Floral",
    subtitle: "Botanical architecture with intention",
    description:
      "Our floral and décor practice transforms spaces through considered material choices, artisanal craftsmanship, and a design philosophy that values authenticity over excess. We create environments that feel both extraordinary and inevitable.",
    whatWeHandle: [
      "Floral architecture & installations",
      "Mandap & canopy design",
      "Tablescapes & linen styling",
      "Bespoke entrance structures",
      "Artisan lighting & illumination",
      "Trousseau packaging & styling",
      "Custom stage fabrication",
      "Home ceremonial décor",
    ],
    coverImage: {
      src: "/images/placeholder-wedding-2.jpg",
      alt: "Floral installation and décor design",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    relatedProjects: [],
  },
  {
    id: "svc-006",
    slug: "entertainment",
    title: "Entertainment",
    subtitle: "Performances that move people",
    description:
      "We curate entertainment that elevates the celebration — from live musicians and performing artists to choreographed sequences and immersive experiences. Every performance is selected to complement the event's character.",
    whatWeHandle: [
      "Entertainment concept & programming",
      "Artist & performer sourcing",
      "Live music curation",
      "DJ & sound design",
      "Choreography & performance direction",
      "Interactive experiences",
      "Technical production",
      "Sound & lighting coordination",
    ],
    coverImage: {
      src: "/images/placeholder-wedding-1.jpg",
      alt: "Live entertainment at a celebration",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    relatedProjects: [],
  },
  {
    id: "svc-007",
    slug: "guest-experience",
    title: "Guest Experience",
    subtitle: "Hospitality at every touchpoint",
    description:
      "From RSVP management and accommodation coordination to welcome experiences and farewell gestures, we ensure every guest feels personally cared for throughout the celebration.",
    whatWeHandle: [
      "RSVP & digital guest list management",
      "Welcome hampers & bespoke gift design",
      "Personalized room touchpoints",
      "Guest transit & itinerary coordination",
      "Dietary & accessibility attentiveness",
      "Dedicated family concierges",
      "Luggage & check-in handling",
      "Farewell keepsakes",
    ],
    coverImage: {
      src: "/images/placeholder-wedding-3.jpg",
      alt: "Guest welcome experience",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    relatedProjects: [],
  },
  {
    id: "svc-008",
    slug: "travel-logistics",
    title: "Travel & Logistics",
    subtitle: "Seamless journeys, effortless arrivals",
    description:
      "For destination events, we handle every aspect of travel, private charters, fleet movement, and hotel takeovers — ensuring that your guests' experience begins the moment they depart home.",
    whatWeHandle: [
      "Private charter & commercial flight coordination",
      "Airport tarmac & reception concierges",
      "Dedicated luxury fleet logistics",
      "Hotel buyout & room block management",
      "Local excursion & leisure programming",
      "Cross-city luggage transit",
      "24/7 command center logistics",
      "Emergency & weather contingencies",
    ],
    coverImage: {
      src: "/images/placeholder-wedding-2.jpg",
      alt: "Destination management and guest logistics",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    relatedProjects: [],
  },
  {
    id: "svc-009",
    slug: "hospitality",
    title: "Hospitality",
    subtitle: "The discreet art of gracious care",
    description:
      "In luxury celebrations, hospitality is not an operational task; it is the emotional core of the gathering. We orchestrate discrete VIP stewardship, culinary service flow, and unhurried comfort.",
    whatWeHandle: [
      "VIP & dignitary protocol management",
      "Culinary service choreography",
      "Dedicated family shadows & assistants",
      "Pre-event hospitality lounges",
      "Bespoke dining & bar curation",
      "Nightly turndown surprises",
      "24-hour guest assistance desks",
    ],
    coverImage: {
      src: "/images/placeholder-wedding-3.jpg",
      alt: "Bespoke hospitality service",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    relatedProjects: [],
  },
];

/* ── Content API ─────────────────────────── */

export function getAllServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  // Support aliases for backward compatibility
  const normalizedSlug =
    slug === "decor"
      ? "decor-floral"
      : slug === "guest-management"
      ? "guest-experience"
      : slug === "destination-management"
      ? "travel-logistics"
      : slug;

  return services.find((s) => s.slug === normalizedSlug);
}
