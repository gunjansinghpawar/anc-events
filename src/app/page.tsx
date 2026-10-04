import type { Metadata } from "next";
import { generateMetadata as getSeoMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/structured-data";
import { advisories } from "@/data/faqs";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import SignatureWork from "@/components/sections/SignatureWork";
import AtelierLeadership from "@/components/sections/AtelierLeadership";
import Philosophy from "@/components/sections/Philosophy";
import ServicesOverview from "@/components/sections/ServicesOverview";
import CraftScenography from "@/components/sections/CraftScenography";
import TheAncApproach from "@/components/sections/TheAncApproach";
import DestinationsSpotlight from "@/components/sections/DestinationsSpotlight";
import ClientReflections from "@/components/sections/ClientReflections";
import AdvisoryFAQ from "@/components/sections/AdvisoryFAQ";
import JournalHighlights from "@/components/sections/JournalHighlights";
import ConsultationCTA from "@/components/sections/ConsultationCTA";

export const metadata: Metadata = getSeoMetadata({
  title: "ANC Events — Destination Weddings & Bespoke Events | Bodakdev, Ahmedabad",
  description:
    "Architectural destination wedding planning and bespoke celebrations. Based in Bodakdev, Ahmedabad, producing evocative weddings across Udaipur, Jaipur, Jodhpur, Goa, and Gujarat.",
  path: "",
});

export default function Home() {
  return (
    <>
      {/* Schema.org FAQPage Structured Data for Rich Search Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(advisories)),
        }}
      />

      {/* 01 — HERO (Cinematic editorial presentation with subtle zoom & dual CTAs) */}
      <Hero />

      {/* 02 — MANIFESTO & INTRODUCTION (Director's note, layered composition, credo bar) */}
      <Introduction />

      {/* 03 — SIGNATURE PORTFOLIO (Interactive category filter, magazine layout, case study links) */}
      <SignatureWork />

      {/* 04 — CREATIVE LEADERSHIP & DISTINCTION (Ashish & Anushka Nahata + distinction ledger) */}
      <AtelierLeadership />

      {/* 05 — STUDIO ETHOS (Architectural dark chamber with 4 crosshair quadrants) */}
      <Philosophy />

      {/* 06 — CAPABILITIES & SCOPE (Architectural numbered directory ledger with hover highlights) */}
      <ServicesOverview />

      {/* 07 — THE SCENOGRAPHIC ARTS (Interactive materiality blueprint: mandaps, botanicals, lighting) */}
      <CraftScenography />

      {/* 08 — THE ANC METHODOLOGY (5-Phase connected journey timeline) */}
      <TheAncApproach />

      {/* 09 — DESTINATIONS MONOGRAPH (Asymmetric regional showcases across India) */}
      <DestinationsSpotlight />

      {/* 10 — WORDS OF REFLECTION (Client & family testimonials with sleek carousel controls) */}
      <ClientReflections />

      {/* 11 — PRIVATE ADVISORY & FAQS (Split layout: sticky Advisory Desk + numbered Q&A ledger) */}
      <AdvisoryFAQ />

      {/* 12 — THE JOURNAL (Tripartite editorial monographs on craft & celebration) */}
      <JournalHighlights />

      {/* 13 — PRIVATE CONSULTATION (Grand framed nocturne card with gold hairline border) */}
      <ConsultationCTA />
    </>
  );
}
