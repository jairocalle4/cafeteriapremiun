import React from "react";
import Image from "next/image";
import { MenuCategory } from "@/data/menu";

interface BookCoverProps {
  category: MenuCategory;
}

export default function BookCover({ category }: BookCoverProps) {
  // Calculate total items
  const totalItems = category.sections.reduce(
    (acc, section) => acc + section.items.length,
    0
  );

  return (
    <div className="w-full h-full relative flex flex-col justify-end overflow-hidden rounded-l-[10px]">
      {/* Full-bleed image background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={category.coverImage}
          alt={`Portada de ${category.name}`}
          fill
          className="object-cover transition-transform duration-1000 ease-out scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Cinematic multi-layer gradient overlay */}
      <div className="absolute inset-0 z-10">
        {/* Top vignette */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/50 to-transparent" />
        {/* Bottom strong gradient for text legibility */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
        {/* Left edge shadow for book spine feel */}
        <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      {/* Category number badge — top right corner */}
      <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-1">
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/50 font-medium">
          Carta
        </span>
        <span className="font-serif text-5xl font-bold text-white/10 leading-none select-none">
          {String(
            ["bebidas-calientes", "frozen", "comidas", "dulces-postres", "desayunos"].indexOf(
              category.id
            ) + 1
          ).padStart(2, "0")}
        </span>
      </div>

      {/* Mister Coffee branding — top left */}
      <div className="absolute top-6 left-6 z-20">
        <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-gold-primary" />
          <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-white/60 font-bold">
            Mister Coffee
          </span>
        </div>
      </div>

      {/* Main content block */}
      <div className="relative z-20 p-8 md:p-10 flex flex-col gap-4">
        {/* Specialty count badge */}
        <div className="inline-flex items-center gap-2 w-fit">
          <div className="w-5 h-[1px] bg-gold-primary/80" />
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-light/90">
            {totalItems} Especialidades
          </span>
        </div>

        {/* Category title */}
        <h2 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-wide">
          {category.name}
        </h2>

        {/* Editorial gold separator */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-[2px] bg-gradient-to-r from-gold-primary to-gold-light rounded-full" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold-primary/60" />
        </div>

        {/* Category description */}
        <p className="font-sans text-sm text-white/75 leading-relaxed max-w-xs">
          {category.description}
        </p>
      </div>
    </div>
  );
}
