import type { Metadata } from "next";

import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tavern for reservations, private events, celebrations, questions, and general enquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Tavern",
    description:
      "Questions, celebrations, private events, or just looking for a good table? Get in touch with Tavern.",
    url: "/contact",
  },
};

export default function Contact() {
  return <ContactPage />;
}