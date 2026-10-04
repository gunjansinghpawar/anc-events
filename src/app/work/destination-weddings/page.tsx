import Link from "next/link";
import Image from "next/image";
import { getProjectsByCategory } from "@/data/projects";
import SectionReveal from "@/components/ui/SectionReveal";
import { generateMetadata as getSeoMetadata } from "@/lib/seo";

export const metadata = getSeoMetadata({
  title: "Destination Weddings — Selected Works | ANC Events",
  description:
    "Explore ANC Events destination wedding portfolio across Udaipur, Jaipur, Goa, and heritage settings throughout India.",
  path: "/work/destination-weddings",
});

export default function DestinationWeddingsWorkPage() {
  const projects = getProjectsByCategory("destination-wedding");

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
            DESTINATION WEDDINGS
          </h1>
          <p className="body-lg text-warm-gray max-w-2xl leading-relaxed">
            Multi-day celebrations designed in deep harmony with their settings — from lake palaces in Udaipur to historic forts in Rajasthan and beachfront sanctuaries.
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
