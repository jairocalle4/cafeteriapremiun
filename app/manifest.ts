import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mister Coffee La Troncal",
    short_name: "Mister Coffee",
    description: "Cafetería artesanal en La Troncal, Cañar, Ecuador",
    start_url: "/",
    display: "standalone",
    background_color: "#faf6f0",
    theme_color: "#0a6666",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/LOGO.jpeg",
        sizes: "800x800",
        type: "image/jpeg",
      },
    ],
  };
}
