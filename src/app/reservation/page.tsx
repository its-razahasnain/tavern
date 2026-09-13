import type { Metadata } from "next";

import { ReservationPage } from "@/components/reservation/ReservationPage";

export const metadata: Metadata = {
  title: "Book a Table",
  description:
    "Reserve your table at Tavern. Choose your date, time, and party size for an evening of good food and great company.",
};

export default function Reservation() {
  return <ReservationPage />;
}