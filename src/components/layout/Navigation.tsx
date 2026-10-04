"use client";

/* ─────────────────────────────────────────────
   ANC Events — Premium Editorial Navigation
   
   - Transparent over hero, transitions to luxury frosted glass on scroll
   - Restrained desktop mega menus with supporting imagery & descriptions
   - Full-screen editorial mobile drawer with supporting imagery
   - All animations terminate cleanly at rest state (no loops)
   ───────────────────────────────────────────── */

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { mainNavigation } from "@/data/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    const timer = setTimeout(handleScroll, 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Adjust state during render when pathname changes
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileOpen(false);
    setActiveMenu(null);
  }

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const isHeroPage = pathname === "/";
  const isSolid = isScrolled || !isHeroPage;
  const currentActiveItem = mainNavigation.find((i) => i.label === activeMenu);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isSolid
            ? "glass-header-scrolled"
            : "bg-gradient-to-b from-[#121110]/85 via-[#121110]/45 to-transparent border-b border-white/10 backdrop-blur-[2px]"
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <nav
          className="container-editorial flex items-center justify-between h-18 md:h-20"
          aria-label="Main navigation"
        >
          {/* Brand Mark */}
          <Link
            href="/"
            className="relative z-10 group flex flex-col py-1"
            aria-label="ANC Events — Home"
          >
            <span
              className={`font-display text-lg md:text-xl lg:text-2xl tracking-[0.16em] font-light transition-colors duration-300 ${
                isSolid ? "text-charcoal group-hover:text-bronze" : "text-[#FAF8F5] group-hover:text-sand"
              }`}
            >
              ANC EVENTS
            </span>
            <span
              className={`text-[7.5px] md:text-[8px] tracking-[0.24em] uppercase font-sans font-medium transition-colors duration-300 ${
                isSolid ? "text-warm-gray" : "text-[#E8E0D8]/90"
              }`}
            >
              Atelier Bodakdev &bull; Ahmedabad
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {mainNavigation.map((item) => {
              const hasDropdown = Boolean(item.children && item.children.length > 0);
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const isHovered = activeMenu === item.label;

              return (
                <div
                  key={item.label}
                  className="relative py-2"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(item.label)}
                >
                  <Link
                    href={item.href}
                    className={`group/link inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${
                      isSolid
                        ? isActive
                          ? "text-bronze"
                          : isHovered
                          ? "text-bronze"
                          : "text-charcoal hover:text-bronze"
                        : isActive
                        ? "text-ivory"
                        : isHovered
                        ? "text-ivory"
                        : "text-ivory/80 hover:text-ivory"
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className={`transition-transform duration-300 opacity-60 group-hover/link:opacity-100 ${
                          isHovered ? "rotate-180 text-bronze" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <path d="M2 3.5L5 6.5L8 3.5" />
                      </svg>
                    )}
                  </Link>

                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${
                        isSolid ? "bg-bronze" : "bg-ivory"
                      }`}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              );
            })}

            {/* Enquire CTA Button */}
            <Link
              href="/enquire"
              className={`relative inline-flex items-center justify-center text-[10px] font-medium tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-300 overflow-hidden ${
                isSolid
                  ? "bg-charcoal text-ivory hover:bg-bronze hover:shadow-md"
                  : "bg-ivory/15 text-ivory border border-ivory/30 backdrop-blur-xs hover:bg-ivory hover:text-deep hover:border-ivory"
              }`}
            >
              <span>Enquire</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden relative z-10 w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            <span
              className={`block w-6 h-[1.5px] transition-transform duration-300 ${
                isMobileOpen
                  ? "rotate-45 translate-y-[4px] bg-ivory"
                  : isSolid
                  ? "bg-charcoal"
                  : "bg-ivory"
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] transition-transform duration-300 ${
                isMobileOpen
                  ? "-rotate-45 -translate-y-[4px] bg-ivory"
                  : isSolid
                  ? "bg-charcoal"
                  : "bg-ivory"
              }`}
            />
          </button>
        </nav>

        {/* Desktop Mega Menu Panel */}
        <AnimatePresence>
          {activeMenu && currentActiveItem && currentActiveItem.children && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block absolute top-full left-0 right-0 bg-ivory/98 backdrop-blur-2xl border-b border-sand/80 shadow-[0_20px_50px_rgba(44,40,37,0.08)]"
              onMouseEnter={() => handleMouseEnter(activeMenu)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="container-editorial py-10">
                <div className="grid grid-cols-12 gap-10 items-start">
                  {/* Left Column: Mega Links Grid */}
                  <div className="col-span-8">
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-sand/60">
                      <span className="label-sm text-stone tracking-[0.2em]">
                        {currentActiveItem.label} Index
                      </span>
                      <Link
                        href={currentActiveItem.href}
                        className="text-[11px] uppercase tracking-[0.16em] text-bronze hover:underline"
                        onClick={() => setActiveMenu(null)}
                      >
                        View All {currentActiveItem.label} &rarr;
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {currentActiveItem.children.map((child) => (
                        <Link
                          key={child.href + child.label}
                          href={child.href}
                          className="group block p-3 -m-2 rounded-sm hover:bg-cream/60 transition-all duration-200"
                          onClick={() => setActiveMenu(null)}
                        >
                          <h4 className="font-display text-base text-charcoal group-hover:text-bronze transition-colors flex items-center justify-between">
                            <span>{child.label}</span>
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-xs text-bronze">
                              &rarr;
                            </span>
                          </h4>
                          {child.description && (
                            <p className="text-xs text-warm-gray mt-1 leading-relaxed line-clamp-1">
                              {child.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: One Large Supporting Image & Preview */}
                  {currentActiveItem.megaPreview && (
                    <div className="col-span-4 pl-8 border-l border-sand/70">
                      <Link
                        href={currentActiveItem.megaPreview.href}
                        className="group block"
                        onClick={() => setActiveMenu(null)}
                      >
                        <div className="aspect-[16/10] relative overflow-hidden bg-sand mb-4 rounded-[2px] shadow-sm">
                          <Image
                            src={currentActiveItem.megaPreview.image}
                            alt={currentActiveItem.megaPreview.title}
                            fill
                            className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                            sizes="33vw"
                          />
                          <div className="absolute top-3 left-3 bg-deep/80 backdrop-blur-xs text-ivory text-[9px] tracking-[0.2em] uppercase px-2.5 py-1">
                            Curated Focus
                          </div>
                        </div>
                        <span className="label-sm text-stone block mb-1">
                          Featured Showcase
                        </span>
                        <h5 className="font-display text-lg text-charcoal group-hover:text-bronze transition-colors">
                          {currentActiveItem.megaPreview.title}
                        </h5>
                        <p className="text-xs text-warm-gray mt-1">
                          {currentActiveItem.megaPreview.subtitle}
                        </p>
                      </Link>

                      {/* Direct Concierge Prompt */}
                      <div className="mt-6 pt-5 border-t border-sand/60">
                        <Link
                          href="/contact"
                          className="text-[11px] tracking-[0.14em] uppercase text-charcoal-light hover:text-bronze flex items-center gap-2 transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          <span>Direct Atelier Concierge</span>
                          <span className="text-bronze">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-deep flex flex-col justify-between p-6 md:p-12 overflow-y-auto"
          >
            {/* Top Bar Spacer */}
            <div className="h-16" />

            {/* Links & Large Supporting Visual */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto">
              <nav className="md:col-span-7 space-y-3" aria-label="Mobile menu">
                {mainNavigation.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="font-display text-2xl md:text-3xl text-ivory hover:text-bronze transition-colors block py-1"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {item.label}
                    </Link>

                    {item.children && (
                      <div className="pl-3 pt-1 pb-2 flex flex-wrap gap-x-4 gap-y-1">
                        {item.children.slice(0, 4).map((sub) => (
                          <Link
                            key={sub.href + sub.label}
                            href={sub.href}
                            className="text-xs tracking-wider uppercase text-stone hover:text-ivory transition-colors py-1"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}

                <div className="pt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/enquire"
                    className="inline-block text-center text-[11px] font-medium tracking-[0.2em] uppercase text-deep bg-ivory px-6 py-3.5 hover:bg-cream transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Start an Inquiry
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block text-center text-[11px] font-medium tracking-[0.2em] uppercase text-ivory border border-white/20 px-6 py-3.5 hover:border-white/60 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Atelier Contact
                  </Link>
                </div>
              </nav>

              {/* Supporting Event Image in Mobile Drawer */}
              <div className="hidden md:block md:col-span-5">
                <div className="aspect-[4/5] relative overflow-hidden bg-stone/20 border border-white/10 rounded-[2px]">
                  <Image
                    src="/images/placeholder-wedding-1.jpg"
                    alt="ANC Events destination celebration"
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-transparent to-transparent flex flex-col justify-end p-6">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-stone">
                      Atelier Bodakdev
                    </span>
                    <span className="font-display text-lg text-ivory mt-1">
                      Conceived with Intention
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Footer Coordinates */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between text-stone text-xs gap-3 font-sans">
              <span>Bodakdev, Ahmedabad, Gujarat, India</span>
              <span>contact@ancevents.in</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
