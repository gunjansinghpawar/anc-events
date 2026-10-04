"use client";

/* ─────────────────────────────────────────────
   Advisory FAQ — Private Advisory & Host Considerations
   
   - Split layout: Direct Advisory Desk + Interactive Q&A Ledger
   - High-contrast text, clear typography & smooth accordion
   - Answers to critical questions on discretion, horizons & scale
   ───────────────────────────────────────────── */

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { advisories } from "@/data/faqs";

export default function AdvisoryFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP;
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section-padding bg-ivory border-t border-sand" aria-labelledby="advisory-heading">
      <div className="container-editorial">
        {/* Split 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Advisory Desk Card (Sticky on desktop) */}
          <div className="lg:col-span-4">
            <SectionReveal>
              <div className="lg:sticky lg:top-28 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-bronze" />
                  <p className="label tracking-[0.2em]">11 — Private Advisory</p>
                </div>

                <h2 id="advisory-heading" className="display-md text-charcoal font-light leading-snug">
                  Considerations for the discerning host
                </h2>

                <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed font-light">
                  Direct guidance on booking horizons, discretion, and pan-India production standards from our Bodakdev directors.
                </p>

                {/* Direct Consultation Box */}
                <div className="p-6 bg-cream border border-sand/80 rounded-[2px] space-y-4">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-bronze font-medium block">
                    Atelier Advisory Desk
                  </span>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Have a multi-city brief, confidential NDA requirement, or custom date in mind?
                  </p>

                  <div className="pt-2 flex flex-col gap-2.5">
                    <Link
                      href="/enquire"
                      className="inline-block text-center text-[10px] font-medium tracking-[0.18em] uppercase text-ivory bg-charcoal hover:bg-charcoal-light py-3 px-4 transition-colors rounded-[2px]"
                    >
                      Request Confidential Discussion
                    </Link>

                    {whatsappNumber && (
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=Hello%20ANC%20Events%2C%20I%20have%20an%20advisory%20inquiry.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-center text-[10px] font-medium tracking-[0.18em] uppercase text-charcoal border border-sand hover:border-charcoal py-2.5 px-4 transition-colors rounded-[2px]"
                      >
                        WhatsApp Director
                      </a>
                    )}

                    {phoneNumber && (
                      <div className="text-[10px] tracking-wider text-warm-gray text-center pt-1 font-mono">
                        Tel: {phoneNumber}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Q&A Accordion Ledger */}
          <div className="lg:col-span-8">
            <SectionReveal delay={0.15}>
              <div className="border-t border-sand divide-y divide-sand">
                {advisories.map((adv, idx) => {
                  const isOpen = openIndex === idx;

                  return (
                    <div key={adv.question} className="py-7 md:py-8">
                      <button
                        onClick={() => toggle(idx)}
                        className="w-full flex items-start justify-between text-left group cursor-pointer gap-6"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-start gap-4">
                          <span className="text-xs text-bronze font-mono tracking-widest pt-1">
                            0{idx + 1}
                          </span>
                          <span className="font-display text-xl sm:text-2xl text-charcoal font-normal group-hover:text-bronze transition-colors">
                            {adv.question}
                          </span>
                        </div>
                        <span
                          className={`w-7 h-7 rounded-full border border-sand flex items-center justify-center text-charcoal shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-45 border-charcoal bg-charcoal text-ivory" : "group-hover:border-bronze"
                          }`}
                        >
                          +
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pl-9 pt-4 text-xs sm:text-sm text-charcoal-light leading-relaxed font-light">
                              {adv.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
