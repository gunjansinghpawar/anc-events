"use client";

/* ─────────────────────────────────────────────
   Introduction Section — Atelier Manifesto & Editorial Composition
   
   - High-fashion magazine editorial diptych composition
   - Layered architectural photography (Palatial Scenography + Material Detail)
   - Distinctive typographical signature ledger (Zero repetitive box cards)
   - 100% responsive: gracefully transitions from phone screens to ultrawide
   ───────────────────────────────────────────── */

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";

export default function Introduction() {
  return (
    <section className="section-padding bg-ivory relative overflow-hidden" aria-labelledby="intro-heading">
      {/* Subtle watermark background numeral */}
      <div
        className="absolute top-12 right-6 lg:right-24 select-none pointer-events-none text-[clamp(6rem,16vw,14rem)] font-display text-sand/40 font-light leading-none -z-0"
        aria-hidden="true"
      >
        02
      </div>

      <div className="container-editorial relative z-10">
        {/* Section Label */}
        <SectionReveal>
          <div className="flex items-center gap-3 mb-10 md:mb-14">
            <span className="w-8 h-px bg-bronze" />
            <p className="label tracking-[0.2em]">02 — Atelier Manifesto</p>
          </div>
        </SectionReveal>

        {/* Split Layout: Manifesto Narrative + Asymmetrical Diptych */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Directors' Signoff */}
          <div className="lg:col-span-6">
            <SectionReveal delay={0.1}>
              <h2
                id="intro-heading"
                className="display-md mb-6 md:mb-8 text-charcoal font-light leading-[1.12]"
              >
                We create celebrations that feel unmistakably yours.
              </h2>

              <p className="body-lg max-w-xl mb-6 font-light leading-relaxed">
                At ANC Events, we believe that an extraordinary celebration is not born from excess, but from intention. Operating from our private atelier in Bodakdev, Ahmedabad, we curate and orchestrate destination weddings and bespoke milestone gatherings across India&apos;s most evocative heritage landscapes.
              </p>

              <blockquote className="font-display text-xl sm:text-2xl text-charcoal font-normal italic pl-6 border-l-2 border-bronze my-8 leading-snug">
                &ldquo;We do not assemble templates. We listen, we imagine, and then we build — creating temporary worlds where every detail has been considered and every moment feels deeply intentional.&rdquo;
              </blockquote>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-sand/70">
                <div>
                  <p className="font-display text-xl text-charcoal font-normal">
                    Ashish &amp; Anushka Nahata
                  </p>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-warm-gray mt-0.5 font-sans">
                    Founders &amp; Creative Directors &bull; ANC Events
                  </p>
                </div>

                <Link href="/about" className="editorial-link text-[10px] tracking-[0.18em] font-medium shrink-0">
                  Our Atelier Story &rarr;
                </Link>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: High-Fashion Architectural Diptych */}
          <div className="lg:col-span-6">
            <SectionReveal delay={0.2} direction="right">
              <div className="grid grid-cols-12 gap-4 items-end">
                {/* Main Large Portrait Frame (8 cols) */}
                <div className="col-span-8 relative aspect-[3/4] overflow-hidden rounded-[2px] bg-sand shadow-lg group">
                  <Image
                    src="/images/placeholder-wedding-2.jpg"
                    alt="Architectural floral mandap and decor detail by ANC Events"
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 70vw, 35vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/50 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 text-ivory">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-sand/90 block mb-0.5">
                      Bodakdev Studio
                    </span>
                    <p className="font-display text-sm font-light">
                      Sculptural Scenography
                    </p>
                  </div>
                </div>

                {/* Secondary Inset Detail Frame (4 cols) */}
                <div className="col-span-4 flex flex-col gap-4">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-sand shadow-md group">
                    <Image
                      src="/images/placeholder-wedding-3.jpg"
                      alt="Bespoke lighting and table scenography by ANC Events"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 30vw, 15vw"
                    />
                    <div className="absolute inset-0 bg-deep/20" />
                  </div>

                  {/* Atelier Standard Plaque */}
                  <div className="p-4 bg-cream border border-sand rounded-[2px]">
                    <span className="text-[8px] uppercase tracking-[0.2em] text-bronze font-medium block mb-1">
                      Standard
                    </span>
                    <p className="font-display text-xs text-charcoal leading-snug">
                      Restraint &bull; Poise &bull; Heritage
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>

        {/* Typographic Distinction Ledger Bar (Zero repetitive cards) */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-sand flex flex-col md:flex-row items-start md:items-center justify-between text-warm-gray text-xs gap-4 font-sans tracking-widest uppercase">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[9.5px] sm:text-[10px] tracking-[0.2em]">
            <span className="text-charcoal font-medium">Intention Over Excess</span>
            <span className="text-stone">&bull;</span>
            <span className="text-charcoal font-medium">Architecture Over Decoration</span>
            <span className="text-stone">&bull;</span>
            <span className="text-charcoal font-medium">Poise Over Spectacle</span>
          </div>

          <div className="text-[9.5px] sm:text-[10px] tracking-[0.18em] text-stone">
            Bodakdev, Ahmedabad &bull; Founded 2015
          </div>
        </div>
      </div>
    </section>
  );
}
