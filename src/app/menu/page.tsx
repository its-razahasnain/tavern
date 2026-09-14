import type { Metadata } from "next";

import { MenuPage } from "@/components/menu/MenuPage";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the Tavern menu — signature plates, wood-fired dishes, handmade pasta, desserts, and crafted drinks.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Tavern Menu",
    description:
      "Signature plates, wood-fired dishes, handmade pasta, desserts, and crafted drinks.",
    url: "/menu",
    images: [
      {
        url: "/images/menu/tavern-burger.webp",
        width: 1200,
        height: 900,
        alt: "The Tavern Burger",
      },
    ],
  },
};

export default function Menu() {
  return <MenuPage />;
}