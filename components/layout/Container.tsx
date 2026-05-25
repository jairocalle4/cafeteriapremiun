import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

/**
 * Premium container component providing consistent maximum widths
 * and horizontal paddings across all screen sizes.
 */
export default function Container({
  children,
  className,
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
