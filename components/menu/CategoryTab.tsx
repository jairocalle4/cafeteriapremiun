"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Coffee, IceCream, Sandwich, CakeSlice, Sunrise } from "lucide-react";

interface CategoryTabProps {
  id: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

// Map category IDs to specific Lucide icons
const iconMap: Record<string, React.ReactNode> = {
  "bebidas-calientes": <Coffee className="w-4 h-4" />,
  "frozen": <IceCream className="w-4 h-4" />,
  "comidas": <Sandwich className="w-4 h-4" />,
  "dulces-postres": <CakeSlice className="w-4 h-4" />,
  "desayunos": <Sunrise className="w-4 h-4" />,
};

export default function CategoryTab({ id, name, isActive, onClick, index }: CategoryTabProps) {
  const icon = iconMap[id] || <Coffee className="w-4 h-4" />;

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex items-center gap-3 px-4 py-3 w-full text-left transition-all duration-300 border-b border-border-custom lg:border-b-0 lg:border-r-2",
        isActive 
          ? "bg-accent/5 text-accent border-accent" 
          : "text-muted-text hover:bg-background-dark/20 hover:text-foreground border-transparent hover:border-border-custom"
      )}
    >
      <div className={cn(
        "flex items-center justify-center w-8 h-8 rounded-full transition-colors",
        isActive ? "bg-accent/10" : "bg-background-dark/50 group-hover:bg-background-dark"
      )}>
        {icon}
      </div>
      <span className="font-title text-sm tracking-wider uppercase font-bold flex-1">
        {name}
      </span>
      
      {/* Active Indicator (Desktop) */}
      {isActive && (
        <span className="hidden lg:block absolute -right-[2px] top-1/2 -translate-y-1/2 w-[2px] h-1/2 bg-accent rounded-l-full" />
      )}
      {/* Active Indicator (Mobile) */}
      {isActive && (
        <span className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-accent rounded-t-full" />
      )}
    </button>
  );
}
