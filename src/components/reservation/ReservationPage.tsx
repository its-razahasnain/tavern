"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";

const timeSlots = [
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
];

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

export function ReservationPage() {
  const [submitted, setSubmitted] = useState(false);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");

  const minDate = useMemo(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-background">
        <section className="flex min-h-[75vh] items-center">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <div
                className="
                  mx-auto flex size-16
                  items-center justify-center
                  rounded-full
                  border border-gold
                  bg-gold
                  text-background
                "
              >
                <Check size={25} strokeWidth={1.75} />
              </div>

              <div className="eyebrow mt-8 justify-center">
                Reservation Request Received
              </div>

              <h1
                className="
                  mt-6
                  font-display
                  text-6xl leading-[0.88]
                  tracking-[-0.04em]
                  sm:text-7xl
                  lg:text-8xl
                "
              >
                Your table is
                <br />
                <span className="italic text-gold">
                  almost ready.
                </span>
              </h1>

              <p
                className="
                  mx-auto mt-7
                  max-w-lg
                  font-body text-sm
                  leading-7
                  text-foreground-muted
                "
              >
                Thank you for choosing Tavern. Your reservation
                request has been received. We&apos;ll be in touch
                shortly to confirm your table.
              </p>

              <div
                className="
                  mx-auto mt-10
                  grid max-w-md
                  grid-cols-3
                  border-y border-border
                "
              >
                <div className="px-3 py-5">
                  <CalendarDays
                    size={16}
                    strokeWidth={1.5}
                    className="mx-auto text-gold"
                  />

                  <span
                    className="
                      mt-3 block
                      font-body text-[9px]
                      uppercase
                      tracking-[0.12em]
                      text-foreground-subtle
                    "
                  >
                    Date
                  </span>

                  <span
                    className="
                      mt-1 block
                      font-display text-lg
                    "
                  >
                    {date || "—"}
                  </span>
                </div>

                <div className="border-x border-border px-3 py-5">
                  <Clock3
                    size={16}
                    strokeWidth={1.5}
                    className="mx-auto text-gold"
                  />

                  <span
                    className="
                      mt-3 block
                      font-body text-[9px]
                      uppercase
                      tracking-[0.12em]
                      text-foreground-subtle
                    "
                  >
                    Time
                  </span>

                  <span
                    className="
                      mt-1 block
                      font-display text-lg
                    "
                  >
                    {time || "—"}
                  </span>
                </div>

                <div className="px-3 py-5">
                  <Users
                    size={16}
                    strokeWidth={1.5}
                    className="mx-auto text-gold"
                  />

                  <span
                    className="
                      mt-3 block
                      font-body text-[9px]
                      uppercase
                      tracking-[0.12em]
                      text-foreground-subtle
                    "
                  >
                    Guests
                  </span>

                  <span
                    className="
                      mt-1 block
                      font-display text-lg
                    "
                  >
                    {guests}
                  </span>
                </div>
              </div>

              <Link
                href="/"
                className="
                  group mt-10 inline-flex
                  items-center gap-3
                  font-body text-[10px]
                  font-semibold uppercase
                  tracking-[0.12em]
                  text-gold
                "
              >
                <ArrowLeft
                  size={14}
                  strokeWidth={1.5}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-x-1
                  "
                />

                Back to Tavern
              </Link>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section
        className="
          relative overflow-hidden
          border-b border-border
          pt-36 pb-20
          sm:pt-40 sm:pb-24
          lg:pt-48 lg:pb-28
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            left-1/2 top-[-250px]
            size-[650px]
            -translate-x-1/2
            rounded-full
            bg-gold/[0.045]
            blur-[140px]
          "
        />

        <Container>
          <div className="relative">
            <div className="eyebrow">
              Reservations
            </div>

            <h1
              className="
                mt-7 max-w-5xl
                font-display
                text-6xl leading-[0.86]
                tracking-[-0.04em]
                sm:text-7xl
                md:text-8xl
                lg:text-[9rem]
              "
            >
              Save a seat.
              <br />
              <span className="italic text-gold">
                Make an evening.
              </span>
            </h1>

            <div className="mt-8 flex items-center gap-4">
              <GoldDivider width="medium" />

              <span
                className="
                  font-body text-[9px]
                  font-semibold uppercase
                  tracking-[0.18em]
                  text-foreground-subtle
                "
              >
                Islamabad · Pakistan
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Reservation form */}
      <section className="section-padding">
        <Container>
          <div
            className="
              grid grid-cols-1
              gap-12
              lg:grid-cols-[0.7fr_1.3fr]
              lg:gap-20
            "
          >
            {/* Intro */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="eyebrow">
                Your Table
              </div>

              <h2
                className="
                  mt-6
                  font-display
                  text-5xl leading-[0.9]
                  tracking-[-0.03em]
                  sm:text-6xl
                "
              >
                Good food
                <br />
                <span className="italic text-gold">
                  starts here.
                </span>
              </h2>

              <p
                className="
                  mt-6 max-w-sm
                  font-body text-sm
                  leading-7
                  text-foreground-muted
                "
              >
                Tell us when you&apos;d like to join us and
                we&apos;ll take care of the rest. For larger
                groups or private dining, get in touch with
                our team directly.
              </p>

              <div
                className="
                  mt-8
                  border-t border-border
                  pt-7
                "
              >
                <span
                  className="
                    font-body text-[9px]
                    font-semibold uppercase
                    tracking-[0.18em]
                    text-foreground-subtle
                  "
                >
                  Good to know
                </span>

                <ul
                  className="
                    mt-4 space-y-3
                    font-body text-xs
                    leading-6
                    text-foreground-muted
                  "
                >
                  <li>• Reservations are held for 15 minutes.</li>
                  <li>• Please arrive on time for your table.</li>
                  <li>• Larger parties can contact us directly.</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div
              className="
                rounded-[1rem]
                border border-border
                bg-surface
                p-6
                sm:p-8
                lg:p-10
              "
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-10"
              >
                {/* Date / time / guests */}
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <span
                      className="
                        font-body text-[9px]
                        font-semibold
                        tracking-[0.18em]
                        text-gold
                      "
                    >
                      01
                    </span>

                    <GoldDivider width="small" />

                    <span
                      className="
                        font-body text-[9px]
                        font-semibold uppercase
                        tracking-[0.18em]
                        text-foreground-subtle
                      "
                    >
                      Choose your evening
                    </span>
                  </div>

                  <div
                    className="
                      grid grid-cols-1
                      gap-6
                      sm:grid-cols-3
                    "
                  >
                    <div>
                      <label
                        htmlFor="date"
                        className="
                          mb-2 block
                          font-body text-[9px]
                          font-semibold uppercase
                          tracking-[0.16em]
                          text-foreground-subtle
                        "
                      >
                        Date
                      </label>

                      <input
                        id="date"
                        name="date"
                        type="date"
                        min={minDate}
                        required
                        value={date}
                        onChange={(event) =>
                          setDate(event.target.value)
                        }
                        className="
                          w-full
                          border-b border-border
                          bg-transparent
                          px-0 py-3
                          font-body text-sm
                          text-foreground
                          outline-none
                          transition-colors
                          focus:border-gold
                        "
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="time"
                        className="
                          mb-2 block
                          font-body text-[9px]
                          font-semibold uppercase
                          tracking-[0.16em]
                          text-foreground-subtle
                        "
                      >
                        Time
                      </label>

                      <select
                        id="time"
                        name="time"
                        required
                        value={time}
                        onChange={(event) =>
                          setTime(event.target.value)
                        }
                        className="
                          w-full
                          border-b border-border
                          bg-transparent
                          px-0 py-3
                          font-body text-sm
                          text-foreground
                          outline-none
                          transition-colors
                          focus:border-gold
                        "
                      >
                        <option
                          value=""
                          disabled
                          className="bg-surface"
                        >
                          Select time
                        </option>

                        {timeSlots.map((slot) => (
                          <option
                            key={slot}
                            value={slot}
                            className="bg-surface"
                          >
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="guests"
                        className="
                          mb-2 block
                          font-body text-[9px]
                          font-semibold uppercase
                          tracking-[0.16em]
                          text-foreground-subtle
                        "
                      >
                        Guests
                      </label>

                      <select
                        id="guests"
                        name="guests"
                        value={guests}
                        onChange={(event) =>
                          setGuests(event.target.value)
                        }
                        className="
                          w-full
                          border-b border-border
                          bg-transparent
                          px-0 py-3
                          font-body text-sm
                          text-foreground
                          outline-none
                          transition-colors
                          focus:border-gold
                        "
                      >
                        {guestOptions.map((number) => (
                          <option
                            key={number}
                            value={number}
                            className="bg-surface"
                          >
                            {number}{" "}
                            {number === 1
                              ? "Guest"
                              : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Personal details */}
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <span
                      className="
                        font-body text-[9px]
                        font-semibold
                        tracking-[0.18em]
                        text-gold
                      "
                    >
                      02
                    </span>

                    <GoldDivider width="small" />

                    <span
                      className="
                        font-body text-[9px]
                        font-semibold uppercase
                        tracking-[0.18em]
                        text-foreground-subtle
                      "
                    >
                      Your details
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div
                      className="
                        grid grid-cols-1
                        gap-6
                        sm:grid-cols-2
                      "
                    >
                      <div>
                        <label
                          htmlFor="name"
                          className="
                            mb-2 block
                            font-body text-[9px]
                            font-semibold uppercase
                            tracking-[0.16em]
                            text-foreground-subtle
                          "
                        >
                          Full Name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          className="
                            w-full
                            border-b border-border
                            bg-transparent
                            px-0 py-3
                            font-body text-sm
                            text-foreground
                            placeholder:text-foreground-subtle
                            outline-none
                            transition-colors
                            focus:border-gold
                          "
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="
                            mb-2 block
                            font-body text-[9px]
                            font-semibold uppercase
                            tracking-[0.16em]
                            text-foreground-subtle
                          "
                        >
                          Phone
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+92 300 0000000"
                          className="
                            w-full
                            border-b border-border
                            bg-transparent
                            px-0 py-3
                            font-body text-sm
                            text-foreground
                            placeholder:text-foreground-subtle
                            outline-none
                            transition-colors
                            focus:border-gold
                          "
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="
                          mb-2 block
                          font-body text-[9px]
                          font-semibold uppercase
                          tracking-[0.16em]
                          text-foreground-subtle
                        "
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="
                          w-full
                          border-b border-border
                          bg-transparent
                          px-0 py-3
                          font-body text-sm
                          text-foreground
                          placeholder:text-foreground-subtle
                          outline-none
                          transition-colors
                          focus:border-gold
                        "
                      />
                    </div>
                  </div>
                </div>

                {/* Requests */}
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <span
                      className="
                        font-body text-[9px]
                        font-semibold
                        tracking-[0.18em]
                        text-gold
                      "
                    >
                      03
                    </span>

                    <GoldDivider width="small" />

                    <span
                      className="
                        font-body text-[9px]
                        font-semibold uppercase
                        tracking-[0.18em]
                        text-foreground-subtle
                      "
                    >
                      Anything else?
                    </span>
                  </div>

                  <label
                    htmlFor="requests"
                    className="
                      mb-2 block
                      font-body text-[9px]
                      font-semibold uppercase
                      tracking-[0.16em]
                      text-foreground-subtle
                    "
                  >
                    Special Requests
                  </label>

                  <textarea
                    id="requests"
                    name="requests"
                    rows={5}
                    placeholder="Birthday, anniversary, dietary requirements..."
                    className="
                      w-full resize-none
                      border-b border-border
                      bg-transparent
                      px-0 py-3
                      font-body text-sm
                      leading-6
                      text-foreground
                      placeholder:text-foreground-subtle
                      outline-none
                      transition-colors
                      focus:border-gold
                    "
                  />
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="
                      group inline-flex
                      w-full items-center
                      justify-center gap-3
                      rounded-full
                      border border-gold
                      bg-gold
                      px-6 py-4
                      font-body text-[10px]
                      font-semibold uppercase
                      tracking-[0.1em]
                      text-background
                      transition-all duration-300
                      hover:border-gold-light
                      hover:bg-gold-light
                    "
                  >
                    <span>Request Reservation</span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.75}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </button>

                  <p
                    className="
                      mt-4 text-center
                      font-body text-[9px]
                      leading-5
                      text-foreground-subtle
                    "
                  >
                    This is a reservation request. A member
                    of our team will confirm availability.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom note */}
      <section className="border-t border-border">
        <Container>
          <div
            className="
              flex flex-col gap-4
              py-8
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <span
              className="
                font-body text-[9px]
                font-semibold uppercase
                tracking-[0.18em]
                text-foreground-subtle
              "
            >
              Need a larger table?
            </span>

            <Link
              href="/contact"
              className="
                group inline-flex
                items-center gap-2
                font-body text-[9px]
                font-semibold uppercase
                tracking-[0.16em]
                text-gold
              "
            >
              Contact our team

              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}