"use client";

import React from "react";
import { Star } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface GoogleRatingBadgeProps {
  className?: string;
}

/**
 * GoogleRatingBadge.
 * Renders a premium, clickable glassmorphic trust card that:
 * - Displays a large 4.6 rating number.
 * - Shows 5 gold rating stars.
 * - Displays Google Maps reviews count (299 reseñas).
 * - Displays the confidence phrase: "Reconocidos por nuestros clientes en La Troncal".
 * - Enlaces directly to Google Maps reviews.
 */
export default function GoogleRatingBadge({ className }: GoogleRatingBadgeProps) {
  return (
    <a
      href={siteConfig.mapsLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "glassmorphism p-4 sm:p-5 rounded-2xl border border-gold-primary/20 hover:border-gold-primary/50 transition-all duration-350 flex items-center gap-4 shadow-premium group max-w-[320px] sm:max-w-sm shrink-0 select-none cursor-pointer hover:shadow-gold-primary/10 hover:scale-[1.03] active:scale-[0.98]",
        className
      )}
      aria-label={`Mister Coffee tiene una valoración de 4.6 en Google Maps con ${siteConfig.reviewsCount} reseñas`}
    >
      {/* Big Number */}
      <span className="font-title text-4xl sm:text-5xl font-extrabold text-gold-primary tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(200,153,26,0.15)]">
        {siteConfig.rating}
      </span>

      {/* Details Column */}
      <div className="flex flex-col text-left justify-center">
        {/* Stars */}
        <div className="flex items-center gap-0.5">
          <Star className="w-4 h-4 fill-gold-primary text-gold-primary drop-shadow-[0_1px_4px_rgba(200,153,26,0.3)] transition-transform duration-300 group-hover:scale-110" />
          <Star className="w-4 h-4 fill-gold-primary text-gold-primary drop-shadow-[0_1px_4px_rgba(200,153,26,0.3)] transition-transform duration-300 group-hover:scale-110 delay-[50ms]" />
          <Star className="w-4 h-4 fill-gold-primary text-gold-primary drop-shadow-[0_1px_4px_rgba(200,153,26,0.3)] transition-transform duration-300 group-hover:scale-110 delay-[100ms]" />
          <Star className="w-4 h-4 fill-gold-primary text-gold-primary drop-shadow-[0_1px_4px_rgba(200,153,26,0.3)] transition-transform duration-300 group-hover:scale-110 delay-[150ms]" />
          <Star className="w-4 h-4 fill-gold-primary/40 text-gold-primary drop-shadow-[0_1px_4px_rgba(200,153,26,0.3)] transition-transform duration-300 group-hover:scale-110 delay-[200ms]" />
        </div>
        
        {/* Maps Label & Reviews Count */}
        <div className="flex items-center gap-1.5 mt-1.5 font-sans">
          <span className="font-title text-[10px] font-bold uppercase tracking-wider text-teal-primary group-hover:text-teal-medium transition-colors">
            Google Maps
          </span>
          <span className="text-[10px] text-muted-text font-bold">
            ({siteConfig.reviewsCount} reseñas)
          </span>
        </div>

        {/* Confidence phrase */}
        <p className="font-sans text-[10px] text-muted-text leading-tight mt-1 font-semibold group-hover:text-foreground transition-colors duration-300">
          Reconocidos por nuestros clientes en La Troncal
        </p>
      </div>
    </a>
  );
}

