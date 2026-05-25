# Reglas de Rendimiento, Accesibilidad y SEO

Este documento detalla las directrices necesarias para garantizar que el sitio web cargue de manera instantánea, cumpla con los estándares de accesibilidad (WCAG) y logre un posicionamiento sobresaliente en motores de búsqueda (SEO), con especial atención al SEO local.

## 1. Optimización del Rendimiento (Performance)
Una landing page animada debe ser rápida. Si tarda más de 2 segundos en cargar, el usuario abandonará la página.
- **LCP (Largest Contentful Paint)**:
  - El Hero Banner no debe depender de scripts pesados o animaciones que retrasen su primer renderizado visible.
  - La imagen del Hero debe cargarse con la directiva `priority` en `next/image`.
- **Diferimiento de Scripts**:
  - Evitar el bloqueo del hilo principal. Importar librerías pesadas de forma dinámica si no se necesitan inmediatamente en el primer scroll.
- **CSS Crítico**:
  - El archivo `globals.css` debe contener estilos base optimizados. Las clases utilitarias de Tailwind se cargan bajo demanda gracias al compilador de Tailwind, asegurando un CSS final de mínimo peso.

---

## 2. SEO Técnico y Metadatos de Next.js
Next.js provee una API de Metadatos integrada e impecable.
- **Metadatos Estáticos y Dinámicos**: Configurar títulos descriptivos y meta-descriptions atrayentes en `layout.tsx` o `page.tsx`.
- **Open Graph (OG)**: Incluir etiquetas Open Graph para optimizar la visualización de la web cuando sea compartida en redes sociales (WhatsApp, Facebook, Twitter).
- **SEO Local**:
  - Incluir el nombre de la ciudad y provincia de forma estratégica en el meta título y descripción (ej. "Café de Especialidad en La Troncal, Cañar | Mister Coffee").
  - Implementar datos estructurados en formato JSON-LD para negocios locales (`LocalBusiness`), especificando dirección, geolocalización, horarios, teléfono, enlace de WhatsApp y redes sociales.
  ```json
  {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Mister Coffee",
    "image": "https://mistercoffee.lat/images/og-image.jpg",
    "@id": "https://mistercoffee.lat/#cafe",
    "url": "https://mistercoffee.lat",
    "telephone": "+5939XXXXXXXX",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. 25 de Agosto",
      "addressLocality": "La Troncal",
      "addressRegion": "Cañar",
      "postalCode": "030350",
      "addressCountry": "EC"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -2.242222,
      "longitude": -79.336111
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "22:00"
    }
  }
  ```

---

## 3. Accesibilidad (a11y)
- **HTML Semántico**: No estructurar el sitio usando únicamente etiquetas `div`. Utilizar:
  - `<header>` para la navegación.
  - `<main>` para el contenedor principal de la página.
  - `<section>` con un título (`<h2>` - `<h6>`) para cada sección diferenciada.
  - `<article>` para elementos repetitivos independientes (entradas de blog, testimonios individuales).
  - `<footer>` para el pie de página.
- **Contraste de Colores**: Mantener un ratio de contraste mínimo de 4.5:1 para el texto normal y 3:1 para textos grandes, según las normas WCAG AA.
- **Interactividad por Teclado**: Todo botón, enlace o elemento interactivo debe poder enfocarse mediante el teclado (usando la tecla Tab) y tener un indicador visual de enfoque claro (`focus-visible`).
- **Atributos ARIA**:
  - Usar `aria-label` para botones que solo contienen iconos (como el botón para abrir el menú móvil o los botones de redes sociales).
  - Usar `aria-expanded` en el menú móvil para indicar si está abierto o cerrado.

---

## 4. Buenas Prácticas para Despliegue en Vercel
- **Revalidación e ISR**: Si el menú o los precios cambian con frecuencia desde un gestor de contenidos externo, configurar ISR (Incremental Static Regeneration) o revalidación por tags.
- **Archivos Estáticos**: Utilizar la carpeta `/public` de manera organizada. Comprimir todas las imágenes (PNG, JPG) utilizando herramientas como TinyPNG o convirtiéndolas directamente a formato WebP antes de subirlas al repositorio.
