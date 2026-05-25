import React from "react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/animations/AnimatedSection";
import RevealText from "@/components/animations/RevealText";
import FloatingBadge from "@/components/ui/FloatingBadge";
import { Play, Coffee, Sparkles, Heart } from "lucide-react";

/**
 * PromoVideo Section.
 * Renders a side-by-side layout:
 * - Left: Editorial text explaining the atmosphere and coffee craft.
 * - Right: High-end smartphone mockup housing a 9:16 vertical loop video.
 */
export default function PromoVideo() {
  const videoBullets = [
    {
      title: "El Aroma de Especialidad",
      desc: "Granos selectos seleccionados con esmero y preparados al momento.",
      icon: <Coffee className="w-4 h-4 text-teal-primary" />,
    },
    {
      title: "Atmósfera Única",
      desc: "Espacio climatizado, música relajante y rincones cómodos para compartir.",
      icon: <Sparkles className="w-4 h-4 text-teal-primary" />,
    },
    {
      title: "Hecho con Pasión",
      desc: "Cada waffle, postre y taza cuenta una historia de sabor honesto.",
      icon: <Heart className="w-4 h-4 text-teal-primary" />,
    },
  ];

  return (
    <Section id="video" hasBorder={true} className="bg-background">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Brand Essence Text */}
        <div className="lg:col-span-6 flex flex-col gap-6 items-start max-[1023px]:items-center max-[1023px]:text-center">
          <AnimatedSection direction="down" delay={0.05}>
            <FloatingBadge text="Nuestra Esencia" />
          </AnimatedSection>

          <RevealText
            text="Vívelo antes de venir"
            as="h2"
            className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-glow text-foreground max-[1023px]:justify-center"
            delay={0.1}
          />

          {/* Editorial Phrase Highlight - Lora Italic */}
          <AnimatedSection direction="none" delay={0.2} className="flex max-[1023px]:justify-center">
            <p className="font-editorial italic text-xl md:text-2xl text-gold-primary border-l-2 border-gold-primary/30 pl-4 py-1 text-left">
              &quot;Un rincón acogedor en el corazón de La Troncal.&quot;
            </p>
          </AnimatedSection>

          {/* Divided short paragraphs */}
          <AnimatedSection direction="up" delay={0.25} className="flex flex-col gap-4 font-sans text-xs md:text-sm text-muted-text leading-relaxed max-w-xl text-left">
            <p>
              Queremos que sientas la calidez de nuestro espacio incluso antes de cruzar la puerta. Un vistazo a los sabores vibrantes, el ambiente relajado y los pequeños detalles cotidianos que hacen de <strong className="text-foreground font-bold">Mister Coffee</strong> tu lugar favorito.
            </p>
          </AnimatedSection>

          {/* Bullet cards with rich styling */}
          <div className="flex flex-col gap-4 w-full text-left">
            {videoBullets.map((bullet, idx) => (
              <AnimatedSection
                key={bullet.title}
                direction="up"
                delay={0.3 + idx * 0.05}
                className="flex items-start gap-3.5 p-3 rounded-2xl bg-background-dark/10 border border-border-custom/20 hover:border-teal-primary/20 transition-all duration-300"
              >
                <div className="p-2.5 bg-teal-primary/5 rounded-xl flex items-center justify-center shrink-0">
                  {bullet.icon}
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="font-title text-xs uppercase tracking-wider font-extrabold text-foreground">
                    {bullet.title}
                  </h4>
                  <p className="font-sans text-xs text-muted-text leading-relaxed">
                    {bullet.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Quick aesthetic highlights */}
          <div className="flex flex-col gap-1 border-l-2 border-accent/40 pl-4 font-sans text-xs md:text-sm text-foreground/80 font-medium text-left">
            <p>&quot;Aquí se prepara la felicidad, una taza a la vez.&quot;</p>
            <p className="text-[10px] uppercase tracking-widest text-accent font-bold">
              - Mister Coffee Team
            </p>
          </div>
        </div>


        {/* Right Side: Smartphone Video Loop Mockup (9:16 Aspect Ratio) */}
        <div className="lg:col-span-6 w-full flex justify-center">
          <AnimatedSection
            direction="left"
            delay={0.15}
            className="relative w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] aspect-[9/16]"
          >
            {/* Phone casing border */}
            <div className="w-full h-full rounded-[48px] border-[10px] border-[#1a1a1a] bg-[#1a1a1a] shadow-premium relative overflow-hidden flex">
              
              {/* Speaker Notch / Front Camera dot */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center gap-2.5">
                <div className="w-10 h-1 bg-[#222] rounded-full" />
                <div className="w-2.5 h-2.5 bg-[#0a0a0a] border border-[#222] rounded-full shrink-0" />
              </div>
              
              {/* Inner video player display */}
              <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-black flex">
                <video
                  src="/video/video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label="Video promocional vertical de Mister Coffee"
                />
                
                {/* Floating active overlay play badge */}
                <div className="absolute bottom-6 right-6 z-20 p-2.5 bg-black/60 backdrop-blur-sm rounded-full border border-white/10 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-white text-white animate-pulse" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
