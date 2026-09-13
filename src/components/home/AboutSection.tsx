"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { aboutContent } from "@/data/about";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden bg-background
        py-24 sm:py-28 lg:py-36
      "
    >
      <Container>
        <div
          className="
            grid grid-cols-1 gap-14
            lg:grid-cols-[0.9fr_1.1fr] lg:items-center
            lg:gap-20 xl:gap-28
          "
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
            className="relative"
          >
            <div
              className="
                relative aspect-[4/5] overflow-hidden
                bg-surface
                sm:aspect-[5/6]
              "
            >
              <Image
                src={aboutContent.image}
                alt="Warm interior atmosphere of Tavern"
                fill
                sizes="
                  (max-width: 1024px) 100vw,
                  45vw
                "
                className="
                  object-cover
                  transition-transform duration-1000
                  hover:scale-[1.025]
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/45 via-transparent to-black/10
                "
              />
            </div>

            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease }}
              className="
                absolute -bottom-5 right-5
                flex items-center gap-4
                border border-border
                bg-surface/95 px-5 py-4
                backdrop-blur-md
                sm:-right-5
              "
            >
              <GoldDivider width="small" />

              <span
                className="
                  font-body text-[9px] font-semibold
                  uppercase tracking-[0.18em]
                  text-foreground-muted
                "
              >
                Since 2018
              </span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="lg:py-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease }}
              className="eyebrow mb-6"
            >
              {aboutContent.eyebrow}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.85, delay: 0.08, ease }}
              className="
                max-w-3xl font-display
                text-5xl leading-[0.88]
                tracking-[-0.035em]
                sm:text-6xl
                lg:text-7xl
                xl:text-[5.5rem]
              "
            >
              {aboutContent.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="
                mt-8 max-w-xl
                font-body text-sm leading-7
                text-foreground-muted
              "
            >
              {aboutContent.description}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.28, ease }}
              className="
                mt-4 max-w-xl
                font-body text-sm leading-7
                text-foreground-muted
              "
            >
              {aboutContent.secondaryDescription}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, delay: 0.38, ease }}
              className="
                mt-10 grid max-w-xl
                grid-cols-3
                border-y border-border
              "
            >
              {aboutContent.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="
                    relative py-5 pr-4
                    first:pl-0
                    sm:py-6
                    sm:pr-6
                  "
                >
                  {index !== 0 && (
                    <span
                      aria-hidden="true"
                      className="
                        absolute left-0 top-1/2
                        h-8 w-px -translate-y-1/2
                        bg-border
                      "
                    />
                  )}

                  <div
                    className="
                      font-display text-3xl
                      leading-none text-foreground
                      sm:text-4xl
                    "
                  >
                    {stat.value}
                  </div>

                  <div
                    className="
                      mt-2 font-body text-[8px]
                      font-semibold uppercase
                      tracking-[0.15em]
                      text-foreground-subtle
                      sm:text-[9px]
                    "
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.48, ease }}
              className="mt-9"
            >
              <Link
                href="/about"
                className="
                  group inline-flex items-center gap-3
                  font-body text-[10px] font-semibold
                  uppercase tracking-[0.16em]
                  text-foreground
                  transition-colors duration-300
                  hover:text-gold
                "
              >
                <span>Our Story</span>

                <span
                  className="
                    flex size-9 items-center justify-center
                    rounded-full border border-border
                    transition-all duration-300
                    group-hover:border-gold
                    group-hover:bg-gold
                    group-hover:text-background
                  "
                >
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}