import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects, getProjectBySlug, getRelatedProjects } from "@/data/projects";
import ProjectCaseStudyGallery from "@/components/ui/ProjectCaseStudyGallery";
import { generateMetadata as getSeoMetadata } from "@/lib/seo";

interface WorkDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Celebration Not Found | ANC Events" };
  }

  return getSeoMetadata({
    title: `${project.title} — ${project.location} | ANC Events`,
    description: project.description,
    path: `/work/${project.slug}`,
    image: project.coverImage.src,
  });
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project.slug, project.category, 2);

  return (
    <article className="pt-28 md:pt-40 pb-28 bg-ivory">
      <div className="container-editorial">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase text-warm-gray hover:text-charcoal transition-colors"
          >
            &larr; Back to Selected Works
          </Link>
        </div>

        {/* Hero Title & Subtitle */}
        <header className="mb-14 md:mb-20 max-w-4xl">
          <span className="label text-stone mb-3 block">
            {project.categoryLabel} &bull; {project.location}
          </span>
          <h1 className="display-xl text-charcoal font-light leading-none mb-6">
            {project.title}
          </h1>
          <p className="font-display text-2xl md:text-3xl text-warm-gray italic leading-relaxed">
            {project.subtitle}
          </p>
        </header>

        {/* Interactive Hero Cover & Gallery Engine with Lightbox */}
        <ProjectCaseStudyGallery
          coverImage={project.coverImage}
          gallery={project.gallery || []}
          projectTitle={project.title}
          projectLocation={project.location}
        />

        {/* Project Metadata Table */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-sand mb-20 md:mb-28">
          <div>
            <span className="label-sm text-stone block mb-2">Location</span>
            <span className="text-sm font-medium text-charcoal">{project.location}</span>
          </div>
          {project.venue && (
            <div>
              <span className="label-sm text-stone block mb-2">Setting</span>
              <span className="text-sm font-medium text-charcoal">{project.venue}</span>
            </div>
          )}
          <div>
            <span className="label-sm text-stone block mb-2">Celebration Year</span>
            <span className="text-sm font-medium text-charcoal">{project.year}</span>
          </div>
          <div>
            <span className="label-sm text-stone block mb-2">Direction</span>
            <span className="text-sm font-medium text-charcoal">ANC Events Atelier</span>
          </div>
        </div>

        {/* Case Study Narrative Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-28">
          <div className="lg:col-span-8 space-y-16">
            <section>
              <span className="label-sm text-stone block mb-3">01 / The Brief</span>
              <h2 className="display-sm text-charcoal mb-4">A Vision of Poetic Ceremony</h2>
              <p className="body-lg text-charcoal-light leading-relaxed">
                {project.description}
              </p>
            </section>

            {project.concept && (
              <section>
                <span className="label-sm text-stone block mb-3">02 / The Concept</span>
                <h2 className="display-sm text-charcoal mb-4">Materiality & Spatial Language</h2>
                <p className="body-lg text-charcoal-light leading-relaxed">
                  {project.concept}
                </p>
              </section>
            )}

            {project.design && (
              <section>
                <span className="label-sm text-stone block mb-3">03 / The Design</span>
                <h2 className="display-sm text-charcoal mb-4">Architectural Scenography</h2>
                <p className="body-lg text-charcoal-light leading-relaxed">
                  {project.design}
                </p>
              </section>
            )}

            {project.experience && (
              <section>
                <span className="label-sm text-stone block mb-3">04 / The Experience</span>
                <h2 className="display-sm text-charcoal mb-4">Guest Hospitality & Cadence</h2>
                <p className="body-lg text-charcoal-light leading-relaxed">
                  {project.experience}
                </p>
              </section>
            )}
          </div>

          <div className="lg:col-span-4 space-y-10 lg:pl-8 lg:border-l lg:border-sand">
            <div>
              <span className="label-sm text-stone block mb-4">Disciplines Delivered</span>
              <ul className="space-y-2.5">
                {project.services.map((svc) => (
                  <li key={svc} className="text-xs text-charcoal flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze flex-shrink-0" />
                    <span>{svc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.credits && project.credits.length > 0 && (
              <div>
                <span className="label-sm text-stone block mb-4">Collaborators & Artisans</span>
                <div className="space-y-3">
                  {project.credits.map((c) => (
                    <div key={c.role} className="text-xs">
                      <span className="text-stone block">{c.role}</span>
                      <span className="font-medium text-charcoal">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-sand">
              <Link href="/enquire" className="btn-primary w-full text-center justify-center">
                Plan a Similar Celebration
              </Link>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {related.length > 0 && (
          <section className="pt-20 border-t border-sand mb-28">
            <div className="flex items-end justify-between mb-12">
              <h2 className="display-sm text-charcoal">Related Celebrations</h2>
              <Link href="/work" className="editorial-link">
                View All Works &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {related.map((rel) => (
                <Link key={rel.id} href={`/work/${rel.slug}`} className="group block">
                  <div className="aspect-[16/10] relative overflow-hidden bg-sand mb-4">
                    <Image
                      src={rel.coverImage.src}
                      alt={rel.coverImage.alt}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <span className="label-sm text-stone block mb-1">
                    {rel.categoryLabel} &bull; {rel.location}
                  </span>
                  <h3 className="font-display text-2xl text-charcoal group-hover:text-bronze transition-colors">
                    {rel.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="p-12 md:p-20 bg-deep text-ivory text-center max-w-4xl mx-auto">
          <span className="label-sm text-stone mb-4 block">Commission Inquiry</span>
          <h2 className="display-md text-ivory mb-6">
            Begin the creation of your celebration
          </h2>
          <p className="body-lg text-stone max-w-xl mx-auto mb-10 leading-relaxed">
            Every bespoke gathering begins with an unhurried conversation. Connect with our directors to discuss dates, venues, and creative direction.
          </p>
          <Link href="/enquire" className="btn-primary inline-flex">
            Start Your Inquiry
          </Link>
        </section>
      </div>
    </article>
  );
}
