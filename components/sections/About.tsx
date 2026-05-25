import React from "react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/animations/AnimatedSection";
import RevealText from "@/components/animations/RevealText";
import FloatingBadge from "@/components/ui/FloatingBadge";
import ParallaxImage from "@/components/animations/ParallaxImage";
import GoogleRatingBadge from "@/components/ui/GoogleRatingBadge";
import PremiumButton from "@/components/ui/PremiumButton";
import { siteConfig } from "@/data/site";
import { Coffee, Cake, Cookie, Egg, CupSoda, Sparkles, MapPin } from "lucide-react";

/**
 * About Section.
 * Renders a side-by-side layout:
 * - Left: Parallax local photo (exterior.jpg) with floating reviews and location badges.
 * - Right: Tag, title, editorial quote, split descriptions with bold highlights, attributes, and dual conversion CTAs.
 */
export default function About() {
  const attributes = [
    { name: "Café artesanal", icon: <Coffee className="w-4 h-4 text-teal-primary" /> },
    { name: "Frozen exclusivos", icon: <CupSoda className="w-4 h-4 text-teal-primary" /> },
    { name: "Waffles frescos", icon: <Cookie className="w-4 h-4 text-teal-primary" /> },
    { name: "Tortas personalizadas", icon: <Cake className="w-4 h-4 text-teal-primary" /> },
    { name: "Desayunos completos", icon: <Egg className="w-4 h-4 text-teal-primary" /> },
    { name: "Postres artesanales", icon: <Sparkles className="w-4 h-4 text-teal-primary" /> },
  ];

  return (
    <Section id="nosotros" hasBorder={true} className="bg-background">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Parallax Image Showcase + Trust Badges */}
        <div className="lg:col-span-6 relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square">
          <AnimatedSection
            direction="right"
            delay={0.1}
            className="w-full h-full relative"
          >
            <ParallaxImage
              src="/images/exterior.jpg"
              alt="Ambiente acogedor de Mister Coffee en La Troncal"
              speed={1.12}
              className="rounded-premium object-cover shadow-premium"
            />
            
            {/* Top Right Floating Badge: Location */}
            <div className="absolute top-4 right-4 z-20">
              <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[9px] font-title font-bold tracking-wider uppercase bg-background/95 text-teal-primary border border-teal-primary/10 shadow-soft backdrop-blur-sm select-none">
                <MapPin className="w-3.5 h-3.5 animate-bounce" />
                Centro de La Troncal
              </span>
            </div>

            {/* Bottom Left Floating Badge: Google Rating */}
            <div className="absolute bottom-4 left-4 z-20 max-w-[90%] sm:max-w-xs">
              <GoogleRatingBadge className="!bg-background/95 shadow-glass border-teal-primary/10" />
            </div>
          </AnimatedSection>
        </div>

        {/* Right Side: Editorial Narrative */}
        <div className="lg:col-span-6 flex flex-col gap-6 items-start max-[1023px]:items-center max-[1023px]:text-center">
          <AnimatedSection direction="down" delay={0.05}>
            <FloatingBadge text="Sobre Nosotros" />
          </AnimatedSection>

          <RevealText
            text="El café que La Troncal eligió como favorito"
            as="h2"
            className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-glow text-foreground max-[1023px]:justify-center"
            delay={0.1}
          />

          {/* Editorial Phrase Highlight - Slogan in Lora Italic */}
          <AnimatedSection direction="none" delay={0.2} className="flex max-[1023px]:justify-center">
            <p className="font-editorial italic text-xl md:text-2xl text-gold-primary border-l-2 border-gold-primary/30 pl-4 py-1 text-left">
              &quot;Aquí se prepara la felicidad, una taza a la vez.&quot;
            </p>
          </AnimatedSection>

          {/* Divided short paragraphs with bold premium copywriting */}
          <AnimatedSection direction="up" delay={0.25} className="flex flex-col gap-4 font-sans text-xs md:text-sm text-muted-text leading-relaxed max-w-xl text-left">
            <p>
              Somos una <strong className="text-foreground font-bold">cafetería con corazón</strong>, ubicada en el centro de La Troncal. Nuestro espacio está diseñado como un refugio cálido para los amantes de los aromas intensos y el grano honesto.
            </p>
            <p>
              Nuestro menú invita a explorar sabores únicos: desde un <strong className="text-foreground font-bold">espresso clásico</strong>, frozen creativos y waffles crujientes, hasta tortas personalizadas, desayunos abundantes y postres preparados con ingredientes frescos y mucho amor.
            </p>
            <p className="text-[11px] font-bold text-teal-primary tracking-wide uppercase mt-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-primary inline-block" />
              Ingredientes frescos, atención cercana y sabores pensados para compartir.
            </p>
          </AnimatedSection>

          {/* Attribute chips list with micro-animations */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mt-4 text-left">
            {attributes.map((attr, index) => (
              <AnimatedSection
                key={attr.name}
                direction="up"
                delay={0.3 + index * 0.05}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-background-dark/20 border border-border-custom/30 hover:border-teal-primary/20 hover:bg-background-dark/30 transition-all duration-300 group cursor-default"
              >
                <div className="p-1.5 bg-teal-primary/5 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {attr.icon}
                </div>
                <span className="font-sans text-[11px] md:text-xs text-foreground font-bold group-hover:text-teal-primary transition-colors">
                  {attr.name}
                </span>
              </AnimatedSection>
            ))}
          </div>

          {/* Action CTAs */}
          <AnimatedSection direction="up" delay={0.65} className="mt-6 w-full flex flex-wrap gap-4 justify-start max-[1023px]:justify-center">
            <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <PremiumButton variant="primary" className="w-full sm:w-auto">
                Pedir por WhatsApp
              </PremiumButton>
            </a>
            <a href="#menu" className="w-full sm:w-auto">
              <PremiumButton variant="secondary" className="w-full sm:w-auto">
                Ver menú
              </PremiumButton>
            </a>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
