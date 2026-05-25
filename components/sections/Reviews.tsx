import React from "react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { reviewsData } from "@/data/reviews";
import { Star } from "lucide-react";

/**
 * Reviews Section.
 * Displays customer Google Reviews in responsive cards:
 * - Render rating star SVGs with aria accessibility labels.
 * - Glassmorphism backgrounds.
 * - Micro-interactions on hover.
 */
export default function Reviews() {
  return (
    <Section id="reseñas" hasBorder={true} className="bg-[#e6dfd1]/20">
      <Container>
        {/* Section Header */}
        <SectionHeader
          badge="Testimonios"
          title="Lo que opinan nuestros clientes"
          description="Contamos con una valoración promedio de 4.6 ★★★★★ en Google Maps basada en más de 299 reseñas de nuestra comunidad."
        />

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviewsData.map((review, index) => {
            return (
              <AnimatedSection
                key={review.id}
                direction="up"
                delay={0.15 + index * 0.08}
                className="glassmorphism p-6 rounded-premium flex flex-col justify-between gap-6 shadow-soft hover:shadow-premium hover:-translate-y-2 transition-all duration-500 border border-glass-border group"
              >
                {/* Rating stars and text content */}
                <div className="flex flex-col gap-4">
                  {/* Accessibility stars mapping */}
                  <div
                    className="flex items-center gap-1"
                    aria-label={`Calificación ${review.rating} de 5 estrellas`}
                  >
                    {Array.from({ length: 5 }).map((_, starIndex) => {
                      const fillState = starIndex < review.rating;
                      return (
                        <Star
                          key={starIndex}
                          className={`w-4 h-4 ${
                            fillState
                              ? "fill-gold-primary text-gold-primary"
                              : "text-muted-text/30"
                          }`}
                        />
                      );
                    })}
                  </div>
                  
                  {/* Review text */}
                  <p className="font-sans text-xs md:text-sm text-foreground/80 leading-relaxed italic">
                    &quot;{review.text}&quot;
                  </p>
                </div>

                {/* Author Metadata block */}
                <div className="flex items-center justify-between border-t border-border-custom/50 pt-4 mt-2">
                  <div className="flex flex-col">
                    <span className="font-sans text-xs font-bold text-foreground">
                      {review.author}
                    </span>
                    <span className="font-sans text-[9px] text-muted-text uppercase tracking-wider font-semibold">
                      {review.date ?? "Reseña Google"}
                    </span>
                  </div>
                  {/* Google search review icon indicator */}
                  <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-accent/50 group-hover:text-accent transition-colors duration-300">
                    Google
                  </span>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
