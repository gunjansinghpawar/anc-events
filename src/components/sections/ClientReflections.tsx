"use client";

/* ─────────────────────────────────────────────
   Client Reflections — Poetic, Human Testimonials
   
   - High-editorial typography & intimate pull-quotes
   - Controlled carousel with stable transition
   - Family provenance, occasion, and venue details
   ───────────────────────────────────────────── */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";

const reflections = [
  {
    id: 1,
    quote:
      "ANC didn't just plan our wedding in Udaipur; they understood the soul of what we wanted. Months later, our guests are still speaking of how unhurried, breathtaking, and effortlessly elegant the entire weekend felt.",
    author: "Karan & Sanjana",
    occasion: "Three-Day Destination Wedding",
    location: "Lake Pichola, Udaipur, Rajasthan",
  },
  {
    id: 2,
    quote:
      "The degree of aesthetic restraint and architectural clarity was astonishing. Ashish and Anushka protected our vision while handling 700 guests with complete calm. There was not a single discordant note.",
    author: "The Mehta Family",
    occasion: "Bespoke Sangeet & Grand Reception",
    location: "Bodakdev, Ahmedabad, Gujarat",
  },
  {
    id: 3,
    quote:
      "We wanted a celebration that felt like an intimate sanctuary by the sea, not an overproduced spectacle. ANC turned that dream into an immersive reality that was genuine, warm, and artistically sublime.",
    author: "Rohan & Devika",
    occasion: "Coastal Destination Wedding",
    location: "South Goa",
  },
];

export default function ClientReflections() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReflection = () => {
    setCurrentIndex((prev) => (prev + 1) % reflections.length);
  };

  const prevReflection = () => {
    setCurrentIndex((prev) => (prev - 1 + reflections.length) % reflections.length);
  };

  const current = reflections[currentIndex];

  return (
    <section className="section-padding bg-cream border-t border-sand" aria-labelledby="reflections-heading">
      <div className="container-editorial">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-bronze" />
            <p className="label tracking-[0.2em]">10 — Words of Reflection</p>
          </div>
          <h2 id="reflections-heading" className="display-lg text-charcoal font-light mb-16 max-w-2xl">
            In the words of those who celebrated
          </h2>
        </SectionReveal>

        <div className="max-w-4xl mx-auto">
          {/* Decorative Opening Quotation Mark */}
          <div className="font-display text-5xl sm:text-6xl text-bronze/35 leading-none select-none -mb-3" aria-hidden="true">
            “
          </div>

          {/* Card Carousel Area */}
          <div className="min-h-[300px] sm:min-h-[220px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl text-charcoal font-light leading-relaxed mb-8">
                  {current.quote}
                </blockquote>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-sand/80">
                  <div>
                    <cite className="font-display text-lg sm:text-xl text-charcoal not-italic block font-medium">
                      {current.author}
                    </cite>
                    <span className="text-xs text-warm-gray mt-1 block tracking-wide">
                      {current.occasion} &bull; {current.location}
                    </span>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevReflection}
                      className="w-10 h-10 border border-sand hover:border-charcoal flex items-center justify-center text-charcoal transition-colors rounded-full cursor-pointer hover:bg-ivory"
                      aria-label="Previous reflection"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <div className="flex items-center gap-1.5 px-2">
                      {reflections.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          aria-label={`Go to reflection ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentIndex === idx ? "w-6 bg-bronze" : "w-1.5 bg-sand hover:bg-stone"
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextReflection}
                      className="w-10 h-10 border border-sand hover:border-charcoal flex items-center justify-center text-charcoal transition-colors rounded-full cursor-pointer hover:bg-ivory"
                      aria-label="Next reflection"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
