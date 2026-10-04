/* ─────────────────────────────────────────────
   ANC Events — Journal Data
   ───────────────────────────────────────────── */

import { JournalPost } from "@/types";

export const journalPosts: JournalPost[] = [
  {
    id: "journal-001",
    slug: "how-we-design-a-destination-wedding",
    title: "How We Design a Destination Wedding From the Ground Up",
    excerpt:
      "From the first conversation to the final farewell, the journey of creating a destination wedding involves vision, logistics, and an unwavering attention to the details that matter most.",
    category: "weddings",
    categoryLabel: "Weddings",
    date: "2024-06-15",
    readingTime: "8 min read",
    author: "ANC Events",
    coverImage: {
      src: "/images/placeholder-wedding-1.jpg",
      alt: "Destination wedding planning process",
      width: 1600,
      height: 1067,
    },
    content: `
## The Beginning of Every Destination Wedding

Every destination wedding begins long before the venue is selected or the décor is designed. It begins with a conversation — understanding who you are as a couple, what this celebration means to you, and the kind of experience you want to create for the people you love.

## Finding the Right Place

A destination is not simply a backdrop. It becomes part of the celebration's identity. The light, the architecture, the landscape, the local culture — all of these elements influence the design, the atmosphere, and ultimately, the memories that your guests carry home.

## The Design Process

Once the destination is confirmed, the design process begins in earnest. We develop a visual direction that responds to both the location and the couple — mood boards, material palettes, spatial concepts, and lighting studies that evolve through multiple rounds of refinement.

## Logistics as Craft

The logistics of a destination wedding are immense. Guest travel, accommodation, transportation, dietary requirements, accessibility, weather contingencies — each of these elements requires careful planning and coordination. We treat logistics not as an administrative task, but as an essential part of the guest experience.

## The Execution

On the days of the celebration, our team manages every moving part — from the first flower installation at dawn to the final song at midnight. The goal is always the same: for every moment to feel effortless, inevitable, and deeply personal.
    `,
    relatedProjects: ["a-celebration-by-the-lake"],
    relatedArticles: ["choosing-the-right-destination"],
    published: true,
  },
  {
    id: "journal-002",
    slug: "behind-the-scenes-of-a-bespoke-celebration",
    title: "Behind the Scenes of a Bespoke Celebration",
    excerpt:
      "What goes into creating an event that feels entirely its own? A look at the process, the decisions, and the details that define a bespoke celebration.",
    category: "behind-the-scenes",
    categoryLabel: "Behind the Scenes",
    date: "2024-04-20",
    readingTime: "6 min read",
    author: "ANC Events",
    coverImage: {
      src: "/images/placeholder-wedding-2.jpg",
      alt: "Behind the scenes event production",
      width: 1600,
      height: 1067,
    },
    content: `
## The Invisible Architecture

The most successful events are the ones where the effort is invisible. Where guests move through a beautifully orchestrated sequence of moments without ever sensing the months of planning, the hundreds of decisions, or the dozens of people working in concert behind every experience.

## Starting With Why

Every bespoke celebration begins with intention. Not "what should the décor look like?" but "what should this evening feel like?" That question shapes everything that follows.

## The Details That Matter

It's not always the grand gestures that people remember. It's the handwritten note waiting at their table. The song that played as they walked in. The scent of jasmine at the entrance. We obsess over these details because they are what transform an event into an experience.
    `,
    relatedProjects: [],
    relatedArticles: [],
    published: true,
  },
  {
    id: "journal-003",
    slug: "choosing-the-right-destination",
    title: "Choosing the Right Destination for Your Wedding",
    excerpt:
      "The destination sets the tone for everything that follows. Here's how to think about choosing the place that will host the most important celebration of your life.",
    category: "destinations",
    categoryLabel: "Destinations",
    date: "2024-03-10",
    readingTime: "7 min read",
    author: "ANC Events",
    coverImage: {
      src: "/images/placeholder-wedding-3.jpg",
      alt: "Indian destination wedding venues",
      width: 1600,
      height: 1067,
    },
    content: `
## Beyond the Instagram Moment

Choosing a wedding destination is not about finding the most photographed venue. It's about finding the place that resonates with your celebration's spirit — a location whose character enhances, rather than competes with, the moments you're creating.

## Key Considerations

When evaluating destinations, we consider accessibility for your guest profile, the quality of available venues, local infrastructure, climate, and the destination's ability to support the scale and style of your celebration.

## India's Destination Landscape

From the lake palaces of Udaipur and the fort hotels of Jaipur to the beachfront properties of Goa and the heritage estates of Jodhpur, India offers an extraordinary range of destination wedding possibilities — each with its own distinct character and practical considerations.
    `,
    relatedProjects: [],
    relatedArticles: ["how-we-design-a-destination-wedding"],
    published: true,
  },
  {
    id: "journal-004",
    slug: "designing-guest-experiences",
    title: "Designing Guest Experiences That People Remember",
    excerpt:
      "A celebration is ultimately measured by how it makes people feel. Here's our approach to designing guest experiences that linger in memory.",
    category: "hospitality",
    categoryLabel: "Hospitality",
    date: "2024-02-05",
    readingTime: "5 min read",
    author: "ANC Events",
    coverImage: {
      src: "/images/placeholder-wedding-1.jpg",
      alt: "Guest experience and hospitality design",
      width: 1600,
      height: 1067,
    },
    content: `
## Hospitality as Design

We think of guest experience not as a category of service, but as a design discipline. Every touchpoint — from the first invitation to the farewell gesture — is an opportunity to communicate care, taste, and intention.

## The Journey, Not Just the Event

A great celebration doesn't begin when the ceremony starts. It begins when the guest first learns about it. The invitation, the travel experience, the arrival, the welcome, the small surprises throughout — these form a continuous narrative.

## Personal at Scale

Even at celebrations with hundreds of guests, there are ways to create personal moments. Curated welcome experiences, thoughtful seating, dietary attentiveness, and small gestures of recognition all contribute to making every guest feel seen.
    `,
    relatedProjects: [],
    relatedArticles: [],
    published: true,
  },
];

/* ── Content API ─────────────────────────── */

export function getAllJournalPosts(): JournalPost[] {
  return journalPosts.filter((p) => p.published);
}

export function getJournalPostBySlug(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug && p.published);
}

export function getJournalPostsByCategory(category: string): JournalPost[] {
  return journalPosts.filter((p) => p.published && p.category === category);
}
