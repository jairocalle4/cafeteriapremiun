export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  badge?: string;
  details?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  coverImage: string;
  description: string;
  sections: {
    title: string;
    items: MenuItem[];
  }[];
}

export const menuData: MenuCategory[] = [
  {
    id: "bebidas-calientes",
    name: "Bebidas Calientes & Té",
    coverImage: "/images/cafe.jpeg",
    description: "Desde un espresso puro de origen hasta lattes de vainilla francesa. Cada taza es una historia de origen y proceso artesanal.",
    sections: [
      {
        title: "Bebidas Calientes",
        items: [
          { name: "Expresso", price: 1.30, description: "Intensidad y aroma concentrado en una taza clásica." },
          { name: "Expresso Doble", price: 1.80, description: "Doble carga del mejor café artesanal." },
          { name: "Capuchino Mediano", price: 1.99, description: "Perfecto balance entre espresso, leche vaporizada y espuma cremosa." },
          { name: "Capuchino Grande", price: 2.75, description: "Cremosa experiencia en formato gigante." },
          { name: "Capuchino de Vainilla Mediano", price: 2.30, description: "Un toque dulce y perfumado de vainilla francesa." },
          { name: "Capuchino de Vainilla Grande", price: 3.00, description: "Delicioso e intenso sabor dulce." },
          { name: "Mocachino Mediano", price: 1.80, description: "Combinación ideal de espresso, chocolate artesanal y leche." },
          { name: "Mocachino Grande", price: 2.50, description: "La dulzura del chocolate y la energía del café." },
          { name: "Americano Mediano", price: 1.30, description: "Suave y limpio, perfecto para acompañar tu mañana." },
          { name: "Americano Grande", price: 1.90, description: "Tu café de siempre, en formato grande." },
          { name: "Café con Crema Mediano", price: 1.80, description: "Espresso coronado con crema montada de la casa." },
          { name: "Café con Crema Grande", price: 2.50, description: "Suavidad aterciopelada y dulce." },
          { name: "Café con Leche Mediano", price: 1.50, description: "El clásico reconfortante de todas las tardes." },
          { name: "Café con Leche Grande", price: 2.00, description: "Doble dosis de calidez." },
          { name: "Chocolate Mediano", price: 2.25, description: "Elaborado con cacao nacional seleccionado.", badge: "Recomendado" },
          { name: "Chocolate Grande", price: 3.00, description: "Pura delicia achocolatada para días fríos." },
          { name: "Té", price: 1.30, description: "Selección de infusiones aromáticas." },
          { name: "Afogato", price: 2.50, description: "Helado cremoso de vainilla ahogado en un expresso caliente.", badge: "Favorito" },
          { name: "Café Irlandés", price: 3.99, description: "Espresso, whisky seleccionado, azúcar de caña y una capa de crema densa." },
        ],
      },
      {
        title: "Ice Coffee (Café Helado)",
        items: [
          { name: "Capuchino Helado", price: 2.25, description: "Fresco y espumoso, ideal para la tarde." },
          { name: "Mocachino Helado", price: 2.25, description: "El dulzor del chocolate helado y el café." },
          { name: "Americano Helado", price: 1.80, description: "Limpio, ligero y energizante." },
          { name: "Caramelo Helado", price: 2.50, description: "Con hilos de caramelo dulce de la casa.", badge: "Popular" },
          { name: "Leche Condensada Helado", price: 2.50, description: "Un toque dulce tradicional ecuatoriano." },
        ],
      },
      {
        title: "Té Helado",
        items: [
          { name: "Té de Horchata", price: 2.00, description: "Infusión lojana de flores curativas servida helada." },
          { name: "Té de Frutos Rojos", price: 2.00, description: "Afrutado, silvestre y muy refrescante." },
          { name: "Té de Limón", price: 2.00, description: "El clásico refresco cítrico y revitalizante." },
          { name: "Té de Menta", price: 2.00, description: "Sensación fresca y digestiva." },
        ],
      },
      {
        title: "Matcha & Bubble Tea",
        items: [
          { name: "Matcha Latte", price: 3.00, description: "Té verde matcha premium con leche vaporizada.", badge: "Nuevo" },
          { name: "Bubble Tea Blueberry", price: 3.00, description: "Té helado con perlas explosivas de arándanos." },
          { name: "Bubble Tea Strawberry", price: 3.00, description: "Té helado con perlas explosivas de fresa." },
        ],
      },
    ],
  },
  {
    id: "frozen",
    name: "Frozens & Milkshakes",
    coverImage: "/images/frozen.png",
    description: "Creatividad líquida en cada vaso. Frappés artesanales, milkshakes espesos y frozen de frutas exóticas ecuatorianas, siempre batidos al momento.",
    sections: [
      {
        title: "Frozen sin Café",
        items: [
          { name: "Frozen Oreo", price: 2.99, description: "Crema helada batida con galletas Oreo y salsa de chocolate." },
          { name: "Frozen Vainilla", price: 2.99, description: "Cremosa vainilla batida con hielo." },
          { name: "Frozen Menta", price: 2.99, description: "Refrescante y cremosa menta helada." },
          { name: "Frozen Nutella", price: 2.99, description: "El delicioso sabor a avellana y chocolate en versión frappé.", badge: "Favorito" },
          { name: "Frozen Hershey Mocca", price: 2.99, description: "Con chocolate Hershey y notas de cacao." },
          { name: "Frozen Chocolate Blanco", price: 2.50, description: "Frappé cremoso de chocolate blanco." },
          { name: "Frozen Chocolate Negro", price: 2.50, description: "Intensidad refrescante de cacao oscuro." },
          { name: "Frozen Canela Chocolate", price: 2.50, description: "Toque aromático de canela y chocolate." },
          { name: "Frozen Caramelo Toffee", price: 2.50, description: "Cremoso toffee y dulce de leche helado." },
        ],
      },
      {
        title: "Frozen con Café",
        items: [
          { name: "Frozen de Caramelo", price: 2.50, description: "Espresso batido con hielo, leche y salsa de caramelo premium." },
          { name: "Frozen Chai Tea", price: 2.50, description: "Especias orientales con un toque de café helado." },
          { name: "Frozen Café con Crema", price: 2.50, description: "Cremoso y energizante, coronado con nata batida." },
          { name: "Frozen Butterscotch", price: 2.50, description: "Notas a caramelo salado y mantequilla tostada." },
          { name: "Frozen Amaretto", price: 2.50, description: "Con un toque de almendra dulce." },
          { name: "Frozen Avellana", price: 2.50, description: "Café helado con esencia de avellanas tostadas." },
        ],
      },
      {
        title: "Frozen de Frutas",
        items: [
          { name: "Frozen de Maracuyá", price: 2.25, description: "Fruta de la pasión 100% natural, ácida y fresca.", badge: "Recomendado" },
          { name: "Frozen de Guanábana", price: 2.25, description: "Textura cremosa y exótica." },
          { name: "Frozen de Fresa", price: 2.00, description: "Pulpa de fresa seleccionada, refrescante." },
          { name: "Frozen de Mora", price: 2.00, description: "Mora silvestre de los valles andinos." },
          { name: "Frozen de Mango de Temporada", price: 2.00, description: "Dulce mango maduro de la costa ecuatoriana." },
        ],
      },
      {
        title: "Milkshakes (Batidos)",
        items: [
          { name: "Milkshake Oreo", price: 3.50, description: "Espeso batido de helado de vainilla con trozos de Oreo." },
          { name: "Milkshake Vainilla", price: 3.25, description: "El clásico cremoso y aromático." },
          { name: "Milkshake Mocca", price: 3.25, description: "Café, chocolate y helado batidos." },
          { name: "Milkshake Chocolate Negro", price: 3.25, description: "Cremosa malteada de chocolate oscuro." },
          { name: "Milkshake Menta", price: 3.75, description: "Helado de menta con chispas de chocolate." },
          { name: "Milkshake Nutella", price: 3.75, description: "Nutella cremosa batida con helado artesanal." },
          { name: "Milkshake Fresa", price: 3.75, description: "Helado de fresa y trocitos de fruta natural." },
        ],
      },
    ],
  },
  {
    id: "comidas",
    name: "Sánduches, Lasañas & Pizzas",
    coverImage: "/images/comidas.png",
    description: "Sánduches artesanales con nombre propio, lasañas capas y pizzas individuales gratinadas. La cocina de autor en el corazón de La Troncal.",
    sections: [
      {
        title: "Sánduches de la Casa",
        items: [
          { name: "Napoleón", price: 1.75, description: "Clásico y reconfortante: Jamón curado y queso mozzarella fundido.", details: "Opción de vegetales gratis (tomate, lechuga, cebolla)." },
          { name: "Leonardo da Vinci", price: 3.00, description: "Jamón, queso fundido, pollo desmenuzado y tocino crocante.", badge: "Popular", details: "Opción de vegetales gratis (tomate, lechuga, cebolla)." },
          { name: "Hitler", price: 3.00, description: "Jamón, queso, pollo desmechado y salchichón ahumado.", details: "Opción de vegetales gratis (tomate, lechuga, cebolla)." },
          { name: "Frida Kahlo", price: 3.99, description: "Tiras de lomo fino, queso mozzarella, tocino y cebolla salteada caramelizada.", badge: "Favorito", details: "Opción de vegetales gratis (tomate, lechuga, cebolla)." },
          { name: "Sancho Panza", price: 2.50, description: "Jugoso pernil horneado al estilo tradicional con aderezos.", details: "Opción de vegetales gratis (tomate, lechuga, cebolla)." },
          { name: "Marilyn Monroe", price: 2.25, description: "Pollo jugoso sazonado a la plancha con queso derretido.", details: "Opción de vegetales gratis (tomate, lechuga, cebolla)." },
          { name: "Albert Einstein", price: 2.80, description: "Opción vegetariana: Champiñones salteados, pesto, mozzarella, aguacate fresco.", badge: "Vegetariano", details: "Opción de vegetales gratis (tomate, lechuga, cebolla)." },
        ],
      },
      {
        title: "Lasañas Artesanales",
        items: [
          { name: "Lasaña de Pollo", price: 5.00, description: "Capas de pasta rellenas de pollo jugoso y salsa bechamel." },
          { name: "Lasaña de Pollo & Champiñones", price: 5.00, description: "Pollo desmechado y champiñones salteados al ajillo." },
          { name: "Lasaña de Carne", price: 5.00, description: "La clásica lasaña bolognesa con salsa de tomate y carne molida fina." },
          { name: "Lasaña Mixta", price: 5.00, description: "El mejor balance: Pollo, carne y quesos gratinados.", badge: "Recomendado" },
        ],
      },
      {
        title: "Pizzas Individuales",
        items: [
          { name: "Pizza de Jamón & Queso", price: 2.99, description: "Salsa de tomate casera, jamón dulce y abundante mozzarella gratinada." },
          { name: "Pizza Jamón, Queso & Salchichón", price: 3.99, description: "Con embutido ahumado de la casa, sazonado al orégano." },
        ],
      },
      {
        title: "Nachos para Compartir",
        items: [
          { name: "Nachos Completos", price: 4.99, description: "Totopos crujientes bañados en queso fundido, carne bolognesa y guacamole casero.", badge: "Popular" },
          { name: "Nachos Sencillos con Queso", price: 2.99, description: "Totopos de maíz crujientes acompañados de dip de queso fundido caliente." },
        ],
      },
    ],
  },
  {
    id: "dulces-postres",
    name: "Dulces, Tortas & Waffles",
    coverImage: "/images/postre.jpeg",
    description: "El cierre perfecto o el comienzo dulce. Tres leches húmedas, cheesecakes premium, waffles crujientes y rollos de canela recién horneados.",
    sections: [
      {
        title: "Porciones Tres Leches",
        items: [
          { name: "Tres Leches de Nuez", price: 2.25, description: "Bizcocho húmedo con trozos de nueces tostadas." },
          { name: "Tres Leches de Oreo", price: 2.25, description: "Húmeda delicia con galletas trituradas y crema." },
          { name: "Tres Leches de Chocolate Negro", price: 2.25, description: "Intensidad de chocolate curado en remojo de tres leches." },
          { name: "Tres Leches de Chocolate Blanco", price: 2.25, description: "Dulzor cremoso y suave." },
          { name: "Tres Leches de Café", price: 2.25, description: "Remojo de espresso artesanal con tres leches y crema." },
          { name: "Tres Leches de Durazno", price: 2.25, description: "Con trozos de durazno almibarado fresco." },
          { name: "Tres Leches de Avellana", price: 2.25, description: "Humedecido en remojo perfumado con avellana." },
          { name: "Tres Leches de Vainilla", price: 1.75, description: "El bizcocho húmedo clásico y tradicional." },
        ],
      },
      {
        title: "Cuatro Leches (Dulce de Leche Extra)",
        items: [
          { name: "Cuatro Leches Vainilla", price: 2.50, description: "El clásico húmedo cubierto con dulce de leche hilado." },
          { name: "Cuatro Leches Chocolate", price: 2.50, description: "Cacao y crema en cuatro leches." },
          { name: "Cuatro Leches de Oreo", price: 3.00, description: "Húmedo relleno de galletas y fudge." },
          { name: "Cuatro Leches de Nuez", price: 3.00, description: "Tostado y crujiente contraste en cada bocado." },
        ],
      },
      {
        title: "Cheesecakes Premium",
        items: [
          { name: "Cheesecake de Maracuyá", price: 2.50, description: "Base crujiente con mousse de queso y reducción ácida de maracuyá." },
          { name: "Cheesecake de Oreo", price: 2.50, description: "Cremoso de queso con trozos de Oreo e hilos de fudge." },
          { name: "Cheesecake de Arándano", price: 2.50, description: "Mermelada de arándanos enteros seleccionados." },
          { name: "Cheesecake de Brownie", price: 2.50, description: "Combinación de tarta de queso con trozos húmedos de brownie.", badge: "Favorito" },
          { name: "Cheesecake de Frutos Rojos", price: 2.50, description: "Con fresas y moras cocinadas en almíbar suave de la casa." },
          { name: "Cheesecake en Vaso", price: 3.00, description: "Con salsa de la casa en porción especial para degustar cómodamente." },
        ],
      },
      {
        title: "Tradicionales & Pays",
        items: [
          { name: "Queso de Leche de Vainilla", price: 1.75, description: "El flan casero tradicional con caramelo quemado." },
          { name: "Queso de Leche de Coco", price: 1.75, description: "Quesillo tradicional con ralladura de coco tostado." },
          { name: "Queso de Leche Mixto", price: 1.75, description: "Balance perfecto de coco y vainilla tradicional." },
          { name: "Pay de Maracuyá", price: 2.25, description: "Tarta rellena con crema horneada de fruta de la pasión." },
          { name: "Pay de Manzana al Horno", price: 2.50, description: "Hojaldre crujiente con manzanas aromatizadas con canela y azúcar morena.", badge: "Caliente" },
        ],
      },
      {
        title: "Cakes & Bizcochos",
        items: [
          { name: "Cake de Zanahoria", price: 2.25, description: "Bizcocho especiado cubierto de abundante frosting de queso crema.", badge: "Popular" },
          { name: "Volteado de Piña", price: 2.00, description: "Bizcocho húmedo cubierto con rodajas de piña caramelizadas." },
          { name: "Volteado de Manzana & Nuez", price: 2.00, description: "Sabor especiado con manzanas al caramelo." },
          { name: "Cake de Naranja", price: 1.50, description: "Suave, esponjoso e impregnado con zumo natural de naranja fresca." },
        ],
      },
      {
        title: "Especiales, Brownies & Rollos",
        items: [
          { name: "Cake de Banano (Porción)", price: 0.50, description: "Ideal para acompañar tu americano matutino." },
          { name: "Cake de Coco (Porción)", price: 0.50, description: "Húmedo de coco rallado." },
          { name: "Cake Sin Gluten de Quinua y Stevia", price: 2.50, description: "Opción saludable e inclusiva para cuidar tu bienestar.", badge: "Sin Gluten" },
          { name: "Brownie de Chocolate", price: 1.00, description: "Crocante por fuera y húmedo/fudge por dentro de puro cacao." },
          { name: "Brownie con Helado", price: 2.25, description: "Brownie tibio con bola de helado artesanal de vainilla." },
          { name: "Brownie con Helado & Crema", price: 2.50, description: "Delicioso postre caliente y frío con nata batida." },
          { name: "Rollo de Canela", price: 2.00, description: "Masa esponjosa rellena de mantequilla, azúcar moreno y canela molida, glaseada." },
          { name: "Rollo de Arándano", price: 2.00, description: "Con glaseado cítrico de arándanos silvestres." },
          { name: "Rollo de Ferrero", price: 2.00, description: "Relleno de crema de cacao y trozos de avellana." },
        ],
      },
      {
        title: "Waffles Personalizados",
        items: [
          { name: "Waffle Helado & Crema", price: 3.00, description: "Waffle crujiente horneado al momento con helado artesanal y crema montada.", details: "Frutas: Banano, fresa, durazno. Aderezos: Chocolate, dulce de leche, leche condensada, Nutella. Helados: Vainilla, chocolate, fresa." },
          { name: "Waffle Helado, Oreo & Crema", price: 3.50, description: "Con trozos de galletas crujientes y fudge de chocolate.", details: "Frutas: Banano, fresa, durazno. Aderezos: Chocolate, dulce de leche, leche condensada, Nutella. Helados: Vainilla, chocolate, fresa." },
          { name: "Waffle Helado, 2 Frutas & Crema", price: 3.75, description: "Elige dos frutas frescas y tu aderezo preferido encima.", badge: "Recomendado", details: "Frutas: Banano, fresa, durazno. Aderezos: Chocolate, dulce de leche, leche condensada, Nutella. Helados: Vainilla, chocolate, fresa." },
          { name: "Waffle Helado, 3 Frutas & Crema", price: 4.00, description: "El buffet completo de frutas con helado, aderezo y crema batida.", details: "Frutas: Banano, fresa, durazno. Aderezos: Chocolate, dulce de leche, leche condensada, Nutella. Helados: Vainilla, chocolate, fresa." },
        ],
      },
    ],
  },
  {
    id: "desayunos",
    name: "Desayunos Completos",
    coverImage: "/images/desayunos.png",
    description: "Mañanas que comienzan con intención. Desayunos con nombres de leyenda: del Americano clásico al épico Faraón con huevos escalfados y pesto de la casa.",
    sections: [
      {
        title: "Desayunos de la Casa",
        items: [
          { name: "Desayuno Americano", price: 3.99, description: "Café americano de origen, huevos revueltos, tiras de tocino ahumado crujiente, pan horneado de la casa, mermelada y mantequilla de campo." },
          { name: "Desayuno Hércules", price: 3.99, description: "Café americano de origen, waffle crujiente, huevos revueltos, tiras de tocino, miel de maple pura y rebanadas de aguacate fresco.", badge: "Popular" },
          { name: "Desayuno Faraón", price: 5.99, description: "Especialidad: Huevos escalfados en salsa espesa de tomates frescos, pesto de la casa, quesos parmesano y mozzarella fundidos, acompañados de pan artesanal y café americano.", badge: "Especialidad" },
          { name: "Desayuno Poseidón", price: 4.99, description: "Porción de frutas de temporada frescas, omelette con champiñones frescos y salchicha, pan tostado artesanal y taza de café americano caliente." },
        ],
      },
      {
        title: "Adicionales para Tu Taza / Plato",
        items: [
          { name: "Porción de Crema Extra", price: 0.50, description: "Nata batida fresca montada al momento." },
          { name: "Saborizante o Esencias", price: 0.50, description: "Vainilla, caramelo, avellana o amaretto." },
          { name: "Porción de Perlas Bubble Tea", price: 1.25, description: "Tus perlas explosivas de fruta favoritas." },
        ],
      },
    ],
  },
];
