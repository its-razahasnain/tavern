import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tavern — Good Food. Great Vibes. Together.",
    template: "%s — Tavern",
  },

  description:
    "Tavern is a warm, atmospheric restaurant serving thoughtful food, crafted drinks, and memorable experiences.",

  keywords: [
    "Tavern",
    "restaurant",
    "fine dining",
    "food",
    "drinks",
    "dinner",
  ],

  applicationName: "Tavern",

  icons: {
    icon: "/icon.svg",
  },

  openGraph: {
    title: "Tavern — Good Food. Great Vibes. Together.",
    description:
      "Fresh ingredients, bold flavors, and a welcoming atmosphere.",
    type: "website",
    siteName: "Tavern",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}