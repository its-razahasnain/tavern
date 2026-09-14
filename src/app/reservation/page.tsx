import type { Metadata } from "next";

import { ReservationPage } from "@/components/reservation/ReservationPage";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve your table at Tavern and make an evening of good food, crafted drinks, and good company.",
  alternates: {
    canonical: "/reservation",
  },
  openGraph: {
    title: "Reserve a Table at Tavern",
    description:
      "Choose your date, time, and party size and request a table at Tavern.",
    url: "/reservation",
  },
};

export default function Reservation() {
  return <ReservationPage />;
}