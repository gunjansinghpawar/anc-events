"use client";

/* ─────────────────────────────────────────────
   ANC Events — Editorial Lightbox Engine
   
   - Full-screen high-res preview
   - Keyboard navigation (Esc to exit, Arrow keys to navigate)
   - Image counter (01 / 12)
   - Subtle transitions that stop properly at rest
   ───────────────────────────────────────────── */

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  isOpen: boolean;
  images: { src: string; alt: string; caption?: string }[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        onNavigate((currentIndex + 1) % images.length);
      if (e.key === "ArrowLeft")
        onNavigate((currentIndex - 1 + images.length) % images.length);
    },
    [isOpen, currentIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 bg-deep/95 backdrop-blur-md flex flex-col justify-between p-6 md:p-10 select-none"
        onClick={onClose}
      >
        {/* Top Bar: Counter & Close */}
        <div
          className="flex items-center justify-between text-ivory text-xs"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="font-mono tracking-widest text-stone text-[11px]">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </div>

          <button
            onClick={onClose}
            className="text-[11px] tracking-[0.2em] uppercase text-stone hover:text-ivory transition-colors flex items-center gap-2"
            aria-label="Close Lightbox"
          >
            <span>Close</span>
            <span className="text-lg leading-none">&times;</span>
          </button>
        </div>

        {/* Center: Image Display */}
        <div
          className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-full max-h-[82vh] flex items-center justify-center">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
              sizes="95vw"
              priority
            />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((currentIndex - 1 + images.length) % images.length);
                }}
                className="absolute left-2 md:left-6 w-12 h-12 rounded-full bg-deep/60 border border-white/20 text-ivory flex items-center justify-center hover:bg-deep transition-colors"
                aria-label="Previous image"
              >
                &larr;
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((currentIndex + 1) % images.length);
                }}
                className="absolute right-2 md:right-6 w-12 h-12 rounded-full bg-deep/60 border border-white/20 text-ivory flex items-center justify-center hover:bg-deep transition-colors"
                aria-label="Next image"
              >
                &rarr;
              </button>
            </>
          )}
        </div>

        {/* Bottom Caption */}
        <div
          className="text-center text-xs text-stone tracking-wide font-sans max-w-xl mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {current.caption || current.alt}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
