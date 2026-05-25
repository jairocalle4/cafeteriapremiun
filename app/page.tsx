import SmoothScroll from "@/components/animations/SmoothScroll";
import GsapWrapper from "@/components/animations/GsapWrapper";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import InfoStrip from "@/components/sections/InfoStrip";
import About from "@/components/sections/About";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import CustomCakes from "@/components/sections/CustomCakes";
import MenuSection from "@/components/sections/MenuSection";
import Gallery from "@/components/sections/Gallery";
import PromoVideo from "@/components/sections/PromoVideo";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import FloatingWhatsAppButton from "@/components/ui/FloatingWhatsAppButton";

/**
 * Mister Coffee Landing Page entry point.
 * Mounts the animation wrappers and sequentially stacks the brand sections.
 */
export default function Home() {
  return (
    <GsapWrapper>
      <SmoothScroll>
        <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-background">
          {/* Header Navigation fixed overlay */}
          <Navbar />

          {/* Core Content stacking blocks */}
          <main className="flex-grow">
            {/* 1. Hero Cover */}
            <Hero />
            
            {/* 2. Horizontal Information strip */}
            <InfoStrip />
            
            {/* 3. Editorial About segment */}
            <About />
            
            {/* 4. Signature Products highlights */}
            <FeaturedProducts />

            {/* 5. Custom Cakes pre-order section */}
            <CustomCakes />
            
            {/* 6. Filterable & Searchable Menu catalog */}
            <MenuSection />
            
            {/* 7. Parallax masonry photo gallery */}
            <Gallery />
            
            {/* 8. Loop video promo frame (9:16 aspect smartphone mockup) */}
            <PromoVideo />
            
            {/* 9. Google Reviews layout */}
            <Reviews />
            
            {/* 10. Contact detail card listings and WhatsApp compiled form */}
            <Contact />
          </main>

          {/* Footer Branding credits overlay */}
          <Footer />

          {/* Floating WhatsApp Action Button */}
          <FloatingWhatsAppButton />
        </div>
      </SmoothScroll>
    </GsapWrapper>
  );
}
