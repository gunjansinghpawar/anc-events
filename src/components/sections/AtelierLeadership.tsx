"use client";

/* ─────────────────────────────────────────────
   Atelier Leadership — The Founders & Creative Direction
   
   - Duo directorial profile of Ashish & Anushka Nahata
   - Architectural distinction ledger strip (no box cards)
   - Storytelling on scale, poise, and discretion
   ───────────────────────────────────────────── */

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";

const metrics = [
  { value: "10+", label: "Years of Craft", sub: "Founded in 2015 in Ahmedabad" },
  { value: "150+", label: "Bespoke Celebrations", sub: "Pan-India & Maritime Commissions" },
  { value: "05", label: "Heritage Regions", sub: "Rajasthan, Gujarat, Goa & Beyond" },
  { value: "100%", label: "Strict Discretion", sub: "Confidentiality & NDA Guarantees" },
];

export default function AtelierLeadership() {
  return (
    <section className="section-padding bg-ivory border-t border-sand" aria-labelledby="leadership-heading">
      <div className="container-editorial">
        {/* Section Label */}
        <SectionReveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="w-8 h-px bg-bronze" />
            <p className="label tracking-[0.2em]">04 — Creative Leadership</p>
          </div>
        </SectionReveal>

        {/* 2-Column Split: Founders' Story & Atelier Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          {/* Left Column: Vision & Duality */}
          <div className="lg:col-span-7">
            <SectionReveal delay={0.1}>
              <h2
                id="leadership-heading"
                className="display-md text-charcoal font-light mb-8 leading-[1.12]"
              >
                The duality of architectural rigor &amp; empathetic hospitality.
              </h2>

              <p className="body-lg max-w-2xl mb-8 font-light">
                Behind ANC Events is the creative partnership of Ashish Nahata and Anushka Nahata. Operating from our atelier in Bodakdev, Ahmedabad, their philosophy merges two vital forces: the disciplined engineering required to orchestrate multi-day palatial events, and the emotional sensitivity required to make 800 guests feel individually cherished.
              </p>

              {/* Leadership Duo Ledger */}
              <div className="space-y-6 pt-6 border-t border-sand">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-6 pb-6 border-b border-sand/50">
                  <div>
                    <h3 className="font-display text-2xl text-charcoal font-normal">
                      Ashish Nahata
                    </h3>
                    <p className="text-[10px] tracking-[0.18em] uppercase text-bronze font-medium mt-0.5">
                      Founder &amp; Director of Production
                    </p>
                  </div>
                  <p className="text-xs text-warm-gray leading-relaxed max-w-sm font-light">
                    Directing large-scale spatial architecture, structural engineering, flight charters, and technical scenography with calm, unshakable composure.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-6">
                  <div>
                    <h3 className="font-display text-2xl text-charcoal font-normal">
                      Anushka Nahata
                    </h3>
                    <p className="text-[10px] tracking-[0.18em] uppercase text-bronze font-medium mt-0.5">
                      Director of Design &amp; Experience
                    </p>
                  </div>
                  <p className="text-xs text-warm-gray leading-relaxed max-w-sm font-light">
                    Curating botanical narratives, heirloom table scenography, sensory guest hospitality, and nuanced ceremonial rituals with deep warmth.
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <Link href="/about/team" className="editorial-link text-[10px] tracking-[0.2em] font-medium">
                  Meet the Leadership Team &rarr;
                </Link>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Atelier Visual & Quote Plaque */}
          <div className="lg:col-span-5 relative">
            <SectionReveal delay={0.2} direction="right">
              <div className="aspect-[4/5] relative overflow-hidden bg-sand rounded-[2px] shadow-lg">
                <Image
                  src="/images/placeholder-wedding-3.jpg"
                  alt="ANC Events Directors in the Ahmedabad Atelier"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/20 to-transparent" />

                {/* Overlaid Atelier Quote */}
                <div className="absolute bottom-8 left-8 right-8 text-ivory">
                  <span className="text-[9px] tracking-[0.22em] uppercase text-stone font-sans block mb-2">
                    Founders&apos; Creed
                  </span>
                  <p className="font-display text-lg md:text-xl font-light italic leading-snug">
                    &ldquo;Our duty is to protect your peace, so you remain present for every glance, every tear, and every sacred moment.&rdquo;
                  </p>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-sand/80 mt-3 font-medium">
                    Atelier Bodakdev &bull; Ahmedabad
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>

        {/* Distinction Ledger Strip (Horizontal Line Architecture) */}
        <div className="pt-12 border-t border-sand">
          <SectionReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((m) => (
                <div key={m.label} className="border-l border-sand pl-5">
                  <span className="font-display text-4xl md:text-5xl text-charcoal font-light block mb-2">
                    {m.value}
                  </span>
                  <h4 className="font-display text-base text-charcoal font-medium">
                    {m.label}
                  </h4>
                  <p className="text-xs text-warm-gray mt-1 font-light">
                    {m.sub}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
