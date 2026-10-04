/* ─────────────────────────────────────────────
   ANC Events — Navigation Data & Mega Menu Structure
   ───────────────────────────────────────────── */

import { NavItem } from "@/types";

export const mainNavigation: NavItem[] = [
  {
    label: "Work",
    href: "/work",
    megaPreview: {
      image: "/images/placeholder-wedding-1.jpg",
      title: "A Celebration by the Lake",
      subtitle: "Udaipur — Lakeside Heritage Wedding",
      href: "/work/a-celebration-by-the-lake",
    },
    children: [
      {
        label: "All Selected Works",
        href: "/work",
        description: "Full editorial archive of curated commissions",
      },
      {
        label: "Destination Weddings",
        href: "/work/destination-weddings",
        description: "Multi-day palatial and coastal celebrations",
      },
      {
        label: "Weddings",
        href: "/work/weddings",
        description: "Grand city receptions and intimate ceremonies",
      },
      {
        label: "Bespoke Events",
        href: "/work/bespoke-events",
        description: "Immersive private milestone celebrations",
      },
      {
        label: "Event Design",
        href: "/work/event-design",
        description: "Architectural scenography & floral structures",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    megaPreview: {
      image: "/images/placeholder-wedding-2.jpg",
      title: "Architectural Scenography",
      subtitle: "Turnkey planning, production & hospitality",
      href: "/services",
    },
    children: [
      {
        label: "Wedding Planning",
        href: "/services/wedding-planning",
        description: "Turnkey production and discrete orchestration",
      },
      {
        label: "Destination Weddings",
        href: "/services/destination-weddings",
        description: "Pan-India and international venue direction",
      },
      {
        label: "Bespoke Events",
        href: "/services/bespoke-events",
        description: "Tailored private milestones & brand galas",
      },
      {
        label: "Event Design",
        href: "/services/event-design",
        description: "Spatial design, lighting & custom structures",
      },
      {
        label: "Décor & Floral",
        href: "/services/decor-floral",
        description: "Botanical architecture and bespoke installations",
      },
      {
        label: "Entertainment",
        href: "/services/entertainment",
        description: "Curated artists, sound design & performances",
      },
      {
        label: "Guest Experience",
        href: "/services/guest-experience",
        description: "Personalized hospitality & welcome touches",
      },
      {
        label: "Travel & Logistics",
        href: "/services/travel-logistics",
        description: "Charter flights, fleet transit & hotel takeovers",
      },
      {
        label: "Hospitality",
        href: "/services/hospitality",
        description: "VIP care, concierges & unhurried transitions",
      },
    ],
  },
  {
    label: "Destinations",
    href: "/destinations",
    megaPreview: {
      image: "/images/placeholder-wedding-3.jpg",
      title: "Royal Settings & Coastal Sanctuaries",
      subtitle: "Udaipur, Jaipur, Goa, Jodhpur, Ahmedabad",
      href: "/destinations",
    },
    children: [
      {
        label: "Udaipur",
        href: "/destinations/udaipur",
        description: "Lakeside palaces & Rajput grandeur",
      },
      {
        label: "Jaipur",
        href: "/destinations/jaipur",
        description: "Fort hotels, heritage estates & royal ballrooms",
      },
      {
        label: "Ahmedabad",
        href: "/destinations/ahmedabad",
        description: "Our atelier base, heritage havelis & luxury clubs",
      },
      {
        label: "Goa",
        href: "/destinations/goa",
        description: "Coastal retreats, beachfront sunsets & lush estates",
      },
      {
        label: "Jodhpur",
        href: "/destinations/jodhpur",
        description: "Fortress splendor & dramatic desert landscapes",
      },
      {
        label: "Other Destinations",
        href: "/destinations",
        description: "Pan-India commissions & international retreats",
      },
    ],
  },
  {
    label: "Journal",
    href: "/journal",
  },
  {
    label: "About",
    href: "/about",
    megaPreview: {
      image: "/images/placeholder-wedding-1.jpg",
      title: "The ANC Standard",
      subtitle: "Founded on intention, discretion & architectural poise",
      href: "/about",
    },
    children: [
      {
        label: "Overview",
        href: "/about",
        description: "Our studio ethos, values & aesthetic philosophy",
      },
      {
        label: "Our Story",
        href: "/about/story",
        description: "Editorial timeline of milestones from 2015 to today",
      },
      {
        label: "Our Approach",
        href: "/about/approach",
        description: "5-step methodology: Discover, Imagine, Curate, Execute, Deliver",
      },
      {
        label: "Our Team",
        href: "/about/team",
        description: "Leadership profiles of Ashish Nahata & Anushka Nahata",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const footerNavigation = {
  primary: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Destinations", href: "/destinations" },
    { label: "Journal", href: "/journal" },
    { label: "About", href: "/about" },
    { label: "Our Story", href: "/about/story" },
    { label: "Our Approach", href: "/about/approach" },
    { label: "Our Team", href: "/about/team" },
    { label: "Contact", href: "/contact" },
    { label: "Enquire", href: "/enquire" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Commission", href: "/terms" },
  ],
};
