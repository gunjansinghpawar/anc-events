import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllDestinations, getDestinationBySlug } from "@/data/destinations";
import { getAllProjects } from "@/data/projects";
import { generateMetadata as getSeoMetadata } from "@/lib/seo";

interface DestinationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const all = getAllDestinations();
  return all.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: DestinationPageProps) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);

  if (!dest) {
    return { title: "Destination Not Found | ANC Events" };
  }

  return getSeoMetadata({
    title: `Destination Weddings in ${dest.name} — Luxury Wedding Planner | ANC Events`,
    description: dest.description,
    path: `/destinations/${dest.slug}`,
    image: dest.coverImage.src,
  });
}

export default async function DestinationDetailPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);

  if (!dest) {
    notFound();
  }

  const allProjects = getAllProjects();
  const relatedProjects = allProjects.filter((p) =>
    dest.relatedProjects.includes(p.slug)
  );

  return (
    <article className="pt-28 md:pt-40 pb-28 bg-ivory">
      <div className="container-editorial">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase text-warm-gray hover:text-charcoal transition-colors"
          >
            &larr; Back to Destinations Overview
          </Link>
        </div>

        {/* Hero Title & Tagline */}
        <header className="mb-14 md:mb-20 max-w-4xl">
          <span className="label text-stone mb-3 block">Destination Guide</span>
          <h1 className="display-xl text-charcoal font-light leading-none mb-6">
            {dest.name.toUpperCase()}
          </h1>
          <p className="font-display text-2xl md:text-3xl text-warm-gray italic leading-relaxed">
            {dest.tagline}
          </p>
        </header>

        {/* Hero Image — Full Width */}
        <div className="image-reveal aspect-[21/10] relative overflow-hidden bg-sand mb-20 md:mb-28">
          <Image
            src={dest.coverImage.src}
            alt={dest.coverImage.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* 01 — Destination Story & Why It Works */}
        <section className="mb-24 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-baseline">
          <div className="lg:col-span-5">
            <span className="label-sm text-stone block mb-2">01 / The Setting</span>
            <h2 className="display-md text-charcoal">THE DESTINATION STORY</h2>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="body-lg text-charcoal-light leading-relaxed">
              {dest.description}
            </p>
            <div className="p-8 bg-cream border-l-2 border-bronze">
              <span className="label-sm text-stone block mb-2">Why It Works For Weddings</span>
              <p className="body-lg text-charcoal leading-relaxed">
                {dest.whyThisDestination}
              </p>
            </div>
          </div>
        </section>

        {/* 02 — Venues & Scenography Possibilities */}
        {dest.venuePossibilities && (
          <section className="p-10 md:p-16 bg-cream border border-sand mb-24 md:mb-32">
            <div className="max-w-3xl mb-10">
              <span className="label-sm text-stone block mb-2">02 / Architecture & Spaces</span>
              <h2 className="display-sm text-charcoal mb-4">VENUE POSSIBILITIES</h2>
              <p className="body-lg text-charcoal-light leading-relaxed">
                {dest.venuePossibilities}
              </p>
            </div>

            {dest.eventFormats && dest.eventFormats.length > 0 && (
              <div className="pt-8 border-t border-sand">
                <span className="label-sm text-stone block mb-4">Ideal Celebration Formats</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {dest.eventFormats.map((fmt, idx) => (
                    <div key={fmt} className="flex items-center gap-3 p-4 bg-ivory border border-sand">
                      <span className="font-display text-lg text-bronze font-light">
                        0{idx + 1}
                      </span>
                      <span className="text-xs text-charcoal font-medium">
                        {fmt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 03 — ANC's On-Ground Approach */}
        <section className="mb-24 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-baseline">
          <div className="lg:col-span-5">
            <span className="label-sm text-stone block mb-2">03 / Production Discipline</span>
            <h2 className="display-md text-charcoal">ANC&apos;S APPROACH IN {dest.name.toUpperCase()}</h2>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="body-lg text-charcoal-light leading-relaxed">
              Producing in {dest.name} requires delicate navigation between heritage property constraints, municipal permissions, microclimate wind shifts, and multi-hotel guest movement.
            </p>
            <p className="body-lg text-charcoal-light leading-relaxed">
              Our studio provides full turnkey logistics — airport concierges, dedicated luxury coach fleets, customs and cargo clearance for custom structures, and vetted local culinary partnerships.
            </p>
          </div>
        </section>

        {/* 04 — Related ANC Projects */}
        {relatedProjects.length > 0 && (
          <section className="pt-20 border-t border-sand mb-28">
            <div className="flex items-end justify-between mb-12">
              <h2 className="display-sm text-charcoal">ANC Celebrations in {dest.name}</h2>
              <Link href="/work" className="editorial-link">
                View All Works &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {relatedProjects.map((p) => (
                <Link key={p.id} href={`/work/${p.slug}`} className="group block">
                  <div className="aspect-[16/10] relative overflow-hidden bg-sand mb-4">
                    <Image
                      src={p.coverImage.src}
                      alt={p.coverImage.alt}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <span className="label-sm text-stone block mb-1">
                    {p.categoryLabel} &bull; {p.year}
                  </span>
                  <h3 className="font-display text-2xl text-charcoal group-hover:text-bronze transition-colors">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 05 — Final Consultation CTA */}
        <section className="p-12 md:p-20 bg-deep text-ivory text-center max-w-4xl mx-auto">
          <span className="label-sm text-stone mb-4 block">Destination Consultation</span>
          <h2 className="display-md text-ivory mb-6">
            Plan your wedding in {dest.name}
          </h2>
          <p className="body-lg text-stone max-w-xl mx-auto mb-10 leading-relaxed">
            Our directors personally scout and recommend verified heritage properties, lakeside pavilions, and luxury resorts tailored to your family&apos;s guest profile.
          </p>
          <Link href="/enquire" className="btn-primary inline-flex">
            Start Planning in {dest.name}
          </Link>
        </section>
      </div>
    </article>
  );
}
