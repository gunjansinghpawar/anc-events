"use client";

/* ─────────────────────────────────────────────
   ANC Events — Contact & Private Atelier
   
   "LET'S CREATE SOMETHING EXTRAORDINARY."
   - Editorial invitation layout
   - Verified communication channels
   - Studio appointment protocol
   ───────────────────────────────────────────── */

import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";

export default function ContactPage() {
  const email = process.env.NEXT_PUBLIC_EMAIL || "contact@ancevents.in";
  const phone = process.env.NEXT_PUBLIC_PHONE || "+91 98250 00000";
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP;
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com";
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com";
  const mapsUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || "https://maps.google.com/?q=Bodakdev,Ahmedabad";

  return (
    <div className="pt-28 md:pt-40 pb-28 bg-ivory">
      <div className="container-editorial">
        {/* Main Editorial Invitation Header */}
        <SectionReveal className="mb-16 md:mb-24 max-w-4xl">
          <span className="label text-stone mb-4 block">Get In Touch</span>
          <h1 className="display-xl text-charcoal font-light leading-none mb-8">
            LET&apos;S CREATE SOMETHING EXTRAORDINARY.
          </h1>
          <div className="divider-bronze mb-8" />
          <p className="body-lg text-warm-gray max-w-2xl leading-relaxed">
            From the initial creative impulse to the final quiet hours after a celebration, our studio works in deep partnership with a select number of hosts each year.
          </p>
        </SectionReveal>

        {/* Studio & Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-20 border-b border-sand">
          {/* Atelier Details */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="label-sm text-stone block mb-2">Private Studio</span>
              <h2 className="font-display text-3xl text-charcoal mb-3">Bodakdev, Ahmedabad</h2>
              <p className="body-lg text-charcoal-light leading-relaxed">
                Gujarat, India
              </p>
              <p className="text-xs text-warm-gray mt-2 leading-relaxed">
                Consultations are hosted at our studio by appointment to ensure confidentiality and undivided attention.
              </p>
            </div>

            <div className="pt-4 border-t border-sand">
              <span className="label-sm text-stone block mb-4">Direct Channels</span>
              <div className="space-y-4 text-sm font-sans">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-stone block mb-0.5">Electronic Mail</span>
                  <a href={`mailto:${email}`} className="text-charcoal hover:text-bronze transition-colors">
                    {email}
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-stone block mb-0.5">Telephone</span>
                  <a href={`tel:${phone}`} className="text-charcoal hover:text-bronze transition-colors">
                    {phone}
                  </a>
                </div>
                {whatsapp && (
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-stone block mb-0.5">Direct WhatsApp</span>
                    <a
                      href={`https://wa.me/${whatsapp}?text=Hello%20ANC%20Events%2C%20I%20would%20like%20to%20arrange%20a%20consultation.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal hover:text-bronze transition-colors"
                    >
                      Connect with the Directors
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-sand">
              <span className="label-sm text-stone block mb-4">Social & Location</span>
              <div className="flex flex-wrap gap-6 text-xs tracking-wider uppercase font-medium">
                <a href={instagram} target="_blank" rel="noopener noreferrer" className="editorial-link">
                  Instagram
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="editorial-link">
                  LinkedIn
                </a>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="editorial-link">
                  Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Value Enquiry Callout */}
          <div className="lg:col-span-7 flex flex-col justify-between p-10 md:p-14 bg-cream border border-sand">
            <div>
              <span className="label-sm text-stone block mb-3">Planning a Wedding or Private Event?</span>
              <h3 className="font-display text-3xl md:text-4xl text-charcoal mb-6 leading-tight">
                Tell us about your celebration.
              </h3>
              <p className="body-lg text-charcoal-light leading-relaxed mb-8">
                Whether you are exploring palatial venues in Rajasthan, an intimate coastal sanctuary in Goa, or an architectural reception in Gujarat, we invite you to complete our private commission inquiry.
              </p>
            </div>

            <div>
              <Link href="/enquire" className="btn-primary inline-flex">
                Complete Commission Inquiry &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
