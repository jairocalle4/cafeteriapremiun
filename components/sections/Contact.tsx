import React from "react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/animations/AnimatedSection";
import PremiumButton from "@/components/ui/PremiumButton";
import GoogleRatingBadge from "@/components/ui/GoogleRatingBadge";
import { siteConfig } from "@/data/site";
import { MapPin, Clock, MessageSquare, Compass, ArrowUpRight } from "lucide-react";

/**
 * Contact Section.
 * Renders a premium side-by-side local business layout:
 * - Left: Contact Info cards (location, schedule, phones, socials), trust ratings,
 *   and direct CTAs (WhatsApp order link, Google Maps navigation, Instagram page).
 * - Right: Interactive responsive Google Map iframe styled with modern CSS filters.
 */
export default function Contact() {
  const cards = [
    {
      icon: <MapPin className="w-5 h-5 text-accent" />,
      title: "Nuestra Casa",
      value: "Calle 10 de Agosto y Andrés F. Córdova",
      sub: "La Troncal, Cañar, Ecuador",
    },
    {
      icon: <Clock className="w-5 h-5 text-accent" />,
      title: "Horario Especial",
      value: siteConfig.schedule,
      sub: "Abierto todos los días de la semana",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-accent" />,
      title: "Pedidos & Consultas",
      value: "2420819 · 0993127311 · 0959656120",
      sub: "WhatsApp Principal: 0993127311",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: siteConfig.facebookLink,
      colorClass: "bg-[#1877F2] text-white hover:bg-[#1877F2]/90",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: siteConfig.instagramLink,
      colorClass: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: siteConfig.tiktokLink,
      colorClass: "bg-[#000000] text-white border border-white/15 shadow-[0_0_10px_rgba(0,242,234,0.15),_0_0_10px_rgba(254,44,85,0.15)]",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.525.02c1.31.043 2.502.543 3.411 1.41.018.017.036.033.053.052.825.845 1.258 1.942 1.332 3.197h2.684V7.93c-1.127.01-2.18-.396-3.037-1.127-.85-.726-1.425-1.745-1.572-2.924H12.53v11.758c0 1.282-.522 2.443-1.371 3.292-.85.85-2.01 1.371-3.292 1.371s-2.443-.522-3.292-1.371c-.85-.85-1.371-2.01-1.371-3.292 0-1.282.522-2.443 1.371-3.292.85-.85 2.01-1.371 3.292-1.371.493 0 .96.078 1.398.223v-3.29c-.454-.083-.92-.128-1.398-.128-2.178 0-4.148.887-5.586 2.325C.887 10.457 0 12.427 0 14.605c0 2.178.887 4.148 2.325 5.586S5.787 22.516 7.965 22.516c2.178 0 4.148-.887 5.586-2.325 1.438-1.438 2.325-3.408 2.325-5.586V0h-3.35v.02z"/>
        </svg>
      ),
    },
  ];

  return (
    <Section id="contacto" hasBorder={true} className="bg-background">
      {/* Editorial background highlight */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-accent/2 blur-[130px] pointer-events-none select-none" />

      <Container>
        {/* Section Header */}
        <SectionHeader
          badge="Contacto & Ubicación"
          title="Ven a disfrutar con nosotros"
          description="Ubicados en pleno centro de La Troncal. Escríbenos directamente o visítanos hoy mismo."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Contact cards & buttons list */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              {cards.map((card, index) => (
                <AnimatedSection
                  key={card.title}
                  direction="right"
                  delay={0.1 + index * 0.05}
                  className="flex gap-4 p-4 rounded-2xl bg-background-dark/15 border border-border-custom/30 hover:border-accent/20 transition-colors duration-300"
                >
                  <div className="p-3 bg-accent/5 border border-accent/15 rounded-full shrink-0 flex items-center justify-center h-11 w-11">
                    {card.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-title text-[9px] tracking-widest uppercase font-bold text-accent">
                      {card.title}
                    </span>
                    <p className="font-sans text-xs md:text-sm text-foreground font-bold leading-normal">
                      {card.value}
                    </p>
                    <span className="font-sans text-[11px] text-muted-text">
                      {card.sub}
                    </span>
                  </div>
                </AnimatedSection>
              ))}

              {/* Social Channels card with brand-colored round icons */}
              <AnimatedSection
                direction="right"
                delay={0.25}
                className="flex gap-4 p-4 rounded-2xl bg-background-dark/15 border border-border-custom/30"
              >
                <div className="p-3 bg-accent/5 border border-accent/15 rounded-full shrink-0 flex items-center justify-center h-11 w-11">
                  <Compass className="w-5 h-5 text-accent" />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="font-title text-[9px] tracking-widest uppercase font-bold text-accent">
                    Síguenos en Redes
                  </span>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-soft ${social.colorClass}`}
                        aria-label={`Ver perfil de ${social.name} de Mister Coffee`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Google Rating Badge as trust builder before CTAs */}
            <AnimatedSection direction="right" delay={0.28}>
              <GoogleRatingBadge className="!bg-background-dark/20 w-full" />
            </AnimatedSection>

            {/* Premium direct actions CTAs - Responsive grid alignment wrap */}
            <AnimatedSection
              direction="right"
              delay={0.3}
              className="flex flex-col sm:flex-row lg:flex-col gap-3 mt-2"
            >
              {/* WhatsApp direct order */}
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block sm:flex-1 lg:flex-none"
              >
                <PremiumButton variant="primary" className="w-full justify-center gap-2">
                  Pedir por WhatsApp
                </PremiumButton>
              </a>

              {/* Google Maps link */}
              <a
                href={siteConfig.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block sm:flex-1 lg:flex-none"
              >
                <PremiumButton variant="secondary" className="w-full justify-center gap-2">
                  Abrir Ubicación
                </PremiumButton>
              </a>

              {/* Instagram link */}
              <a
                href={siteConfig.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block sm:flex-1 lg:flex-none"
              >
                <PremiumButton variant="glass" className="w-full justify-center gap-2">
                  Ver Instagram
                </PremiumButton>
              </a>
            </AnimatedSection>
          </div>

          {/* Right Column: Google Maps embedded iframe wrapper */}
          <div className="lg:col-span-7 w-full h-full min-h-[300px] lg:min-h-full flex">
            <AnimatedSection
              direction="left"
              delay={0.2}
              className="glassmorphism p-3 rounded-premium shadow-premium border border-glass-border/30 w-full flex flex-col relative h-[350px] lg:h-[450px]"
            >
              {/* Floating Badge Header Overlay */}
              <div className="absolute top-6 left-6 z-20">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[9px] font-title font-bold tracking-wider uppercase bg-background/90 text-teal-primary border border-teal-primary/10 shadow-soft backdrop-blur-sm select-none">
                  Estamos en el centro de La Troncal
                </span>
              </div>

              {/* Maps Frame Container */}
              <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-background-dark/30 flex">
                <iframe
                  src="https://maps.google.com/maps?q=Calle%2010%20de%20Agosto%20y%20Andres%20F.%20Cordova%2C%20La%20Troncal%2C%20Canar%2C%20Ecuador&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover grayscale opacity-90 contrast-125 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-out"
                  title="Mapa de ubicación de Mister Coffee"
                />
              </div>

              {/* Floating Maps Actions Trigger */}
              <div className="absolute bottom-6 right-6 z-20">
                <a
                  href={siteConfig.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[9px] font-title font-bold tracking-widest uppercase bg-accent text-background hover:bg-accent-hover transition-colors shadow-soft cursor-pointer">
                    Abrir en Google Maps
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </Section>
  );
}
