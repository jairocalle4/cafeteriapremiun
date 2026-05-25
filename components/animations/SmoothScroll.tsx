"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      console.log("Lenis Smooth Scroll disabled due to prefers-reduced-motion preference.");
      return;
    }

    // Register ScrollTrigger to connect with Lenis
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    // Re-synchronize ScrollTrigger when scroll events fire
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Hook Lenis into GSAP ticker loop
    const updatePhysics = (time: number) => {
      lenis.raf(time * 1000);
    };
    
    gsap.ticker.add(updatePhysics);

    // Disable lag smoothing to prevent desync between scroll animations and inertial scroll
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updatePhysics);
    };
  }, []);

  return <>{children}</>;
}
