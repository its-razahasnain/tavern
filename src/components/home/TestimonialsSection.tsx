"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/testimonial";

const ease = [0.22, 1, 0.36, 1] as const;

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = testimonials[activeIndex];

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="testimonials"
      className="
        relative overflow-hidden
        bg-background
        py-24 sm:py-28 lg:py-36
      "
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          size-[600px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-gold/[0.025]
          blur-3xl
        "
      />

      <Container className="relative">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease }}
          className="eyebrow mb-8 justify-center"
        >
          Words From The Table
        </motion.div>

        <div className="mx-auto max-w-5xl text-center">
          {/* Quote mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="
              mx-auto mb-7 flex size-12
              items-center justify-center
              rounded-full border border-border
              text-gold
            "
          >
            <Quote
              size={19}
              strokeWidth={1.25}
            />
          </motion.div>

          {/* Quote */}
          <div className="relative min-h-[220px] sm:min-h-[190px] lg:min-h-[175px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease }}
                className="
                  font-display
                  text-3xl leading-[1.05]
                  tracking-[-0.025em]
                  text-foreground
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                "
              >
                “{active.quote}”
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Author */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`author-${activeIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mt-4"
            >
              <div
                className="
                  font-body text-[10px]
                  font-semibold uppercase
                  tracking-[0.18em]
                  text-foreground
                "
              >
                {active.name}
              </div>

              <div
                className="
                  mt-2 font-body text-[9px]
                  uppercase tracking-[0.14em]
                  text-foreground-subtle
                "
              >
                {active.role} · {active.location}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="
                flex size-11 items-center justify-center
                rounded-full border border-border
                text-foreground-muted
                transition-all duration-300
                hover:border-gold
                hover:bg-gold
                hover:text-background
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-gold-light
              "
            >
              <ArrowLeft size={15} strokeWidth={1.5} />
            </button>

            {/* Progress */}
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={index === activeIndex}
                  className="
                    group flex h-5 items-center
                  "
                >
                  <span
                    className={`
                      block h-px
                      transition-all duration-500
                      ${
                        index === activeIndex
                          ? "w-8 bg-gold"
                          : "w-4 bg-foreground/20 group-hover:bg-foreground/50"
                      }
                    `}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="
                flex size-11 items-center justify-center
                rounded-full border border-border
                text-foreground-muted
                transition-all duration-300
                hover:border-gold
                hover:bg-gold
                hover:text-background
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-gold-light
              "
            >
              <ArrowRight size={15} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25, ease }}
          className="
            mx-auto mt-16 h-px max-w-xs
            origin-center bg-border
          "
        />
      </Container>
    </section>
  );
}