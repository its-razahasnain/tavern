import type { Metadata } from "next";

import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tavern. Find our location, opening hours, contact details, and send us a message.",
};

export default function Contact() {
  return <ContactPage />;
}