export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  size: "large" | "small";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-01",
    image: "/images/gallery/tavern-gallery-01.webp",
    alt: "Warm atmospheric interior of Tavern",
    size: "large",
  },
  {
    id: "gallery-02",
    image: "/images/gallery/tavern-gallery-02.webp",
    alt: "Signature dish served at Tavern",
    size: "small",
  },
  {
    id: "gallery-03",
    image: "/images/gallery/tavern-gallery-03.webp",
    alt: "Elegant dining table at Tavern",
    size: "small",
  },
  {
    id: "gallery-04",
    image: "/images/gallery/tavern-gallery-04.webp",
    alt: "Warmly lit Tavern bar",
    size: "large",
  },
  {
    id: "gallery-05",
    image: "/images/gallery/tavern-gallery-05.webp",
    alt: "Crafted drink at Tavern",
    size: "small",
  },
];