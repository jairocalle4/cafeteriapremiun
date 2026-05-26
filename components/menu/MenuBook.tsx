"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { menuData } from "@/data/menu";
import CategoryTab from "./CategoryTab";
import BookCover from "./BookCover";
import BookPage from "./BookPage";

// ─── Swipe Hint ──────────────────────────────────────────────────────────────
// Auto-hides after 4 s or on first tab interaction
function SwipeHint({ gone }: { gone: boolean }) {
  const [autoHide, setAutoHide] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAutoHide(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const hidden = gone || autoHide;

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-1.5 pb-2"
        >
          <motion.span
            animate={{ x: [-3, 0, -3] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          >
            <ChevronLeft className="w-3 h-3 text-accent/50" />
          </motion.span>
          <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-muted-text/60 font-medium">
            Desliza para ver más
          </span>
          <motion.span
            animate={{ x: [3, 0, 3] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          >
            <ChevronRight className="w-3 h-3 text-accent/50" />
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Dot Indicator ────────────────────────────────────────────────────────────
function DotIndicator({
  total,
  active,
}: {
  total: number;
  active: number;
}) {
  return (
    <div className="flex items-center justify-center gap-1.5 py-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            width: i === active ? 16 : 5,
            backgroundColor:
              i === active
                ? "rgb(10, 102, 102)"   // accent teal
                : "rgba(10, 102, 102, 0.2)",
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="h-[5px] rounded-full"
        />
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function MenuBook() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hasInteracted, setHasInteracted] = useState(false);

  const activeCategory = menuData[activeIndex];

  const handleTabClick = (index: number) => {
    if (!hasInteracted) setHasInteracted(true);
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // ── Flip variants (desktop right page) ──────────────────────────────────
  const pageVariants: Variants = {
    initial: (d: number) => ({
      rotateY: d > 0 ? 90 : -90,
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
    exit: (d: number) => ({
      rotateY: d > 0 ? -90 : 90,
      opacity: 0,
      transformOrigin: "left center",
      transition: { duration: 0.4, ease: "easeInOut" },
    }),
  };

  // ── Slide variants (mobile category switch) ──────────────────────────────
  const mobileVariants: Variants = {
    initial: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    animate: { x: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
    exit: (d: number) => ({
      x: d > 0 ? -40 : 40,
      opacity: 0,
      transition: { duration: 0.25, ease: "easeIn" },
    }),
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE LAYOUT  (hidden on lg+)
          - Sticky category bar (tabs + dot indicator + swipe hint)
          - Natural scroll content below
         ═══════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden w-full flex flex-col">

        {/* ── Sticky Category Bar ─────────────────────────────────────────── */}
        <div
          className="sticky top-16 z-40 bg-background/96 backdrop-blur-md border-b border-border-custom shadow-sm"
        >
          {/* Horizontal scrollable tabs */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 px-3 pt-3 pb-1">
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

          {/* Dot indicator */}
          <DotIndicator total={menuData.length} active={activeIndex} />

          {/* Swipe hint — auto-disappears */}
          <SwipeHint gone={hasInteracted} />
        </div>

        {/* ── Animated Category Content ────────────────────────────────────── */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`mobile-${activeIndex}`}
            custom={direction}
            variants={mobileVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col"
          >
            {/* Cover image — compact on mobile */}
            <div className="h-52 w-full shrink-0">
              <BookCover category={activeCategory} />
            </div>

            {/* Menu items — natural height, page scrolls */}
            <BookPage category={activeCategory} mobile />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP LAYOUT  (hidden on mobile)
          - Sidebar (fixed) + Book (double page)
         ═══════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:flex w-full max-w-7xl mx-auto flex-row gap-10 relative z-10 perspective-1000 min-h-[75vh]">

        {/* ── Sidebar ─────────────────────────────────────────────────────── */}
        <div className="w-72 shrink-0 flex flex-col pt-4">

          {/* Sidebar header */}
          <div className="flex flex-col gap-3 px-4 mb-8">
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

          {/* Divider */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-border-custom to-transparent mb-6 mx-4" />

          {/* Category tabs */}
          <div className="flex flex-col gap-2">
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

          {/* Bottom accent */}
          <div className="flex items-center gap-3 px-4 mt-8">
            <div className="w-4 h-[1px] bg-gold-primary/40" />
            <div className="w-1 h-1 rounded-full bg-gold-primary/40" />
            <div className="flex-1 h-[1px] bg-gradient-to-r from-gold-primary/20 to-transparent" />
          </div>
        </div>

        {/* ── Book Container ───────────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col relative shadow-premium rounded-[10px] bg-background-dark/20 border border-border-custom/50 h-[75vh]">

          {/* Book spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-border-custom to-transparent z-30 transform -translate-x-1/2" />

          <div className="flex w-full h-full relative perspective-1000">

            {/* Left page — Cover */}
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

            {/* Right page — Content with flip */}
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
        </div>
      </div>
    </>
  );
}
