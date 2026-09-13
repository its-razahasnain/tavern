"use client";

import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { featureItems } from "@/data/features";

const ease = [0.22, 1, 0.36, 1] as const;

export function FeatureStrip() {
  return (
    <section
      id="experience"
      className="
        relative
        border-b
        border-border
        bg-background
        py-14
        sm:py-16
        lg:py-20
      "
    >
      <Container>
        <div
          className="
            grid
            grid-cols-1
            divide-y
            divide-border
            md:grid-cols-3
            md:divide-x
            md:divide-y-0
          "
        >
          {featureItems.map((feature, index) => (
            <motion.article
              key={feature.number}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease,
              }}
              className="
                group
                relative
                px-0
                py-9
                first:pt-0
                last:pb-0
                md:px-8
                md:py-2
                md:first:pl-0
                md:last:pr-0
              "
            >
              {/* Number */}
              <div className="mb-5 flex items-center justify-between">
                <span
                  className="
                    font-body
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-gold
                  "
                >
                  {feature.number}
                </span>

                <span
                  aria-hidden="true"
                  className="
                    h-px
                    w-8
                    origin-right
                    bg-gold/50
                    transition-all
                    duration-500
                    group-hover:w-12
                    group-hover:bg-gold
                  "
                />
              </div>

              {/* Title */}
              <h2
                className="
                  font-display
                  text-3xl
                  leading-none
                  tracking-[-0.025em]
                  text-foreground
                  sm:text-4xl
                "
              >
                {feature.title}
              </h2>

              {/* Description */}
              <p
                className="
                  mt-4
                  max-w-sm
                  font-body
                  text-xs
                  leading-6
                  text-foreground-muted
                  sm:text-sm
                  sm:leading-7
                "
              >
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}