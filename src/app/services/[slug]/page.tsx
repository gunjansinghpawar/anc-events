import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllServices, getServiceBySlug } from "@/data/services";
import { getAllProjects } from "@/data/projects";
import { generateMetadata as getSeoMetadata } from "@/lib/seo";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const all = getAllServices();
  return all.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found | ANC Events" };
  }

  return getSeoMetadata({
    title: `${service.title} — Event Disciplines | ANC Events`,
    description: service.description,
    path: `/services/${service.slug}`,
    image: service.coverImage.src,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const allProjects = getAllProjects();
  const relatedProjects = allProjects.filter((p) =>
    service.relatedProjects.includes(p.slug)
  );

  return (
    <article className="pt-28 md:pt-40 pb-28 bg-ivory">
      <div className="container-editorial">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase text-warm-gray hover:text-charcoal transition-colors"
          >
            &larr; Back to All Capabilities
          </Link>
        </div>

        {/* Hero Title & Subtitle */}
        <header className="mb-14 md:mb-20 max-w-4xl">
          <span className="label text-stone mb-3 block">Discipline In-Depth</span>
          <h1 className="display-xl text-charcoal font-light leading-none mb-6">
            {service.title.toUpperCase()}
          </h1>
          <p className="font-display text-2xl md:text-3xl text-warm-gray italic leading-relaxed">
            {service.subtitle}
          </p>
        </header>

        {/* Hero Image — Full Width Editorial */}
        <div className="image-reveal aspect-[21/10] relative overflow-hidden bg-sand mb-20 md:mb-28">
          <Image
            src={service.coverImage.src}
            alt={service.coverImage.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* 01 — Service Philosophy */}
        <section className="mb-24 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-baseline">
          <div className="lg:col-span-5">
            <span className="label-sm text-stone block mb-2">01 / Point of View</span>
            <h2 className="display-md text-charcoal">THE PHILOSOPHY</h2>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="body-lg text-charcoal-light leading-relaxed">
              {service.description}
            </p>
            {service.philosophy && (
              <blockquote className="font-display text-xl md:text-2xl text-charcoal italic border-l-2 border-bronze pl-6 py-2 leading-relaxed">
                &ldquo;{service.philosophy}&rdquo;
              </blockquote>
            )}
          </div>
        </section>

        {/* 02 — What ANC Handles */}
        {service.whatWeHandle && service.whatWeHandle.length > 0 && (
          <section className="p-10 md:p-16 bg-cream border border-sand mb-24 md:mb-32">
            <div className="max-w-3xl mb-12">
              <span className="label-sm text-stone block mb-2">02 / Scope of Stewardship</span>
              <h2 className="display-sm text-charcoal mb-4">WHAT ANC HANDLES</h2>
              <p className="text-xs text-warm-gray leading-relaxed">
                Turnkey deliverables managed with singular creative direction and accountable execution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-sand">
              {service.whatWeHandle.map((item, idx) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="font-display text-lg text-bronze font-light block mt-0.5">
                    0{idx + 1}
                  </span>
                  <span className="text-xs text-charcoal font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 03 — Process (Planning & Design) */}
        {service.process && service.process.length > 0 && (
          <section className="mb-24 md:mb-32">
            <div className="mb-14">
              <span className="label-sm text-stone block mb-2">03 / Step-by-Step Flow</span>
              <h2 className="display-sm text-charcoal">THE WORKFLOW</h2>
            </div>

            <div className="space-y-6">
              {service.process.map((step, idx) => (
                <div
                  key={step.step}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 p-8 bg-ivory border border-sand items-baseline"
                >
                  <div className="md:col-span-2">
                    <span className="font-display text-3xl text-bronze block font-light">
                      0{idx + 1}
                    </span>
                    <span className="label-sm text-stone uppercase tracking-widest">
                      Phase
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-display text-2xl text-charcoal">
                      {step.step}
                    </h3>
                  </div>

                  <div className="md:col-span-6">
                    <p className="text-xs text-warm-gray leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 04 — Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="pt-20 border-t border-sand mb-28">
            <div className="flex items-end justify-between mb-12">
              <h2 className="display-sm text-charcoal">Demonstrated In Selected Works</h2>
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
                    {p.categoryLabel} &bull; {p.location}
                  </span>
                  <h3 className="font-display text-2xl text-charcoal group-hover:text-bronze transition-colors">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 05 — Final CTA */}
        <section className="p-12 md:p-20 bg-deep text-ivory text-center max-w-4xl mx-auto">
          <span className="label-sm text-stone mb-4 block">Consultation Inquiry</span>
          <h2 className="display-md text-ivory mb-6">
            Inquire about {service.title}
          </h2>
          <p className="body-lg text-stone max-w-xl mx-auto mb-10 leading-relaxed">
            Connect with our directors to discuss bespoke feasibility, vendor alignments, and creative possibilities.
          </p>
          <Link href="/enquire" className="btn-primary inline-flex">
            Arrange a Consultation
          </Link>
        </section>
      </div>
    </article>
  );
}
