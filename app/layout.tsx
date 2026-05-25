import type { Metadata } from "next";
import { Inter, Oswald, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mister Coffee La Troncal | Cafetería, Postres, Waffles y Tortas",
    template: "%s | Mister Coffee La Troncal",
  },
  description:
    "Mister Coffee es una cafetería artesanal en La Troncal, Cañar. Disfruta cafés, frozen, waffles, postres, desayunos y tortas personalizadas bajo pedido. Ubicación, menú y pedidos por WhatsApp.",
  keywords: [
    "Mister Coffee",
    "Mister Coffee La Troncal",
    "cafetería La Troncal",
    "café artesanal La Troncal",
    "cafetería en Cañar",
    "postres La Troncal",
    "waffles La Troncal",
    "frozen La Troncal",
    "tortas personalizadas La Troncal",
    "desayunos La Troncal",
    "cafetería Ecuador",
    "bubble tea La Troncal",
  ],
  authors: [{ name: "JCTech Soluciones", url: "https://mrcoffee-latroncal.netlify.app/" }],
  creator: "JCTech Soluciones",
  publisher: "Mister Coffee",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://mrcoffee-latroncal.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://mrcoffee-latroncal.netlify.app/",
    siteName: "Mister Coffee La Troncal",
    title: "Mister Coffee La Troncal | Cafetería Artesanal y Postres",
    description:
      "Conoce Mister Coffee en La Troncal: cafés, frozen, waffles, postres, desayunos y tortas personalizadas. Mira el menú, ubicación y pedidos por WhatsApp.",
    images: [
      {
        url: "/og/mister-coffee-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mister Coffee, cafetería artesanal en La Troncal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mister Coffee La Troncal | Cafetería Artesanal y Postres",
    description:
      "Cafés, frozen, waffles, postres, desayunos y tortas personalizadas en La Troncal. Mira el menú, ubicación y pedidos por WhatsApp.",
    images: ["https://mrcoffee-latroncal.netlify.app/og/mister-coffee-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Local Business structured data (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Mister Coffee",
    "alternateName": "Mister Coffee La Troncal",
    "description":
      "Cafetería artesanal en La Troncal, Cañar, Ecuador. Café, frozen, waffles, postres, desayunos y tortas personalizadas bajo pedido.",
    "telephone": "+593993127311",
    "url": "https://mrcoffee-latroncal.netlify.app/",
    "logo": "https://mrcoffee-latroncal.netlify.app/images/LOGO.jpeg",
    "image": "https://mrcoffee-latroncal.netlify.app/og/mister-coffee-og.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle 10 de Agosto y Andrés F. Córdova",
      "addressLocality": "La Troncal",
      "addressRegion": "Cañar",
      "addressCountry": "EC",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -2.24294,
      "longitude": -79.33742,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "09:00",
      "closes": "21:00",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "299",
    },
    "servesCuisine": ["Café", "Postres", "Waffles", "Desayunos", "Comida ligera", "Frozen", "Bubble Tea"],
    "priceRange": "$",
    "sameAs": [
      "https://www.facebook.com/mistercoffee.ec/",
      "https://www.instagram.com/mister.coffee.ec/",
      "https://www.tiktok.com/@mistercoffee.ec"
    ],
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wa.me/593993127311?text=Hola%20Mister%20Coffee%2C%20deseo%20hacer%20un%20pedido...",
        "inLanguage": "es-EC",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    }
  };

  return (
    <html
      lang="es"
      className={`${inter.variable} ${oswald.variable} ${lora.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-background text-foreground flex flex-col">
        {/* Organic texture grain filter */}
        <div className="noise-overlay" aria-hidden="true" />
        
        {/* Inject structured schema script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {children}
      </body>
    </html>
  );
}
