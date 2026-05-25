export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    src: "/images/exterior.jpg",
    alt: "Fachada de Mister Coffee",
    title: "El Lugar",
    category: "Ambiente",
    description: "Un rincón acogedor en el corazón de La Troncal diseñado para compartir momentos especiales.",
  },
  {
    id: 2,
    src: "/images/cafe.jpeg",
    alt: "Vertido de café filtrado artesanal",
    title: "Nuestros Cafés",
    category: "Especialidad",
    description: "Granos arábigos seleccionados y tostados con perfiles únicos para resaltar cada nota.",
  },
  {
    id: 3,
    src: "/images/postre.jpeg",
    alt: "Porción de tarta y postres de la casa",
    title: "Postres",
    category: "Repostería",
    description: "Elaborados artesanalmente al día, desde cheesecakes hasta tradicionales quesos de leche.",
  },
  {
    id: 4,
    src: "/images/frozen.png",
    alt: "Frozens y frappés helados",
    title: "Frozen",
    category: "Bebidas Heladas",
    description: "Frozen cremosos con y sin café, perfectos para refrescar tu tarde con sabores de autor.",
  },
  {
    id: 5,
    src: "/images/wafles.jpeg",
    alt: "Waffles belgas con helado y frutas frescas",
    title: "Waffles",
    category: "Favoritos",
    description: "Horneados al momento, crujientes por fuera y esponjosos por dentro, personalizados a tu gusto.",
  },
];
export type GalleryData = typeof galleryData;
