import Link from "next/link";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import { generateMetadata as getSeoMetadata } from "@/lib/seo";

export const metadata = getSeoMetadata({
  title: "Our Story — Milestones & Origins | ANC Events",
  description:
    "An editorial chronicle of ANC Events from our founding in 2015 through pioneering destination weddings, milestone cruise celebrations, and our studio in Ahmedabad today.",
  path: "/about/story",
});

const milestones = [
  {
    year: "2015",
    title: "The Beginning in Ahmedabad",
    description:
      "ANC Events was established with a singular conviction: celebrations should be architectural, deeply personal commissions rather than standardized templates. Our early work in Gujarat established a reputation for obsessive detail and calm composure.",
    image: "/images/placeholder-wedding-1.jpg",
  },
  {
    year: "2017",
    title: "Expansion into Destination Weddings",
    description:
      "As discerning families sought unhurried celebrations beyond traditional ballrooms, ANC began directing multi-day destination weddings in Udaipur, Jaipur, and across Rajasthan, integrating local heritage with international design standards.",
    image: "/images/placeholder-wedding-2.jpg",
  },
  {
    year: "2019",
    title: "Large-Scale Scenography & Production",
    description:
      "Pioneering complex spatial productions with up to 1,000 guests, our atelier developed in-house technical and logistics frameworks that allowed ambitious creative concepts to execute with invisible precision.",
    image: "/images/placeholder-wedding-3.jpg",
  },
  {
    year: "2022",
    title: "The Cruise Wedding Milestone",
    description:
      "Executing a landmark multi-day luxury cruise celebration at sea, managing international maritime logistics, guest embarkation, custom on-board scenography, and continuous hospitality across multiple ports of call.",
    image: "/images/placeholder-wedding-1.jpg",
  },
  {
    year: "Today",
    title: "A Benchmark in Discerning Luxury",
    description:
      "Operating from our atelier in Bodakdev, Ahmedabad, ANC Events commands a deliberate commission schedule across India's most extraordinary venues, maintaining our founding ethos: intention over excess.",
    image: "/images/placeholder-wedding-2.jpg",
  },
];

export default function StoryPage() {
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
          <span className="label text-stone mb-4 block">The Chronicle</span>
          <h1 className="display-xl text-charcoal font-light leading-none mb-6">
            OUR STORY
          </h1>
          <p className="body-lg text-warm-gray max-w-2xl leading-relaxed">
            From our founding in 2015 to executing pioneering celebrations across land and sea, our journey has been defined by constant creative evolution and unwavering logistical discipline.
          </p>
        </SectionReveal>

        {/* Editorial Timeline */}
        <div className="space-y-24 md:space-y-36">
          {milestones.map((item, index) => (
            <SectionReveal key={item.year}>
              <article
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Visual */}
                <div
                  className={`lg:col-span-6 ${
                    index % 2 === 1 ? "lg:col-start-7 lg:order-2" : ""
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-sand">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Narrative */}
                <div
                  className={`lg:col-span-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:order-1 lg:row-start-1" : ""
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <span className="font-display text-4xl md:text-5xl text-bronze block mb-4 font-light">
                    {item.year}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-4">
                    {item.title}
                  </h2>
                  <div className="divider-bronze mb-6" />
                  <p className="body-lg text-charcoal-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 p-12 bg-cream border border-sand flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-2">
              Be Part of Our Next Chapter
            </h3>
            <p className="text-xs text-warm-gray max-w-xl">
              Discover how we translate your family&apos;s story into an unforgettable celebration.
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
