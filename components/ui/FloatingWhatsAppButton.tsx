"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * FloatingWhatsAppButton.
 * Renders a fixed floating WhatsApp button in the bottom right corner:
 * - Color: Brand green (#25D366).
 * - Animation: Pulsing border ring.
 * - Responsive: Pill with text on desktop, clean circle icon-only on mobile to prevent blocking content.
 */
export default function FloatingWhatsAppButton() {
  const shouldReduceMotion = useReducedMotion();
  const waHref = "https://wa.me/593993127311?text=Hola%20Mister%20Coffee%2C%20deseo%20hacer%20un%20pedido";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center pointer-events-auto">
      <motion.a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center gap-2 bg-[#25D366] text-white p-3 md:px-5 md:py-3.5 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:bg-[#20ba5a] transition-colors duration-300"
        aria-label="Pedir por WhatsApp"
        whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
        whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
      >
        {/* Pulsing ring effect - disabled if prefers-reduced-motion is active */}
        {!shouldReduceMotion && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />
        )}

        {/* WhatsApp SVG Icon */}
        <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.66.986 3.288 1.486 4.887 1.488 5.233 0 9.488-4.251 9.49-9.49.002-2.54-1.01-4.916-2.853-6.76C16.282 2.536 13.9 1.528 11.36 1.528c-5.244 0-9.495 4.258-9.497 9.497-.001 1.637.521 3.23 1.502 4.801l-.997 3.636 3.73-.978zm11.233-6.046c-.305-.152-1.802-.888-2.08-.988-.278-.1-.482-.152-.684.152-.202.304-.785.988-.962 1.19-.177.203-.355.228-.66.076-.305-.152-1.287-.475-2.451-1.513-.906-.808-1.517-1.806-1.695-2.11-.177-.304-.019-.468.133-.62.137-.137.305-.355.457-.532.152-.177.202-.304.304-.507.102-.203.05-.38-.025-.532-.076-.152-.684-1.647-.937-2.254-.247-.591-.497-.512-.684-.522-.177-.008-.38-.01-.582-.01-.203 0-.532.076-.81.38-.278.304-1.063 1.039-1.063 2.532 0 1.493 1.089 2.937 1.241 3.14.152.203 2.144 3.273 5.193 4.59.725.313 1.291.5 1.732.64.729.232 1.392.199 1.916.121.584-.087 1.802-.736 2.057-1.445.253-.708.253-1.317.177-1.445-.076-.128-.278-.203-.582-.355z"/>
        </svg>

        {/* Text label visible only on Desktop viewports */}
        <span className="hidden md:inline font-title text-[10px] font-bold uppercase tracking-widest leading-none mt-0.5 select-none">
          Pedir por WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
