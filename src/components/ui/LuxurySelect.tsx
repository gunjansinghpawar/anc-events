"use client";

/* ─────────────────────────────────────────────
   ANC Events — Luxury Select Component
   
   Replaces default OS form dropdowns with a bespoke,
   editorial selector. No ugly blue browser highlighting.
   Fully keyboard accessible (ESC, Enter, Space).
   ───────────────────────────────────────────── */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface LuxurySelectOption {
  value: string;
  label: string;
  sublabel?: string;
}

interface LuxurySelectProps {
  id?: string;
  label?: string;
  options: LuxurySelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function LuxurySelect({
  id,
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
}: LuxurySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative w-full" ref={containerRef}>
      {label && (
        <label
          htmlFor={id}
          className="form-label"
          onClick={() => setIsOpen(!isOpen)}
        >
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="w-full text-left py-3.5 border-b border-sand text-sm flex items-center justify-between transition-colors duration-200 focus:outline-none focus:border-charcoal group"
      >
        <span
          className={`font-sans tracking-wide ${
            selectedOption ? "text-charcoal font-medium" : "text-stone"
          }`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        {/* Custom Chevron Indicator */}
        <span
          className={`text-stone group-hover:text-charcoal transition-transform duration-200 ${
            isOpen ? "rotate-180 text-charcoal" : ""
          }`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      {/* Bespoke Dropdown Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 z-50 mt-1 bg-ivory border border-sand shadow-lg py-1.5 max-h-64 overflow-y-auto"
          >
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2.5 cursor-pointer text-xs transition-colors flex items-center justify-between ${
                    isSelected
                      ? "bg-cream text-charcoal font-medium"
                      : "text-charcoal hover:bg-cream/60"
                  }`}
                >
                  <div>
                    <span className="block font-sans">{option.label}</span>
                    {option.sublabel && (
                      <span className="block text-[10px] text-warm-gray mt-0.5">
                        {option.sublabel}
                      </span>
                    )}
                  </div>

                  {isSelected && (
                    <span className="text-bronze text-xs ml-3">&bull;</span>
                  )}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
