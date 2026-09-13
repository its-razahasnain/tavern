import type { Metadata } from "next";

import { AboutPage } from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the story behind Tavern — a warm restaurant built around good food, great vibes, and good company.",
};

export default function About() {
  return <AboutPage />;
}
