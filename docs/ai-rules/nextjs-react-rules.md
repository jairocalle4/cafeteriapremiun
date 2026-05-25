# Reglas de Desarrollo Next.js, React y TypeScript

Este documento detalla las directrices técnicas para asegurar que el código sea limpio, escalable, mantenible y aproveche al máximo las características modernas de Next.js y React 19.

## 1. Next.js App Router y Arquitectura de Componentes
En Next.js App Router, todo componente es un Server Component por defecto. Esto es ideal para el rendimiento y SEO.

- **Server Components (RSC)**: Usarlos para todo el contenido estático, llamadas a base de datos o lectura de archivos locales. No pueden usar hooks como `useState`, `useEffect`, o eventos como `onClick`.
- **Client Components**: Usar `"use client"` al inicio del archivo únicamente cuando el componente requiera:
  - Hooks de React (`useState`, `useEffect`, `useContext`, `useReducer`, etc.).
  - Eventos del navegador (`onClick`, `onChange`, `onSubmit`).
  - Animaciones complejas interactivas con GSAP/Framer Motion que dependen de estados del cliente o del ciclo de vida del componente.
  - Librerías que interactúan directamente con el DOM (como Lenis o ScrollTrigger).
- **Optimización**: Intentar mantener los Client Components lo más pequeños posible en las hojas externas del árbol de componentes, importándolos dentro de Server Components para que la página mantenga un excelente rendimiento de carga inicial.

---

## 2. Tipado Estricto con TypeScript
- **Declaración de Props**: Todos los componentes que reciban props deben declarar su interfaz de forma explícita.
  ```typescript
  interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'glass';
    className?: string;
  }
  ```
- **Evitar `any`**: Está prohibido el uso de `any`. Si un tipo es desconocido o complejo, definir un tipo genérico o usar `unknown` e investigar la estructura correcta.
- **Tipado de Referencias**: Para referencias de GSAP o elementos del DOM, usar tipos específicos como `HTMLDivElement` o `HTMLButtonElement` en lugar de referencias genéricas.

---

## 3. Organización de Archivos y Componentes
El proyecto debe seguir una estructura estricta y modular:
- `/app`: Rutas del App Router, páginas, layouts y estilos globales.
- `/components/sections`: Secciones grandes de la landing (Hero, About, Menu, Gallery, Testimonials, Contact).
- `/components/ui`: Componentes atómicos reutilizables (PremiumButton, FloatingBadge, CustomInput).
- `/components/layout`: Componentes estructurales (Navbar, Footer, Container, Section).
- `/components/animations`: Envoltorios de animación (SmoothScroll, AnimatedSection, GsapWrapper, RevealText).
- `/lib`: Utilidades, constantes y lógica independiente.
- `/data`: Datos en crudo y constantes de textos (como `site-content.ts` para facilitar modificaciones de contenido sin tocar la estructura HTML).

---

## 4. Gestión de Imágenes y Optimización de Recursos
- **Next.js Image (`next/image`)**:
    - Usar siempre el componente `Image` de Next.js para optimización automática de imágenes (conversión a WebP, responsive y carga diferida).
    - Para imágenes en la sección superior visible (Hero), utilizar el atributo `priority` para evitar penalizaciones en el LCP (Largest Contentful Paint).
    - Proveer siempre atributos `width` y `height` correctos, o utilizar la propiedad `fill` junto a un contenedor con clase `relative` y relaciones de aspecto controladas (`aspect-video`, `aspect-square`, etc.).
    - Rellenar siempre el atributo `alt` con textos descriptivos y semánticos.

---

## 5. Prácticas de Importación
- **Rutas Relativas vs. Alias**: Usar el alias `@/` configurado en `tsconfig.json` para realizar imports limpios desde la raíz del proyecto.
  - **Correcto**: `import { PremiumButton } from '@/components/ui/PremiumButton';`
  - **Incorrecto**: `import { PremiumButton } from '../../../../components/ui/PremiumButton';`
- **Imports Ordenados**: Mantener los imports en bloques ordenados:
  1. Librerías de React y Next (react, next/image, next/link).
  2. Librerías externas (gsap, framer-motion, lucide-react).
  3. Utilidades y Helpers locales (`@/lib/...`, `@/data/...`).
  4. Componentes locales.
  5. Estilos o assets locales.
