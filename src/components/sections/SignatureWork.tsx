"use client";

/* ─────────────────────────────────────────────
   Signature Work — Interactive Haute-Couture Project Lookbook
   
   - Interactive hero project spotlight with instant thumbnail selector
   - Rich case study metadata (Venue, scale, architectural scope, year)
   - Completely unique lookbook layout with progress indicators
   - Fully responsive: smooth mobile swipeable tabs and touch controls
   ───────────────────────────────────────────── */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { projects } from "@/data/projects";

const filterCategories = [
  { key: "all", label: "All Selected" },
  { key: "destination-wedding", label: "Palatial Destinations" },
  { key: "sangeet", label: "Immersive Sangeets" },
  { key: "reception", label: "Grand Receptions" },
];

export default function SignatureWork() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredProjects =
    activeFilter === "all"
      ? projects.slice(0, 4)
      : projects.filter((p) => p.category === activeFilter);

  // Keep selected index within range of filtered items
  const activeProject = filteredProjects[selectedIndex] || filteredProjects[0] || projects[0];

  const handleFilterChange = (key: string) => {
    setActiveFilter(key);
    setSelectedIndex(0);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section
      className="section-padding bg-cream border-t border-sand"
      aria-labelledby="work-heading"
    >
      <div className="container-editorial">
        {/* Header with Title and Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-bronze" />
              <p className="label tracking-[0.2em]">03 — Signature Portfolio</p>
            </div>
            <h2 id="work-heading" className="display-lg text-charcoal max-w-2xl font-light">
              Selected celebrations
            </h2>
          </SectionReveal>

          {/* Interactive Filter Pills */}
          <SectionReveal delay={0.15}>
            <div className="flex flex-wrap gap-2">
              {filterCategories.map((cat) => {
                const isActive = activeFilter === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => handleFilterChange(cat.key)}
                    className={`text-[9.5px] sm:text-[10px] uppercase tracking-[0.18em] px-3.5 sm:px-4 py-2 border transition-all duration-300 rounded-[2px] cursor-pointer ${
                      isActive
                        ? "bg-charcoal text-ivory border-charcoal shadow-sm"
                        : "bg-transparent text-warm-gray border-sand hover:border-charcoal hover:text-charcoal"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </SectionReveal>
        </div>

        {/* Interactive Spotlight Layout: Giant Feature on Left, Interactive Selector on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Visual Frame (8 Columns) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="bg-ivory border border-sand p-4 sm:p-6 rounded-[2px] shadow-sm"
              >
                {/* Large Panoramic Frame */}
                <Link
                  href={`/work/${activeProject.slug}`}
                  className="block relative aspect-[16/10] overflow-hidden rounded-[2px] group"
                >
                  <Image
                    src={activeProject.coverImage.src}
                    alt={activeProject.coverImage.alt}
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-deep/85 backdrop-blur-xs text-ivory text-[9px] tracking-[0.2em] uppercase px-3 py-1 font-medium">
                    {activeProject.location}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-ivory/95 backdrop-blur-xs text-charcoal text-[9px] tracking-[0.16em] uppercase px-3 py-1.5 font-medium flex items-center gap-1.5 shadow-sm">
                    <span>Explore Case Study</span>
                    <span className="text-bronze">&rarr;</span>
                  </div>
                </Link>

                {/* Case Study Details Banner Below Image */}
                <div className="pt-6 pb-2 px-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-bronze font-medium mb-1.5">
                      <span>{activeProject.categoryLabel}</span>
                      <span>&bull;</span>
                      <span>{activeProject.year}</span>
                      {activeProject.guestCount && (
                        <>
                          <span>&bull;</span>
                          <span className="text-stone font-mono">{activeProject.guestCount}</span>
                        </>
                      )}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl text-charcoal font-light">
                      {activeProject.title}
                    </h3>
                    <p className="text-xs text-warm-gray mt-1 font-sans">
                      Venue: {activeProject.venue}
                    </p>
                  </div>

                  <Link
                    href={`/work/${activeProject.slug}`}
                    className="editorial-link text-[10px] tracking-[0.18em] font-medium shrink-0"
                  >
                    View Full Story &rarr;
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Project Queue Selector (4 Columns) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-sand/70">
              <span className="text-[10px] tracking-[0.2em] uppercase text-warm-gray font-medium">
                Commission Queue
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-bronze">
                  0{selectedIndex + 1} / 0{filteredProjects.length}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous project"
                    className="w-6 h-6 border border-sand hover:border-charcoal flex items-center justify-center text-xs text-charcoal transition-colors rounded-full"
                  >
                    ‹
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next project"
                    className="w-6 h-6 border border-sand hover:border-charcoal flex items-center justify-center text-xs text-charcoal transition-colors rounded-full"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>

            {filteredProjects.map((p, idx) => {
              const isSelected = p.id === activeProject.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-[2px] border transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                    isSelected
                      ? "bg-ivory border-charcoal shadow-sm"
                      : "bg-ivory/40 border-sand/70 hover:border-sand hover:bg-ivory"
                  }`}
                >
                  <div className="w-16 h-12 relative overflow-hidden rounded-[1px] bg-sand shrink-0">
                    <Image
                      src={p.coverImage.src}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] tracking-[0.16em] uppercase text-bronze block truncate font-medium">
                      {p.location.split(",")[0]}
                    </span>
                    <h4 className="font-display text-base text-charcoal truncate font-normal">
                      {p.title}
                    </h4>
                  </div>

                  <span
                    className={`text-xs transition-colors shrink-0 ${
                      isSelected ? "text-bronze font-bold" : "text-stone"
                    }`}
                  >
                    {isSelected ? "●" : "○"}
                  </span>
                </button>
              );
            })}

            <div className="pt-4">
              <Link
                href="/work"
                className="w-full inline-flex items-center justify-center gap-2 text-[10px] font-medium tracking-[0.2em] uppercase text-charcoal border border-charcoal/30 hover:border-charcoal hover:bg-charcoal hover:text-ivory py-3.5 px-4 transition-all duration-300 rounded-[2px]"
              >
                <span>View All Works in Archive</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
