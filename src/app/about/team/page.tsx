import Link from "next/link";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import { generateMetadata as getSeoMetadata } from "@/lib/seo";

export const metadata = getSeoMetadata({
  title: "Our Leadership — Founders & Directors | ANC Events",
  description:
    "Meet Ashish Nahata and Anushka Nahata, founders and directors of ANC Events. Editorial leadership shaping destination weddings across India.",
  path: "/about/team",
});

const team = [
  {
    name: "Ashish Nahata",
    role: "Founder & Creative Director",
    experience: "Over a decade of large-scale event production & destination management",
    philosophy:
      "A wedding must be designed as an emotional progression — where every shift in lighting, music, and spatial texture elevates the human connection.",
    bio: "With deep roots in conceptual design and rigorous operational orchestration, Ashish guides ANC Events with uncompromising aesthetic standards. Having directed celebrations ranging from palatial multi-day takeovers to pioneering cruise weddings, his leadership balances visionary scenography with clockwork precision.",
    portrait: "/images/placeholder-wedding-1.jpg",
  },
  {
    name: "Anushka Nahata",
    role: "Director & Head of Scenography",
    experience: "Curator of luxury hospitality, sensory dining, and botanical architecture",
    philosophy:
      "True luxury is felt in the understated details — the weight of a linen menu, the fragrance at the entrance, and the unhurried warmth extended to every guest.",
    bio: "Anushka infuses each ANC commission with refined spatial sensitivity and an instinctive understanding of contemporary Indian hospitality. Her creative eye oversees custom floral installations, tablescapes, and guest-centric curation, ensuring each atmosphere feels effortlessly sublime.",
    portrait: "/images/placeholder-wedding-2.jpg",
  },
];

export default function TeamPage() {
  return (
    <div className="pt-28 md:pt-40 pb-28 bg-ivory">
      <div className="container-editorial">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase text-warm-gray hover:text-charcoal transition-colors"
          >
            &larr; Back to About Overview
          </Link>
        </div>

        {/* Header */}
        <SectionReveal className="mb-20 md:mb-28 max-w-4xl">
          <span className="label text-stone mb-4 block">The Atelier Minds</span>
          <h1 className="display-xl text-charcoal font-light leading-none mb-6">
            OUR LEADERSHIP
          </h1>
          <p className="body-lg text-warm-gray max-w-2xl leading-relaxed">
            ANC Events is led personally by its directors. We do not delegate key client relationships or design stewardship to external managers.
          </p>
        </SectionReveal>

        {/* Team Editorial Profiles */}
        <div className="space-y-28 md:space-y-40">
          {team.map((member, idx) => (
            <SectionReveal key={member.name}>
              <article
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                  idx % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Large Portrait */}
                <div
                  className={`lg:col-span-5 ${
                    idx % 2 === 1 ? "lg:col-start-8 lg:order-2" : ""
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <div className="image-reveal aspect-[3/4] relative overflow-hidden bg-sand group">
                    <Image
                      src={member.portrait}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                    <div className="absolute bottom-4 left-4 bg-deep/80 text-ivory text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Biography & Philosophy */}
                <div
                  className={`lg:col-span-7 ${
                    idx % 2 === 1 ? "lg:col-start-1 lg:order-1 lg:row-start-1" : ""
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <span className="label-sm text-stone block mb-2">{member.role}</span>
                  <h2 className="display-md text-charcoal mb-4">{member.name}</h2>

                  {/* Personal Philosophy Quote */}
                  <blockquote className="font-display text-xl md:text-2xl text-charcoal italic border-l-2 border-bronze pl-6 py-1 my-6 leading-relaxed">
                    &ldquo;{member.philosophy}&rdquo;
                  </blockquote>

                  <p className="body-lg text-charcoal-light leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="pt-6 border-t border-sand">
                    <span className="text-xs uppercase tracking-widest text-stone block mb-1">
                      Background & Domain
                    </span>
                    <p className="text-sm font-medium text-charcoal">
                      {member.experience}
                    </p>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 p-12 bg-cream border border-sand flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-2">
              Meet With Ashish & Anushka
            </h3>
            <p className="text-xs text-warm-gray max-w-xl">
              Arrange an initial private conversation at our Bodakdev studio or via secure digital consultation.
            </p>
          </div>
          <Link href="/enquire" className="btn-primary whitespace-nowrap">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
