"use client";

/* ─────────────────────────────────────────────
   Homepage Hero — Cinematic, Minimalist & Restrained
   
   - Zero overlap with fixed navigation (min-h-[100svh] + deterministic pt-36/pt-48 clearance)
   - Cinematic top ambient scrim for 100% crystal-clear brand mark visibility
   - High-impact responsive typography that gracefully adapts from mobile to ultrawide
   - Touch-friendly full-width mobile CTAs transitioning to sleek inline desktop actions
   - Bottom atelier pillars ticker responsive across all screen sizes
   ───────────────────────────────────────────── */

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0px", "0px"] : ["0px", "60px"]
  );

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.6],
    [0.55, 0.85]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.45],
    [1, 0]
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#121110] pt-32 sm:pt-40 md:pt-44 lg:pt-48 pb-8 sm:pb-12"
      aria-label="Hero"
    >
      {/* Background Image with restrained cinematic depth */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
        initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/images/placeholder-wedding-1.jpg"
          alt="ANC Events destination wedding celebration"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* Dedicated Top Vignette Scrim (Guarantees zero clash with fixed navigation header) */}
      <div
        className="absolute top-0 left-0 right-0 h-44 sm:h-52 bg-gradient-to-b from-[#121110]/95 via-[#121110]/55 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Atmospheric Dark Gradient Tint across entire screen */}
      <motion.div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-[#121110] via-[#121110]/60 to-[#121110]/30"
        style={{ opacity: overlayOpacity }}
      />

      {/* Subtle Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none z-[2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Hero Content Frame (Generous Breathing Room & Zero Header Collision) */}
      <motion.div
        className="relative container-editorial z-20 my-auto py-6 sm:py-10"
        style={{ opacity: contentOpacity }}
      >
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#E8E0D8] font-sans font-medium">
            Private Commissions &bull; 2025 / 2026
          </span>
        </motion.div>

        {/* Minimalist Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[#FAF8F5] font-light max-w-4xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl leading-[1.08] tracking-[-0.015em]"
        >
          Celebrations thoughtfully imagined.
          <br className="hidden sm:inline" />{" "}
          <span className="text-[#E8E0D8] italic font-normal">
            Experiences beautifully executed.
          </span>
        </motion.h1>

        {/* Subtitle description for SEO & editorial clarity */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-[#D1C7BD] max-w-xl font-light leading-relaxed"
        >
          An architectural event house orchestrating evocative destination weddings and bespoke milestone celebrations across India&apos;s royal heritage landscapes.
        </motion.p>

        {/* Dual CTAs — Touch Friendly on Mobile, Refined on Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3.5 sm:gap-4 sm:items-center max-w-md sm:max-w-none"
        >
          <Link
            href="/work"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-[#121110] bg-[#FAF8F5] hover:bg-[#F5F0EB] px-8 py-4 transition-all duration-300 shadow-md"
          >
            <span>Explore Our Work</span>
            <span className="text-[#121110] group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
          </Link>

          <Link
            href="/enquire"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-[#FAF8F5] border border-white/35 backdrop-blur-xs px-8 py-4 hover:bg-white/15 hover:border-white/80 transition-all duration-300"
          >
            Plan Your Event
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Atelier Pillars — Responsive Layout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative container-editorial z-20 pt-6 sm:pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[#D1C7BD] text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-sans gap-3 sm:gap-6"
      >
        <div className="flex flex-wrap items-center gap-4 sm:gap-8">
          <span className="text-[#FAF8F5]/90 font-medium">01 &bull; Architectural Scenography</span>
          <span className="text-[#FAF8F5]/90 font-medium">02 &bull; Invisible Stewardship</span>
          <span className="text-[#FAF8F5]/90 font-medium">03 &bull; Palatial Heritage</span>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-[#FAF8F5]/70 shrink-0">
          <span>Scroll to Discover</span>
          <span className="w-6 h-px bg-[#FAF8F5]/50" />
        </div>
      </motion.div>
    </section>
  );
}
