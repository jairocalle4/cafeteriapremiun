"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  threshold?: number;
}

/**
 * RevealText splits text into individual words, wraps each word inside an
 * overflow-hidden mask, and uses Framer Motion to stagger-reveal them from the bottom
 * as the element enters the viewport. Automatically falls back to standard text
 * if prefers-reduced-motion is active.
 */
export default function RevealText({
  text,
  className,
  as: Component = "h2",
  delay = 0,
  threshold = 0.4,
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();

  // Instant fallback for reduced-motion users
  if (shouldReduceMotion) {
    return <Component className={cn(className)}>{text}</Component>;
  }

  const words = text.split(" ");

  return (
    <Component className={cn("overflow-hidden flex flex-wrap leading-tight", className)}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: threshold }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: delay,
            },
          },
        }}
        className="inline-flex flex-wrap"
      >
        {words.map((word, index) => (
          <span
            key={index}
            className="relative inline-block overflow-hidden mr-[0.22em] py-1"
          >
            <motion.span
              variants={{
                hidden: { y: "115%" },
                visible: {
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1], // easeOutExpo
                  },
                },
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
