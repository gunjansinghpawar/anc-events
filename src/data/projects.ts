/* ─────────────────────────────────────────────
   ANC Events — Project Data (CMS-Ready)
   
   This file serves as the local content layer.
   Replace with CMS API calls (Sanity/Contentful/Strapi)
   when the CMS integration is ready.
   ───────────────────────────────────────────── */

import { Project } from "@/types";

/**
 * Sample projects using placeholder imagery.
 * Replace cover images and galleries with ANC-approved originals.
 * Do NOT use these placeholders in production.
 */
export const projects: Project[] = [
  {
    id: "proj-001",
    slug: "a-celebration-by-the-lake",
    title: "A Celebration by the Lake",
    subtitle: "Where tradition met the water's edge",
    category: "destination-wedding",
    categoryLabel: "Destination Wedding",
    location: "Udaipur, Rajasthan",
    venue: "Lakeside Heritage Property",
    year: "2024",
    description:
      "A three-day destination wedding that wove together family heritage, Rajasthani grandeur, and intimate lakeside ceremonies. Every detail — from the mandap design to the farewell brunch — was conceived to reflect the couple's shared love of art and architecture.",
    concept:
      "Drawing from the couple's appreciation for Rajasthani miniature art, the visual direction layered warm earth tones with gilded accents. Each event within the celebration carried its own distinct atmosphere while remaining part of a cohesive narrative.",
    design:
      "The mandap was designed as an open pavilion framing the lake, adorned with marigold and mogra installations suspended from brass structures. The sangeet venue transformed into an immersive courtyard of light and live performance.",
    experience:
      "Guests arrived to handwritten welcome scrolls at their suites. A curated trail through the property's gardens led to a private pre-wedding dinner. The entire weekend unfolded with intention — unhurried and deeply personal.",
    coverImage: {
      src: "/images/placeholder-wedding-1.jpg",
      alt: "Lakeside mandap with floral installation at sunset",
      width: 1600,
      height: 1067,
    },
    gallery: [
      { src: "/images/placeholder-wedding-1.jpg", alt: "Mandap at sunset", width: 1600, height: 1067 },
      { src: "/images/placeholder-wedding-2.jpg", alt: "Floral installation detail", width: 1067, height: 1600 },
      { src: "/images/placeholder-wedding-3.jpg", alt: "Reception setup", width: 1600, height: 1067 },
    ],
    videos: [],
    services: [
      "Wedding Planning",
      "Destination Management",
      "Décor & Floral Design",
      "Guest Experience",
      "Entertainment",
      "Hospitality",
    ],
    credits: [
      { role: "Planning & Production", name: "ANC Events" },
      { role: "Venue", name: "Heritage Lakeside Property, Udaipur" },
    ],
    featured: true,
    published: true,
    seoTitle: "Destination Wedding in Udaipur | ANC Events",
    seoDescription:
      "A three-day lakeside destination wedding in Udaipur, planned and produced by ANC Events.",
    createdAt: "2024-03-15",
    updatedAt: "2024-03-15",
  },
  {
    id: "proj-002",
    slug: "an-evening-of-art-and-celebration",
    title: "An Evening of Art & Celebration",
    subtitle: "A sangeet designed as an immersive experience",
    category: "sangeet",
    categoryLabel: "Sangeet",
    location: "Jaipur, Rajasthan",
    venue: "Private Estate",
    year: "2024",
    description:
      "What began as a sangeet became a fully immersive evening — blending live art installations, curated performances, and a design language that drew from contemporary Indian art. The event was an experience, not simply a party.",
    concept:
      "The concept centered on 'living art' — creating an environment where the boundary between performance and audience dissolved. Installations responded to the evening's rhythm, evolving as the night progressed.",
    coverImage: {
      src: "/images/placeholder-wedding-2.jpg",
      alt: "Immersive sangeet stage with art installation",
      width: 1600,
      height: 1067,
    },
    gallery: [
      { src: "/images/placeholder-wedding-2.jpg", alt: "Art installation", width: 1600, height: 1067 },
      { src: "/images/placeholder-wedding-3.jpg", alt: "Performance stage", width: 1600, height: 1067 },
    ],
    videos: [],
    services: ["Event Design", "Entertainment", "Décor & Floral Design", "Lighting"],
    credits: [{ role: "Creative Direction & Production", name: "ANC Events" }],
    featured: true,
    published: true,
    seoTitle: "Bespoke Sangeet in Jaipur | ANC Events",
    seoDescription:
      "An immersive sangeet evening in Jaipur combining live art, curated performances, and innovative design by ANC Events.",
    createdAt: "2024-02-10",
    updatedAt: "2024-02-10",
  },
  {
    id: "proj-003",
    slug: "the-grand-reception",
    title: "The Grand Reception",
    subtitle: "Opulence grounded in warmth",
    category: "reception",
    categoryLabel: "Reception",
    location: "Ahmedabad, Gujarat",
    venue: "Five-Star Ballroom",
    year: "2023",
    description:
      "A reception that balanced scale with intimacy. Over 800 guests experienced a seamlessly orchestrated evening where every touchpoint — from the entrance walkway to the dessert tableau — was designed to feel both grand and personal.",
    coverImage: {
      src: "/images/placeholder-wedding-3.jpg",
      alt: "Grand ballroom reception setup with floral centerpieces",
      width: 1600,
      height: 1067,
    },
    gallery: [
      { src: "/images/placeholder-wedding-3.jpg", alt: "Reception hall overview", width: 1600, height: 1067 },
    ],
    videos: [],
    services: ["Event Planning", "Décor", "Entertainment", "Hospitality", "Food & Beverage"],
    credits: [{ role: "Planning & Production", name: "ANC Events" }],
    featured: true,
    published: true,
    seoTitle: "Grand Reception in Ahmedabad | ANC Events",
    seoDescription:
      "A grand reception for 800 guests in Ahmedabad, produced by ANC Events with meticulous attention to every detail.",
    createdAt: "2023-12-20",
    updatedAt: "2023-12-20",
  },
  {
    id: "proj-004",
    slug: "intimate-garden-engagement",
    title: "An Intimate Garden Engagement",
    subtitle: "Simplicity as a statement",
    category: "engagement",
    categoryLabel: "Engagement",
    location: "Ahmedabad, Gujarat",
    year: "2024",
    description:
      "A private garden engagement designed for 120 guests, where restrained elegance and lush greenery created an atmosphere of quiet celebration. The design centered on natural textures — stone, raw silk, and seasonal blooms.",
    coverImage: {
      src: "/images/placeholder-wedding-1.jpg",
      alt: "Garden engagement setup with natural floral arrangements",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    videos: [],
    services: ["Event Planning", "Décor & Floral Design", "Styling"],
    credits: [{ role: "Planning & Design", name: "ANC Events" }],
    featured: false,
    published: true,
    seoTitle: "Intimate Garden Engagement | ANC Events",
    seoDescription:
      "An elegant garden engagement in Ahmedabad by ANC Events.",
    createdAt: "2024-01-05",
    updatedAt: "2024-01-05",
  },
  {
    id: "proj-005",
    slug: "a-bespoke-corporate-evening",
    title: "A Bespoke Corporate Evening",
    subtitle: "Business meets celebration",
    category: "corporate",
    categoryLabel: "Corporate Event",
    location: "Ahmedabad, Gujarat",
    year: "2023",
    description:
      "A sophisticated corporate event that blurred the line between business gathering and curated experience. The evening combined a formal awards ceremony with an immersive dining experience and live entertainment.",
    coverImage: {
      src: "/images/placeholder-wedding-2.jpg",
      alt: "Corporate event stage design",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    videos: [],
    services: ["Event Design", "Production", "Entertainment", "Hospitality"],
    credits: [{ role: "Creative Direction & Production", name: "ANC Events" }],
    featured: false,
    published: true,
    seoTitle: "Bespoke Corporate Event | ANC Events",
    seoDescription:
      "A bespoke corporate evening in Ahmedabad by ANC Events.",
    createdAt: "2023-11-15",
    updatedAt: "2023-11-15",
  },
];

/* ── Content API ─────────────────────────── */

export function getAllProjects(): Project[] {
  return projects.filter((p) => p.published);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.published && p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug && p.published);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.published && p.category === category);
}

export function getRelatedProjects(
  currentSlug: string,
  category: string,
  limit = 3
): Project[] {
  return projects
    .filter(
      (p) =>
        p.published && p.slug !== currentSlug && p.category === category
    )
    .slice(0, limit);
}
