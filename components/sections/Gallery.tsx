import React from "react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/animations/AnimatedSection";
import ParallaxImage from "@/components/animations/ParallaxImage";
import { galleryData } from "@/data/gallery";
import { cn } from "@/lib/utils";

/**
 * Gallery Section.
 * Renders an editorial asymmetric grid displaying photos:
 * - Mobile: 1 Column
 * - Tablet: 2 Columns
 * - Desktop: Asymmetric 6-Column Grid (Row 1: 3+3, Row 2: 2+2+2)
 * Utilizes the custom GSAP ParallaxImage wrapper.
 */
export default function Gallery() {
  return (
    <Section id="galeria" hasBorder={true} className="bg-[#e6dfd1]/10">
      <Container>
        {/* Section Header */}
        <SectionHeader
          badge="Experiencia Visual"
          title="Nuestra esencia en imágenes"
          description="Un recorrido por los detalles, texturas y momentos que definen la experiencia en Mister Coffee."
        />

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[250px] sm:auto-rows-[300px] lg:auto-rows-[350px]">
          {galleryData.map((item, index) => {
            // Editorial columns layout: Apply spans only on desktop (lg viewport)
            const colSpan =
              item.id === 1
                ? "lg:col-span-3" // Large ambient photo (half row)
                : item.id === 5
                ? "lg:col-span-3" // Large waffle photo (half row)
                : "lg:col-span-2"; // Standard square-ish photos (one-third row)

            return (
              <AnimatedSection
                key={item.id}
                direction="up"
                delay={0.1 + index * 0.05}
                className={cn(
                  "relative group rounded-premium overflow-hidden border border-border-custom shadow-soft",
                  colSpan
                )}
              >
                {/* Parallax Image Wrapper */}
                <div className="absolute inset-0 w-full h-full">
                  <ParallaxImage
                    src={item.src}
                    alt={item.alt}
                    speed={1.08}
                    className="w-full h-full"
                  />
                </div>

                {/* Dark Overlay gradient (Fades in on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Floating descriptor metadata */}
                <div className="absolute bottom-0 left-0 w-full p-5 z-20 flex flex-col gap-1 transition-transform duration-500 transform translate-y-3 group-hover:translate-y-0">
                  <span className="font-title text-[9px] tracking-widest uppercase font-bold text-accent">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base md:text-lg font-bold text-[#faf6f0]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[11px] text-[#faf6f0]/75 leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
