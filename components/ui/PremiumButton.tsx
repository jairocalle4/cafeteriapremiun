"use client";

import React, { useRef } from "react";
import { motion, useSpring, useMotionValue, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PremiumButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"
  > {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "glass";
  isMagnetic?: boolean;
  className?: string;
}

/**
 * PremiumButton is a highly interactive button featuring primary, secondary, and glassmorphism variants.
 * Supports a custom magnetic pull effect when the cursor hovers near the button.
 */
export default function PremiumButton({
  children,
  variant = "primary",
  isMagnetic = false,
  className,
  ...props
}: PremiumButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Spring physics setup for buttery smooth magnetic movement
  const springConfig = { damping: 15, stiffness: 150, mass: 0.8 };
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Disable magnetic pull if prefers-reduced-motion is on or flag is false
    if (!isMagnetic || shouldReduceMotion || !buttonRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();

    // Center coordinates of the button
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Distance vector from center
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Apply a scaling factor to control displacement range (max pull ~15px)
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
      whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
      className={cn(
        "relative px-8 py-3.5 rounded-full font-sans font-semibold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer overflow-hidden inline-flex items-center justify-center gap-2 select-none outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        
        // Primary Gold Variant
        variant === "primary" &&
          "bg-accent text-background border border-accent hover:bg-transparent hover:text-accent shadow-soft hover:shadow-accent/10",
        
        // Secondary Thin Border Variant
        variant === "secondary" &&
          "bg-transparent text-foreground border border-foreground/30 hover:border-accent hover:text-accent",
        
        // Glassmorphism Variant
        variant === "glass" &&
          "glassmorphism text-foreground hover:bg-accent/10 hover:border-accent/40 hover:text-accent",
        
        className
      )}
      {...props}
    >
      {/* Visual content container */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
