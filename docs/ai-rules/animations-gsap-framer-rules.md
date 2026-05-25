# Reglas de Animación (GSAP, Framer Motion y Lenis)

Las animaciones en una web premium deben ser fluidas, sutiles y estar perfectamente coordinadas. Este documento establece cuándo y cómo utilizar cada librería en el stack.

## 1. División de Responsabilidades
Para evitar conflictos de renderizado y mantener un rendimiento excelente, dividimos las tareas de animación de la siguiente manera:

- **Framer Motion**:
  - Ideal para animaciones basadas en estados de React (ej. un menú móvil que se abre/cierra, un modal, un slider de testimonios).
  - Microinteracciones táctiles y de cursor (hover en botones, efectos magnéticos, foco de inputs).
  - Animaciones simples de entrada de elementos individuales al cargar la página (ej. el fade-in de los títulos en el Hero).
- **GSAP + ScrollTrigger**:
  - Reservado para animaciones complejas basadas en el scroll (ej. pin de secciones, scroll horizontal de productos, parallax de imágenes avanzado, efectos de revelación coordinados por scroll).
  - Animaciones con múltiples líneas de tiempo (`gsap.timeline()`) que requieren alta precisión de milisegundos y alto rendimiento.
- **Lenis Smooth Scroll**:
  - Controla el scroll general de la página para que sea suave y fluido, permitiendo que ScrollTrigger de GSAP calcule con precisión quirúrgica las posiciones y velocidades de los elementos animados.

---

## 2. Inicialización Segura en React (Client Components)
El principal riesgo técnico al usar GSAP en Next.js App Router son las discrepancias de hidratación y las referencias huérfanas en el DOM debido a la recarga rápida (HMR).

- **Uso de `@gsap/react`**: Usar siempre el hook `useGSAP` provisto por `@gsap/react` para registrar animaciones dentro de componentes cliente. Este hook limpia automáticamente las animaciones y timelines cuando el componente se desmonta.
  ```typescript
  "use client";
  import { useRef } from "react";
  import gsap from "gsap";
  import { useGSAP } from "@gsap/react";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  export default function ScrollAnimatedComponent() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      gsap.from(".box", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
        opacity: 0,
        y: 50,
      });
    }, { scope: container }); // Limita la búsqueda de clases al contenedor local (Scope)

    return (
      <div ref={container}>
        <div className="box">Contenido Animado</div>
      </div>
    );
  }
  ```
- **Evitar Problemas de Hidratación (Hydration Mismatch)**:
  - No animar ni condicionar elementos del DOM antes de que el Javascript cliente se ejecute si esto cambia el marcado HTML inicial enviado por el servidor.
  - Asegurar que Lenis e inicializadores globales se monten solo después de que el componente principal se haya hidratado (dentro de un wrapper de cliente seguro).

---

## 3. Optimización para Dispositivos Móviles
Las animaciones de scroll pesadas en dispositivos móviles pueden arruinar la experiencia debido a la menor capacidad de CPU y GPU.
- **Simplificación y Media Queries**: Usar `gsap.matchMedia()` para deshabilitar o simplificar animaciones complejas de scroll en pantallas de menos de 768px (móviles).
- **Evitar Propiedades de Layout**: Animar únicamente propiedades optimizadas por la GPU (como `transform` - `x`, `y`, `scale`, `rotation` - y `opacity`). Nunca animar propiedades que causen reflujos de layout (`width`, `height`, `top`, `left`, `margin`, `padding`).
- **CSS `will-change`**: Usar de forma comedida la propiedad `will-change` en elementos que sufran transformaciones pesadas, pero removerla una vez que la animación finalice si es posible, o usarla únicamente en los componentes principales del Hero/ScrollTrigger.

---

## 4. Accesibilidad (Prefers-Reduced-Motion)
Respetar siempre las preferencias de los usuarios que sufren de sensibilidad al movimiento o cinetosis.
- **En Framer Motion**: Usar el hook `useReducedMotion` para desactivar las transformaciones de movimiento físico y sustituirlas por transiciones simples de opacidad (`fade-in`).
- **En GSAP/Lenis**:
  - Lenis debe desactivarse o ponerse en modo instantáneo si el usuario prefiere movimiento reducido.
  - En GSAP, podemos usar un condicional global o media queries CSS para desactivar ScrollTriggers invasivos.
