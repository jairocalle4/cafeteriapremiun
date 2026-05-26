"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { menuData } from "@/data/menu";
import CategoryTab from "./CategoryTab";
import BookCover from "./BookCover";
import BookPage from "./BookPage";

export default function MenuBook() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeCategory = menuData[activeIndex];

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Flip animation variants for the right page
  const pageVariants: Variants = {
    initial: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      transformOrigin: "left center",
    }),
    animate: {
      rotateY: 0,
      opacity: 1,
      transformOrigin: "left center",
      transition: {
        duration: 0.6,
        ease: [0.64, 0.04, 0.35, 1] as [number, number, number, number],
      },
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
      transformOrigin: "left center",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
  };

  // Slide variants for mobile view
  const mobileVariants: Variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    }),
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10 relative z-10 perspective-1000 mt-16 md:mt-0 h-full lg:min-h-[75vh]">

      {/* ── Navigation Sidebar ─────────────────────────────────── */}
      <div className="lg:w-72 shrink-0 flex flex-col pt-2 lg:pt-4">

        {/* Desktop Sidebar Header */}
        <div className="hidden lg:flex flex-col gap-3 px-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-[1px] bg-gold-primary" />
            <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-muted-text font-bold">
              Nuestra Carta
            </span>
          </div>
          <h1 className="font-title text-3xl font-bold text-foreground leading-tight">
            Explora el Menú
          </h1>
          <p className="font-sans text-xs text-muted-text leading-relaxed">
            Selecciona una categoría para ver las especialidades artesanales de Mister Coffee.
          </p>
        </div>

        {/* Divider (Desktop) */}
        <div className="hidden lg:block h-[1px] bg-gradient-to-r from-transparent via-border-custom to-transparent mb-6 mx-4" />

        {/* Category Tabs */}
        <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 gap-1 lg:gap-2">
          <div className="flex lg:flex-col w-max lg:w-full min-w-full gap-1 lg:gap-2">
            {menuData.map((cat, index) => (
              <CategoryTab
                key={cat.id}
                category={cat}
                isActive={activeIndex === index}
                onClick={() => handleTabClick(index)}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Bottom decoration (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 px-4 mt-8">
          <div className="w-4 h-[1px] bg-gold-primary/40" />
          <div className="w-1 h-1 rounded-full bg-gold-primary/40" />
          <div className="flex-1 h-[1px] bg-gradient-to-r from-gold-primary/20 to-transparent" />
        </div>
      </div>

      {/* ── Book Container ──────────────────────────────────────── */}
      <div className="flex-1 flex flex-col lg:flex-row relative shadow-premium rounded-[10px] bg-background-dark/20 border border-border-custom/50 h-[80vh] lg:h-[75vh]">

        {/* Book Spine (Central divider on desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-border-custom to-transparent z-30 transform -translate-x-1/2" />

        {/* Desktop View: Double Page Layout */}
        <div className="hidden lg:flex w-full h-full relative perspective-1000">
          {/* Left Page (Cover) */}
          <div className="w-1/2 h-full z-10 bg-background">
            <AnimatePresence mode="wait">
              <motion.div
                key={`cover-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <BookCover category={activeCategory} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Page (Content with Flip Animation) */}
          <div className="w-1/2 h-full z-20 bg-background relative origin-left">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={`page-${activeIndex}`}
                custom={direction}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 w-full h-full backface-hidden"
              >
                <BookPage category={activeCategory} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile View: Single Page Layout */}
        <div className="lg:hidden w-full h-full flex flex-col overflow-hidden bg-background rounded-[10px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={`mobile-${activeIndex}`}
              custom={direction}
              variants={mobileVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full flex flex-col"
            >
              {/* Cover acts as a hero header on mobile */}
              <div className="h-48 shrink-0 w-full">
                <BookCover category={activeCategory} />
              </div>
              {/* Page content takes remaining space */}
              <div className="flex-1 w-full relative">
                <BookPage category={activeCategory} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
