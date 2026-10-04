"use client";

/* ─────────────────────────────────────────────
   Portfolio / Work Index — Editorial showcase
   ───────────────────────────────────────────── */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { getAllProjects } from "@/data/projects";

const categories = [
  { key: "all", label: "All Celebrations" },
  { key: "destination-wedding", label: "Destination Weddings" },
  { key: "sangeet", label: "Sangeets" },
  { key: "reception", label: "Receptions" },
  { key: "engagement", label: "Engagements" },
  { key: "corporate", label: "Corporate" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const allProjects = getAllProjects();

  const filtered =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 md:pt-36 pb-24">
      <div className="container-editorial">
        {/* Page Header */}
        <SectionReveal className="mb-14 md:mb-20">
          <p className="label mb-4">Portfolio — Selected Works</p>
          <h1 className="display-lg mb-6 max-w-4xl">
            A chronicle of celebrations brought to life with intention
          </h1>
          <p className="body-lg text-warm-gray max-w-2xl">
            Each celebration is an original commission — conceived in dialogue with the families we serve, shaped by the architectural character of its setting, and executed with uncompromising discipline.
          </p>
        </SectionReveal>

        {/* Category Filters */}
        <SectionReveal delay={0.1} className="mb-12 md:mb-16">
          <div className="flex flex-wrap items-center gap-2 md:gap-4 pb-6 border-b border-sand">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`text-[11px] font-medium tracking-[0.14em] uppercase px-4 py-2 transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-charcoal text-ivory"
                    : "text-warm-gray hover:text-charcoal bg-transparent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="group block h-full flex flex-col justify-between"
                >
                  <article>
                    {/* Image */}
                    <div className="image-reveal aspect-[4/3] relative overflow-hidden bg-sand mb-5">
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <Image
                          src={project.coverImage.src}
                          alt={project.coverImage.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center justify-between text-xs text-warm-gray mb-2">
                      <span className="label-sm text-stone">
                        {project.categoryLabel}
                      </span>
                      <span>{project.location}</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-2xl text-charcoal mb-2 group-hover:text-bronze transition-colors duration-300">
                      {project.title}
                    </h2>

                    {/* Subtitle / Excerpt */}
                    <p className="text-xs text-warm-gray line-clamp-2 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </article>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-28 p-10 md:p-16 bg-cream border border-sand flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-3">
              Planning a celebration of your own?
            </h3>
            <p className="text-xs text-warm-gray max-w-xl">
              We accept a limited number of destination wedding and bespoke event commissions each season to ensure undivided focus.
            </p>
          </div>
          <Link href="/enquire" className="btn-primary whitespace-nowrap">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
