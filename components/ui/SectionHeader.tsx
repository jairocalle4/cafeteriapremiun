import React from "react";
import FloatingBadge from "@/components/ui/FloatingBadge";
import RevealText from "@/components/animations/RevealText";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * SectionHeader provides consistent titles, description paragraphs, and badges
 * for sections, using optimized typography and animations.
 */
export default function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-16 md:mb-20",
        isCenter ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left max-w-xl",
        className
      )}
    >
      {badge && (
        <AnimatedSection direction="down" delay={0.05}>
          <FloatingBadge text={badge} />
        </AnimatedSection>
      )}
      
      <RevealText
        text={title}
        as="h2"
        className={cn(
          "font-serif text-3xl md:text-5xl font-bold tracking-tight text-glow text-foreground",
          isCenter && "justify-center"
        )}
        delay={0.1}
      />
      
      {description && (
        <AnimatedSection direction="up" delay={0.25}>
          <p className="font-sans text-sm md:text-base text-muted-text leading-relaxed">
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
