import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/data/destinations";
import SectionReveal from "@/components/ui/SectionReveal";
import { generateMetadata as getSeoMetadata } from "@/lib/seo";

export const metadata = getSeoMetadata({
  title: "Wedding Destinations in India — Udaipur, Jaipur, Goa | ANC Events",
  description:
    "Explore our curated destination wedding hubs across India: Udaipur, Jaipur, Goa, Jodhpur, and Ahmedabad. Heritage palaces, coastal retreats, and luxury estates.",
  path: "/destinations",
});

export default function DestinationsPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24">
      <div className="container-editorial">
        {/* Header */}
        <SectionReveal className="mb-16 md:mb-24">
          <p className="label mb-4">Destinations & Settings</p>
          <h1 className="display-lg mb-6 max-w-4xl">
            Landscapes of memory, architecture & romance
          </h1>
          <p className="body-lg text-warm-gray max-w-2xl">
            A destination is never merely a backdrop. It imparts its light, climate, textures, and cultural cadence to the celebration. Explore the regions where we curate transcendent gatherings.
          </p>
        </SectionReveal>

        {/* Destinations Grid */}
        <div className="space-y-24 md:space-y-36 mb-28">
          {destinations.map((dest, index) => (
            <SectionReveal key={dest.id} delay={0.05 * (index % 3)}>
              <article
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Visual */}
                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? "lg:col-start-6 lg:order-2" : ""
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <div className="image-reveal aspect-[16/10] relative overflow-hidden bg-sand">
                    <Image
                      src={dest.coverImage.src}
                      alt={dest.coverImage.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                    <div className="absolute top-4 left-4 bg-deep/80 text-ivory text-[10px] tracking-[0.15em] uppercase px-3 py-1">
                      {dest.tagline}
                    </div>
                  </div>
                </div>

                {/* Narrative */}
                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:order-1 lg:row-start-1" : ""
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <span className="label-sm text-stone block mb-2">
                    Region 0{index + 1}
                  </span>
                  <h2 className="display-md mb-4 text-charcoal">{dest.name}</h2>
                  <p className="body-lg text-charcoal-light mb-6">
                    {dest.description}
                  </p>

                  {dest.eventFormats && dest.eventFormats.length > 0 && (
                    <div className="mb-8">
                      <h3 className="label-sm text-stone mb-3">Celebration Formats</h3>
                      <div className="flex flex-wrap gap-2">
                        {dest.eventFormats.map((fmt) => (
                          <span
                            key={fmt}
                            className="text-[11px] bg-sand/40 border border-sand px-3 py-1 text-charcoal"
                          >
                            {fmt}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link href={`/destinations/${dest.slug}`} className="editorial-link">
                    Explore Destination Guide
                  </Link>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        {/* Global Commissions Callout */}
        <div className="p-10 md:p-16 bg-cream border border-sand text-center max-w-3xl mx-auto">
          <h2 className="display-sm mb-4">Considering an Alternative Destination?</h2>
          <p className="text-xs text-warm-gray leading-relaxed mb-8">
            From the royal palaces of Hyderabad to private Italian villas or international island retreats, our production and guest logistics network extends beyond the featured hubs.
          </p>
          <Link href="/enquire" className="btn-primary">
            Discuss Your Destination
          </Link>
        </div>
      </div>
    </div>
  );
}
