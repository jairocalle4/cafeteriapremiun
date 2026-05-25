"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  text: string;
  className?: string;
}

/**
 * FloatingBadge is a premium floating tag displaying highlight labels.
 * Utilizes a subtle vertical float animation and an active glowing pulse indicator.
 */
export default function FloatingBadge({ text, className }: FloatingBadgeProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      animate={shouldReduceMotion ? {} : {
        y: [0, -6, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-sans font-bold tracking-widest uppercase border border-accent/30 bg-accent/5 text-accent backdrop-blur-sm select-none",
        "shadow-[0_0_15px_rgba(196,138,71,0.08)]",
        className
      )}
    >
      {/* Active pulse indicator */}
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
      </span>
      {text}
    </motion.span>
  );
}
