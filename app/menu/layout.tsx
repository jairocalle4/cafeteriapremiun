import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import PremiumButton from "@/components/ui/PremiumButton";
import { siteConfig } from "@/data/site";
import { ArrowLeft } from "lucide-react";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-background">
      {/* Simplified Menu Header */}
      <header className="sticky top-0 left-0 w-full z-50 glassmorphism py-3 shadow-glass border-b border-border-custom">
        <Container className="flex items-center justify-between">
          {/* Back to Home Link */}
          <Link
            href="/"
            className="flex items-center gap-2 group text-muted-text hover:text-accent transition-colors duration-300 font-sans text-sm font-medium"
          >
            <div className="w-8 h-8 rounded-full bg-background-dark/30 border border-border-custom flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="hidden sm:inline">Volver al Inicio</span>
          </Link>

          {/* Logo Brand Link */}
          <Link href="/" className="flex items-center gap-3 group select-none absolute left-1/2 -translate-x-1/2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent/20 group-hover:scale-105 transition-transform duration-300 shrink-0 bg-background-dark">
              <Image
                src="/images/LOGO.jpeg"
                alt="Mister Coffee Logo"
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <span className="hidden sm:block font-title font-bold text-sm tracking-widest uppercase text-glow text-foreground">
              Mister Coffee
            </span>
          </Link>

          {/* WhatsApp Conversions Call-to-Action */}
          <div>
            <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
              <PremiumButton variant="glass" className="hidden sm:flex text-sm py-1.5 px-4" isMagnetic={true}>
                Pedir por WhatsApp
              </PremiumButton>
              <PremiumButton variant="primary" className="sm:hidden text-xs py-1.5 px-3" isMagnetic={false}>
                Pedir
              </PremiumButton>
            </a>
          </div>
        </Container>
      </header>

      {/* Page Content */}
      <main className="flex-grow flex flex-col">
        {children}
      </main>
    </div>
  );
}
