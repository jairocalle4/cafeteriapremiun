import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/data/site";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-clip bg-background">
      {/* ── Premium Menu Navbar ───────────────────────────────────── */}
      <header className="sticky top-0 left-0 w-full z-50 bg-background border-b border-border-custom">
        <Container className="flex items-center justify-between h-16">

          {/* Left — Back navigation */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group text-muted-text hover:text-foreground transition-colors duration-300"
            aria-label="Volver al inicio"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border-custom group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-300">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-300" />
            </div>
            <span className="hidden sm:block font-sans text-xs tracking-wider font-medium">
              Inicio
            </span>
          </Link>

          {/* Center — Brand Identity */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 group select-none"
            aria-label="Ir a la página principal de Mister Coffee"
          >
            {/* Logo circle */}
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-accent/20 group-hover:border-accent/50 group-hover:scale-105 transition-all duration-300 shrink-0 bg-background-dark">
              <Image
                src="/images/LOGO.jpeg"
                alt="Mister Coffee Logo"
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>

            {/* Brand name + tagline */}
            <div className="flex flex-col items-start">
              <span className="font-title font-bold text-sm tracking-[0.2em] uppercase text-foreground leading-tight group-hover:text-accent transition-colors duration-300">
                Mister Coffee
              </span>
              <span className="hidden sm:block font-sans text-[9px] tracking-[0.15em] uppercase text-muted-text leading-tight">
                Carta Digital
              </span>
            </div>
          </Link>

          {/* Right — WhatsApp CTA */}
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border-custom hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
            aria-label="Pedir por WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-accent group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:block font-sans text-xs font-bold tracking-wider text-foreground group-hover:text-accent transition-colors duration-300">
              Pedir por WhatsApp
            </span>
          </a>

        </Container>

        {/* Gold accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent" />
      </header>

      {/* Page Content */}
      <main className="flex-grow flex flex-col">
        {children}
      </main>

      {/* Footer minimal */}
      <footer className="py-6 border-t border-border-custom/50">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-[1px] bg-gold-primary/50" />
              <span className="font-sans text-[10px] tracking-widest uppercase text-muted-text/60">
                Mister Coffee · La Troncal, Cañar
              </span>
              <div className="w-3 h-[1px] bg-gold-primary/50" />
            </div>
            <Link
              href="/"
              className="font-sans text-[10px] tracking-widest uppercase text-muted-text/50 hover:text-accent transition-colors duration-300"
            >
              ← Volver al Inicio
            </Link>
          </div>
        </Container>
      </footer>
    </div>
  );
}
