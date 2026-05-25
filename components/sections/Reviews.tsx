import React from "react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/animations/AnimatedSection";
import RevealText from "@/components/animations/RevealText";
import FloatingBadge from "@/components/ui/FloatingBadge";
import GoogleRatingBadge from "@/components/ui/GoogleRatingBadge";
import { reviewsData } from "@/data/reviews";
import { Star } from "lucide-react";

/**
 * Reviews Section.
 * Displays customer Google Reviews in responsive cards:
 * - Integrated Google Rating Badge in the header layout.
 * - Render rating star SVGs with aria accessibility labels.
 * - Glassmorphism backgrounds.
 * - Micro-interactions on hover.
 */
export default function Reviews() {
  return (
    <Section id="reseñas" hasBorder={true} className="bg-[#e6dfd1]/20">
      <Container>
        {/* Section Header with integrated Google Rating Badge */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 md:mb-20">
          <div className="flex flex-col gap-4 text-left max-w-2xl max-lg:items-center max-lg:text-center max-lg:mx-auto">
            <AnimatedSection direction="down" delay={0.05}>
              <FloatingBadge text="Reseñas de clientes" />
            </AnimatedSection>
            
            <RevealText
              text="Lo que dicen quienes ya nos visitaron"
              as="h2"
              className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-glow text-foreground max-lg:justify-center"
              delay={0.1}
            />
            
            <AnimatedSection direction="up" delay={0.25}>
              <p className="font-sans text-sm md:text-base text-muted-text leading-relaxed">
                Mister Coffee es uno de los lugares favoritos en <strong className="text-teal-primary font-bold">La Troncal</strong> para disfrutar café, postres, waffles, frozen y buenos momentos.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection
            direction="left"
            delay={0.3}
            className="flex shrink-0 max-lg:justify-center"
          >
            <GoogleRatingBadge className="!bg-background shadow-premium border border-gold-primary/30 w-full sm:min-w-[320px] hover:scale-105 transition-transform" />
          </AnimatedSection>
        </div>

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
