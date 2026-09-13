export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  featured?: boolean;
}

export const featuredMenuItems: MenuItem[] = [
  {
    id: "tavern-burger",
    name: "The Tavern Burger",
    category: "Signature",
    description:
      "Charred beef, aged cheddar, caramelized onion, and our house sauce.",
    price: "2,450",
    image: "/images/menu/tavern-burger.webp",
    featured: true,
  },
  {
    id: "wood-fired-steak",
    name: "Wood-Fired Steak",
    category: "From the Grill",
    description: "Prime cut, open-fire grilled and finished with herb butter.",
    price: "4,950",
    image: "/images/menu/wood-fired-steak.webp",
    featured: true,
  },
  {
    id: "truffle-pasta",
    name: "Truffle Pasta",
    category: "Pasta",
    description:
      "Silky handmade pasta, wild mushrooms, parmesan, and black truffle.",
    price: "2,850",
    image: "/images/menu/truffle-pasta.webp",
    featured: true,
  },
  {
    id: "tavern-dessert",
    name: "Tavern Chocolate",
    category: "Dessert",
    description:
      "Dark chocolate, sea salt, vanilla cream, and a warm cocoa center.",
    price: "1,450",
    image: "/images/menu/tavern-chocolate.webp",
    featured: true,
  },
];
