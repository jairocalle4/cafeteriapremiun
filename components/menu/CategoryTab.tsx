"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MenuCategory } from "@/data/menu";

interface CategoryTabProps {
  category: MenuCategory;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const ordinals = ["01", "02", "03", "04", "05"];

export default function CategoryTab({
  category,
  isActive,
  onClick,
  index,
}: CategoryTabProps) {
  const totalItems = category.sections.reduce(
    (acc, s) => acc + s.items.length,
    0
  );

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex items-center gap-4 w-full text-left transition-all duration-500 outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-xl",
        "lg:px-4 lg:py-4 lg:rounded-xl lg:border-b-0",
        "px-3 py-2 rounded-xl border-b-0 shrink-0",
        isActive
          ? "bg-background-dark/50 lg:bg-background-dark/40"
          : "hover:bg-background-dark/20"
      )}
      aria-pressed={isActive}
    >
      {/* Animated active left border (Desktop) */}
      <motion.div
        className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-accent via-gold-primary to-accent hidden lg:block"
        initial={false}
        animate={{ opacity: isActive ? 1 : 0, scaleY: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ originY: "center" }}
      />

      {/* Active bottom indicator (Mobile) */}
      <motion.div
        className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-accent via-gold-primary to-accent lg:hidden"
        initial={false}
        animate={{ opacity: isActive ? 1 : 0, scaleX: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: "center" }}
      />

      {/* Ordinal Number */}
      <span
        className={cn(
          "hidden lg:block font-serif text-[10px] font-bold tracking-widest transition-colors duration-300 leading-none shrink-0 w-5",
          isActive ? "text-gold-primary" : "text-muted-text/40 group-hover:text-muted-text/70"
        )}
      >
        {ordinals[index] ?? "00"}
      </span>

      {/* Circular Thumbnail Image */}
      <div
        className={cn(
          "relative shrink-0 rounded-full overflow-hidden transition-all duration-500 border-2",
          "w-10 h-10 lg:w-12 lg:h-12",
          isActive
            ? "border-accent/60 shadow-[0_0_0_3px_rgba(10,102,102,0.12)]"
            : "border-border-custom/40 group-hover:border-accent/30"
        )}
      >
        <Image
          src={category.coverImage}
          alt={category.name}
          fill
          className={cn(
            "object-cover transition-transform duration-700",
            isActive ? "scale-110" : "scale-100 group-hover:scale-105"
          )}
          sizes="48px"
        />
        {/* Subtle overlay on inactive */}
        {!isActive && (
          <div className="absolute inset-0 bg-background/40 group-hover:bg-background/10 transition-colors duration-300" />
        )}
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <span
          className={cn(
            "font-title text-[11px] lg:text-xs tracking-widest uppercase font-bold truncate transition-colors duration-300",
            isActive ? "text-accent" : "text-foreground/70 group-hover:text-foreground"
          )}
        >
          {category.name}
        </span>
        <span
          className={cn(
            "hidden lg:block font-sans text-[10px] transition-colors duration-300",
            isActive ? "text-muted-text" : "text-muted-text/50 group-hover:text-muted-text/70"
          )}
        >
          {totalItems} especialidades
        </span>
      </div>

      {/* Active Chevron Arrow (Desktop) */}
      <motion.div
        className="hidden lg:block"
        initial={false}
        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -4 }}
        transition={{ duration: 0.3 }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="text-accent"
        >
          <path
            d="M5 2.5L9.5 7L5 11.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </button>
  );
}
