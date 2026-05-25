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
  title: "Mister Coffee — Cafetería Artesanal en La Troncal, Ecuador",
  description:
    "La cafetería más querida de La Troncal. Cafés artesanales, frozen exclusivos, waffles, postres, lasañas, bubble tea y desayunos completos. Abiertos Lun–Dom 9am–9pm.",
  keywords: [
    "cafetería La Troncal",
    "café artesanal Ecuador",
    "frozen La Troncal",
    "bubble tea",
    "waffles",
    "postres",
    "Mister Coffee",
    "desayunos La Troncal",
  ],
  metadataBase: new URL("https://mistercoffee.lat"),
  openGraph: {
    type: "website",
    title: "Mister Coffee — Cafetería Artesanal · La Troncal",
    description:
      "Aquí se prepara la felicidad, una taza a la vez. Cafés artesanales, frozen, waffles, postres y más.",
    url: "https://mistercoffee.lat",
    siteName: "Mister Coffee",
    locale: "es_EC",
    images: [
      {
        url: "/images/LOGO.jpeg",
        width: 800,
        height: 800,
        alt: "Mister Coffee Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Local Business structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Mister Coffee",
    "description":
      "Cafetería artesanal en La Troncal, Ecuador. Cafés, frozen, waffles, postres y desayunos.",
    "telephone": "+593993127311",
    "url": "https://mistercoffee.lat",
    "logo": "https://mistercoffee.lat/images/LOGO.jpeg",
    "image": "https://mistercoffee.lat/images/cafe.jpeg",
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
    "servesCuisine": ["Café", "Postres", "Waffles", "Comida ligera"],
    "priceRange": "$",
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
