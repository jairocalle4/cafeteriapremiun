import React from "react";
import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { MapPin, Clock, Star, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/data/site";

/**
 * InfoStrip Section.
 * Renders key business details in a sleek horizontal layout
 * immediately below the Hero section.
 */
export default function InfoStrip() {
  const items = [
    {
      icon: <MapPin className="w-5 h-5 text-accent" />,
      title: "Dirección",
      value: "Calle 10 de Agosto y Andrés F. Córdova",
      href: siteConfig.mapsLink,
    },
    {
      icon: <Clock className="w-5 h-5 text-accent" />,
      title: "Horario de Atención",
      value: siteConfig.scheduleShort,
    },
    {
      icon: <Star className="w-5 h-5 fill-gold-primary text-gold-primary animate-pulse" />,
      title: "Valoración Google",
      value: `${siteConfig.rating} ★★★★★ (${siteConfig.reviewsCount} reseñas)`,
      href: siteConfig.mapsLink,
      highlight: true,
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-accent" />,
      title: "Nuestros Servicios",
      value: siteConfig.services.join(" · "),
    },
  ];

  return (
    <section className="relative z-20 -mt-10 md:-mt-12 px-6">
      <Container>
        <AnimatedSection
          direction="up"
          delay={0.1}
          className="glassmorphism rounded-premium p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 shadow-premium"
        >
          {items.map((item, index) => {
            const contentBlock = (
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-primary/5 rounded-full flex items-center justify-center border border-border-custom/20 shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <span className="font-title text-[9px] tracking-widest uppercase font-bold text-teal-primary">
                    {item.title}
                  </span>
                  {item.highlight ? (
                    <div className="flex flex-col">
                      <span className="font-sans text-xs font-extrabold text-gold-primary flex items-center gap-1 leading-none mt-0.5">
                        {siteConfig.rating}
                        <span className="flex items-center gap-0.5 text-[9px]">
                          <Star className="w-2.5 h-2.5 fill-gold-primary text-gold-primary" />
                          <Star className="w-2.5 h-2.5 fill-gold-primary text-gold-primary" />
                          <Star className="w-2.5 h-2.5 fill-gold-primary text-gold-primary" />
                          <Star className="w-2.5 h-2.5 fill-gold-primary text-gold-primary" />
                          <Star className="w-2.5 h-2.5 fill-gold-primary/40 text-gold-primary" />
                        </span>
                      </span>
                      <span className="text-[9px] text-muted-text font-bold mt-0.5 leading-none">
                        ({siteConfig.reviewsCount} reseñas)
                      </span>
                    </div>
                  ) : (
                    <span className="font-sans text-xs font-bold leading-relaxed text-foreground">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            );

            const containerClasses = "border-b border-border-custom last:border-0 sm:border-b-0 lg:border-r lg:last:border-r-0 border-r-transparent last:border-r-transparent border-dashed pb-4 sm:pb-0 lg:pb-0 lg:pr-4 block transition-transform duration-300 hover:scale-[1.02]";

            if (item.href) {
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={containerClasses}
                >
                  {contentBlock}
                </a>
              );
            }

            return (
              <div key={index} className={containerClasses.replace("hover:scale-[1.02]", "")}>
                {contentBlock}
              </div>
            );
          })}
        </AnimatedSection>
      </Container>
    </section>
  );
}
