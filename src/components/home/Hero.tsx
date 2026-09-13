"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-background
        px-5
        py-5
        sm:px-8
        sm:py-8
        lg:px-10
        lg:py-10
      "
    >
      {/* HERO FRAME */}
      <div
        className="
          relative
          min-h-[calc(100svh-40px)]
          overflow-hidden
          rounded-[2rem]
          sm:min-h-[calc(100svh-64px)]
          sm:rounded-[2.5rem]
          lg:min-h-[calc(100svh-80px)]
          lg:rounded-[2.75rem]
        "
      >
        {/* Background image */}
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.8,
            ease,
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero/tavern-hero.webp"
            alt="Warm and atmospheric interior of Tavern"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="
              object-cover
              object-center
              lg:object-[center_48%]
            "
          />
        </motion.div>

        {/* Overall image darkening */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-black/10
          "
        />

        {/* Main left-to-right cinematic gradient */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-[linear-gradient(90deg,rgba(7,6,5,0.88)_0%,rgba(7,6,5,0.68)_25%,rgba(7,6,5,0.32)_48%,rgba(7,6,5,0.08)_75%,rgba(7,6,5,0.12)_100%)]
          "
        />

        {/* Mobile gradient */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-[linear-gradient(180deg,rgba(7,6,5,0.42)_0%,rgba(7,6,5,0.18)_35%,rgba(7,6,5,0.6)_100%)]
            lg:hidden
          "
        />

        {/* Bottom fade */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-x-0
            bottom-0
            h-64
            bg-[linear-gradient(to_top,rgba(5,5,4,0.72),transparent)]
          "
        />

        {/* Top fade */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-x-0
            top-0
            h-44
            bg-[linear-gradient(to_bottom,rgba(5,5,4,0.28),transparent)]
          "
        />

        {/* HERO CONTENT */}
        <Container
          className="
            relative
            z-10
            flex
            min-h-[calc(100svh-40px)]
            items-center
            sm:min-h-[calc(100svh-64px)]
            lg:min-h-[calc(100svh-80px)]
          "
        >
          <div
            className="
              w-full
              max-w-[720px]
              pb-12
              pt-28
              sm:pb-16
              sm:pt-32
              lg:pb-16
              lg:pt-36
            "
          >
            {/* EYEBROW */}
            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease,
              }}
              className="
                mb-6
                flex
                items-center
                gap-3
                font-body
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-gold
                sm:mb-7
                sm:text-[10px]
              "
            >
              <span className="h-px w-7 bg-gold sm:w-8" />

              <span>Good Food</span>

              <span className="text-gold/70">
                •
              </span>

              <span>Great Vibes</span>

              <span className="text-gold/70">
                •
              </span>

              <span>Together</span>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease,
              }}
              className="
                font-display
                text-[clamp(3.35rem,6.8vw,6.9rem)]
                font-medium
                leading-[0.84]
                tracking-[-0.045em]
                text-foreground
              "
            >
              More Than a Meal,
              <br />
              It&apos;s a{" "}
              <span className="italic text-gold">
                Tavern.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.6,
                ease,
              }}
              className="
                mt-7
                max-w-[510px]
                font-body
                text-xs
                leading-6
                text-foreground/85
                sm:mt-8
                sm:text-sm
                sm:leading-7
              "
            >
              Fresh ingredients, bold flavors, and
              a welcoming atmosphere — where every
              visit feels like home.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.75,
                ease,
              }}
              className="mt-8 sm:mt-9"
            >
              <Link
                href="/menu"
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  gap-4
                  rounded-full
                  border
                  border-gold
                  px-7
                  font-body
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-foreground
                  transition-all
                  duration-300
                  hover:bg-gold
                  hover:text-background
                "
              >
                <span>View Menu</span>

                <ArrowRight
                  size={15}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>
          </div>
        </Container>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.15,
          }}
          className="
            absolute
            bottom-8
            right-8
            z-20
            hidden
            lg:block
          "
        >
          <Link
            href="#experience"
            aria-label="Scroll to explore"
            className="
              group
              flex
              flex-col
              items-center
              gap-3
            "
          >
            <span
              className="
                font-body
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-foreground/60
                [writing-mode:vertical-rl]
              "
            >
              Scroll
            </span>

            <span
              className="
                flex
                size-9
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-foreground/70
                transition-all
                duration-300
                group-hover:border-gold
                group-hover:text-gold
              "
            >
              <ArrowDown
                size={14}
                strokeWidth={1.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-y-1
                "
              />
            </span>
          </Link>
        </motion.div>

        {/* CENTER GOLD LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.05,
            ease,
          }}
          aria-hidden="true"
          className="
            absolute
            bottom-7
            left-1/2
            z-20
            hidden
            h-px
            w-10
            -translate-x-1/2
            bg-gold
            sm:block
          "
        />
      </div>
    </section>
  );
}