"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface GsapWrapperProps {
  children: React.ReactNode;
}

/**
 * GsapWrapper initializes and registers GSAP plugins safely on client mounting
 * before any child components use them.
 */
export default function GsapWrapper({ children }: GsapWrapperProps) {
  useEffect(() => {
    // Safe client-side registration of GSAP core plugins
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, useGSAP);
    }
  }, []);

  return <>{children}</>;
}
