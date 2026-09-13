"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";

const ease = [0.22, 1, 0.36, 1] as const;

export function ReservationCTA() {
  return (
    <section
      id="reservation"
      className="
        relative overflow-hidden
        bg-background
        px-5 py-5
        sm:px-8 sm:py-8
        lg:px-10 lg:py-10
      "
    >
      <div
        className="
          relative overflow-hidden
          border border-border
          bg-surface
          py-24
          sm:py-28
          lg:py-36
        "
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            left-1/2 top-1/2
            size-[500px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-gold/[0.045]
            blur-3xl
          "
        />

        {/* Decorative rings */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            left-1/2 top-1/2
            size-[320px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            border border-gold/[0.08]
            sm:size-[420px]
            lg:size-[520px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            left-1/2 top-1/2
            size-[220px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            border border-gold/[0.06]
            sm:size-[300px]
            lg:size-[380px]
          "
        />

        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease }}
              className="eyebrow mb-7 justify-center"
            >
              Your Table Awaits
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="
                font-display
                text-5xl leading-[0.86]
                tracking-[-0.04em]
                sm:text-6xl
                md:text-7xl
                lg:text-[6.5rem]
              "
            >
              Make an evening
              <br />
              <span className="italic text-gold">of it.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="
                mx-auto mt-7 max-w-lg
                text-sm leading-7
                text-foreground-muted
              "
            >
              Good food, good drinks, and a table waiting for you. Gather your
              people and make tonight one to remember.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.32, ease }}
              className="mt-9 flex justify-center"
            >
              <Link
                href="/reservation"
                className="
                  group inline-flex min-h-13
                  items-center gap-4
                  rounded-full
                  border border-gold
                  bg-gold
                  px-7
                  font-body text-[10px]
                  font-semibold uppercase
                  tracking-[0.14em]
                  text-background
                  transition-all duration-300
                  hover:border-gold-light
                  hover:bg-gold-light
                "
              >
                <span>Book a Table</span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>
            </motion.div>

            {/* Bottom detail */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="
                mt-12 flex items-center
                justify-center gap-4
              "
            >
              <GoldDivider width="small" />

              <span
                className="
                  font-body text-[8px]
                  font-semibold uppercase
                  tracking-[0.2em]
                  text-foreground-subtle
                "
              >
                Good food · Great vibes · Together
              </span>

              <GoldDivider width="small" />
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
