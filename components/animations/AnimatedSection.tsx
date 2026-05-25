"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  threshold?: number;
}

/**
 * AnimatedSection uses Framer Motion's whileInView API to smoothly animate
 * children as they enter the viewport. Automatically scales down movement
 * if prefers-reduced-motion is active.
 */
export default function AnimatedSection({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  threshold = 0.15,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  
  // Disable directional transitions if user prefers reduced motion
  const activeDirection = shouldReduceMotion ? "none" : direction;
  const animationVariants = fadeIn(activeDirection, duration, delay);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={animationVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
