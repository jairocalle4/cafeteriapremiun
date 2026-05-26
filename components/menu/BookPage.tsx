import React from "react";
import { MenuCategory } from "@/data/menu";
import { MessageSquareCode, Info } from "lucide-react";

interface BookPageProps {
  category: MenuCategory;
}

export default function BookPage({ category }: BookPageProps) {
  return (
    <div className="w-full h-full bg-background rounded-r-[10px] flex flex-col relative">
      {/* Decorative inner book shadow/spine effect */}
      <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-background-dark/40 to-transparent pointer-events-none z-10" />

      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-6 md:p-10 lg:p-12 pb-24 relative z-0">
        
        {/* Subtle top decoration */}
        <div className="w-full flex justify-center mb-10 opacity-30">
          <div className="w-16 h-[1px] bg-foreground/50" />
          <div className="w-2 h-2 rounded-full border border-foreground/50 mx-2 -mt-[3.5px]" />
          <div className="w-16 h-[1px] bg-foreground/50" />
        </div>

        <div className="flex flex-col gap-12">
          {category.sections.map((section, secIndex) => (
            <div key={secIndex} className="flex flex-col gap-6">
              {/* Section Title */}
              <h3 className="font-serif text-2xl font-bold text-accent border-b border-border-custom pb-2 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
                {section.title}
              </h3>

              {/* Items List */}
              <div className="flex flex-col gap-5">
                {section.items.map((item, itemIndex) => {
                  const itemWaText = `Hola Mister Coffee, deseo hacer un pedido de: ${item.name} ($${item.price.toFixed(2)}).`;
                  const itemWaHref = `https://wa.me/593993127311?text=${encodeURIComponent(itemWaText)}`;

                  return (
                    <div
                      key={itemIndex}
                      className="flex flex-col gap-1.5 group transition-all duration-300"
                    >
                      {/* Name and Price Leader Line */}
                      <div className="flex items-baseline justify-between gap-4">
                        <h4 className="font-sans text-sm md:text-base font-bold text-foreground flex items-center gap-2">
                          {item.name}
                          {item.badge && (
                            <span className="inline-block px-1.5 py-0.5 rounded text-[8px] font-sans font-bold tracking-wide uppercase bg-gold-primary/10 text-gold-primary border border-gold-primary/20">
                              {item.badge}
                            </span>
                          )}
                        </h4>
                        {/* Dotted editorial connector line */}
                        <div className="flex-grow border-b border-dotted border-muted-text/40 mx-2 self-center h-1" />
                        <span className="font-sans text-sm md:text-base font-bold text-accent shrink-0">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Description and Options */}
                      {item.description && (
                        <p className="font-sans text-xs text-muted-text leading-snug pr-12">
                          {item.description}
                        </p>
                      )}

                      {/* Special Customization Details */}
                      {item.details && (
                        <div className="flex items-start gap-1.5 mt-1 text-[10px] text-accent/80 italic font-medium leading-snug bg-accent/5 p-1.5 px-2 rounded-lg border border-accent/10 w-fit">
                          <Info className="w-3 h-3 mt-[1px] shrink-0" />
                          <span>{item.details}</span>
                        </div>
                      )}

                      {/* Quick Order CTA Trigger (Touch friendly on mobile, hover on desktop) */}
                      <div className="flex justify-end mt-1 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={itemWaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[10px] font-sans font-bold tracking-widest uppercase text-accent hover:text-accent-hover transition-colors bg-background px-2 py-1 rounded"
                        >
                          <MessageSquareCode className="w-3.5 h-3.5" />
                          Pedir Plato
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Subtle bottom decoration */}
        <div className="w-full flex justify-center mt-12 opacity-30">
          <div className="w-1 h-1 rounded-full bg-foreground/50 mx-1" />
          <div className="w-1 h-1 rounded-full bg-foreground/50 mx-1" />
          <div className="w-1 h-1 rounded-full bg-foreground/50 mx-1" />
        </div>
      </div>
      
      {/* Page bottom curl effect indicator */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-background-dark/30 to-transparent rounded-br-[10px] pointer-events-none" />
    </div>
  );
}
