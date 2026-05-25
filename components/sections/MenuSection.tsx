"use client";

import React, { useState, useMemo } from "react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/animations/AnimatedSection";
import PremiumButton from "@/components/ui/PremiumButton";
import { Search, Info, MessageSquareCode } from "lucide-react";
import { menuData } from "@/data/menu";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * MenuSection Component.
 * - Interactive filter tabs to select active categories.
 * - Live keyword search input to filter dishes by name or description.
 * - Groups dishes by sub-sections (e.g. Ice Coffee, Frozen con café) for elegant structure.
 * - Dynamic dotted leader lines mapping item names to pricing.
 */
export default function MenuSection() {
  const [activeCategoryId, setActiveCategoryId] = useState(menuData[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  // Handler for category tab clicks (resets search query to prevent confusion)
  const handleCategorySelect = (id: string) => {
    setActiveCategoryId(id);
    setSearchQuery("");
  };

  // Memoized filter calculation for high-performance updates
  const filteredMenu = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    
    if (!query) {
      return menuData.find((cat) => cat.id === activeCategoryId);
    }

    // If search query is present, search across all categories
    const matchingSections: { title: string; items: any[] }[] = [];

    menuData.forEach((category) => {
      category.sections.forEach((section) => {
        const matchingItems = section.items.filter(
          (item) =>
            item.name.toLowerCase().includes(query) ||
            item.description?.toLowerCase().includes(query)
        );

        if (matchingItems.length > 0) {
          matchingSections.push({
            title: `${category.name} - ${section.title}`,
            items: matchingItems,
          });
        }
      });
    });

    return {
      id: "search-results",
      name: `Resultados para: "${searchQuery}"`,
      sections: matchingSections,
    };
  }, [searchQuery, activeCategoryId]);

  return (
    <Section id="menu" hasBorder={true} className="bg-background">
      <Container>
        {/* Section Header */}
        <SectionHeader
          badge="Carta Digital"
          title="Nuestra Selección de Especialidad"
          description="Explora nuestros productos artesanales elaborados con insumos locales e importados de primera."
        />

        {/* Search & Category Filter Navigation Wrap */}
        <div className="flex flex-col gap-8 mb-12">
          {/* Live Search Input Wrapper */}
          <div className="relative max-w-md mx-auto w-full">
            <input
              type="text"
              placeholder="Buscar en el menú... (ej. Oreo, Capuchino, Lasaña)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pl-12 rounded-full border border-border-custom bg-background-dark/30 font-sans text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 placeholder:text-muted-text/60"
            />
            <Search className="w-4 h-4 absolute left-5 top-1/2 -translate-y-1/2 text-muted-text" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-bold text-accent uppercase hover:text-accent-hover transition-colors"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Categories Tab Navigation Bar (Scrollable on small viewports) */}
          {!searchQuery && (
            <div className="no-scrollbar overflow-x-auto flex md:justify-center items-center gap-3 pb-3 -mx-6 px-6">
              {menuData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-xs font-sans font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 border cursor-pointer",
                    activeCategoryId === category.id
                      ? "bg-accent text-background border-accent shadow-soft"
                      : "bg-background-dark/20 text-muted-text border-transparent hover:border-border-custom hover:text-foreground"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic Menu Items Display */}
        {filteredMenu && filteredMenu.sections.length > 0 ? (
          <div className="flex flex-col gap-16">
            {filteredMenu.sections.map((section, secIndex) => (
              <AnimatedSection
                key={section.title}
                direction="up"
                delay={0.1 * secIndex}
                className="flex flex-col gap-8"
              >
                {/* Subcategory Section Title */}
                <h3 className="font-serif text-xl md:text-2xl font-bold text-accent border-b border-border-custom pb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {section.title}
                </h3>

                {/* Subcategory Items Grid (Editorial 2-Column Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {section.items.map((item, itemIndex) => {
                    const itemWaText = `Hola Mister Coffee, deseo hacer un pedido de: ${item.name} ($${item.price.toFixed(2)}).`;
                    const itemWaHref = `https://wa.me/593993127311?text=${encodeURIComponent(itemWaText)}`;

                    return (
                      <div
                        key={itemIndex}
                        className="flex flex-col gap-2 group p-4 rounded-2xl hover:bg-background-dark/15 border border-transparent hover:border-border-custom/30 transition-all duration-300"
                      >
                        {/* Name and Price Leader Line */}
                        <div className="flex items-baseline justify-between gap-4">
                          <h4 className="font-sans text-sm md:text-base font-bold text-foreground flex items-center gap-2">
                            {item.name}
                            {item.badge && (
                              <span className="inline-block px-2 py-0.5 rounded text-[8px] font-sans font-bold tracking-wide uppercase bg-accent/10 text-accent border border-accent/20">
                                {item.badge}
                              </span>
                            )}
                          </h4>
                          {/* Dotted editorial connector line */}
                          <div className="flex-grow border-b border-dashed border-muted-text/30 mx-2 self-center h-1 opacity-40" />
                          <span className="font-sans text-sm md:text-base font-bold text-accent shrink-0">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>

                        {/* Description and Options */}
                        {item.description && (
                          <p className="font-sans text-xs text-muted-text leading-relaxed">
                            {item.description}
                          </p>
                        )}

                        {/* Special Customization Details */}
                        {item.details && (
                          <div className="flex items-start gap-1.5 mt-1 text-[10px] text-accent/80 italic font-medium leading-relaxed bg-accent/5 p-2 rounded-lg border border-accent/10">
                            <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                            <span>{item.details}</span>
                          </div>
                        )}

                        {/* Quick Order CTA Trigger (Only visible on hover/focus) */}
                        <div className="flex justify-end mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <a
                            href={itemWaHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[10px] font-sans font-bold tracking-widest uppercase text-accent hover:text-accent-hover transition-colors"
                          >
                            <MessageSquareCode className="w-3.5 h-3.5" />
                            Pedir este Plato
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          /* Empty Search Fallback */
          <AnimatedSection direction="none" className="text-center py-16">
            <span className="text-4xl">🔍</span>
            <h4 className="font-serif text-lg font-semibold mt-4 text-foreground">
              No encontramos platos que coincidan con tu búsqueda
            </h4>
            <p className="font-sans text-xs text-muted-text max-w-xs mx-auto mt-2">
              Prueba buscando términos genéricos como &quot;café&quot;, &quot;waffle&quot;, &quot;lasaña&quot; o &quot;tres leches&quot;.
            </p>
          </AnimatedSection>
        )}

        {/* Global Menu CTA Footer Block */}
        <AnimatedSection
          direction="up"
          delay={0.3}
          className="mt-20 border border-border-custom glassmorphism p-8 rounded-premium text-center flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft max-w-4xl mx-auto"
        >
          <div className="text-left flex flex-col gap-1.5">
            <h4 className="font-serif text-lg font-bold text-foreground">
              ¿Listo para ordenar tu dosis de felicidad?
            </h4>
            <p className="font-sans text-xs text-muted-text leading-relaxed">
              Atención inmediata en local, para llevar o delivery. Hacemos envíos rápidos en La Troncal.
            </p>
            <p className="font-sans text-[10px] text-accent font-bold tracking-wide uppercase mt-1">
              WhatsApp: 2420819 · 0993127311 · 0959656120
            </p>
          </div>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full md:w-auto"
          >
            <PremiumButton variant="primary" isMagnetic={true} className="w-full md:w-auto">
              Pedir por WhatsApp
            </PremiumButton>
          </a>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
