"use client";

/* ─────────────────────────────────────────────
   ANC Events — Work / Selected Celebrations
   
   - Hero: "OUR WORK"
   - Magazine-cover project presentation
   - Asymmetric & alternating editorial layouts
   - Category filtering with smooth transition
   ───────────────────────────────────────────── */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { getAllProjects } from "@/data/projects";

const filterTabs = [
  { key: "all", label: "ALL" },
  { key: "destination-wedding", label: "DESTINATION WEDDINGS" },
  { key: "wedding", label: "WEDDINGS" },
  { key: "sangeet", label: "SANGEET" },
  { key: "reception", label: "RECEPTIONS" },
  { key: "bespoke-events", label: "BESPOKE EVENTS" },
  { key: "event-design", label: "EVENT DESIGN" },
  { key: "featured", label: "FEATURED" },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const all = getAllProjects();

  const filtered = all.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return p.featured;
    if (activeFilter === "wedding")
      return p.category === "wedding" || p.category === "destination-wedding";
    if (activeFilter === "bespoke-events")
      return p.category === "bespoke-event" || p.category === "corporate";
    return p.category === activeFilter;
  });

  return (
    <div className="pt-28 md:pt-40 pb-28 bg-ivory">
      <div className="container-editorial">
        {/* Header */}
        <SectionReveal className="mb-14 md:mb-20 max-w-4xl">
          <span className="label text-stone mb-4 block">Selected Celebrations</span>
          <h1 className="display-xl text-charcoal font-light leading-none mb-6">
            OUR WORK
          </h1>
          <p className="body-lg text-warm-gray max-w-2xl leading-relaxed">
            An editorial archive of commissions brought to life across India&apos;s most evocative settings — each conceived with intention, artistic daring, and architectural clarity.
          </p>
        </SectionReveal>

        {/* Filter Navigation */}
        <div className="mb-16 pb-6 border-b border-sand overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 md:gap-4 min-w-max">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`text-[10px] tracking-[0.2em] uppercase font-medium px-4 py-2 transition-colors duration-200 ${
                  activeFilter === tab.key
                    ? "bg-charcoal text-ivory"
                    : "text-warm-gray hover:text-charcoal bg-transparent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Editorial Project Showcase */}
        <motion.div layout className="space-y-24 md:space-y-36">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              // Asymmetric alternating composition: Full-width magazine spread vs 2-column offset
              const isLargeSpread = index % 3 === 0;

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.4 }}
                  className="group block"
                >
                  <Link href={`/work/${project.slug}`} className="block">
                    {isLargeSpread ? (
                      /* Full Width Magazine Spread */
                      <div className="space-y-6">
                        <div className="image-reveal aspect-[21/10] relative overflow-hidden bg-sand">
                          <Image
                            src={project.coverImage.src}
                            alt={project.coverImage.alt}
                            fill
                            className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                            sizes="100vw"
                          />
                          <div className="absolute top-6 left-6 bg-deep/80 text-ivory text-[10px] tracking-[0.2em] uppercase px-3.5 py-1.5 backdrop-blur-xs">
                            {project.categoryLabel} &bull; {project.location}
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
                          <div>
                            <span className="label-sm text-stone block mb-1">
                              {project.location} &mdash; {project.year}
                            </span>
                            <h2 className="display-md text-charcoal group-hover:text-bronze transition-colors">
                              {project.title}
                            </h2>
                            <p className="text-sm text-warm-gray italic mt-1 font-display">
                              {project.subtitle}
                            </p>
                          </div>

                          <span className="editorial-link flex items-center gap-2 whitespace-nowrap">
                            View Story <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Offset 2-Column Editorial Cover */
                      <div
                        className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                          index % 2 === 1 ? "lg:direction-rtl" : ""
                        }`}
                      >
                        <div
                          className={`lg:col-span-7 ${
                            index % 2 === 1 ? "lg:col-start-6 lg:order-2" : ""
                          }`}
                          style={{ direction: "ltr" }}
                        >
                          <div className="image-reveal aspect-[4/3] relative overflow-hidden bg-sand">
                            <Image
                              src={project.coverImage.src}
                              alt={project.coverImage.alt}
                              fill
                              className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                              sizes="(max-width: 1024px) 100vw, 58vw"
                            />
                            <div className="absolute top-4 left-4 bg-deep/80 text-ivory text-[10px] tracking-[0.2em] uppercase px-3 py-1">
                              {project.categoryLabel}
                            </div>
                          </div>
                        </div>

                        <div
                          className={`lg:col-span-5 ${
                            index % 2 === 1 ? "lg:col-start-1 lg:order-1 lg:row-start-1" : ""
                          }`}
                          style={{ direction: "ltr" }}
                        >
                          <span className="label-sm text-stone block mb-2">
                            {project.location} &bull; {project.year}
                          </span>
                          <h2 className="display-sm text-charcoal mb-3 group-hover:text-bronze transition-colors">
                            {project.title}
                          </h2>
                          <p className="text-xs uppercase tracking-widest text-bronze mb-4 font-medium">
                            {project.subtitle}
                          </p>
                          <p className="body-lg text-charcoal-light mb-6 line-clamp-3 leading-relaxed">
                            {project.description}
                          </p>
                          <span className="editorial-link flex items-center gap-2">
                            View Story <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                          </span>
                        </div>
                      </div>
                    )}
                  </Link>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Consultation Callout */}
        <div className="mt-36 p-12 bg-cream border border-sand flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-2">
              Commission Your Celebration
            </h3>
            <p className="text-xs text-warm-gray max-w-xl">
              We work with discerning couples and families across India and internationally.
            </p>
          </div>
          <Link href="/enquire" className="btn-primary whitespace-nowrap">
            Schedule a Private Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
