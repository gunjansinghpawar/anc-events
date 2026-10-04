/* ─────────────────────────────────────────────
   ANC Events — Type Definitions
   ───────────────────────────────────────────── */

/* ── Portfolio / Projects ─────────────────── */

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}

export type EventCategory =
  | "destination-wedding"
  | "wedding"
  | "engagement"
  | "sangeet"
  | "reception"
  | "bespoke-event"
  | "corporate"
  | "decor"
  | "experience";

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: EventCategory;
  categoryLabel: string;
  location: string;
  venue?: string;
  guestCount?: string;
  eventDate?: string;
  year: string;
  description: string;
  concept?: string;
  design?: string;
  experience?: string;
  details?: string;
  celebration?: string;
  coverImage: ProjectImage;
  gallery: ProjectImage[];
  videos: string[];
  services: string[];
  credits: ProjectCredit[];
  featured: boolean;
  published: boolean;
  seoTitle?: string;
  seoDescription?: string;
  createdAt: string;
  updatedAt: string;
}

/* ── Services ─────────────────────────────── */

export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  philosophy?: string;
  whatWeHandle?: string[];
  process?: { step: string; description: string }[];
  coverImage: ProjectImage;
  gallery: ProjectImage[];
  relatedProjects: string[];
  seoTitle?: string;
  seoDescription?: string;
}

/* ── Journal ──────────────────────────────── */

export type JournalCategory =
  | "weddings"
  | "destinations"
  | "design"
  | "entertainment"
  | "hospitality"
  | "behind-the-scenes"
  | "event-trends"
  | "anc-stories";

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: JournalCategory;
  categoryLabel: string;
  date: string;
  readingTime: string;
  author: string;
  coverImage: ProjectImage;
  content: string;
  relatedProjects: string[];
  relatedArticles: string[];
  seoTitle?: string;
  seoDescription?: string;
  published: boolean;
}

/* ── Destinations ─────────────────────────── */

export interface Destination {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  whyThisDestination: string;
  venuePossibilities?: string;
  eventFormats?: string[];
  ancApproach?: string;
  coverImage: ProjectImage;
  gallery: ProjectImage[];
  relatedProjects: string[];
  seoTitle?: string;
  seoDescription?: string;
  published: boolean;
}

/* ── Team ─────────────────────────────────── */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience?: string;
  portrait?: ProjectImage;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
  };
}

/* ── Testimonials ─────────────────────────── */

export interface Testimonial {
  id: string;
  clientName: string;
  eventType: string;
  location?: string;
  year?: string;
  quote: string;
  approved: boolean;
}

/* ── Navigation ───────────────────────────── */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
  megaPreview?: {
    image: string;
    title: string;
    subtitle: string;
    href: string;
  };
}

/* ── Form ─────────────────────────────────── */

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  destination: string;
  city: string;
  budget: string;
  services: string[];
  howDidYouHear: string;
  message: string;
}
