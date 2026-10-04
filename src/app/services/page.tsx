import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import SectionReveal from "@/components/ui/SectionReveal";
import { generateMetadata as getSeoMetadata } from "@/lib/seo";

export const metadata = getSeoMetadata({
  title: "Our Services — Destination Weddings & Event Production | ANC Events",
  description:
    "Explore our full suite of event disciplines: Destination Weddings, Wedding Planning, Event Design, Décor & Floral, Entertainment, Guest Experience, and Travel & Logistics.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="pt-28 md:pt-40 pb-28 bg-ivory">
      <div className="container-editorial">
        {/* Header */}
        <SectionReveal className="mb-20 md:mb-28 max-w-4xl">
          <span className="label text-stone mb-4 block">The Practice</span>
          <h1 className="display-xl text-charcoal font-light leading-none mb-6">
            OUR CAPABILITIES
          </h1>
          <p className="body-lg text-warm-gray max-w-2xl leading-relaxed">
            We do not treat wedding planning as a routine checklist. We view each celebration as an architectural and sensory commission, providing turnkey stewardship across design, hospitality, and logistics.
          </p>
        </SectionReveal>

        {/* Large Service Stories (Not tiny cards) */}
        <div className="space-y-32 md:space-y-48 mb-36">
          {services.map((service, index) => (
            <SectionReveal key={service.id}>
              <article
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Large Visual */}
                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? "lg:col-start-6 lg:order-2" : ""
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <Link href={`/services/${service.slug}`} className="group block">
                    <div className="image-reveal aspect-[16/11] relative overflow-hidden bg-sand">
                      <Image
                        src={service.coverImage.src}
                        alt={service.coverImage.alt}
                        fill
                        className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
                    </div>
                  </Link>
                </div>

                {/* Narrative & Discover Action */}
                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:order-1 lg:row-start-1" : ""
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <span className="label-sm text-stone block mb-2">
                    Discipline 0{index + 1}
                  </span>
                  <h2 className="display-md text-charcoal mb-4">
                    {service.title.toUpperCase()}
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-bronze mb-6 font-medium">
                    {service.subtitle}
                  </p>
                  <p className="body-lg text-charcoal-light mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.2em] uppercase text-charcoal border border-charcoal/30 px-6 py-3 hover:bg-charcoal hover:text-ivory transition-all duration-300"
                  >
                    Discover Service &rarr;
                  </Link>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="p-12 md:p-20 bg-cream border border-sand flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="label-sm text-stone block mb-2">Private Consultation</span>
            <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-2">
              Require Turnkey Direction?
            </h3>
            <p className="text-xs text-warm-gray max-w-xl">
              Discuss dates, guest numbers, and scope requirements with our principal directors.
            </p>
          </div>
          <Link href="/enquire" className="btn-primary whitespace-nowrap">
            Begin with an Enquiry
          </Link>
        </div>
      </div>
    </div>
  );
}
