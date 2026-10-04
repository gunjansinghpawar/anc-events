import Link from "next/link";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import { generateMetadata as getSeoMetadata } from "@/lib/seo";

export const metadata = getSeoMetadata({
  title: "About ANC Events — Destination Weddings & Bespoke Events",
  description:
    "An international-grade luxury event house based in Bodakdev, Ahmedabad. Discover our story, our approach, our team, and our philosophy of intention over excess.",
  path: "/about",
});

export default function AboutOverviewPage() {
  return (
    <div className="pt-28 md:pt-40 pb-28 bg-ivory">
      <div className="container-editorial">
        {/* 01 — HERO */}
        <SectionReveal className="mb-20 md:mb-32 max-w-4xl">
          <span className="label text-stone mb-4 block">The Event House</span>
          <h1 className="display-xl text-charcoal font-light leading-none mb-6">
            ABOUT ANC
          </h1>
          <p className="body-lg text-warm-gray max-w-2xl leading-relaxed">
            Headquartered in Bodakdev, Ahmedabad, ANC Events is an editorial event atelier dedicated to the conception and realization of extraordinary celebrations across India and abroad.
          </p>
        </SectionReveal>

        {/* Hero Full-Bleed Imagery */}
        <div className="image-reveal aspect-[21/9] relative overflow-hidden bg-sand mb-28 md:mb-36">
          <Image
            src="/images/placeholder-wedding-1.jpg"
            alt="ANC Events destination wedding scenography"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* 02 — THE STORY */}
        <section className="mb-28 md:mb-36 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <span className="label-sm text-stone block mb-3">01 / Evolution</span>
            <h2 className="display-md text-charcoal mb-6">THE STORY</h2>
            <div className="divider-bronze mb-6" />
            <p className="body-lg text-charcoal-light leading-relaxed mb-6">
              Founded in 2015, ANC Events emerged from a desire to escape predictable wedding templates. Over the last decade, our studio has expanded from prestigious city celebrations in Gujarat to complex palatial takeovers across Rajasthan and landmark multi-day cruise celebrations at sea.
            </p>
            <Link href="/about/story" className="editorial-link">
              Explore Our Full Timeline & Milestones &rarr;
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="aspect-[4/3] relative overflow-hidden bg-sand">
              <Image
                src="/images/placeholder-wedding-2.jpg"
                alt="ANC Events Milestone Wedding"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>
        </section>

        {/* 03 — THE PHILOSOPHY */}
        <section className="p-12 md:p-20 bg-deep text-ivory mb-28 md:mb-36">
          <div className="max-w-3xl">
            <span className="label-sm text-stone block mb-4">02 / The House Ethos</span>
            <h2 className="display-lg text-ivory mb-8">THE PHILOSOPHY</h2>
            <blockquote className="font-display text-2xl md:text-3xl text-sand italic border-l-2 border-bronze pl-8 my-8 leading-relaxed">
              &ldquo;Intention over excess. We believe true luxury resides in what is curated and restrained, not in what is multiplied.&rdquo;
            </blockquote>
            <p className="body-lg text-stone leading-relaxed">
              We approach each event as a temporal architectural work. The interplay of natural illumination, botanical structures, scent, acoustic fidelity, and spatial flow creates an environment where guests are immersed in authentic emotion rather than ostentatious spectacle.
            </p>
          </div>
        </section>

        {/* 04 — THE PEOPLE */}
        <section className="mb-28 md:mb-36 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="aspect-[4/3] relative overflow-hidden bg-sand">
              <Image
                src="/images/placeholder-wedding-3.jpg"
                alt="ANC Events Founders & Directors"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <span className="label-sm text-stone block mb-3">03 / Leadership</span>
            <h2 className="display-md text-charcoal mb-6">THE PEOPLE</h2>
            <div className="divider-bronze mb-6" />
            <p className="body-lg text-charcoal-light leading-relaxed mb-6">
              ANC Events is directed personally by Ashish Nahata and Anushka Nahata. Our clients communicate directly with founders who maintain creative and operational ownership over every detail from inception to farewell.
            </p>
            <Link href="/about/team" className="editorial-link">
              Meet the Directors &rarr;
            </Link>
          </div>
        </section>

        {/* 05 — THE APPROACH */}
        <section className="p-10 md:p-16 bg-cream border border-sand mb-28 md:mb-36">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="label-sm text-stone block mb-3">04 / Methodology</span>
              <h2 className="display-md text-charcoal">THE APPROACH</h2>
            </div>
            <Link href="/about/approach" className="editorial-link">
              View Detailed 5-Step Process &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 border-t border-sand pt-8">
            {[
              { num: "01", name: "Discover", text: "Aesthetic & emotional immersion" },
              { num: "02", name: "Imagine", text: "Scenography & spatial drafting" },
              { num: "03", name: "Curate", text: "Master artisan alignment" },
              { num: "04", name: "Execute", text: "Disciplined logistical run-sheets" },
              { num: "05", name: "Deliver", text: "Quiet presence & total immersion" },
            ].map((st) => (
              <div key={st.num}>
                <span className="font-display text-2xl text-bronze block mb-2">{st.num}</span>
                <h4 className="font-display text-lg text-charcoal mb-1">{st.name}</h4>
                <p className="text-xs text-warm-gray">{st.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 06 — THE EXPERIENCE & CTA */}
        <section className="text-center max-w-3xl mx-auto py-16">
          <span className="label text-stone mb-4 block">The Experience</span>
          <h2 className="display-md text-charcoal mb-6">
            Conceived with intention. Remembered forever.
          </h2>
          <p className="body-lg text-warm-gray mb-10 leading-relaxed">
            Our atelier in Bodakdev, Ahmedabad welcomes consultations for upcoming wedding seasons.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/enquire" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link href="/work" className="btn-outline">
              Explore Our Work
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
