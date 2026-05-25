"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  speed?: number; // Speed scale factor, e.g. 1.2 meaning moves 20% faster than scroll
  priority?: boolean;
}

/**
 * ParallaxImage renders a responsive Next.js Image wrapper that implements
 * a smooth parallax movement on scroll using GSAP and ScrollTrigger.
 * Uses a height buffer (120% height, -10% offset) to ensure clipping doesn't occur.
 * Includes media query optimizations to disable heavy GPU calculations on mobile viewports.
 */
export default function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  speed = 1.2,
  priority = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current || !imageRef.current) return;

    // Register ScrollTrigger to connect scroll events
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    const movementScale = (speed - 1) * 100;

    // Desktop and Tablet: Active smooth parallax
    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -movementScale / 2 },
        {
          yPercent: movementScale / 2,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    // Mobile: Minimal movement to protect performance and prevent laggy scroll
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -2 },
        {
          yPercent: 2,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden w-full h-full rounded-premium", containerClassName)}
    >
      {/* Inner wrapper sized larger than container to allow parallax movement range */}
      <div
        ref={imageRef}
        className="relative w-full h-[120%] -top-[10%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn("object-cover", className)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
