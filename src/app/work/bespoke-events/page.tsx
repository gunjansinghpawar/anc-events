import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/data/projects";
import SectionReveal from "@/components/ui/SectionReveal";
import { generateMetadata as getSeoMetadata } from "@/lib/seo";

export const metadata = getSeoMetadata({
  title: "Bespoke Events — Private Milestones & Galas | ANC Events",
  description:
    "Immersive sangeet evenings, milestone anniversaries, and curated corporate galas crafted by ANC Events.",
  path: "/work/bespoke-events",
});

export default function BespokeEventsWorkPage() {
  const projects = getAllProjects().filter(
    (p) => p.category === "sangeet" || p.category === "corporate" || p.category === "bespoke-event"
  );

  return (
    <div className="pt-28 md:pt-40 pb-28 bg-ivory">
      <div className="container-editorial">
        <div className="mb-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase text-warm-gray hover:text-charcoal transition-colors"
          >
            &larr; All Selected Works
          </Link>
        </div>

        <SectionReveal className="mb-16 md:mb-24 max-w-4xl">
          <span className="label text-stone mb-4 block">Portfolio Focus</span>
          <h1 className="display-xl text-charcoal font-light leading-none mb-6">
            BESPOKE EVENTS
          </h1>
          <p className="body-lg text-warm-gray max-w-2xl leading-relaxed">
            Events that escape conventional categories — immersive sangeets conceived as living art galleries, anniversary celebrations, and sophisticated brand experiences.
          </p>
        </SectionReveal>

        <div className="space-y-24 md:space-y-36">
          {projects.map((project, idx) => (
            <SectionReveal key={project.id}>
              <Link href={`/work/${project.slug}`} className="group block">
                <article
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    idx % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div
                    className={`lg:col-span-7 ${
                      idx % 2 === 1 ? "lg:col-start-6 lg:order-2" : ""
                    }`}
                    style={{ direction: "ltr" }}
                  >
                    <div className="aspect-[16/10] relative overflow-hidden bg-sand">
                      <Image
                        src={project.coverImage.src}
                        alt={project.coverImage.alt}
                        fill
                        className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-5 ${
                      idx % 2 === 1 ? "lg:col-start-1 lg:order-1 lg:row-start-1" : ""
                    }`}
                    style={{ direction: "ltr" }}
                  >
                    <span className="label-sm text-stone block mb-2">
                      {project.location} &bull; {project.year}
                    </span>
                    <h2 className="display-sm text-charcoal mb-3 group-hover:text-bronze transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-xs uppercase tracking-widest text-bronze mb-4 font-medium">
                      {project.subtitle}
                    </p>
                    <p className="body-lg text-charcoal-light mb-6 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                    <span className="editorial-link">View Full Case Study &rarr;</span>
                  </div>
                </article>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
