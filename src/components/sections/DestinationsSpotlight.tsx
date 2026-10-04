"use client";

/* ─────────────────────────────────────────────
   Destinations Spotlight — Asymmetrical Travelogue Monograph
   
   - Asymmetric magazine layout (varied aspect ratios & heights)
   - Distinctive regional highlights & heritage venue types
   - High-contrast typography & curated venue insights
   ───────────────────────────────────────────── */

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import { destinations } from "@/data/destinations";

export default function DestinationsSpotlight() {
  const featured = destinations.slice(0, 3);
  const udaipur = featured[0];
  const jaipur = featured[1];
  const ahmedabad = destinations.find((d) => d.slug === "ahmedabad") || featured[2];

  return (
    <section className="section-padding bg-ivory border-t border-sand" aria-labelledby="destinations-heading">
      <div className="container-editorial">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-bronze" />
              <p className="label tracking-[0.2em]">09 — Destinations Monograph</p>
            </div>
            <h2 id="destinations-heading" className="display-lg text-charcoal font-light max-w-2xl">
              Setting the stage across India&apos;s most evocative landscapes
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <Link href="/destinations" className="editorial-link text-[10px] tracking-[0.2em] font-medium">
              Explore All 5 Destinations &rarr;
            </Link>
          </SectionReveal>
        </div>

        {/* Asymmetrical 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Big Feature (Udaipur — Lakeside Grandeur) */}
          <div className="lg:col-span-7">
            <SectionReveal>
              <Link href={`/destinations/${udaipur.slug}`} className="group block h-full">
                <article className="bg-cream border border-sand/80 rounded-[2px] overflow-hidden h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-500">
                  <div className="aspect-[16/11] relative overflow-hidden bg-sand">
                    <Image
                      src={udaipur.coverImage.src}
                      alt={udaipur.coverImage.alt}
                      fill
                      className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                    <div className="absolute top-4 left-4 bg-deep/85 backdrop-blur-xs text-ivory text-[9px] tracking-[0.2em] uppercase px-3 py-1 font-medium">
                      Lake Pichola &bull; Palatial Venues
                    </div>
                    <div className="absolute bottom-4 right-4 bg-ivory/90 backdrop-blur-xs text-charcoal text-[9px] tracking-[0.16em] uppercase px-3 py-1 font-mono">
                      Prime Season: Oct &ndash; Mar
                    </div>
                  </div>

                  <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] tracking-[0.2em] uppercase text-bronze font-medium mb-2">
                        {udaipur.tagline}
                      </div>
                      <h3 className="font-display text-3xl sm:text-4xl text-charcoal mb-4 font-light group-hover:text-bronze transition-colors">
                        {udaipur.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed font-light mb-6">
                        {udaipur.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-sand flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.18em] font-medium text-charcoal group-hover:text-bronze transition-colors">
                        Discover Udaipur Venues &amp; Case Studies
                      </span>
                      <span className="text-bronze group-hover:translate-x-1 transition-transform">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </SectionReveal>
          </div>

          {/* Right Column: Stacked Architectural Dual Highlights (Jaipur & Ahmedabad) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Top Right: Jaipur */}
            <SectionReveal delay={0.1}>
              <Link href={`/destinations/${jaipur.slug}`} className="group block">
                <article className="bg-cream border border-sand/80 rounded-[2px] overflow-hidden hover:shadow-md transition-shadow duration-500">
                  <div className="aspect-[16/9] relative overflow-hidden bg-sand">
                    <Image
                      src={jaipur.coverImage.src}
                      alt={jaipur.coverImage.alt}
                      fill
                      className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                    <div className="absolute top-3 left-3 bg-deep/85 backdrop-blur-xs text-ivory text-[9px] tracking-[0.2em] uppercase px-2.5 py-1">
                      Fortress Splendor
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <span className="text-[9px] uppercase tracking-[0.18em] text-bronze font-medium block mb-1">
                      {jaipur.tagline}
                    </span>
                    <h3 className="font-display text-2xl text-charcoal mb-2 font-light group-hover:text-bronze transition-colors">
                      {jaipur.name}
                    </h3>
                    <p className="text-xs text-charcoal-light leading-relaxed font-light line-clamp-2 mb-4">
                      {jaipur.description}
                    </p>
                    <span className="editorial-link text-[10px] tracking-[0.18em]">
                      Explore Jaipur &rarr;
                    </span>
                  </div>
                </article>
              </Link>
            </SectionReveal>

            {/* Bottom Right: Ahmedabad (Atelier Base) */}
            <SectionReveal delay={0.2}>
              <Link href={`/destinations/${ahmedabad.slug}`} className="group block">
                <article className="bg-cream border border-sand/80 rounded-[2px] overflow-hidden hover:shadow-md transition-shadow duration-500">
                  <div className="aspect-[16/9] relative overflow-hidden bg-sand">
                    <Image
                      src={ahmedabad.coverImage.src}
                      alt={ahmedabad.coverImage.alt}
                      fill
                      className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                    <div className="absolute top-3 left-3 bg-deep/85 backdrop-blur-xs text-ivory text-[9px] tracking-[0.2em] uppercase px-2.5 py-1">
                      Our Atelier Base &bull; Heritage Havelis
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <span className="text-[9px] uppercase tracking-[0.18em] text-bronze font-medium block mb-1">
                      {ahmedabad.tagline}
                    </span>
                    <h3 className="font-display text-2xl text-charcoal mb-2 font-light group-hover:text-bronze transition-colors">
                      {ahmedabad.name}
                    </h3>
                    <p className="text-xs text-charcoal-light leading-relaxed font-light line-clamp-2 mb-4">
                      {ahmedabad.description}
                    </p>
                    <span className="editorial-link text-[10px] tracking-[0.18em]">
                      Explore Ahmedabad &rarr;
                    </span>
                  </div>
                </article>
              </Link>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
