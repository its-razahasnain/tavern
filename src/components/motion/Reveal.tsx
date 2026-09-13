"use client";

import { motion, useReducedMotion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  distance?: number;
  duration?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 28,
  duration = 0.7,
  ...props
}: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: distance,
            }
      }
      whileInView={
        reducedMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}