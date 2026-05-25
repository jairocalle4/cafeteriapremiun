import React from "react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/animations/AnimatedSection";
import RevealText from "@/components/animations/RevealText";
import FloatingBadge from "@/components/ui/FloatingBadge";
import PremiumButton from "@/components/ui/PremiumButton";
import ParallaxImage from "@/components/animations/ParallaxImage";
import { Gift, Sparkles, Heart, ChefHat, Calendar, Info } from "lucide-react";

/**
 * CustomCakes Section.
 * Exhibits custom cake pre-order services:
 * - Left: Editorial copy, Lora highlighted quotes, highlight list, advice block, and direct CTA buttons.
 * - Right: Parallax postre.jpeg showcase.
 */
export default function CustomCakes() {
  const highlights = [
    { text: "Tortas para cumpleaños", icon: <Gift className="w-4 h-4 text-teal-primary" /> },
    { text: "Tortas personalizadas", icon: <Sparkles className="w-4 h-4 text-teal-primary" /> },
    { text: "Sabores especiales", icon: <Heart className="w-4 h-4 text-teal-primary" /> },
    { text: "Preparación bajo pedido", icon: <ChefHat className="w-4 h-4 text-teal-primary" /> },
    { text: "Pedido anticipado por WhatsApp", icon: <Calendar className="w-4 h-4 text-teal-primary" /> },
  ];

  const waHref = "https://wa.me/593993127311?text=Hola%20Mister%20Coffee%2C%20deseo%20informaci%C3%B3n%20para%20encargar%20una%20torta%20personalizada.%20%C2%BFMe%20pueden%20ayudar%20con%20sabores%2C%20precios%20y%20tiempo%20de%20anticipaci%C3%B3n%3F";

  return (
    <Section id="tortas" hasBorder={true} className="bg-background">
      {/* Decorative background blur */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[25vw] h-[25vw] rounded-full bg-gold-primary/3 blur-[90px] pointer-events-none select-none" />

      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Creative Editorial Column */}
        <div className="lg:col-span-7 flex flex-col gap-6 items-start max-[1023px]:items-center max-[1023px]:text-center">
          <AnimatedSection direction="down" delay={0.05}>
            <FloatingBadge text="Servicio Especial" />
          </AnimatedSection>

          <RevealText
            text="Tortas personalizadas para momentos especiales"
            as="h2"
            className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-glow text-foreground max-[1023px]:justify-center"
            delay={0.1}
          />

          {/* Editorial Phrase Highlight - Slogan in Lora Italic */}
          <AnimatedSection direction="none" delay={0.2} className="flex max-[1023px]:justify-center">
            <p className="font-editorial italic text-xl md:text-2xl text-gold-primary border-l-2 border-gold-primary/30 pl-4 py-1 text-left">
              &quot;Tortas preparadas bajo pedido para celebrar como se merece.&quot;
            </p>
          </AnimatedSection>

          {/* Divided short paragraphs */}
          <AnimatedSection direction="up" delay={0.25} className="flex flex-col gap-4 font-sans text-xs md:text-sm text-muted-text leading-relaxed max-w-xl text-left">
            <p>
              Celebra tus cumpleaños, aniversarios y ocasiones especiales con repostería artesanal. En <strong className="text-teal-primary font-semibold">Mister Coffee</strong> diseñamos tortas personalizadas que no solo lucen espectaculares, sino que deleitan con ingredientes selectos y un sabor inolvidable.
            </p>
            <p>
              Elige tus rellenos favoritos, texturas y detalles de diseño. Cada pedido es elaborado de forma individual con la dedicación que tu evento merece.
            </p>
          </AnimatedSection>

          {/* Advice Notice Callout */}
          <AnimatedSection
            direction="up"
            delay={0.3}
            className="flex items-start gap-2.5 bg-gold-primary/5 p-4 rounded-xl border border-gold-primary/20 text-left w-full"
          >
            <Info className="w-4 h-4 text-gold-primary mt-0.5 shrink-0" />
            <p className="font-sans text-xs text-foreground/90 leading-relaxed">
              <span className="font-bold text-gold-primary">Pedido Anticipado:</span> Elaboramos nuestras tortas bajo pedido para garantizar insumos frescos y un acabado artesanal impecable.
            </p>
          </AnimatedSection>

          {/* Highlight features list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mt-2 text-left">
            {highlights.map((item, index) => (
              <AnimatedSection
                key={item.text}
                direction="up"
                delay={0.35 + index * 0.05}
                className="flex items-center gap-3 group"
              >
                <div className="p-2 bg-teal-primary/5 border border-teal-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-teal-primary/10 transition-colors">
                  {item.icon}
                </div>
                <span className="font-sans text-xs md:text-sm text-foreground font-bold group-hover:text-teal-primary transition-colors">
                  {item.text}
                </span>
              </AnimatedSection>
            ))}
          </div>

          {/* Action CTA Button */}
          <AnimatedSection
            direction="up"
            delay={0.6}
            className="w-full flex justify-start max-[1023px]:justify-center mt-4 animate-pulse-slow"
          >
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <PremiumButton variant="primary" isMagnetic={true} className="w-full sm:w-auto">
                Encargar una torta
              </PremiumButton>
            </a>
          </AnimatedSection>
        </div>

        {/* Right Side: Photo Showcase */}
        <div className="lg:col-span-5 relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square">
          <AnimatedSection
            direction="left"
            delay={0.2}
            className="w-full h-full relative"
          >
            <ParallaxImage
              src="/images/postre.jpeg"
              alt="Cheesecake premium de Mister Coffee"
              speed={1.1}
              className="rounded-premium object-cover shadow-premium"
            />
            
            {/* Overlay trust card */}
            <div className="absolute bottom-6 left-6 right-6 z-10 glassmorphism !bg-background/90 p-4 rounded-xl border-accent/20 shadow-glass">
              <p className="font-title text-[10px] font-bold text-accent tracking-wider uppercase">
                Torta de la Casa
              </p>
              <p className="font-sans text-xs text-muted-text mt-1 leading-relaxed">
                Ingredientes 100% naturales, chocolate fino de aroma y repostería artesanal.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
