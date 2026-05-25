# Checklist de Lanzamiento del Proyecto: Mister Coffee

Este checklist detalla los pasos críticos que se deben verificar antes de iniciar, durante el desarrollo y antes de la entrega final de la landing page premium.

## 1. Fase Previa: Contexto e Identidad
- [ ] **Identidad de Marca**: Confirmar el logotipo oficial (formatos SVG o PNG transparente de alta resolución).
- [ ] **Paleta de Colores**: Definir los colores primario, secundario y de acento exactos (en formato HSL o hexadecimal).
- [ ] **Tipografía**: Validar que las tipografías de Google Fonts estén correctamente cargadas en el layout.
- [ ] **Fotos y Videos**: Asegurar que las imágenes de stock o fotos propias tengan buena resolución, estén comprimidas y tengan relación de aspecto optimizada.
- [ ] **Ubicación exacta**: Validar la dirección exacta y coordenadas GPS para la integración del mapa de Google Maps.
- [ ] **WhatsApp**: Comprobar el número telefónico de WhatsApp con código de país correcto (`+593` para Ecuador) y el mensaje de bienvenida.
- [ ] **Redes Sociales**: Confirmar enlaces a Instagram, Facebook o TikTok.
- [ ] **Horarios**: Verificar los horarios oficiales de apertura y cierre para toda la semana.
- [ ] **Menú y Precios**: Confirmar la lista exacta de productos, descripciones, notas de cata y precios.

---

## 2. Fase de Desarrollo y UI/UX
- [ ] **Responsive Mobile-First**: Comprobar que el diseño se vea impecable en móviles pequeños (iPhone SE / 320px) hasta pantallas 4K.
- [ ] **Diseño Glassmorphism**: Comprobar que los contenedores tengan el desenfoque adecuado (`backdrop-blur`) y bordes semi-transparentes suaves que no bloqueen la lectura de fondos complejos.
- [ ] **Tipografía e Interlineado**: Revisar que no existan líneas de texto amontonadas y que los párrafos no superen los 70 caracteres de ancho.
- [ ] **CTAs Visibles**: El botón de acción principal debe ser visible en el primer impacto visual (Hero) y en el Navbar de forma fija.
- [ ] **Navegación Fluida**: El menú hamburguesa en móviles debe tener animaciones suaves y cerrar al hacer clic en un enlace de sección (anclas).

---

## 3. Fase de Animación e Interacción
- [ ] **Smooth Scrolling**: Validar que Lenis funcione correctamente en todos los navegadores y no interfiera con scroll nativos de componentes modales.
- [ ] **GSAP & ScrollTrigger**: Comprobar que no haya saltos bruscos en las animaciones de scroll y que los disparadores (`start` / `end`) estén bien configurados.
- [ ] **Desmontado Seguro**: Asegurar que todas las animaciones de GSAP se limpien en `useGSAP` al cambiar de sección o desmontar.
- [ ] **Microinteracciones**: Los botones deben reaccionar inmediatamente al cursor (efecto hover magnético, cambio de escala o cambio de opacidad suave).
- [ ] **Movimiento Reducido**: Probar el sitio con la opción de movimiento reducido activada en el sistema operativo y asegurar que las transiciones pesadas se deshabiliten de forma limpia.

---

## 4. Fase de SEO y Performance
- [ ] **Semántica HTML**: Validar que se utilicen etiquetas semánticas (`header`, `main`, `section`, `footer`) y no solo divs.
- [ ] **Metadatos y Open Graph**: Confirmar que los meta-tags de título, descripción e imagen OG estén configurados en la raíz.
- [ ] **Datos Estructurados (JSON-LD)**: Validar la integración del script de Schema.org para `LocalBusiness` / `CafeOrCoffeeShop` sin errores sintácticos.
- [ ] **Compresión de Imágenes**: Comprobar que ninguna imagen cargada en producción supere los 150KB y que utilicen formato WebP.
- [ ] **LCP y priority**: La imagen de fondo del Hero debe tener la prop `priority` de `next/image` activa.
- [ ] **Accesibilidad (a11y)**: Comprobar el contraste de colores de los textos sobre fondos esmerilados y verificar el uso de `aria-label` en botones con iconos.
