"use client";

import { FormEvent } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { siteConfig } from "@/data/site";

const hours = [
  ["Monday", siteConfig.hours.monday],
  ["Tuesday", siteConfig.hours.tuesday],
  ["Wednesday", siteConfig.hours.wednesday],
  ["Thursday", siteConfig.hours.thursday],
  ["Friday", siteConfig.hours.friday],
  ["Saturday", siteConfig.hours.saturday],
  ["Sunday", siteConfig.hours.sunday],
] as const;

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

export function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
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
            right-[-10%] top-[-25%]
            size-[650px]
            rounded-full
            bg-gold/[0.045]
            blur-[140px]
          "
        />

        <Container>
          <div className="relative max-w-6xl">
            <div className="eyebrow">
              Come Say Hello
            </div>

            <div
              className="
                mt-7
                grid grid-cols-1
                gap-8
                lg:grid-cols-[1.35fr_0.65fr]
                lg:items-end
              "
            >
              <h1
                className="
                  font-display
                  text-6xl leading-[0.86]
                  tracking-[-0.04em]
                  sm:text-7xl
                  md:text-8xl
                  lg:text-[9rem]
                "
              >
                Find us.
                <br />
                <span className="italic text-gold">
                  Stay awhile.
                </span>
              </h1>

              <div className="lg:pb-2">
                <p
                  className="
                    max-w-sm
                    font-body text-sm
                    leading-7
                    text-foreground-muted
                  "
                >
                  Whether you are joining us for dinner,
                  drinks, or just a quick hello, we would love
                  to hear from you.
                </p>

                <div className="mt-7 flex items-center gap-4">
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
            </div>
          </div>
        </Container>
      </section>

      {/* Contact details + form */}
      <section className="section-padding">
        <Container>
          <div
            className="
              grid grid-cols-1
              gap-14
              lg:grid-cols-[0.75fr_1.25fr]
              lg:gap-24
            "
          >
            {/* Details */}
            <div>
              <div className="eyebrow">
                Get In Touch
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
                We&apos;d love to
                <br />
                <span className="italic text-gold">
                  hear from you.
                </span>
              </h2>

              <div className="mt-10 space-y-7">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="
                    group flex items-start gap-4
                    transition-colors duration-300
                  "
                >
                  <span
                    className="
                      flex size-10 shrink-0
                      items-center justify-center
                      rounded-full
                      border border-border
                      text-gold
                      transition-all duration-300
                      group-hover:border-gold
                      group-hover:bg-gold
                      group-hover:text-background
                    "
                  >
                    <Phone size={15} strokeWidth={1.5} />
                  </span>

                  <span>
                    <span
                      className="
                        block font-body text-[9px]
                        font-semibold uppercase
                        tracking-[0.18em]
                        text-foreground-subtle
                      "
                    >
                      Call Us
                    </span>

                    <span
                      className="
                        mt-1 block
                        font-display text-2xl
                        text-foreground
                        transition-colors duration-300
                        group-hover:text-gold
                      "
                    >
                      {siteConfig.contact.phone}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="
                    group flex items-start gap-4
                  "
                >
                  <span
                    className="
                      flex size-10 shrink-0
                      items-center justify-center
                      rounded-full
                      border border-border
                      text-gold
                      transition-all duration-300
                      group-hover:border-gold
                      group-hover:bg-gold
                      group-hover:text-background
                    "
                  >
                    <Mail size={15} strokeWidth={1.5} />
                  </span>

                  <span>
                    <span
                      className="
                        block font-body text-[9px]
                        font-semibold uppercase
                        tracking-[0.18em]
                        text-foreground-subtle
                      "
                    >
                      Email
                    </span>

                    <span
                      className="
                        mt-1 block
                        font-display text-2xl
                        text-foreground
                        transition-colors duration-300
                        group-hover:text-gold
                      "
                    >
                      {siteConfig.contact.email}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <span
                    className="
                      flex size-10 shrink-0
                      items-center justify-center
                      rounded-full
                      border border-border
                      text-gold
                    "
                  >
                    <MapPin size={15} strokeWidth={1.5} />
                  </span>

                  <div>
                    <span
                      className="
                        block font-body text-[9px]
                        font-semibold uppercase
                        tracking-[0.18em]
                        text-foreground-subtle
                      "
                    >
                      Find Us
                    </span>

                    <p
                      className="
                        mt-1
                        font-display text-2xl
                        leading-tight
                        text-foreground
                      "
                    >
                      {siteConfig.location.address}
                      <br />
                      {siteConfig.location.city},{" "}
                      {siteConfig.location.country}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-border pt-8">
                <span
                  className="
                    font-body text-[9px]
                    font-semibold uppercase
                    tracking-[0.18em]
                    text-foreground-subtle
                  "
                >
                  Follow Along
                </span>

                <div className="mt-4 flex gap-3">
                  <a
                    href={siteConfig.social.instagram}
                    aria-label="Instagram"
                    className="
                      flex size-10
                      items-center justify-center
                      rounded-full
                      border border-border
                      text-foreground-muted
                      transition-all duration-300
                      hover:border-gold
                      hover:bg-gold
                      hover:text-background
                    "
                  >
                    IG
                  </a>

                  <a
                    href={siteConfig.social.facebook}
                    aria-label="Facebook"
                    className="
                      flex size-10
                      items-center justify-center
                      rounded-full
                      border border-border
                      font-body text-[10px]
                      font-semibold
                      text-foreground-muted
                      transition-all duration-300
                      hover:border-gold
                      hover:bg-gold
                      hover:text-background
                    "
                  >
                    FB
                  </a>
                </div>
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
              <div className="mb-8">
                <span
                  className="
                    font-body text-[9px]
                    font-semibold uppercase
                    tracking-[0.18em]
                    text-gold
                  "
                >
                  Send A Message
                </span>

                <h2
                  className="
                    mt-3
                    font-display text-4xl
                    leading-none
                    sm:text-5xl
                  "
                >
                  What&apos;s on your mind?
                </h2>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
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
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="
                        w-full
                        border-b border-border
                        bg-transparent
                        px-0 py-3
                        font-body text-sm
                        text-foreground
                        placeholder:text-foreground-subtle
                        outline-none
                        transition-colors duration-300
                        focus:border-gold
                      "
                    />
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
                        transition-colors duration-300
                        focus:border-gold
                      "
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="
                      mb-2 block
                      font-body text-[9px]
                      font-semibold uppercase
                      tracking-[0.16em]
                      text-foreground-subtle
                    "
                  >
                    Subject
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    defaultValue=""
                    className="
                      w-full
                      border-b border-border
                      bg-transparent
                      px-0 py-3
                      font-body text-sm
                      text-foreground
                      outline-none
                      transition-colors duration-300
                      focus:border-gold
                    "
                  >
                    <option
                      value=""
                      disabled
                      className="bg-surface"
                    >
                      Choose a subject
                    </option>
                    <option
                      value="general"
                      className="bg-surface"
                    >
                      General Enquiry
                    </option>
                    <option
                      value="private-dining"
                      className="bg-surface"
                    >
                      Private Dining
                    </option>
                    <option
                      value="events"
                      className="bg-surface"
                    >
                      Events
                    </option>
                    <option
                      value="feedback"
                      className="bg-surface"
                    >
                      Feedback
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="
                      mb-2 block
                      font-body text-[9px]
                      font-semibold uppercase
                      tracking-[0.16em]
                      text-foreground-subtle
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us a little more..."
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
                      transition-colors duration-300
                      focus:border-gold
                    "
                  />
                </div>

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
                  <span>Send Message</span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.75}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Hours */}
      <section
        className="
          border-y border-border
          bg-background-soft
        "
      >
        <Container>
          <div className="section-padding-sm">
            <div
              className="
                grid grid-cols-1
                gap-10
                lg:grid-cols-[0.7fr_1.3fr]
                lg:gap-20
              "
            >
              <div>
                <div className="eyebrow">
                  Opening Hours
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
                  Come by
                  <br />
                  <span className="italic text-gold">
                    anytime.
                  </span>
                </h2>

                <div className="mt-6 flex items-center gap-3">
                  <Clock3
                    size={15}
                    strokeWidth={1.5}
                    className="text-gold"
                  />

                  <span
                    className="
                      font-body text-[9px]
                      font-semibold uppercase
                      tracking-[0.16em]
                      text-foreground-subtle
                    "
                  >
                    Kitchen closes 30 minutes before closing
                  </span>
                </div>
              </div>

              <div className="border-t border-border">
                {hours.map(([day, time]) => (
                  <div
                    key={day}
                    className="
                      flex items-center
                      justify-between
                      gap-6
                      border-b border-border
                      py-4
                    "
                  >
                    <span
                      className="
                        font-display text-2xl
                        text-foreground
                        sm:text-3xl
                      "
                    >
                      {day}
                    </span>

                    <span
                      className="
                        text-right
                        font-body text-[10px]
                        uppercase
                        tracking-[0.08em]
                        text-foreground-muted
                      "
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Reservation CTA */}
      <section className="section-padding-sm">
        <Container>
          <div
            className="
              relative overflow-hidden
              border border-border
              px-6 py-14
              text-center
              sm:px-10 sm:py-16
              lg:px-16 lg:py-20
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                left-1/2 top-1/2
                size-[450px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-gold/[0.04]
                blur-[110px]
              "
            />

            <div className="relative">
              <div className="eyebrow justify-center">
                Your Table Awaits
              </div>

              <h2
                className="
                  mt-6
                  font-display
                  text-5xl leading-[0.9]
                  tracking-[-0.03em]
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                Rather talk over
                <br />
                <span className="italic text-gold">
                  dinner?
                </span>
              </h2>

              <p
                className="
                  mx-auto mt-6
                  max-w-md
                  font-body text-sm
                  leading-7
                  text-foreground-muted
                "
              >
                Skip the form and come see us.
                Reserve a table and let&apos;s make an
                evening of it.
              </p>

              <Link
                href="/reservation"
                className="
                  group mt-8 inline-flex
                  items-center gap-3
                  rounded-full
                  border border-gold
                  bg-gold
                  px-6 py-3.5
                  font-body text-[10px]
                  font-semibold uppercase
                  tracking-[0.1em]
                  text-background
                  transition-all duration-300
                  hover:border-gold-light
                  hover:bg-gold-light
                "
              >
                <span>Book a Table</span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.75}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}