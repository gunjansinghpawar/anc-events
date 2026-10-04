"use client";

/* ─────────────────────────────────────────────
   Consultation CTA — Grand Atelier Nocturne Invitation
   
   - High-contrast radiant ivory & warm gold on deep obsidian
   - Gold hairline border framing
   - Seasonal availability status & dual clear actions
   ───────────────────────────────────────────── */

import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";

export default function ConsultationCTA() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP;
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE;

  return (
    <section
      className="relative py-28 md:py-36 bg-[#121110] text-[#FAF8F5] overflow-hidden section-dark"
      aria-labelledby="cta-heading"
    >
      {/* Subtle ambient warm radial backlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#B8956E]/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-editorial relative z-10 max-w-5xl mx-auto">
        {/* Architectural Framed Card */}
        <div className="border border-[#B8956E]/30 bg-[#1A1816]/95 p-6 sm:p-12 md:p-16 lg:p-20 rounded-[2px] shadow-2xl backdrop-blur-md text-center">
          <SectionReveal>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/5 border border-white/15 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#D1C7BD] font-sans font-medium">
                Accepting Inquiries for 2025 &ndash; 2026 Celebrations
              </span>
            </div>

            {/* High-Contrast Luminous Headline */}
            <h2
              id="cta-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF8F5] font-light mb-6 tracking-[-0.01em] leading-[1.1]"
            >
              Conceive your celebration with ANC
            </h2>

            {/* High-Contrast Readable Body */}
            <p className="text-sm sm:text-base md:text-lg text-[#D1C7BD] max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Every bespoke journey begins with an unhurried conversation. Whether you envision a palatial weekend in Rajasthan, a coastal sanctuary in Goa, or an architectural reception in Gujarat, we invite you to connect with our directors.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Link
                href="/enquire"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#121110] bg-[#FAF8F5] hover:bg-[#F5F0EB] px-9 py-4 transition-all duration-300 shadow-md group shrink-0"
              >
                <span>Start Planning</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  &rarr;
                </span>
              </Link>

              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello%20ANC%20Events%2C%20I%20would%20like%20to%20inquire%20about%20event%20planning.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#FAF8F5] border border-white/25 hover:border-white/60 hover:bg-white/10 px-8 py-4 transition-all duration-300 shrink-0"
                >
                  WhatsApp Atelier
                </a>
              )}
            </div>

            {/* Direct Telephone Line */}
            {phoneNumber && (
              <div className="mt-6">
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-[11px] tracking-[0.18em] uppercase text-[#B8AFA6] hover:text-[#FAF8F5] transition-colors inline-flex items-center gap-2"
                >
                  <span>Direct Atelier Line:</span>
                  <span className="font-mono text-[#FAF8F5]">{phoneNumber}</span>
                </a>
              </div>
            )}

            {/* Location & Discretion Guarantee */}
            <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[#8A827A] text-xs gap-4 font-sans">
              <span>Bodakdev, Ahmedabad, Gujarat, India</span>
              <span>Strict Client Discretion &amp; Confidentiality Assured</span>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
