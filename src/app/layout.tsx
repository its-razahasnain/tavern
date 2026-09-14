import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/motion/PageTransition";
import { bodyFont, displayFont } from "@/lib/font";

import "./globals.css";

const siteUrl = "https://tavern.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Tavern — Good Food. Great Vibes. Together.",
    template: "%s — Tavern",
  },

  description:
    "Tavern is a warm, atmospheric restaurant serving thoughtful food, crafted drinks, and memorable experiences.",

  keywords: [
    "Tavern",
    "restaurant",
    "Islamabad restaurant",
    "fine dining",
    "food",
    "drinks",
    "dinner",
    "restaurant Islamabad",
  ],

  applicationName: "Tavern",

  authors: [
    {
      name: "Tavern",
    },
  ],

  creator: "Tavern",

  icons: {
    icon: "/icon.svg",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Tavern — Good Food. Great Vibes. Together.",
    description:
      "Fresh ingredients, bold flavors, crafted drinks, and a warm room made for good company.",
    type: "website",
    siteName: "Tavern",
    locale: "en_US",
    url: siteUrl,
    images: [
      {
        url: "/images/hero/tavern-hero.webp",
        width: 1536,
        height: 1024,
        alt: "Warm atmospheric interior of Tavern",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tavern — Good Food. Great Vibes. Together.",
    description:
      "Fresh ingredients, bold flavors, crafted drinks, and a warm room made for good company.",
    images: ["/images/hero/tavern-hero.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body>
        <Navbar />

        <PageTransition>
          {children}
        </PageTransition>

        <Footer />
      </body>
    </html>
  );
}