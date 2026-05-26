import React from "react";
import type { Metadata } from "next";
import MenuBook from "@/components/menu/MenuBook";

export const metadata: Metadata = {
  title: "Carta Digital | Mister Coffee",
  description: "Explora nuestra carta completa: Cafés de especialidad, frozens, waffles, postres artesanales, desayunos y opciones saladas.",
  alternates: {
    canonical: "/menu",
  },
};

export default function MenuPage() {
  return (
    <div className="flex-grow flex flex-col lg:justify-center lg:py-12 lg:px-4 relative">
      {/* Decorative background elements specific to menu */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-accent/3 blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-gold-primary/3 blur-[100px] pointer-events-none select-none" />

      <MenuBook />
    </div>
  );
}
