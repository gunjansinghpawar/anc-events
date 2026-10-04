"use client";

/* ─────────────────────────────────────────────
   Journal Highlights — Editorial Monograph Spread
   
   - Lead featured monograph + stacked secondary dispatches
   - Eliminates generic 3-card grid in favor of a true magazine layout
   - Publication dates, reading times, and direct article links
   ───────────────────────────────────────────── */

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import { getAllJournalPosts } from "@/data/journal";

export default function JournalHighlights() {
  const posts = getAllJournalPosts();
  const leadPost = posts[0];
  const secondaryPosts = posts.slice(1, 3);

  return (
    <section className="section-padding bg-ivory border-t border-sand" aria-labelledby="journal-heading">
      <div className="container-editorial">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-bronze" />
              <p className="label tracking-[0.2em]">12 — The Journal</p>
            </div>
            <h2 id="journal-heading" className="display-lg text-charcoal font-light max-w-2xl">
              Perspectives on design, craft &amp; celebration
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <Link href="/journal" className="editorial-link text-[10px] tracking-[0.2em] font-medium">
              Read Complete Archive &rarr;
            </Link>
          </SectionReveal>
        </div>

        {/* Magazine Asymmetrical Spread (Lead Feature on Left, Stacked on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Lead Article (7 Columns) */}
          {leadPost && (
            <div className="lg:col-span-7">
              <SectionReveal>
                <Link href={`/journal/${leadPost.slug}`} className="group block">
                  <article className="space-y-6">
                    <div className="aspect-[16/10] relative overflow-hidden bg-sand rounded-[2px] shadow-sm">
                      <Image
                        src={leadPost.coverImage.src}
                        alt={leadPost.coverImage.alt}
                        fill
                        className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
                      <div className="absolute top-4 left-4 bg-deep/85 backdrop-blur-xs text-ivory text-[9px] tracking-[0.2em] uppercase px-3 py-1 font-medium">
                        Featured Monograph
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 text-[10px] tracking-[0.18em] uppercase text-stone mb-2">
                        <span className="text-bronze font-medium">{leadPost.categoryLabel}</span>
                        <span>&bull;</span>
                        <span>{leadPost.date}</span>
                        <span>&bull;</span>
                        <span>{leadPost.readingTime}</span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl text-charcoal group-hover:text-bronze transition-colors font-light leading-snug mb-3">
                        {leadPost.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed font-light line-clamp-3 mb-4">
                        {leadPost.excerpt}
                      </p>

                      <span className="editorial-link text-[10px] tracking-[0.18em] font-medium">
                        Read Full Monograph &rarr;
                      </span>
                    </div>
                  </article>
                </Link>
              </SectionReveal>
            </div>
          )}

          {/* Stacked Secondary Dispatches (5 Columns) */}
          <div className="lg:col-span-5 space-y-8 divide-y divide-sand">
            {secondaryPosts.map((post, idx) => (
              <SectionReveal key={post.id} delay={0.15 * (idx + 1)}>
                <Link
                  href={`/journal/${post.slug}`}
                  className={`group block ${idx > 0 ? "pt-8" : ""}`}
                >
                  <article className="flex gap-4 sm:gap-6 items-start">
                    <div className="w-24 sm:w-32 md:w-36 aspect-[4/3] relative overflow-hidden bg-sand rounded-[1px] shrink-0">
                      <Image
                        src={post.coverImage.src}
                        alt={post.coverImage.alt}
                        fill
                        className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                        sizes="150px"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-[9px] tracking-[0.16em] uppercase text-stone mb-1.5 font-sans">
                        <span className="text-bronze font-medium">{post.categoryLabel}</span>
                        <span>&bull;</span>
                        <span>{post.readingTime}</span>
                      </div>

                      <h4 className="font-display text-lg sm:text-xl text-charcoal group-hover:text-bronze transition-colors font-normal leading-snug line-clamp-2 mb-2">
                        {post.title}
                      </h4>

                      <p className="text-xs text-warm-gray leading-relaxed font-light line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              </SectionReveal>
            ))}

            {/* Newsletter Dispatch Sign-off */}
            <div className="pt-8">
              <div className="p-6 bg-cream border border-sand/70 rounded-[2px]">
                <span className="text-[9px] uppercase tracking-[0.2em] text-bronze font-medium block mb-1">
                  Atelier Monographs
                </span>
                <p className="text-xs text-charcoal-light leading-relaxed font-light">
                  Published quarterly for discerning couples and patrons of bespoke celebration.
                </p>
                <div className="mt-3">
                  <Link href="/journal" className="editorial-link text-[10px] tracking-[0.16em]">
                    Browse All Articles &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
