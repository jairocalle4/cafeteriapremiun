import React from "react";
import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/animations/AnimatedSection";
import RevealText from "@/components/animations/RevealText";
import FloatingBadge from "@/components/ui/FloatingBadge";
import PremiumButton from "@/components/ui/PremiumButton";
import ParallaxImage from "@/components/animations/ParallaxImage";
import GoogleRatingBadge from "@/components/ui/GoogleRatingBadge";
import { Clock, CalendarHeart } from "lucide-react";

/**
 * Hero Section.
 * - Left side: Tags, editorial headers (highlighting "felicidad"), CTAs, details.
 * - Right side: Parallax zoom coffee photo (cafe.jpeg) flanked by floating reviews and hours labels.
 */
export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center pt-24 md:pt-32 overflow-hidden bg-background">
      {/* Editorial glowing background orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] rounded-full bg-accent/3 blur-[100px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[30vw] h-[30vw] rounded-full bg-gold-primary/3 blur-[120px] pointer-events-none select-none" />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-8">
        {/* Left Column: Heading Copy */}
        <div className="lg:col-span-7 flex flex-col gap-6 items-start max-[1023px]:items-center max-[1023px]:text-center">
          <AnimatedSection direction="down" delay={0.05}>
            <FloatingBadge text="Café artesanal de especialidad" />
          </AnimatedSection>

          {/* Title Header with highlighted "felicidad" */}
          <div className="flex flex-col gap-1 w-full max-w-2xl">
            <RevealText
              text="Aquí se prepara la"
              as="h1"
              className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-foreground max-[1023px]:justify-center"
              delay={0.15}
            />
            {/* Lora Italic gold highlighting */}
            <AnimatedSection direction="none" delay={0.4} className="-mt-1 md:-mt-2 flex max-[1023px]:justify-center">
              <span className="font-editorial italic text-5xl md:text-7xl text-gold-primary font-medium tracking-normal text-glow block">
                felicidad
              </span>
            </AnimatedSection>
            <RevealText
              text="una taza a la vez."
              as="span"
              className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-foreground block -mt-1 md:-mt-2 max-[1023px]:justify-center"
              delay={0.55}
            />
          </div>

          <AnimatedSection direction="up" delay={0.75} className="flex max-[1023px]:justify-center">
            <p className="font-sans text-sm md:text-base text-muted-text max-w-xl leading-relaxed">
              La cafetería más querida de La Troncal. Cafés artesanales elaborados con amor, frozen exclusivos, waffles de autor, postres caseros y desayunos completos para convertir cualquier día en un buen momento.
            </p>
          </AnimatedSection>

          {/* Action CTAs - Responsive alignment centered on mobile/tablet */}
          <AnimatedSection
            direction="up"
            delay={0.85}
            className="flex flex-wrap gap-4 mt-2 w-full justify-start max-[1023px]:justify-center"
          >
            <a href="#menu">
              <PremiumButton variant="primary" isMagnetic={true}>
                Explorar menú
              </PremiumButton>
            </a>
            <a href="#contacto">
              <PremiumButton variant="secondary" isMagnetic={true}>
                Ver ubicación
              </PremiumButton>
            </a>
          </AnimatedSection>
        </div>

        {/* Right Column: Visual Photo and Floating Badges */}
        <div className="lg:col-span-5 relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square">
          <AnimatedSection
            direction="left"
            delay={0.6}
            className="w-full h-full relative"
          >
            {/* Parallax Coffee Droplet Image */}
            <ParallaxImage
              src="/images/cafe.jpeg"
              alt="Mister Coffee Espresso Droplet"
              speed={1.14}
              className="rounded-premium object-cover shadow-premium"
            />

            {/* Badge 2: Open daily (Bottom Left responsive) */}
            <div className="absolute bottom-16 -left-6 z-20 hidden sm:block">
              <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-background/90 text-foreground border border-border-custom backdrop-blur-sm shadow-soft select-none">
                <CalendarHeart className="w-4 h-4 text-accent" />
                Abierto todos los días
              </span>
            </div>

            {/* Badge 3: Schedules (Bottom Right responsive) */}
            <div className="absolute bottom-2 right-2 sm:-bottom-4 sm:right-4 z-20">
              <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[9px] font-sans font-bold tracking-wider uppercase bg-background/90 text-foreground border border-border-custom backdrop-blur-sm shadow-soft select-none">
                <Clock className="w-4 h-4 text-accent" />
                9:00 AM – 9:00 PM
              </span>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
