# ANC Events — Destination Weddings & Bespoke Events

> Production-ready, editorial-grade digital experience for **ANC Events**, a destination wedding and bespoke events house based in Bodakdev, Ahmedabad, Gujarat.

---

## ✦ Brand & Design Philosophy

This digital experience is built to international luxury design standards:

* **Editorial & Cinematic**: Photography-first layout, generous whitespace, architectural proportion, and refined typographic pacing.
* **Palette**: Warm ivory (`#FAF8F5`), soft cream (`#F5F0EB`), tactile sand (`#E8E0D8`), stone (`#B8AFA6`), warm gray (`#8A827A`), deep charcoal (`#2C2825`), and metallic bronze accent (`#9C7B56`).
* **Typography**:
  * Display: *Cormorant Garamond* (light, elegant serif with regal poise)
  * Body: *Inter* (crisp, modern sans-serif with high legibility)
* **Philosophy**: "Intention over excess" — curated restraint, discreet luxury, and flawless logistical orchestration.

---

## ✦ Site Architecture & Routes

| Route | Description |
|---|---|
| `/` | Homepage: Cinematic hero, manifesto, signature work, services preview, destinations spotlight, philosophy, client reflections, journal preview, consultation CTA |
| `/portfolio` | Selected Works: Filterable by Destination Weddings, Sangeets, Receptions, Engagements, Corporate |
| `/portfolio/[slug]` | Case Study: In-depth narrative, scenography details, architectural execution, gallery, and vendor credits |
| `/services` | Comprehensive practice overview: All 8 core disciplines + 5-step ANC methodology |
| `/services/[slug]` | Service Deep-Dive: Specific scope, philosophy, deliverables checklist, process, and related projects |
| `/destinations` | Curated destination hubs: Udaipur, Jaipur, Goa, Jodhpur, Ahmedabad |
| `/destinations/[slug]` | Destination Guide: Why this destination, venue styles, celebration formats, and portfolio tie-ins |
| `/about` | Studio story, founders Ashish Nahata & Anushka Nahata, house ethos, guiding principles |
| `/journal` | Editorial essays on destination weddings, design, hospitality, and behind-the-scenes craft |
| `/journal/[slug]` | Long-form editorial article layout with reading time, structured data, and related stories |
| `/contact` | Bodakdev studio coordinate, direct communication lines, appointment protocol |
| `/enquire` | Bespoke commission enquiry form with instant WhatsApp consultation trigger |
| `/privacy` | Privacy policy & client discretion / Non-Disclosure Agreement standards |
| `/terms` | Terms of commission and intellectual property rights |
| `/sitemap.xml` | Dynamically generated SEO sitemap covering all static & dynamic routes |
| `/robots.txt` | Crawler management rules |

---

## ✦ Tech Stack

* **Framework**: Next.js 16 (App Router + Turbopack)
* **Styling**: Tailwind CSS v4 with custom `@theme` tokens
* **Typography**: Next.js Google Fonts (`Cormorant_Garamond` + `Inter`)
* **Motion**: Framer Motion scroll and hover transitions
* **SEO**: OpenGraph metadata, Twitter cards, dynamic canonicals, JSON-LD (`Organization`, `LocalBusiness`, `Service`, `Article`)

---

## ✦ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables** in `.env.local`:
   ```bash
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME="ANC Events"
   NEXT_PUBLIC_PHONE="+91 98250 00000"
   NEXT_PUBLIC_WHATSAPP="919825000000"
   NEXT_PUBLIC_EMAIL="contact@ancevents.in"
   NEXT_PUBLIC_ADDRESS="Bodakdev, Ahmedabad, Gujarat, India"
   NEXT_PUBLIC_INSTAGRAM_URL="https://instagram.com/ancevents"
   ```

3. **Start local dev server**:
   ```bash
   npm run dev
   ```

4. **Production Build**:
   ```bash
   npm run build
   ```

---

## ✦ Content Layer

Content lives in `src/data/`:
* `projects.ts` — Portfolio case studies
* `services.ts` — Offerings & scope checklists
* `destinations.ts` — Regional destination guides
* `journal.ts` — Editorial stories & essays
* `team.ts` — Leadership profiles
* `navigation.ts` — Header & footer menu hierarchy

Designed to seamlessly swap with a headless CMS (Sanity, Strapi, or Contentful) when desired.

---

© ANC Events. All rights reserved. Bodakdev, Ahmedabad, Gujarat, India.
