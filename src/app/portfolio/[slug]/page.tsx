import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects, getProjectBySlug, getRelatedProjects } from "@/data/projects";
import { generateMetadata as getSeoMetadata } from "@/lib/seo";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | ANC Events" };
  }

  return getSeoMetadata({
    title: `${project.title} — ${project.location} | ANC Events`,
    description: project.description,
    path: `/portfolio/${project.slug}`,
    image: project.coverImage.src,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project.slug, project.category, 2);

  return (
    <article className="pt-28 md:pt-36 pb-24">
      <div className="container-editorial">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.15em] uppercase text-warm-gray hover:text-charcoal transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Selected Works
          </Link>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12">
          <div className="lg:col-span-8">
            <span className="label-sm text-stone mb-4 block">
              {project.categoryLabel} — {project.location}
            </span>
            <h1 className="display-lg mb-4 text-charcoal">{project.title}</h1>
            <p className="font-display text-xl md:text-2xl text-warm-gray italic">
              {project.subtitle}
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <span className="text-xs uppercase tracking-[0.15em] text-stone block">
              Celebration Year
            </span>
            <span className="font-display text-2xl text-charcoal">{project.year}</span>
          </div>
        </div>

        {/* Cinematic Hero Image */}
        <div className="image-reveal aspect-[16/9] relative overflow-hidden bg-sand mb-16 md:mb-24">
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Project Meta Information Table */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-sand mb-16 md:mb-24">
          <div>
            <span className="label-sm text-stone block mb-2">Location</span>
            <span className="text-sm font-medium text-charcoal">{project.location}</span>
          </div>
          {project.venue && (
            <div>
              <span className="label-sm text-stone block mb-2">Venue</span>
              <span className="text-sm font-medium text-charcoal">{project.venue}</span>
            </div>
          )}
          <div>
            <span className="label-sm text-stone block mb-2">Scope</span>
            <span className="text-sm font-medium text-charcoal">
              {project.services.length} Disciplines
            </span>
          </div>
          <div>
            <span className="label-sm text-stone block mb-2">Direction</span>
            <span className="text-sm font-medium text-charcoal">ANC Events Studio</span>
          </div>
        </div>

        {/* Editorial Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 md:mb-28">
          {/* Main Story */}
          <div className="lg:col-span-8 space-y-12">
            <section>
              <h2 className="label text-stone mb-4">01 — The Narrative</h2>
              <p className="body-lg text-charcoal-light leading-relaxed">
                {project.description}
              </p>
            </section>

            {project.concept && (
              <section>
                <h2 className="label text-stone mb-4">02 — Concept & Scenography</h2>
                <p className="body-lg text-charcoal-light leading-relaxed">
                  {project.concept}
                </p>
              </section>
            )}

            {project.design && (
              <section>
                <h2 className="label text-stone mb-4">03 — Architectural Execution</h2>
                <p className="body-lg text-charcoal-light leading-relaxed">
                  {project.design}
                </p>
              </section>
            )}

            {project.experience && (
              <section>
                <h2 className="label text-stone mb-4">04 — Guest Experience</h2>
                <p className="body-lg text-charcoal-light leading-relaxed">
                  {project.experience}
                </p>
              </section>
            )}
          </div>

          {/* Sidebar: Services & Credits */}
          <div className="lg:col-span-4 space-y-10 lg:pl-6 lg:border-l lg:border-sand">
            <div>
              <h3 className="label text-stone mb-4">Services Rendered</h3>
              <ul className="space-y-2">
                {project.services.map((svc) => (
                  <li key={svc} className="text-sm text-charcoal-light flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
                    {svc}
                  </li>
                ))}
              </ul>
            </div>

            {project.credits && project.credits.length > 0 && (
              <div>
                <h3 className="label text-stone mb-4">Credits & Partners</h3>
                <ul className="space-y-3">
                  {project.credits.map((c) => (
                    <li key={c.role} className="text-xs">
                      <span className="text-warm-gray block">{c.role}</span>
                      <span className="font-medium text-charcoal">{c.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-6 border-t border-sand">
              <Link href="/enquire" className="btn-outline w-full justify-center text-center">
                Enquire for a Similar Event
              </Link>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mb-24">
            <h2 className="display-sm mb-10">Visual Archive</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, i) => (
                <div key={i} className="image-reveal aspect-[4/3] relative overflow-hidden bg-sand">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Projects */}
        {related.length > 0 && (
          <section className="pt-16 border-t border-sand">
            <div className="flex items-end justify-between mb-10">
              <h2 className="display-sm">Related Celebrations</h2>
              <Link href="/portfolio" className="editorial-link">
                View All Works
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((rel) => (
                <Link key={rel.id} href={`/portfolio/${rel.slug}`} className="group block">
                  <article>
                    <div className="image-reveal aspect-[16/10] relative mb-4 bg-sand overflow-hidden">
                      <Image
                        src={rel.coverImage.src}
                        alt={rel.coverImage.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <span className="label-sm text-stone block mb-1">{rel.categoryLabel}</span>
                    <h3 className="font-display text-xl text-charcoal group-hover:text-bronze transition-colors">
                      {rel.title}
                    </h3>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
