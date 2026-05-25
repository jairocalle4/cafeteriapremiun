import React from "react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/animations/AnimatedSection";
import PremiumButton from "@/components/ui/PremiumButton";
import Image from "next/image";
import { Coffee } from "lucide-react";

/**
 * FeaturedProducts Section.
 * Renders the 4 primary signature categories with:
 * - High quality image imports.
 * - Glassmorphism descriptor details.
 * - Micro-interactions (hover translations).
 * - Immediate WhatsApp order anchors.
 */
export default function FeaturedProducts() {
  const favorites = [
    {
      name: "Cafés Artesanales",
      src: "/images/cafe.jpeg",
      desc: "Granos de altura tostados diariamente en lote pequeño por baristas expertos.",
      badge: "100% Arábigo",
      waText: "Hola Mister Coffee, deseo información y hacer un pedido de Cafés Artesanales.",
    },
    {
      name: "Frozen Exclusivos",
      src: "/images/frozen.png",
      desc: "Frappés cremosos de autor, de frutas naturales o café espresso helado.",
      badge: "De Autor",
      waText: "Hola Mister Coffee, deseo información y hacer un pedido de Frozens Exclusivos.",
    },
    {
      name: "Waffles Especiales",
      src: "/images/wafles.jpeg",
      desc: "Horneados al momento con helado cremoso, frutas frescas y salsas gourmet.",
      badge: "Recién Horneados",
      waText: "Hola Mister Coffee, deseo información y hacer un pedido de Waffles Especiales.",
    },
    {
      name: "Postres & Cheesecakes",
      src: "/images/postre.jpeg",
      desc: "Selección diaria de bizcochos, tartas de tres leches y cheesecakes premium.",
      badge: "Repostería Fina",
      waText: "Hola Mister Coffee, deseo información y hacer un pedido de Postres y Cheesecakes.",
    },
  ];

  return (
    <Section id="favoritos" className="bg-[#e6dfd1]/20 border-b border-border-custom">
      <Container>
        {/* Unified section headers wrapper */}
        <SectionHeader
          badge="Los Favoritos"
          title="Favoritos de la casa"
          description="Una curaduría de las especialidades más deseadas por nuestros clientes en La Troncal."
        />

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {favorites.map((item, index) => {
            // Encode the WhatsApp request message dynamically
            const waHref = `https://wa.me/593993127311?text=${encodeURIComponent(item.waText)}`;

            return (
              <AnimatedSection
                key={item.name}
                direction="up"
                delay={0.15 + index * 0.08}
                className="group relative flex flex-col justify-between bg-background border border-border-custom rounded-premium overflow-hidden transition-all duration-500 hover:shadow-premium"
              >
                {/* Image Container with Hover Scale */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-teal-primary/5 mix-blend-multiply z-10 opacity-30 group-hover:opacity-0 transition-opacity duration-500" />
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-sans font-bold tracking-wider uppercase bg-background/90 text-teal-primary backdrop-blur-sm shadow-soft select-none border border-teal-primary/10">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Details Descriptor block */}
                <div className="p-6 flex flex-col gap-4 flex-grow justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs text-muted-text leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Tactile Card CTA */}
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-block mt-2"
                  >
                    <PremiumButton
                      variant="glass"
                      className="w-full text-center hover:bg-accent hover:text-background border-accent/20 group-hover:border-accent/50 transition-all duration-300"
                    >
                      Pedir Ahora
                    </PremiumButton>
                  </a>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
