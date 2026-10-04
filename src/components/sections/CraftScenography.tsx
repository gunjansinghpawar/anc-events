"use client";

/* ─────────────────────────────────────────────
   Craft Scenography — Materiality & The Scenographic Arts
   
   - Interactive exploration of the 4 core crafts
   - Botanical architecture, bespoke mandaps, lighting & table design
   - Material palettes and atelier design philosophies
   ───────────────────────────────────────────── */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";

const craftPillars = [
  {
    id: "mandap",
    label: "01. Architectural Mandaps",
    title: "Sanctums Sculpted for the Sacred Fire",
    description:
      "A mandap must neither overwhelm the ceremony nor feel like a generic catalogue box. We conceive them as architectural pavilions—engineered with proportion, open horizons, and sightlines so every elder and guest witnesses the vows uninterrupted.",
    materials: ["Hand-Carved Sandstone", "Antiqued Brass Latticework", "Raw Ivory Silk", "Reflecting Water Basins"],
    quote: "Framing sacred rituals within structural serenity.",
    image: "/images/placeholder-wedding-1.jpg",
  },
  {
    id: "flora",
    label: "02. Botanical Architecture",
    title: "Living Sculptures that Breathe with the Landscape",
    description:
      "We avoid artificial foam masses and suffocating floral walls. Instead, our botanical practice sculpts organic branches, scented native mogra, cascading tuberoses, and regional flora that appear as if they grew naturally out of the palace courtyard.",
    materials: ["Madurai Jasmine & Mogra", "Ecuadorian Garden Roses", "Wild Olive Branches", "Sculpted Terracotta Urns"],
    quote: "Creating scents and silhouettes that linger for decades.",
    image: "/images/placeholder-wedding-2.jpg",
  },
  {
    id: "lighting",
    label: "03. Lighting & Acoustics",
    title: "The Subtle Shift from Twilight to Nocturne",
    description:
      "Atmosphere is painted through light. We choreograph the transition from radiant sunset ceremonies to intimate candlelit feasts, layering thousands of flickering brass diyas, warm twilight washes, and invisible acoustic distribution.",
    materials: ["Handcrafted Brass Oil Diyas", "Hidden Low-Voltage Washes", "Acoustic Tuning Baffles", "Faceted Lanterns"],
    quote: "Illuminating faces with warmth rather than harsh spectacle.",
    image: "/images/placeholder-wedding-3.jpg",
  },
  {
    id: "tables",
    label: "04. Table Scenography",
    title: "Sensory Banquets of Heritage & Intimacy",
    description:
      "A banquet should invite conversation that lasts for hours. We direct every element of table scenography: hand-woven Gujarati linens, heirloom silver charger plates, custom calligraphed menus, and unhurried culinary service.",
    materials: ["Block-Printed Heritage Linens", "Hammered Silverware", "Belgian Cut Crystal", "Botanical Place Cards"],
    quote: "Transforming dinner into a cherished sensory ritual.",
    image: "/images/placeholder-wedding-1.jpg",
  },
];

export default function CraftScenography() {
  const [activeTab, setActiveTab] = useState(0);
  const currentCraft = craftPillars[activeTab];

  return (
    <section className="section-padding bg-cream border-t border-sand" aria-labelledby="craft-heading">
      <div className="container-editorial">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-bronze" />
              <p className="label tracking-[0.2em]">07 — The Scenographic Arts</p>
            </div>
            <h2 id="craft-heading" className="display-lg text-charcoal font-light max-w-2xl">
              Materiality, light &amp; the architecture of emotion
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <Link href="/services/event-design" className="editorial-link text-[10px] tracking-[0.2em] font-medium">
              Explore Event Scenography &rarr;
            </Link>
          </SectionReveal>
        </div>

        {/* Interactive Craft Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-8 sm:mb-12">
          {craftPillars.map((craft, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={craft.id}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-3 sm:p-4 md:p-5 border transition-all duration-300 rounded-[2px] cursor-pointer ${
                  isActive
                    ? "bg-ivory border-charcoal shadow-sm"
                    : "bg-ivory/50 border-sand hover:border-charcoal/40 hover:bg-ivory"
                }`}
              >
                <span
                  className={`text-[8.5px] sm:text-[9px] uppercase tracking-[0.2em] font-medium block mb-1 sm:mb-1.5 transition-colors ${
                    isActive ? "text-bronze" : "text-stone"
                  }`}
                >
                  Pillar 0{idx + 1}
                </span>
                <span
                  className={`font-display text-sm sm:text-base md:text-lg block transition-colors leading-tight ${
                    isActive ? "text-charcoal font-normal" : "text-warm-gray"
                  }`}
                >
                  {craft.label.split(". ")[1]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Craft Editorial Display */}
        <div className="bg-ivory border border-sand p-6 sm:p-10 md:p-14 rounded-[2px] shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCraft.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Text & Materials Breakdown */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[10px] uppercase tracking-[0.22em] text-bronze font-medium">
                  {currentCraft.label}
                </span>

                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-charcoal font-light leading-snug">
                  {currentCraft.title}
                </h3>

                <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                  {currentCraft.description}
                </p>

                {/* Materials Used Grid */}
                <div className="pt-6 border-t border-sand/80">
                  <span className="label-sm text-stone block mb-3">
                    Signature Materiality &amp; Tactile Mediums
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentCraft.materials.map((mat) => (
                      <span
                        key={mat}
                        className="text-[10px] uppercase tracking-[0.14em] px-3 py-1.5 bg-cream border border-sand/70 text-charcoal font-medium rounded-[2px]"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <blockquote className="font-display text-lg text-warm-gray italic pl-4 border-l border-bronze">
                    &ldquo;{currentCraft.quote}&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* Supporting Scenography Photograph */}
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] relative overflow-hidden bg-sand rounded-[2px] shadow-md group">
                  <Image
                    src={currentCraft.image}
                    alt={currentCraft.title}
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-deep/15" />
                  <div className="absolute bottom-4 left-4 bg-deep/80 backdrop-blur-xs text-ivory text-[9px] tracking-[0.2em] uppercase px-3 py-1 font-medium">
                    Atelier Specification
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
