"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "@/components/layout/Container";
import PremiumButton from "@/components/ui/PremiumButton";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

/**
 * Navbar component for the header.
 * - Glassmorphism backgrounds applied when scrolled.
 * - Collapses (hides) dynamically on scroll down, reveals on scroll up.
 * - Responsive transitions with full screen drawer layout for mobile views.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Add backdrop blur when scrolled past header area
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Smart auto-hiding header logic
    if (latest > previous && latest > 150) {
      setIsHidden(true); // scrolling down
    } else {
      setIsHidden(false); // scrolling up
    }
  });

  const navLinks = [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Menú", href: "#menu" },
    { name: "Galería", href: "#galeria" },
    { name: "Reseñas", href: "#reseñas" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "glassmorphism py-3 shadow-glass" : "bg-transparent py-5"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo Brand Link */}
          <Link href="#inicio" className="flex items-center gap-3 group select-none">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-accent/20 group-hover:scale-105 transition-transform duration-300 shrink-0 bg-background-dark">
              <Image
                src="/images/LOGO.jpeg"
                alt="Mister Coffee Logo"
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <span className="font-title font-bold text-sm tracking-widest uppercase text-glow text-foreground">
              Mister Coffee
            </span>
          </Link>

          {/* Desktop Navigation Link Options */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-title text-[10px] tracking-wider uppercase text-foreground/80 hover:text-accent transition-colors duration-300 font-bold"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Conversions Call-to-Action */}
          <div className="hidden md:block">
            <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
              <PremiumButton variant="glass" isMagnetic={true}>
                Pedir por WhatsApp
              </PremiumButton>
            </a>
          </div>

          {/* Mobile Hamburguer Drawer Toggle button with minimum 44px touch target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden text-foreground hover:text-accent transition-colors focus:outline-none cursor-pointer h-11 w-11 flex items-center justify-center p-2 rounded-full hover:bg-background-dark/20"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </Container>
      </motion.header>

      {/* Mobile Modal Drawer Panel Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-28 px-6 md:hidden flex flex-col justify-between pb-12"
          >
            <nav className="flex flex-col gap-8 items-center mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-title text-2xl tracking-widest text-foreground/80 hover:text-accent transition-colors duration-300 font-bold"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex justify-center mt-6">
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full max-w-[280px]">
                <PremiumButton variant="primary" className="w-full">
                  Pedir por WhatsApp
                </PremiumButton>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
