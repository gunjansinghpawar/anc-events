"use client";

/* ─────────────────────────────────────────────
   Philosophy — The Studio Ethos & Architectural Quadrants
   
   - High-contrast obsidian dark chamber with gold accents
   - Intersecting 4-quadrant architectural crosshair layout
   - Zero generic card boxes — pure architectural framing
   ───────────────────────────────────────────── */

import SectionReveal from "@/components/ui/SectionReveal";

const tenets = [
  {
    number: "01",
    title: "Architectural Scenography",
    subtitle: "Spatial Volume & Light",
    description:
      "We treat spaces not as mere backdrops to fill, but as volumes to sculpt. Every canopy, mandap, and pavilion is designed with proportion, light, and architectural integrity in mind.",
  },
  {
    number: "02",
    title: "Intention Over Excess",
    subtitle: "Restrained Curation",
    description:
      "True luxury does not shout. We believe in purposeful curation — choosing meaningful materials, bespoke artistry, and thoughtful nuance over generic ostentation.",
  },
  {
    number: "03",
    title: "Unrivaled Discretion",
    subtitle: "Absolute Confidentiality",
    description:
      "Serving discerning families and high-profile hosts requires absolute confidentiality, calm composure, and effortless grace under every circumstance.",
  },
  {
    number: "04",
    title: "Rigorous Precision",
    subtitle: "Timed to the Second",
    description:
      "Behind the emotional poetry of the celebration lies relentless logistical discipline. Timelines, soundscapes, temperature, and guest transitions are orchestrated down to the minute.",
  },
];

export default function Philosophy() {
  return (
    <section
      className="section-padding bg-[#151413] text-[#FAF8F5] relative overflow-hidden section-dark"
      aria-labelledby="philosophy-heading"
    >
      {/* Ambient warm glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#B8956E]/6 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-editorial relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <SectionReveal>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#B8956E]" />
              <p className="label-sm text-[#B8AFA6] tracking-[0.25em]">05 — Studio Ethos</p>
              <span className="w-8 h-px bg-[#B8956E]" />
            </div>

            <h2 id="philosophy-heading" className="font-display text-4xl sm:text-5xl md:text-6xl text-[#FAF8F5] font-light mb-8">
              The Anatomy of a Memory
            </h2>

            <blockquote className="font-display text-xl sm:text-2xl md:text-3xl text-[#E8E0D8] font-light italic leading-relaxed max-w-3xl mx-auto">
              &ldquo;A wedding is not simply an event on a calendar; it is a temporary world built for the people who matter most in your life.&rdquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-[#B8AFA6] max-w-xl mx-auto mt-6 font-sans tracking-wide">
              Atelier Bodakdev &bull; Ahmedabad, Gujarat &bull; Pan-India Commissions
            </p>
          </SectionReveal>
        </div>

        {/* 4 Architectural Quadrants (Crosshair Layout) */}
        <div className="max-w-5xl mx-auto border border-[#B8956E]/25 bg-[#1B1917]/70 backdrop-blur-sm rounded-[2px]">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-[#B8956E]/20">
            {/* Top Row: Quadrant 01 & Quadrant 02 */}
            <div className="p-6 sm:p-10 md:p-12 md:border-r border-[#B8956E]/20 border-b border-[#B8956E]/20 flex flex-col justify-between">
              <SectionReveal delay={0.1}>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl sm:text-4xl text-[#C5A880] font-light">
                    {tenets[0].number}
                  </span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#8A827A] font-sans">
                    {tenets[0].subtitle}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-[#FAF8F5] mb-3 font-normal">
                  {tenets[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D1C7BD] leading-relaxed font-light">
                  {tenets[0].description}
                </p>
              </SectionReveal>
            </div>

            <div className="p-6 sm:p-10 md:p-12 border-b border-[#B8956E]/20 flex flex-col justify-between">
              <SectionReveal delay={0.2}>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl sm:text-4xl text-[#C5A880] font-light">
                    {tenets[1].number}
                  </span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#8A827A] font-sans">
                    {tenets[1].subtitle}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-[#FAF8F5] mb-3 font-normal">
                  {tenets[1].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D1C7BD] leading-relaxed font-light">
                  {tenets[1].description}
                </p>
              </SectionReveal>
            </div>

            {/* Bottom Row: Quadrant 03 & Quadrant 04 */}
            <div className="p-6 sm:p-10 md:p-12 md:border-r border-[#B8956E]/20 flex flex-col justify-between">
              <SectionReveal delay={0.3}>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl sm:text-4xl text-[#C5A880] font-light">
                    {tenets[2].number}
                  </span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#8A827A] font-sans">
                    {tenets[2].subtitle}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-[#FAF8F5] mb-3 font-normal">
                  {tenets[2].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D1C7BD] leading-relaxed font-light">
                  {tenets[2].description}
                </p>
              </SectionReveal>
            </div>

            <div className="p-6 sm:p-10 md:p-12 flex flex-col justify-between">
              <SectionReveal delay={0.4}>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl sm:text-4xl text-[#C5A880] font-light">
                    {tenets[3].number}
                  </span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#8A827A] font-sans">
                    {tenets[3].subtitle}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-[#FAF8F5] mb-3 font-normal">
                  {tenets[3].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D1C7BD] leading-relaxed font-light">
                  {tenets[3].description}
                </p>
              </SectionReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
