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
        ease: [0.64, 0.04, 0.35, 1] as [number, number, number, number], // Custom cinematic easing
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
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-12 relative z-10 perspective-1000 mt-16 md:mt-0 h-full lg:min-h-[75vh]">
      
      {/* Navigation Tabs (Sidebar on Desktop, Top Scroll on Mobile) */}
      <div className="lg:w-64 shrink-0 flex flex-col pt-4">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-6 hidden lg:block px-4">
          Nuestra Carta
        </h1>
        
        <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
          <div className="flex lg:flex-col w-max lg:w-full min-w-full">
            {menuData.map((cat, index) => (
              <CategoryTab
                key={cat.id}
                id={cat.id}
                name={cat.name}
                isActive={activeIndex === index}
                onClick={() => handleTabClick(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Book Container */}
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
