import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  id?: string;
  hasBorder?: boolean;
}

/**
 * Premium section layout providing consistent vertical spacings (paddings)
 * and semantic wrappers for structured page construction.
 */
export default function Section({
  children,
  className,
  as: Component = "section",
  id,
  hasBorder = false,
  ...props
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        "relative py-20 md:py-28 lg:py-36 overflow-hidden w-full",
        hasBorder && "border-b border-border-custom",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
