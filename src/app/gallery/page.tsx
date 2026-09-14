import type { Metadata } from "next";

import { GalleryPage } from "@/components/gallery/GallaryPage";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Step inside Tavern and explore the food, drinks, atmosphere, and moments that make the restaurant special.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Tavern Gallery",
    description:
      "Take a look inside Tavern — the room, the food, the bar, and the moments.",
    url: "/gallery",
    images: [
      {
        url: "/images/gallery/tavern-gallery-01.webp",
        width: 1200,
        height: 900,
        alt: "Warm atmospheric interior of Tavern",
      },
    ],
  },
};

export default function Gallery() {
  return <GalleryPage />;
}