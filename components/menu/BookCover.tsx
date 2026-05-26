import React from "react";
import Image from "next/image";
import { Coffee, IceCream, Sandwich, CakeSlice, Sunrise } from "lucide-react";
import { MenuCategory } from "@/data/menu";

interface BookCoverProps {
  category: MenuCategory;
}

const coverVisuals: Record<string, { type: "image" | "icon", src?: string, icon?: React.ReactNode }> = {
  "bebidas-calientes": { type: "image", src: "/images/cafe.jpeg" },
  "frozen": { type: "image", src: "/images/frozen.png" },
  "comidas": { type: "icon", icon: <Sandwich className="w-24 h-24 text-accent/80" /> },
  "dulces-postres": { type: "image", src: "/images/postre.jpeg" },
  "desayunos": { type: "icon", icon: <Sunrise className="w-24 h-24 text-accent/80" /> },
};

export default function BookCover({ category }: BookCoverProps) {
  const visual = coverVisuals[category.id] || { type: "icon", icon: <Coffee className="w-24 h-24 text-accent/80" /> };
  
  // Calculate total items
  const totalItems = category.sections.reduce((acc, section) => acc + section.items.length, 0);

  return (
    <div className="w-full h-full relative flex flex-col justify-end overflow-hidden rounded-l-[10px] bg-background-dark/30">
      {/* Visual Background */}
      {visual.type === "image" && visual.src ? (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={visual.src}
              alt={category.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-background/50">
          {visual.icon}
          {/* Subtle noise/pattern could go here */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background/20 to-background/80" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 p-8 md:p-12 flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/90 border border-accent/20 shadow-soft w-fit">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="font-sans text-xs font-bold tracking-widest uppercase text-foreground/80">
            {totalItems} Especialidades
          </span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          {category.name}
        </h2>
        
        <div className="w-12 h-1 bg-gold-primary mt-2 rounded-full" />
      </div>
    </div>
  );
}
