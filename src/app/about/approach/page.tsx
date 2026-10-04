import Link from "next/link";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import { generateMetadata as getSeoMetadata } from "@/lib/seo";

export const metadata = getSeoMetadata({
  title: "Our Approach — The 5-Step Methodology | ANC Events",
  description:
    "Discover the 5-step ANC Events methodology: Discover, Imagine, Curate, Execute, and Deliver. An architectural and sensory approach to luxury celebrations.",
  path: "/about/approach",
});

const steps = [
  {
    number: "01",
    label: "DISCOVER",
    headline: "Uncovering the Emotional Architecture",
    description:
      "We begin long before sketches or mood boards are created. Through unhurried conversations, we immerse ourselves in your aesthetic preferences, family traditions, personal histories, and the feelings you wish your guests to carry with them.",
    image: "/images/placeholder-wedding-1.jpg",
  },
  {
    number: "02",
    label: "IMAGINE",
    headline: "Scenography, Space & Light",
    description:
      "Every venue presents a spatial dialogue. We conceive custom environments — drafting floor plans, lighting narratives, botanical structures, and architectural pavilions designed to harmonize with the surroundings.",
    image: "/images/placeholder-wedding-2.jpg",
  },
  {
    number: "03",
    label: "CURATE",
    headline: "Assembling Exceptional Artisans",
    description:
      "A masterpiece demands master craftsmen. We curate and align the country’s finest culinary innovators, floral artists, classical and contemporary performers, sound engineers, and hospitality specialists under unified direction.",
    image: "/images/placeholder-wedding-3.jpg",
  },
  {
    number: "04",
    label: "EXECUTE",
    headline: "Relentless Logistical Discipline",
    description:
      "Behind the poetry lies mathematical precision. Run-sheets timed to the minute, charter transit protocols, luxury guest check-ins, microclimate contingencies, and acoustic balancing are orchestrated with calm authority.",
    image: "/images/placeholder-wedding-1.jpg",
  },
  {
    number: "05",
    label: "DELIVER",
    headline: "Invisible Presence, Total Immersion",
    description:
      "On the days of celebration, our leadership moves with quiet discretion. You and your guests experience only effortless rhythm, breathtaking aesthetics, and moments that linger in memory long after the music fades.",
    image: "/images/placeholder-wedding-2.jpg",
  },
];

export default function ApproachPage() {
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
        <SectionReveal className="mb-20 md:mb-32 max-w-4xl">
          <span className="label text-stone mb-4 block">The Methodology</span>
          <h1 className="display-xl text-charcoal font-light leading-none mb-6">
            OUR APPROACH
          </h1>
          <p className="body-lg text-warm-gray max-w-2xl leading-relaxed">
            We don’t rely on templates. Our 5-step process balances artistic audacity with rigorous operational discipline to deliver transcendent events.
          </p>
        </SectionReveal>

        {/* The 5 Steps */}
        <div className="space-y-32 md:space-y-44">
          {steps.map((step, idx) => (
            <SectionReveal key={step.number}>
              <article
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                  idx % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Visual */}
                <div
                  className={`lg:col-span-7 ${
                    idx % 2 === 1 ? "lg:col-start-6 lg:order-2" : ""
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <div className="aspect-[16/11] relative overflow-hidden bg-sand">
                    <Image
                      src={step.image}
                      alt={step.headline}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                </div>

                {/* Narrative */}
                <div
                  className={`lg:col-span-5 ${
                    idx % 2 === 1 ? "lg:col-start-1 lg:order-1 lg:row-start-1" : ""
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <span className="font-display text-5xl md:text-7xl text-bronze block mb-4 font-light">
                    {step.number}
                  </span>
                  <span className="label-sm text-stone block mb-2">{step.label}</span>
                  <h2 className="display-sm text-charcoal mb-6">
                    {step.headline}
                  </h2>
                  <div className="divider-bronze mb-6" />
                  <p className="body-lg text-charcoal-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-36 p-12 bg-cream border border-sand flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-2">
              Experience the ANC Methodology
            </h3>
            <p className="text-xs text-warm-gray max-w-xl">
              Discuss dates, venues, and custom concepts with our principal directors.
            </p>
          </div>
          <Link href="/enquire" className="btn-primary whitespace-nowrap">
            Begin the Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
