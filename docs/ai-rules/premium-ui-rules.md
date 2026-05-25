# Reglas de Interfaz de Usuario Premium (UI/UX)

Este documento detalla las directrices estéticas y de diseño para construir una landing page premium y con calidad de Awwwards para negocios de especialidad.

## 1. Diseño Premium vs. Diseño Común
Un diseño premium no se define por la cantidad de elementos o adornos, sino por la precisión en el espaciado, la jerarquía visual, la tipografía sofisticada y los detalles interactivos.

- **Diseño Común**: Layouts planos de 3 columnas repetitivas, botones de colores puros muy brillantes (rojo puro, verde puro), exceso de bordes oscuros, fuentes predeterminadas del sistema sin ajustar el interlineado o espaciado de letras, y falta de espacio para "respirar".
- **Diseño Premium**: Composiciones editoriales asimétricas pero equilibradas, paleta de colores cohesiva basada en la naturaleza del negocio (café, madera, piedra, crema), bordes sutiles con transparencias (glassmorphism), sombras suaves y difusas (blur alto, opacidad baja), tipografías con carácter, y microinteracciones fluidas.

---

## 2. El Arte del Espaciado (Spacing)
El espacio en blanco es un elemento activo de diseño, no "espacio vacío".
- **Respiro de Secciones**: Utilizar paddings verticales amplios en las secciones (`py-24` a `py-36` en desktop, `py-16` a `py-20` en móvil) para dar jerarquía e importancia a cada sección.
- **Espaciado de Contenido**: Agrupar elementos relacionados con márgenes cortos y separar grupos con márgenes más amplios. Utilizar siempre la escala de espaciados de Tailwind de forma consistente.
- **Flujo de Lectura**: Evitar saturar el ancho de lectura de los párrafos. Mantener el ancho máximo de los párrafos de texto en torno a `max-w-xl` o `max-w-2xl` (máximo 60-70 caracteres por línea) para facilitar la lectura.

---

## 3. Tipografía Sofisticada y Jerarquía
La tipografía es el pilar de un sitio web editorial y elegante.
- **Contraste de Fuentes**: Usar una tipografía elegante, preferiblemente con Serif o Sans-serif moderna y geométrica para los títulos principales (ej. una tipografía serif clásica y cálida para denotar artesanía, combinada con una sans-serif limpia y geométrica para textos de lectura).
- **Ajustes de Letra (Kerning e Interlineado)**:
  - Para títulos grandes en mayúsculas, usar `tracking-wider` o `tracking-widest` para dar un aire lujoso.
  - Para títulos gigantes en minúsculas, a veces `tracking-tight` ayuda a unificar visualmente el bloque.
  - Ajustar el interlineado (`leading-relaxed` para párrafos, `leading-tight` o `leading-none` para títulos grandes).
- **Proporción**: La diferencia de tamaño entre el título principal, subtítulos y cuerpo de texto debe ser drástica para crear una jerarquía clara e instantánea.

---

## 4. Secciones con Intención Visual y Composición Editorial
Evitar las típicas secciones planas de "imagen a la izquierda y texto a la derecha" sin ninguna variación.
- **Layout Editorial**: Disponer los elementos como en una revista de diseño. Las imágenes no tienen por qué estar alineadas con el texto; pueden superponerse ligeramente o tener diferentes velocidades de scroll (parallax).
- **Uso de Grid y Flexbox Avanzado**: Diseñar grillas asimétricas donde una tarjeta o imagen ocupe más espacio que las otras de manera justificada.
- **Cards e Interacciones Modernas**: Las tarjetas deben ser sutiles. En un diseño premium con temática oscura/cálida, usar un fondo semitransparente (`bg-neutral-900/60` o similar) con un borde extremadamente sutil (`border-white/10` o `border-neutral-800`) y `backdrop-blur-md` en lugar de fondos sólidos pesados.

---

## 5. Diseño Local con Apariencia Internacional
El objetivo es que un negocio local (en este caso, ubicado en La Troncal, Ecuador) se perciba al mismo nivel visual y de profesionalismo que una cafetería boutique en Milán, Tokio o Nueva York.
- **Fotografía de Calidad**: Si el cliente no dispone de fotos profesionales, sugerir imágenes de stock de alta calidad que encajen con la paleta de colores y la calidez del café artesanal (granos húmedos, baristas detallistas, humo ascendiendo, luz natural, tonos tierra).
- **Evitar Clichés**: No utilizar iconos genéricos o ilustraciones vectoriales infantiles de tazas de café planas. Es preferible usar iconos lineales muy limpios (`lucide-react`) o tipografías finas y elegantes.
- **Integración Natural**: Los detalles locales (dirección, teléfonos) deben integrarse de forma estética en el diseño, por ejemplo en un mapa minimalista con filtros de color oscuros/tonos sepia o un footer premium bien organizado, en lugar de un banner tosco.
