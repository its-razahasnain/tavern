import type { Metadata } from "next";

import { GalleryPage } from "@/components/gallery/GallaryPage";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Step inside Tavern and explore the food, atmosphere, drinks, and moments that make every evening memorable.",
};

export default function Gallery() {
  return <GalleryPage />;
}