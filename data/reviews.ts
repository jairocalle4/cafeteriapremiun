export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date?: string;
}

export const reviewsData: Review[] = [
  {
    id: 1,
    author: "Cliente de La Troncal",
    rating: 5,
    text: "El mejor café de La Troncal sin duda. El ambiente es acogedor, el servicio excelente y los frozen son increíbles. ¡Siempre vuelvo!",
    date: "Hace 1 semana",
  },
  {
    id: 2,
    author: "Visitante frecuente",
    rating: 5,
    text: "Los desayunos son una delicia. El Faraón es mi favorito. El lugar tiene un ambiente muy bonito, ideal para reunirse con amigos o trabajar.",
    date: "Hace 2 semanas",
  },
  {
    id: 3,
    author: "Reseña Google",
    rating: 5,
    text: "Los waffles están deliciosos y el café irlandés es una joya. El precio es muy accesible para la calidad que ofrecen. ¡Totalmente recomendado!",
    date: "Hace 1 mes",
  },
  {
    id: 4,
    author: "Cliente satisfecho",
    rating: 4,
    text: "Muy buena atención, las porciones de cheesecake son generosas y deliciosas. El bubble tea de blueberry es adictivo. Los recomiendo mucho.",
    date: "Hace 2 meses",
  },
];
export type ReviewsData = typeof reviewsData;
