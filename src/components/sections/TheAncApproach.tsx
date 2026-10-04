"use client";

/* ─────────────────────────────────────────────
   The ANC Approach — Continuous Connected Journey Timeline
   
   - Linear progression timeline with architectural nodes
   - Phase durations & chronological methodology
   - Eliminates generic card boxes in favor of a genuine journey flow
   ───────────────────────────────────────────── */

import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";

const methodology = [
  {
    step: "01",
    phase: "Phase I • Vision",
    title: "Discover",
    timeframe: "Week 01 – 04",
    text: "Immersing in your family lore, personal aesthetics, emotional cadence, and guest profiles to establish the celebration's guiding compass.",
  },
  {
    step: "02",
    phase: "Phase II • Scenography",
    title: "Imagine",
    timeframe: "Month 02 – 04",
    text: "Architectural 3D modeling, spatial volumes, bespoke mandap pavilions, lighting narratives, and materiality tailored to the venue's topography.",
  },
  {
    step: "03",
    phase: "Phase III • Curation",
    title: "Curate",
    timeframe: "Month 05 – 07",
    text: "Assembling botanical sculptors, master culinary directors, sound designers, and transcendent artists under unified creative direction.",
  },
  {
    step: "04",
    phase: "Phase IV • Production",
    title: "Execute",
    timeframe: "Month 08 – Event Week",
    text: "Relentless logistical discipline: run-sheets timed to the minute, charter flights, fleet transit, and microclimate contingencies.",
  },
  {
    step: "05",
    phase: "Phase V • Presence",
    title: "Deliver",
    timeframe: "Celebration Weekend",
    text: "Invisible, calm stewardship on-ground where you and your guests experience only effortless beauty, warmth, and unhurried wonder.",
  },
];

export default function TheAncApproach() {
  return (
    <section className="section-padding bg-cream border-t border-sand" aria-labelledby="approach-heading">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-bronze" />
              <p className="label tracking-[0.2em]">08 — The Methodology</p>
            </div>
            <h2 id="approach-heading" className="display-lg text-charcoal font-light max-w-2xl">
              The ANC Journey
            </h2>
            <p className="text-xs sm:text-sm text-warm-gray mt-2 max-w-lg">
              A 5-phase chronological progression engineered to turn complex palatial productions into effortless memories.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <Link href="/about/approach" className="editorial-link text-[10px] tracking-[0.2em] font-medium">
              Read In-Depth Process Guide &rarr;
            </Link>
          </SectionReveal>
        </div>

        {/* Continuous Linear Journey Timeline (Zero Generic Box Cards) */}
        <div className="relative pt-6">
          {/* Connecting Track Line for Desktop */}
          <div className="hidden lg:block absolute top-[42px] left-6 right-6 h-[1.5px] bg-sand z-0" />

          {/* Connecting Track Line for Mobile & Tablet */}
          <div className="lg:hidden absolute top-[42px] bottom-[60px] left-[19px] w-[1.5px] bg-sand/80 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
            {methodology.map((m, idx) => (
              <SectionReveal key={m.step} delay={0.08 * idx}>
                <div className="flex flex-col h-full group">
                  {/* Timeline Node Bead */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-10 h-10 rounded-full bg-ivory border-2 border-bronze flex items-center justify-center font-display text-sm text-bronze group-hover:bg-bronze group-hover:text-ivory transition-colors duration-300 shadow-sm shrink-0">
                      {m.step}
                    </span>
                    <span className="text-[10px] tracking-[0.16em] uppercase font-mono text-warm-gray">
                      {m.timeframe}
                    </span>
                  </div>

                  {/* Phase Label & Title */}
                  <div className="border-t lg:border-t-0 pt-3 lg:pt-0 border-sand/60">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-bronze font-medium block mb-1">
                      {m.phase}
                    </span>

                    <h3 className="font-display text-2xl text-charcoal mb-3 font-normal group-hover:text-bronze transition-colors">
                      {m.title}
                    </h3>

                    <p className="text-xs text-charcoal-light leading-relaxed font-light">
                      {m.text}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
