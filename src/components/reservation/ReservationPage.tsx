"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const timeSlots = [
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
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

export function ReservationPage() {
  const today = useMemo(() => {
    const date = new Date();
    return date.toISOString().split("T")[0];
  }, []);

  const [date, setDate] = useState(today);
  const [time, setTime] = useState("7:30 PM");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [requests, setRequests] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main>
        <section className="min-h-[75vh] pt-32 pb-24 sm:pt-40">
          <Container>
            <Reveal>
              <div className="mx-auto flex max-w-3xl flex-col items-center rounded-xl border border-border bg-surface px-6 py-20 text-center sm:px-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold text-gold">
                  <Check size={24} strokeWidth={1.5} />
                </div>

                <div className="eyebrow mt-8">
                  Reservation Request
                </div>

                <h1 className="mt-6 font-display text-5xl leading-[0.92] tracking-[-0.03em] sm:text-6xl">
                  Your table is
                  <br />
                  <span className="italic text-gold">
                    waiting.
                  </span>
                </h1>

                <p className="mt-6 max-w-lg text-sm leading-7 text-foreground-muted">
                  Thanks, {name || "there"}. We have received your
                  reservation request and will confirm the details with you.
                </p>

                <div className="mt-9 grid w-full max-w-md gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
                  <div className="bg-background p-5">
                    <CalendarDays
                      size={16}
                      className="mx-auto text-gold"
                      aria-hidden="true"
                    />
                    <div className="mt-3 font-body text-[9px] uppercase tracking-[0.14em] text-foreground-subtle">
                      Date
                    </div>
                    <div className="mt-1 text-xs">
                      {date}
                    </div>
                  </div>

                  <div className="bg-background p-5">
                    <Clock3
                      size={16}
                      className="mx-auto text-gold"
                      aria-hidden="true"
                    />
                    <div className="mt-3 font-body text-[9px] uppercase tracking-[0.14em] text-foreground-subtle">
                      Time
                    </div>
                    <div className="mt-1 text-xs">
                      {time}
                    </div>
                  </div>

                  <div className="bg-background p-5">
                    <Users
                      size={16}
                      className="mx-auto text-gold"
                      aria-hidden="true"
                    />
                    <div className="mt-3 font-body text-[9px] uppercase tracking-[0.14em] text-foreground-subtle">
                      Guests
                    </div>
                    <div className="mt-1 text-xs">
                      {guests}
                    </div>
                  </div>
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button href="/">
                    Back Home
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    showArrow={false}
                    onClick={() => setSubmitted(false)}
                  >
                    Make Another
                  </Button>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-border pt-32 pb-24 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36"
      >
        <Container>
          <Reveal>
            <div className="max-w-5xl">
              <div className="eyebrow mb-7">
                Reservations
              </div>

              <h1 className="font-display text-6xl leading-[0.88] tracking-[-0.035em] sm:text-7xl md:text-8xl lg:text-[9rem]">
                Your table
                <br />
                <span className="italic text-gold">
                  awaits.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-7 text-foreground-muted sm:text-base">
                Choose your evening, tell us who is coming, and we will
                take care of the rest.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Form */}
      <section className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-32 lg:self-start">
                <div className="eyebrow mb-6">
                  Book Your Table
                </div>

                <h2 className="font-display text-5xl leading-[0.92] tracking-[-0.025em] sm:text-6xl">
                  Make an
                  <br />
                  <span className="italic text-gold">
                    evening of it.
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-foreground-muted">
                  We recommend booking ahead, especially for Friday
                  and Saturday evenings.
                </p>

                <div className="mt-8 border-t border-border pt-7">
                  <div className="flex gap-3">
                    <Clock3
                      size={17}
                      className="mt-0.5 shrink-0 text-gold"
                      aria-hidden="true"
                    />

                    <p className="text-xs leading-6 text-foreground-muted">
                      Reservations are currently a frontend experience.
                      Online confirmation will be connected to the
                      reservation system later.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-border bg-surface p-6 sm:p-9 lg:p-10"
              >
                {/* Date / Guests */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block font-body text-[9px] font-semibold uppercase tracking-[0.15em] text-foreground-subtle">
                      Date
                    </span>

                    <div className="relative">
                      <CalendarDays
                        size={16}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold"
                        aria-hidden="true"
                      />

                      <input
                        required
                        type="date"
                        min={today}
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                        className="w-full rounded-lg border border-border bg-background py-3 pl-11 pr-4 text-sm outline-none transition-colors duration-300 focus:border-gold"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-2 block font-body text-[9px] font-semibold uppercase tracking-[0.15em] text-foreground-subtle">
                      Guests
                    </span>

                    <div className="relative">
                      <Users
                        size={16}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold"
                        aria-hidden="true"
                      />

                      <select
                        value={guests}
                        onChange={(event) => setGuests(event.target.value)}
                        className="w-full appearance-none rounded-lg border border-border bg-background py-3 pl-11 pr-4 text-sm outline-none transition-colors duration-300 focus:border-gold"
                      >
                        {Array.from({ length: 10 }, (_, index) => (
                          <option
                            key={index + 1}
                            value={String(index + 1)}
                          >
                            {index + 1}{" "}
                            {index === 0 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>
                </div>

                {/* Time */}
                <div className="mt-7">
                  <span className="mb-3 block font-body text-[9px] font-semibold uppercase tracking-[0.15em] text-foreground-subtle">
                    Choose a time
                  </span>

                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTime(slot)}
                        className={`rounded-lg border px-3 py-3 font-body text-[10px] font-semibold transition-all duration-300 ${
                          time === slot
                            ? "border-gold bg-gold text-background"
                            : "border-border bg-background text-foreground-muted hover:border-gold hover:text-foreground"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="mt-8 border-t border-border pt-8">
                  <div className="mb-6">
                    <div className="font-display text-3xl">
                      Your details
                    </div>

                    <p className="mt-2 text-xs text-foreground-muted">
                      So we know who to expect.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block font-body text-[9px] font-semibold uppercase tracking-[0.15em] text-foreground-subtle">
                        Name
                      </span>

                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Your name"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-foreground-subtle focus:border-gold"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block font-body text-[9px] font-semibold uppercase tracking-[0.15em] text-foreground-subtle">
                        Phone
                      </span>

                      <input
                        required
                        type="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder="+92 300 0000000"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-foreground-subtle focus:border-gold"
                      />
                    </label>
                  </div>

                  <label className="mt-5 block">
                    <span className="mb-2 block font-body text-[9px] font-semibold uppercase tracking-[0.15em] text-foreground-subtle">
                      Email
                    </span>

                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-foreground-subtle focus:border-gold"
                    />
                  </label>

                  <label className="mt-5 block">
                    <span className="mb-2 block font-body text-[9px] font-semibold uppercase tracking-[0.15em] text-foreground-subtle">
                      Special requests
                    </span>

                    <textarea
                      rows={5}
                      value={requests}
                      onChange={(event) => setRequests(event.target.value)}
                      placeholder="Birthday, anniversary, dietary notes..."
                      className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-foreground-subtle focus:border-gold"
                    />
                  </label>
                </div>

                <div className="mt-8">
                  <Button type="submit">
                    Request Reservation
                  </Button>
                </div>

                <p className="mt-4 text-[10px] leading-5 text-foreground-subtle">
                  By submitting this form, you are requesting a table.
                  Your reservation will be confirmed separately.
                </p>
              </form>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <div className="border-t border-border pt-10 text-center">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-foreground-subtle transition-colors duration-300 hover:text-gold"
              >
                Questions about your booking?
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}