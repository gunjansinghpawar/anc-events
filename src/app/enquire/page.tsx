"use client";

/* ─────────────────────────────────────────────
   ANC Events — Dedicated 4-Step Enquiry Experience
   
   01 — ABOUT YOU
   02 — YOUR EVENT
   03 — YOUR VISION
   04 — REVIEW & CONFIRMATION
   
   - Custom LuxurySelect components (No default OS blue selects)
   - Step indicator, validation, back/next controls
   - Refined, mature editorial confirmation
   ───────────────────────────────────────────── */

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import LuxurySelect, { LuxurySelectOption } from "@/components/ui/LuxurySelect";

const STEPS = [
  { number: "01", label: "ABOUT YOU" },
  { number: "02", label: "YOUR EVENT" },
  { number: "03", label: "YOUR VISION" },
  { number: "04", label: "REVIEW" },
];

const eventTypeOptions: LuxurySelectOption[] = [
  { value: "destination-wedding", label: "Destination Wedding (Multi-Day)", sublabel: "Heritage palace or coastal takeover" },
  { value: "city-wedding", label: "City Wedding & Receptions", sublabel: "Ballroom or private estate" },
  { value: "sangeet-reception", label: "Sangeet & Evening Celebration", sublabel: "Immersive scenography & live performances" },
  { value: "bespoke-milestone", label: "Private Milestone / Anniversary", sublabel: "Intimate curated gathering" },
  { value: "corporate-gala", label: "Corporate Gala / Brand Experience", sublabel: "Architectural production & hospitality" },
];

const destinationOptions: LuxurySelectOption[] = [
  { value: "udaipur", label: "Udaipur, Rajasthan", sublabel: "City of Lakes & heritage palaces" },
  { value: "jaipur", label: "Jaipur, Rajasthan", sublabel: "The Pink City & royal forts" },
  { value: "ahmedabad", label: "Ahmedabad, Gujarat", sublabel: "Our home base, clubs & havelis" },
  { value: "goa", label: "Goa (Coastal)", sublabel: "Beachfront villas & sunset lawns" },
  { value: "jodhpur", label: "Jodhpur, Rajasthan", sublabel: "The Blue City & fortress grandeur" },
  { value: "other-india", label: "Other Destination in India", sublabel: "Custom regional scouting" },
  { value: "international", label: "International Destination", sublabel: "Worldwide commissions" },
];

const guestCountOptions: LuxurySelectOption[] = [
  { value: "under-150", label: "Under 150 guests", sublabel: "Intimate, high-touch gathering" },
  { value: "150-300", label: "150 – 300 guests", sublabel: "Classic destination wedding scale" },
  { value: "300-600", label: "300 – 600 guests", sublabel: "Grand celebration with multi-venue logistics" },
  { value: "600-plus", label: "600+ guests", sublabel: "Large-scale palatial production" },
];

const budgetOptions: LuxurySelectOption[] = [
  { value: "curated", label: "Curated Luxury Tier", sublabel: "Comprehensive event architecture" },
  { value: "bespoke", label: "Bespoke Palatial Tier", sublabel: "Turnkey multi-day destination takeover" },
  { value: "undisclosed", label: "To Be Discussed in Consultation", sublabel: "Flexible bespoke allocation" },
];

export default function EnquirePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "destination-wedding",
    destination: "udaipur",
    date: "",
    guestCount: "150-300",
    budget: "curated",
    services: ["planning", "decor", "hospitality"],
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (step: number) => {
    const errs: Record<string, string> = {};
    if (step === 1) {
      if (!formData.name.trim()) errs.name = "Please enter your name.";
      if (!formData.email.trim() || !formData.email.includes("@"))
        errs.email = "Please enter a valid email address.";
      if (!formData.phone.trim()) errs.phone = "Please enter your contact number.";
    }
    if (step === 2) {
      if (!formData.date.trim())
        errs.date = "Please specify anticipated dates or season.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handleServiceToggle = (serviceKey: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceKey);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== serviceKey)
          : [...prev.services, serviceKey],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP;

  return (
    <div className="pt-28 md:pt-36 pb-24">
      <div className="container-editorial">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <p className="label mb-3">Private Commission Inquiry</p>
          <h1 className="display-lg text-charcoal mb-4">
            Plan your celebration with ANC Events
          </h1>
          <p className="body-lg text-warm-gray">
            We limit the number of commissions we accept each season to ensure personal attention and unmatched precision. Please share your celebration details below.
          </p>
        </div>

        {/* 4-Step Progress Indicator */}
        {!submitted && (
          <div className="mb-14 border-b border-sand pb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {STEPS.map((s, idx) => {
                const stepNum = idx + 1;
                const isCurrent = currentStep === stepNum;
                const isCompleted = currentStep > stepNum;

                return (
                  <div
                    key={s.number}
                    className={`transition-colors ${
                      isCurrent
                        ? "border-b-2 border-charcoal pb-2"
                        : isCompleted
                        ? "border-b border-bronze pb-2"
                        : "border-b border-transparent pb-2 opacity-40"
                    }`}
                  >
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-medium block">
                      {s.number} — {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Confirmation Screen */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto p-10 md:p-16 bg-cream border border-sand text-center"
          >
            <span className="label-sm text-stone block mb-3">Commission Inquiry Logged</span>
            <h2 className="display-md mb-6 text-charcoal">
              Thank you, {formData.name}.
            </h2>
            <p className="font-display text-xl md:text-2xl text-charcoal-light italic mb-8">
              &ldquo;We look forward to hearing about your celebration.&rdquo;
            </p>
            <p className="body-lg text-warm-gray max-w-xl mx-auto mb-10 leading-relaxed">
              Our directors personally review each submission. We will contact you at <strong className="text-charcoal font-medium">{formData.email}</strong> or by phone within 24 to 48 business hours to arrange an introductory consultation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/work" className="btn-outline">
                Explore Selected Works
              </Link>

              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello%20ANC%20Events%2C%20I%20have%20submitted%20an%20inquiry%20for%20${formData.eventType}%20in%20${formData.destination}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Direct WhatsApp Connect
                </a>
              )}
            </div>
          </motion.div>
        ) : (
          /* Multi-Step Form */
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-ivory border border-sand p-8 md:p-14"
          >
            <AnimatePresence mode="wait">
              {/* STEP 1: ABOUT YOU */}
              {currentStep === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="label-sm text-stone block mb-1">01 / Personal Details</span>
                    <h2 className="font-display text-2xl text-charcoal">Who is celebrating?</h2>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="name">
                      Full Name(s) *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Priya Shah & Aditya Mehta"
                      className="form-input text-base"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                    />
                    {errors.name && (
                      <p className="text-xs text-bronze mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="form-label" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@domain.com"
                        className="form-input text-base"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                      />
                      {errors.email && (
                        <p className="text-xs text-bronze mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="form-label" htmlFor="phone">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98250 00000"
                        className="form-input text-base"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                      />
                      {errors.phone && (
                        <p className="text-xs text-bronze mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: YOUR EVENT */}
              {currentStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="label-sm text-stone block mb-1">02 / The Celebration</span>
                    <h2 className="font-display text-2xl text-charcoal">Event details & setting</h2>
                  </div>

                  <div>
                    <LuxurySelect
                      id="eventType"
                      label="Event Type"
                      options={eventTypeOptions}
                      value={formData.eventType}
                      onChange={(val) => setFormData({ ...formData, eventType: val })}
                    />
                  </div>

                  <div>
                    <LuxurySelect
                      id="destination"
                      label="Desired Destination / Region"
                      options={destinationOptions}
                      value={formData.destination}
                      onChange={(val) => setFormData({ ...formData, destination: val })}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="form-label" htmlFor="date">
                        Anticipated Dates or Season *
                      </label>
                      <input
                        id="date"
                        type="text"
                        placeholder="e.g. November 2025 or Winter 2025"
                        className="form-input text-base"
                        value={formData.date}
                        onChange={(e) => {
                          setFormData({ ...formData, date: e.target.value });
                          if (errors.date) setErrors({ ...errors, date: "" });
                        }}
                      />
                      {errors.date && (
                        <p className="text-xs text-bronze mt-1">{errors.date}</p>
                      )}
                    </div>

                    <div>
                      <LuxurySelect
                        id="guestCount"
                        label="Approximate Guest Count"
                        options={guestCountOptions}
                        value={formData.guestCount}
                        onChange={(val) => setFormData({ ...formData, guestCount: val })}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: YOUR VISION */}
              {currentStep === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="label-sm text-stone block mb-1">03 / The Vision</span>
                    <h2 className="font-display text-2xl text-charcoal">Aesthetics & disciplines</h2>
                  </div>

                  <div>
                    <LuxurySelect
                      id="budget"
                      label="Investment Bracket"
                      options={budgetOptions}
                      value={formData.budget}
                      onChange={(val) => setFormData({ ...formData, budget: val })}
                    />
                  </div>

                  <div>
                    <label className="form-label">Required Disciplines</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                      {[
                        { key: "planning", label: "Turnkey Planning & Production" },
                        { key: "decor", label: "Scenography & Floral Architecture" },
                        { key: "hospitality", label: "Guest Logistics & Concierge" },
                        { key: "entertainment", label: "Entertainment & Performances" },
                        { key: "scouting", label: "Destination & Venue Scouting" },
                      ].map((item) => {
                        const checked = formData.services.includes(item.key);
                        return (
                          <button
                            key={item.key}
                            type="button"
                            onClick={() => handleServiceToggle(item.key)}
                            className={`p-3.5 text-left border text-xs font-sans tracking-wide transition-colors ${
                              checked
                                ? "bg-charcoal text-ivory border-charcoal"
                                : "bg-cream/40 text-charcoal border-sand hover:border-stone"
                            }`}
                          >
                            <span className="block font-medium">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="message">
                      Tell us about your celebration (Aesthetic, ideas, priorities)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Share what makes this celebration meaningful to you..."
                      className="form-textarea text-base"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                </motion.div>
              )}

              {/* STEP 4: REVIEW */}
              {currentStep === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="label-sm text-stone block mb-1">04 / Review</span>
                    <h2 className="font-display text-2xl text-charcoal">Verify your commission details</h2>
                  </div>

                  <div className="p-6 bg-cream border border-sand space-y-4 text-xs">
                    <div className="flex justify-between pb-3 border-b border-sand">
                      <span className="text-warm-gray uppercase tracking-wider">Host Name</span>
                      <span className="text-charcoal font-medium">{formData.name}</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-sand">
                      <span className="text-warm-gray uppercase tracking-wider">Contact</span>
                      <span className="text-charcoal font-medium">{formData.email} &bull; {formData.phone}</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-sand">
                      <span className="text-warm-gray uppercase tracking-wider">Event Type</span>
                      <span className="text-charcoal font-medium uppercase tracking-wider">
                        {eventTypeOptions.find((o) => o.value === formData.eventType)?.label}
                      </span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-sand">
                      <span className="text-warm-gray uppercase tracking-wider">Destination</span>
                      <span className="text-charcoal font-medium">
                        {destinationOptions.find((o) => o.value === formData.destination)?.label}
                      </span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-sand">
                      <span className="text-warm-gray uppercase tracking-wider">Dates / Guests</span>
                      <span className="text-charcoal font-medium">{formData.date} &bull; {formData.guestCount} guests</span>
                    </div>
                    {formData.message && (
                      <div className="pt-2">
                        <span className="text-warm-gray uppercase tracking-wider block mb-1">Notes</span>
                        <p className="text-charcoal-light italic leading-relaxed">{formData.message}</p>
                      </div>
                    )}
                  </div>

                  <p className="text-[11px] text-warm-gray">
                    By submitting, your details are held under strict confidentiality. We do not share inquiries with third parties.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step Controls */}
            <div className="pt-10 mt-10 border-t border-sand flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-[11px] uppercase tracking-[0.16em] text-warm-gray hover:text-charcoal transition-colors flex items-center gap-2"
                >
                  &larr; Back
                </button>
              ) : (
                <span />
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-primary"
                >
                  Continue &rarr;
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Submit Commission Inquiry
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
