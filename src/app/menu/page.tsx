import type { Metadata } from "next";

import { MenuPage } from "@/components/menu/MenuPage";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the Tavern menu — small plates, mains, open-fire grill, handmade pasta, desserts, and crafted drinks.",
};

export default function Menu() {
  return <MenuPage />;
}