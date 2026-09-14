import type { Metadata } from "next";

import { AboutPage } from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the story behind Tavern — a restaurant built around good food, great vibes, and good company.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Tavern",
    description:
      "The story behind Tavern and our approach to good food, great vibes, and good company.",
    url: "/about",
    images: [
      {
        url: "/images/about/tavern-about.webp",
        width: 1200,
        height: 1500,
        alt: "Tavern restaurant interior",
      },
    ],
  },
};

export default function About() {
  return <AboutPage />;
}