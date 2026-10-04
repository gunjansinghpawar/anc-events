"use client";

/* ─────────────────────────────────────────────
   ANC Events — Elevated Luxury Editorial Footer
   
   - Curated Private Dispatch / Newsletter Box
   - Live Atelier Clock in Ahmedabad (IST)
   - Architectural Column Hierarchy & Portfolio Links
   - Grand Ambient Typography Watermark ("ANC EVENTS")
   - Smooth "Return to Top" Action & Discretion Guarantees
   ───────────────────────────────────────────── */

import { useState, useEffect } from "react";
import Link from "next/link";
import { footerNavigation } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [istTime, setIstTime] = useState<string>("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
        });
        setIstTime(`${formatted} IST`);
      } catch {
        setIstTime("Ahmedabad, India");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-deep text-ivory overflow-hidden pt-20 md:pt-28 pb-12" role="contentinfo">
      {/* Grand Atmospheric Watermark */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full text-center watermark-text select-none pointer-events-none opacity-40"
        aria-hidden="true"
      >
        <span className="text-[clamp(3.5rem,13vw,11rem)] tracking-[0.2em] uppercase font-light text-stone/10">
          ANC EVENTS
        </span>
      </div>

      <div className="container-editorial relative z-10">
        {/* Top Atelier Dispatch & Clock Banner */}
        <div className="pb-16 mb-16 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Dispatch Subscription */}
          <div className="lg:col-span-7">
            <span className="label-sm text-stone block mb-3">
              Private Atelier Dispatch
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-ivory font-light mb-3">
              Dispatches on scenography, destinations & availability.
            </h3>
            <p className="text-xs text-stone leading-relaxed max-w-lg mb-6">
              A quarterly monograph curated by our directors for discerning couples and patrons of bespoke celebration.
            </p>

            {subscribed ? (
              <p className="text-xs tracking-wider text-bronze uppercase font-medium">
                Thank you. You have been added to our private dispatch.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-white/5 border border-white/15 px-4 py-3 text-xs text-ivory placeholder:text-stone/60 outline-none focus:border-bronze flex-1 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-ivory text-deep hover:bg-cream text-[10px] tracking-[0.2em] uppercase font-medium px-6 py-3 transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Live Studio Coordinates & Clock */}
          <div className="lg:col-span-5 flex flex-col lg:items-end justify-between h-full pt-4 lg:pt-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone font-sans">
                Atelier Bodakdev Active
              </span>
            </div>
            <div className="font-display text-3xl md:text-4xl text-sand font-light">
              {istTime || "Ahmedabad, India"}
            </div>
            <p className="text-xs text-stone mt-1">
              Bodakdev &bull; Ahmedabad, Gujarat &bull; 23.0338° N, 72.5070° E
            </p>
          </div>
        </div>

        {/* 4 Architectural Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
          {/* Brand Manifesto */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4" aria-label="ANC Events">
              <span className="font-display text-2xl tracking-[0.14em] font-light text-ivory">
                ANC EVENTS
              </span>
            </Link>
            <p className="text-[10px] tracking-[0.16em] uppercase text-bronze mb-4">
              Destination Weddings & Bespoke Celebrations
            </p>
            <p className="text-xs text-stone leading-relaxed max-w-sm mb-6">
              An architectural event house orchestrating evocative celebrations across India&apos;s royal palaces, coastal sanctuaries, and private heritage estates.
            </p>
            <div className="text-[11px] text-warm-gray space-y-1">
              <p>Atelier Bodakdev, Ahmedabad, Gujarat</p>
              <p>Pan-India & International Production</p>
            </div>
          </div>

          {/* Selected Work */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-stone mb-5 font-sans">
              Portfolio
            </h4>
            <ul className="space-y-2.5 text-xs text-stone">
              <li>
                <Link href="/work" className="hover:text-ivory transition-colors">
                  All Selected Works
                </Link>
              </li>
              <li>
                <Link href="/work/destination-weddings" className="hover:text-ivory transition-colors">
                  Destination Weddings
                </Link>
              </li>
              <li>
                <Link href="/work/weddings" className="hover:text-ivory transition-colors">
                  Palatial Receptions
                </Link>
              </li>
              <li>
                <Link href="/work/bespoke-events" className="hover:text-ivory transition-colors">
                  Bespoke Galas
                </Link>
              </li>
              <li>
                <Link href="/work/event-design" className="hover:text-ivory transition-colors">
                  Event Scenography
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Destinations */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-stone mb-5 font-sans">
              Services & Destinations
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2.5 text-xs text-stone">
                <li>
                  <Link href="/services/wedding-planning" className="hover:text-ivory transition-colors">
                    Planning
                  </Link>
                </li>
                <li>
                  <Link href="/services/event-design" className="hover:text-ivory transition-colors">
                    Scenography
                  </Link>
                </li>
                <li>
                  <Link href="/services/decor-floral" className="hover:text-ivory transition-colors">
                    Botanicals
                  </Link>
                </li>
                <li>
                  <Link href="/services/hospitality" className="hover:text-ivory transition-colors">
                    Hospitality
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2.5 text-xs text-stone">
                <li>
                  <Link href="/destinations/udaipur" className="hover:text-ivory transition-colors">
                    Udaipur
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/jaipur" className="hover:text-ivory transition-colors">
                    Jaipur
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/ahmedabad" className="hover:text-ivory transition-colors">
                    Ahmedabad
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/goa" className="hover:text-ivory transition-colors">
                    Goa
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* The Atelier & Direct Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-stone mb-5 font-sans">
              Private Concierge
            </h4>
            <ul className="space-y-2.5 text-xs text-stone">
              <li>
                <Link href="/about" className="hover:text-ivory transition-colors">
                  The ANC Ethos & Team
                </Link>
              </li>
              <li>
                <Link href="/about/approach" className="hover:text-ivory transition-colors">
                  5-Step Methodology
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-ivory transition-colors">
                  Perspectives & Journal
                </Link>
              </li>
              <li>
                <Link href="/enquire" className="text-sand hover:text-ivory transition-colors font-medium">
                  Start an Inquiry &rarr;
                </Link>
              </li>
              {process.env.NEXT_PUBLIC_WHATSAPP && (
                <li>
                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ivory transition-colors"
                  >
                    Direct WhatsApp
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-8" />

        {/* Bottom Legal & Return to Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.12em] uppercase text-stone font-sans">
          <p>© {currentYear} ANC Events. Crafted with intention in Ahmedabad.</p>

          <div className="flex flex-wrap items-center gap-6">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-ivory transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-stone hover:text-ivory transition-colors cursor-pointer group"
              aria-label="Return to top of page"
            >
              <span>Back to Top</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="group-hover:-translate-y-0.5 transition-transform"
                aria-hidden="true"
              >
                <path d="M6 10V2M2 6l4-4 4 4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
