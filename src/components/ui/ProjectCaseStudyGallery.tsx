"use client";

/* ─────────────────────────────────────────────
   ANC Events — Project Case Study Gallery with Lightbox
   ───────────────────────────────────────────── */

import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/ui/Lightbox";
import { ProjectImage } from "@/types";

interface ProjectCaseStudyGalleryProps {
  coverImage: ProjectImage;
  gallery: ProjectImage[];
  projectTitle: string;
  projectLocation: string;
}

export default function ProjectCaseStudyGallery({
  coverImage,
  gallery,
  projectTitle,
  projectLocation,
}: ProjectCaseStudyGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = [coverImage, ...gallery].map((img) => ({
    src: img.src,
    alt: img.alt,
    caption: `${projectTitle} — ${projectLocation}`,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Lightbox
        isOpen={lightboxOpen}
        images={allImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />

      {/* Hero Cover Trigger */}
      <div
        onClick={() => openLightbox(0)}
        className="image-reveal aspect-[21/10] relative overflow-hidden bg-sand mb-16 md:mb-24 cursor-pointer group"
      >
        <Image
          src={coverImage.src}
          alt={coverImage.alt}
          fill
          priority
          className="object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
          sizes="100vw"
        />
        <div className="absolute bottom-6 right-6 bg-deep/80 text-ivory text-[10px] tracking-[0.2em] uppercase px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
          Click to View Full-Screen
        </div>
      </div>

      {/* Visual Archive Asymmetric Gallery */}
      {gallery && gallery.length > 0 && (
        <section className="mb-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="label-sm text-stone block mb-2">Visual Archive</span>
              <h2 className="display-sm text-charcoal">Atmosphere & Details</h2>
            </div>
            <span className="text-xs text-warm-gray">
              Click any photograph to expand
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {gallery.map((img, idx) => {
              const isWide = idx % 3 === 0;
              const colSpan = isWide ? "md:col-span-12" : "md:col-span-6";
              const aspect = isWide ? "aspect-[21/10]" : "aspect-[4/3]";

              return (
                <div
                  key={img.src + idx}
                  onClick={() => openLightbox(idx + 1)}
                  className={`${colSpan} group cursor-pointer`}
                >
                  <div className={`image-reveal ${aspect} relative overflow-hidden bg-sand`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <span className="text-[10px] tracking-widest uppercase text-stone mt-2 block">
                    {String(idx + 1).padStart(2, "0")} / {img.alt}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
