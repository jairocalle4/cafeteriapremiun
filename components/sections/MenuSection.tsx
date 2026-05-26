"use client";

import React from "react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/animations/AnimatedSection";
import PremiumButton from "@/components/ui/PremiumButton";
import Link from "next/link";
import { Coffee, IceCream, Sandwich, CakeSlice, Sunrise, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function MenuSection() {
  const previewCategories = [
    { name: "Bebidas Calientes", icon: <Coffee className="w-6 h-6 text-accent" /> },
    { name: "Frozens & Batidos", icon: <IceCream className="w-6 h-6 text-accent" /> },
    { name: "Sánduches & Comida", icon: <Sandwich className="w-6 h-6 text-accent" /> },
    { name: "Dulces & Postres", icon: <CakeSlice className="w-6 h-6 text-accent" /> },
    { name: "Desayunos", icon: <Sunrise className="w-6 h-6 text-accent" /> },
  ];

  return (
    <Section id="menu" hasBorder={true} className="bg-background relative overflow-hidden py-24">
      {/* Decorative background visual */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale">
        <Image src="/images/cafe.jpeg" alt="Background Texture" fill className="object-cover" />
      </div>

      <Container className="relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <SectionHeader
          badge="Nuestra Especialidad"
          title="Descubre Nuestro Menú"
          description="Más de 100 especialidades artesanales preparadas con amor. Desde el mejor café de altura hasta desayunos completos y postres de la casa."
        />

        {/* Visual Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-5xl mb-14">
          {previewCategories.map((cat, idx) => (
            <AnimatedSection
              key={idx}
              direction="up"
              delay={0.1 * idx}
              className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-background-dark/20 border border-border-custom hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-background border border-border-custom flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <span className="font-title text-xs tracking-wider uppercase text-center font-bold text-foreground">
                {cat.name}
              </span>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action -> /menu */}
        <AnimatedSection direction="up" delay={0.4} className="flex flex-col items-center">
          <Link href="/menu">
            <PremiumButton variant="primary" isMagnetic={true} className="px-10 py-5 text-base shadow-premium hover:shadow-glow">
              <span className="flex items-center gap-2">
                Ver Carta Digital Completa
                <ArrowRight className="w-5 h-5" />
              </span>
            </PremiumButton>
          </Link>
          <p className="font-sans text-xs text-muted-text mt-5 text-center max-w-md leading-relaxed">
            Explora nuestra carta digital tipo revista, y realiza tu pedido directo al WhatsApp de Mister Coffee.
          </p>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
