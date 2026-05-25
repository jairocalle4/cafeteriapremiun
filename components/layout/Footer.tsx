import React from "react";
import Container from "@/components/layout/Container";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

/**
 * Premium Footer Layout.
 * Consolidates local SEO details (La Troncal, Cañar, Ecuador)
 * and references links inside an editorial columns structure.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-background border-t border-border-custom py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-left max-md:text-center">
          {/* Brand/Branding Section - Centered on mobile */}
          <div className="md:col-span-2 flex flex-col gap-4 max-md:items-center">
            <Link href="#inicio" className="flex items-center gap-3 group select-none">
              {/* Increased size and swapped with logo_sin_fondo.png */}
              <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-105 shrink-0">
                <Image
                  src="/images/logo_sin_fondo.png"
                  alt="Mister Coffee Logo sin fondo"
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <span className="font-serif font-bold text-lg tracking-widest uppercase text-glow text-foreground">
                Mister Coffee
              </span>
            </Link>
            <p className="font-sans text-xs text-muted-text max-w-sm leading-relaxed mt-2 italic font-medium">
              &quot;{siteConfig.slogan}&quot;
            </p>
            <p className="font-sans text-xs text-muted-text max-w-sm leading-relaxed">
              Cafetería artesanal y tostaduría en el centro de La Troncal. Ven a disfrutar de un espacio cálido y una taza memorable elaborada con pasión.
            </p>
          </div>

          {/* Site Navigation Quick Links */}
          <div className="flex flex-col gap-4 max-md:items-center">
            <h4 className="font-title text-[10px] tracking-widest uppercase font-bold text-accent">
              Navegación
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="#nosotros" className="font-sans text-xs text-muted-text hover:text-accent transition-colors duration-300">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#menu" className="font-sans text-xs text-muted-text hover:text-accent transition-colors duration-300">
                  El Menú
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="font-sans text-xs text-muted-text hover:text-accent transition-colors duration-300">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="#reseñas" className="font-sans text-xs text-muted-text hover:text-accent transition-colors duration-300">
                  Reseñas
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="font-sans text-xs text-muted-text hover:text-accent transition-colors duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Local Information and Contacts */}
          <div className="flex flex-col gap-4 max-md:items-center">
            <h4 className="font-title text-[10px] tracking-widest uppercase font-bold text-accent">
              Contacto y Local
            </h4>
            <address className="not-italic flex flex-col gap-2.5 font-sans text-xs text-muted-text leading-relaxed">
              <p>{siteConfig.address}</p>
              <p className="mt-1 font-semibold text-foreground">
                Horario: {siteConfig.scheduleShort}
              </p>
              <p className="font-semibold text-foreground">
                WhatsApp: <a href={siteConfig.whatsappLink} className="text-accent hover:underline">{siteConfig.whatsapp}</a>
              </p>
            </address>
            
            {/* Social media colorful circles (touch target >= 44px) */}
            <div className="flex items-center gap-3 mt-3 justify-start max-md:justify-center">
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
        </div>

        {/* Lower Copyright Row */}
        <div className="mt-16 pt-8 border-t border-border-custom flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[10px] tracking-widest uppercase text-muted-text/60 text-center max-sm:items-center">
          <p>© {currentYear} Mister Coffee. Todos los derechos reservados.</p>
          <div className="flex gap-2">
            <p>Diseño y desarrollo web por</p>
            <span className="text-foreground hover:text-accent transition-colors duration-300 font-semibold cursor-default">
              JCTech Soluciones
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
