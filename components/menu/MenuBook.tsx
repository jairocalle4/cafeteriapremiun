"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { menuData, MenuCategory } from "@/data/menu";
import CategoryTab from "./CategoryTab";
import BookCover from "./BookCover";
import BookPage from "./BookPage";

// ─── Swipe Hint ───────────────────────────────────────────────────────────────
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
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 pb-1"
        >
          <motion.div
            animate={{ x: [-4, 0, -4], opacity: [0.4, 0.9, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="flex items-center gap-0.5"
          >
            <div className="w-3 h-[1px] bg-accent/40" />
            <ChevronLeft className="w-3 h-3 text-accent/50" />
          </motion.div>

          <span className="font-serif text-[11px] italic tracking-wider text-muted-text/60">
            desliza para cambiar
          </span>

          <motion.div
            animate={{ x: [4, 0, 4], opacity: [0.4, 0.9, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut", delay: 0.2 }}
            className="flex items-center gap-0.5"
          >
            <ChevronRight className="w-3 h-3 text-accent/50" />
            <div className="w-3 h-[1px] bg-accent/40" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Dot Indicator ────────────────────────────────────────────────────────────
function DotIndicator({ total, active }: { total: number; active: number }) {
  return (
    <div className="flex items-center justify-center gap-1.5 py-1">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            width: i === active ? 18 : 5,
            backgroundColor:
              i === active ? "rgb(10,102,102)" : "rgba(10,102,102,0.2)",
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-[5px] rounded-full"
        />
      ))}
    </div>
  );
}

// ─── Nav Arrow Button ─────────────────────────────────────────────────────────
function NavArrow({
  dir,
  onClick,
  visible,
}: {
  dir: "left" | "right";
  onClick: () => void;
  visible: boolean;
}) {
  return (
    <div className="w-9 h-9 flex items-center justify-center">
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            whileTap={{ scale: 0.88 }}
            transition={{ duration: 0.2 }}
            onClick={onClick}
            aria-label={dir === "left" ? "Categoría anterior" : "Categoría siguiente"}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-border-custom bg-background/80 hover:bg-accent/5 hover:border-accent/40 transition-colors duration-200 shadow-soft"
          >
            {dir === "left"
              ? <ChevronLeft className="w-4 h-4 text-accent" />
              : <ChevronRight className="w-4 h-4 text-accent" />
            }
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Shared Bar Content ───────────────────────────────────────────────────────
// Extracted so it can be rendered in two places without duplication.
interface BarContentProps {
  activeCategory: MenuCategory;
  activeIndex: number;
  totalItems: number;
  onPrev: () => void;
  onNext: () => void;
  hasInteracted: boolean;
}

function MobileCategoryBar({
  activeCategory,
  activeIndex,
  totalItems,
  onPrev,
  onNext,
  hasInteracted,
}: BarContentProps) {
  return (
    <div className="bg-background/97 backdrop-blur-xl border-b border-border-custom shadow-glass w-full">
      {/* Top gold line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-primary/40 to-transparent" />

      {/* ← thumbnail + name → */}
      <div className="flex items-center gap-3 px-4 py-3">
        <NavArrow dir="left" onClick={onPrev} visible={activeIndex > 0} />

        {/* Thumbnail + info */}
        <div className="flex-1 flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-accent/30 shrink-0 shadow-soft">
            <Image
              src={activeCategory.coverImage}
              alt={activeCategory.name}
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col min-w-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeCategory.id + "-name"}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className="font-title text-[11px] tracking-widest uppercase font-bold text-foreground truncate leading-tight"
              >
                {activeCategory.name}
              </motion.span>
            </AnimatePresence>
            <span className="font-sans text-[10px] text-muted-text">
              {totalItems} especialidades
            </span>
          </div>
        </div>

        <NavArrow dir="right" onClick={onNext} visible={activeIndex < menuData.length - 1} />
      </div>

      {/* Dots + swipe hint */}
      <div className="flex flex-col items-center gap-0 pb-2">
        <DotIndicator total={menuData.length} active={activeIndex} />
        <SwipeHint gone={hasInteracted} />
      </div>

      {/* Bottom gold line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function MenuBook() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hasInteracted, setHasInteracted] = useState(false);

  // ── Scroll-aware sticky logic ──────────────────────────────────────────────
  // sentinelRef marks the position of the natural bar in the document flow.
  // IntersectionObserver fires when the sentinel exits/enters the viewport
  // (accounting for the 64px main header via rootMargin).
  // When sentinel is NOT intersecting → bar has scrolled past the header → show fixed version.
  // When sentinel IS intersecting → bar is back in view → hide fixed version.
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Not intersecting = bar scrolled out of view past the header
        setIsFloating(!entry.isIntersecting);
      },
      {
        // Shrink the root viewport by 64px from top (height of the layout header).
        // This means "out of view" triggers exactly when the sentinel hides behind the header.
        rootMargin: "-64px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const activeCategory = menuData[activeIndex];
  const totalItems = activeCategory.sections.reduce(
    (acc, s) => acc + s.items.length,
    0
  );

  const goTo = useCallback(
    (index: number) => {
      if (!hasInteracted) setHasInteracted(true);
      if (index === activeIndex || index < 0 || index >= menuData.length) return;
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex, hasInteracted]
  );

  const barProps: BarContentProps = {
    activeCategory,
    activeIndex,
    totalItems,
    onPrev: () => goTo(activeIndex - 1),
    onNext: () => goTo(activeIndex + 1),
    hasInteracted,
  };

  // ── Desktop flip variants ────────────────────────────────────────────────
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

  // ── Mobile slide variants ─────────────────────────────────────────────────
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
      {/* ═══════════════════════════════════════════════════════════════════════
          MOBILE LAYOUT  (lg:hidden)

          Architecture:
          ┌─ sentinelRef ──────────────────────────────────┐
          │  (invisible 0-height div — the "tripwire")     │
          └────────────────────────────────────────────────┘
          ┌─ Natural bar (in document flow) ───────────────┐
          │  visible when NOT floating                      │
          │  visibility:hidden when floating               │
          │  → always occupies its space, no layout jump   │
          └────────────────────────────────────────────────┘
          ┌─ Floating bar (position:fixed) ────────────────┐
          │  AnimatePresence: slides down from top         │
          │  only mounted when isFloating === true          │
          └────────────────────────────────────────────────┘
          ┌─ Content (cover + items) ──────────────────────┐
          │  natural scroll                                 │
          └────────────────────────────────────────────────┘
         ═══════════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden w-full">

        {/* Sentinel — zero height, detects when bar position exits viewport */}
        <div ref={sentinelRef} className="h-0 w-full" aria-hidden="true" />

        {/* ── Natural position bar (always in flow, hidden when floating) ──── */}
        {/*  visibility:hidden → keeps layout space, prevents content jump     */}
        <div style={{ visibility: isFloating ? "hidden" : "visible" }}>
          <MobileCategoryBar {...barProps} />
        </div>

        {/* ── Floating fixed bar — animates down when sentinel leaves view ──── */}
        <AnimatePresence>
          {isFloating && (
            <motion.div
              key="floating-category-bar"
              className="fixed left-0 right-0 z-40"
              style={{ top: "64px" }}
              initial={{ y: "-110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-110%", opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 36,
                mass: 0.7,
              }}
            >
              <MobileCategoryBar {...barProps} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Animated Category Content ─────────────────────────────────────── */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`mobile-content-${activeIndex}`}
            custom={direction}
            variants={mobileVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col"
          >
            <div className="h-52 w-full shrink-0">
              <BookCover category={activeCategory} />
            </div>
            <BookPage category={activeCategory} mobile />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          DESKTOP LAYOUT  (hidden on mobile)
         ═══════════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:flex w-full max-w-7xl mx-auto flex-row gap-10 relative z-10 perspective-1000 min-h-[75vh]">

        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
        <div className="w-72 shrink-0 flex flex-col pt-4">
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
              Selecciona una categoría para ver las especialidades de Mister Coffee.
            </p>
          </div>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-border-custom to-transparent mb-6 mx-4" />

          <div className="flex flex-col gap-2">
            {menuData.map((cat, index) => (
              <CategoryTab
                key={cat.id}
                category={cat}
                isActive={activeIndex === index}
                onClick={() => goTo(index)}
                index={index}
              />
            ))}
          </div>

          <div className="flex items-center gap-3 px-4 mt-8">
            <div className="w-4 h-[1px] bg-gold-primary/40" />
            <div className="w-1 h-1 rounded-full bg-gold-primary/40" />
            <div className="flex-1 h-[1px] bg-gradient-to-r from-gold-primary/20 to-transparent" />
          </div>
        </div>

        {/* ── Book Container ────────────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col relative shadow-premium rounded-[10px] bg-background-dark/20 border border-border-custom/50 h-[75vh]">
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

            {/* Right page — Flip animation */}
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
