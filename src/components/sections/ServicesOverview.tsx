"use client";

/* ─────────────────────────────────────────────
   Services Overview — Interactive Capabilities Ledger & Scope
   
   - Interactive service selector with live capability details
   - Scope deliverables checklist & philosophy quote
   - Engaging interactive tool that eliminates repetitive card grids
   ───────────────────────────────────────────── */

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { services } from "@/data/services";

export default function ServicesOverview() {
  const featuredServices = services.slice(0, 6);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeService = featuredServices[activeServiceIndex] || featuredServices[0];

  return (
    <section className="section-padding bg-ivory border-t border-sand" aria-labelledby="services-heading">
      <div className="container-editorial">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-bronze" />
              <p className="label tracking-[0.2em]">06 — Capabilities &amp; Scope</p>
            </div>
            <h2 id="services-heading" className="display-lg text-charcoal font-light max-w-2xl">
              Crafted with architectural precision &amp; artistic flair
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <Link href="/services" className="editorial-link text-[10px] tracking-[0.2em] font-medium">
              Explore All 9 Capabilities &rarr;
            </Link>
          </SectionReveal>
        </div>

        {/* Interactive Split Layout: Service Index on Left, Dynamic Scope Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Numbered Service Selector (6 Columns) */}
          <div className="lg:col-span-6 border-t border-sand divide-y divide-sand">
            {featuredServices.map((service, index) => {
              const isActive = activeServiceIndex === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceIndex(index)}
                  className={`w-full text-left py-4 sm:py-5 px-3 sm:px-4 rounded-[2px] transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isActive ? "bg-cream/80 border-l-2 border-bronze pl-4 sm:pl-5" : "hover:bg-cream/30"
                  }`}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6 min-w-0">
                    <span
                      className={`font-display text-2xl sm:text-3xl font-light transition-colors ${
                        isActive ? "text-bronze" : "text-stone group-hover:text-charcoal"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <h3
                        className={`font-display text-xl sm:text-2xl transition-colors truncate ${
                          isActive ? "text-charcoal font-normal" : "text-charcoal-light group-hover:text-bronze"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs text-warm-gray truncate font-light mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-xs transition-transform duration-300 shrink-0 ${
                      isActive ? "text-bronze translate-x-1" : "text-stone opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    &rarr;
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Scope & Philosophy Display (6 Columns) */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-cream border border-sand p-8 sm:p-10 rounded-[2px] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-sand/70">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-bronze font-medium">
                      Atelier Specification
                    </span>
                    <span className="font-mono text-xs text-stone">
                      Index 0{activeServiceIndex + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-charcoal font-light mb-3">
                    {activeService.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed mb-6 font-light">
                    {activeService.description}
                  </p>

                  {/* Philosophy Quote */}
                  {activeService.philosophy && (
                    <blockquote className="font-display text-base text-charcoal font-normal italic pl-4 border-l-2 border-bronze my-6 leading-snug">
                      &ldquo;{activeService.philosophy}&rdquo;
                    </blockquote>
                  )}

                  {/* What We Handle Deliverables */}
                  <div className="pt-4 border-t border-sand/70">
                    <span className="text-[9px] uppercase tracking-[0.18em] text-stone font-medium block mb-3 font-sans">
                      Core Scope &amp; Responsibilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal">
                      {(activeService.whatWeHandle || []).slice(0, 6).map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="text-bronze text-xs">&bull;</span>
                          <span className="font-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="mt-8 pt-6 border-t border-sand/70 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
                  <Link
                    href={`/services/${activeService.slug}`}
                    className="editorial-link text-[10px] tracking-[0.18em] font-medium"
                  >
                    View In-Depth Capability &rarr;
                  </Link>

                  <Link
                    href="/enquire"
                    className="text-center text-[10px] tracking-[0.18em] uppercase font-medium text-ivory bg-charcoal hover:bg-bronze px-5 py-2.5 transition-colors rounded-[2px]"
                  >
                    Commission Service
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
