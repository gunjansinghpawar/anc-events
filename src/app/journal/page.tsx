"use client";

/* ─────────────────────────────────────────────
   Journal Index — Perspectives on luxury events
   ───────────────────────────────────────────── */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { getAllJournalPosts } from "@/data/journal";

const categories = [
  { key: "all", label: "All Stories" },
  { key: "weddings", label: "Weddings" },
  { key: "behind-the-scenes", label: "Behind the Scenes" },
  { key: "destinations", label: "Destinations" },
  { key: "hospitality", label: "Hospitality" },
];

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const posts = getAllJournalPosts();

  const filtered =
    activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 md:pt-36 pb-24">
      <div className="container-editorial">
        {/* Header */}
        <SectionReveal className="mb-14 md:mb-20">
          <p className="label mb-4">The Journal</p>
          <h1 className="display-lg mb-6 max-w-3xl">
            Essays on design, scenography & intentional hospitality
          </h1>
          <p className="body-lg text-warm-gray max-w-2xl">
            A repository of insights from our creative directors, exploring the nuances of destination celebrations, material craft, and the art of entertaining.
          </p>
        </SectionReveal>

        {/* Filters */}
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

        {/* Posts Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
        >
          <AnimatePresence>
            {filtered.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <Link href={`/journal/${post.slug}`} className="group block">
                  <article>
                    <div className="image-reveal aspect-[16/10] relative mb-6 overflow-hidden bg-sand">
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <Image
                          src={post.coverImage.src}
                          alt={post.coverImage.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </motion.div>
                    </div>

                    <div className="flex items-center gap-3 mb-2 text-xs text-stone">
                      <span className="label-sm text-stone">{post.categoryLabel}</span>
                      <span className="w-1 h-1 rounded-full bg-stone" />
                      <span>{post.readingTime}</span>
                    </div>

                    <h2 className="font-display text-2xl text-charcoal mb-3 group-hover:text-bronze transition-colors duration-300">
                      {post.title}
                    </h2>

                    <p className="text-xs text-charcoal-light leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </article>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
