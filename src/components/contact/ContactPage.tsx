"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
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
                Get In Touch
              </div>

              <h1 className="font-display text-6xl leading-[0.88] tracking-[-0.035em] sm:text-7xl md:text-8xl lg:text-[9rem]">
                Come say
                <br />
                <span className="italic text-gold">
                  hello.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-7 text-foreground-muted sm:text-base">
                Questions, celebrations, private events, or just
                looking for a good table? We would love to hear from you.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Contact content */}
      <section className="section-padding">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Details */}
            <Reveal>
              <div>
                <div className="eyebrow mb-7">
                  Find Tavern
                </div>

                <div className="space-y-7">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="group flex gap-4"
                  >
                    <Phone
                      size={18}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-gold"
                      aria-hidden="true"
                    />

                    <div>
                      <div className="font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-foreground-subtle">
                        Phone
                      </div>

                      <div className="mt-1 font-display text-xl transition-colors duration-300 group-hover:text-gold">
                        {siteConfig.contact.phone}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="group flex gap-4"
                  >
                    <Mail
                      size={18}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-gold"
                      aria-hidden="true"
                    />

                    <div>
                      <div className="font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-foreground-subtle">
                        Email
                      </div>

                      <div className="mt-1 font-display text-xl transition-colors duration-300 group-hover:text-gold">
                        {siteConfig.contact.email}
                      </div>
                    </div>
                  </a>

                  <div className="flex gap-4">
                    <MapPin
                      size={18}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-gold"
                      aria-hidden="true"
                    />

                    <div>
                      <div className="font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-foreground-subtle">
                        Address
                      </div>

                      <div className="mt-1 font-display text-xl">
                        {siteConfig.location.address}
                      </div>

                      <div className="mt-1 text-sm text-foreground-muted">
                        {siteConfig.location.city},{" "}
                        {siteConfig.location.country}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-border pt-8">
                  <div className="flex items-center gap-3">
                    <a
                      href={siteConfig.social.instagram}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border font-body text-[9px] font-semibold tracking-[0.08em] transition-all duration-300 hover:border-gold hover:text-gold"
                      aria-label="Instagram"
                    >
                      IG
                    </a>

                    <a
                      href={siteConfig.social.facebook}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border font-body text-[9px] font-semibold tracking-[0.08em] transition-all duration-300 hover:border-gold hover:text-gold"
                      aria-label="Facebook"
                    >
                      FB
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.1}>
              <div className="rounded-xl border border-border bg-surface p-6 sm:p-9 lg:p-10">
                {submitted ? (
                  <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
                      <ArrowUpRight size={20} aria-hidden="true" />
                    </div>

                    <h2 className="font-display text-4xl">
                      Message received.
                    </h2>

                    <p className="mt-4 max-w-md text-sm leading-7 text-foreground-muted">
                      Thanks for reaching out. We will get back to you
                      as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <div className="eyebrow mb-5">
                        Send A Message
                      </div>

                      <h2 className="font-display text-4xl tracking-[-0.02em] sm:text-5xl">
                        What can we help with?
                      </h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block font-body text-[9px] font-semibold uppercase tracking-[0.15em] text-foreground-subtle">
                          Name
                        </span>

                        <input
                          required
                          name="name"
                          type="text"
                          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-foreground-subtle focus:border-gold"
                          placeholder="Your name"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block font-body text-[9px] font-semibold uppercase tracking-[0.15em] text-foreground-subtle">
                          Email
                        </span>

                        <input
                          required
                          name="email"
                          type="email"
                          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-foreground-subtle focus:border-gold"
                          placeholder="you@example.com"
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className="mb-2 block font-body text-[9px] font-semibold uppercase tracking-[0.15em] text-foreground-subtle">
                        Subject
                      </span>

                      <input
                        required
                        name="subject"
                        type="text"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-foreground-subtle focus:border-gold"
                        placeholder="How can we help?"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block font-body text-[9px] font-semibold uppercase tracking-[0.15em] text-foreground-subtle">
                        Message
                      </span>

                      <textarea
                        required
                        name="message"
                        rows={6}
                        className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-foreground-subtle focus:border-gold"
                        placeholder="Tell us a little more..."
                      />
                    </label>

                    <Button type="submit">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Hours */}
      <section className="section-padding-sm border-y border-border bg-surface">
        <Container>
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <div className="eyebrow mb-6">
                  Opening Hours
                </div>

                <h2 className="font-display text-5xl leading-[0.92] sm:text-6xl">
                  See you
                  <br />
                  <span className="italic text-gold">
                    soon.
                  </span>
                </h2>
              </div>

              <div className="divide-y divide-border border-y border-border">
                {Object.entries(siteConfig.hours).map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex items-center justify-between py-4"
                  >
                    <span className="font-body text-xs font-semibold capitalize tracking-[0.08em] text-foreground-muted">
                      {day}
                    </span>

                    <span className="font-body text-xs text-foreground">
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Reservation CTA */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 border-b border-border pb-12 sm:flex-row sm:items-end">
              <div>
                <div className="eyebrow mb-5">
                  Prefer A Table?
                </div>

                <h2 className="font-display text-4xl sm:text-5xl">
                  Make a reservation.
                </h2>
              </div>

              <Button href="/reservation">
                Book a Table
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <div className="pb-12">
        <Container>
          <div className="flex justify-center">
            <a
              href="#top"
              className="font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-foreground-subtle transition-colors duration-300 hover:text-gold"
            >
              Back to top
            </a>
          </div>
        </Container>
      </div>
    </main>
  );
}