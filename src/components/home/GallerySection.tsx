"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { galleryItems } from "@/data/gallery";

const ease = [0.22, 1, 0.36, 1] as const;

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="
        relative overflow-hidden
        bg-background-soft
        py-24 sm:py-28 lg:py-36
      "
    >
      <Container>
        {/* Header */}
        <div
          className="
            mb-14 flex flex-col gap-8
            lg:mb-20 lg:flex-row
            lg:items-end lg:justify-between
          "
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease }}
              className="eyebrow mb-6"
            >
              Around The Tavern
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.08, ease }}
              className="
                font-display text-5xl leading-[0.88]
                tracking-[-0.035em]
                sm:text-6xl lg:text-7xl
              "
            >
              Come for the food.
              <br />
              <span className="italic text-gold">
                Stay for the feeling.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="
              max-w-md text-sm leading-7
              text-foreground-muted lg:pb-1
            "
          >
            A glimpse into the room, the plates, and the moments that make
            Tavern what it is.
          </motion.p>
        </div>

        {/* Gallery */}
        <div
          className="
            grid grid-cols-1 gap-4
            sm:grid-cols-2
            lg:grid-cols-12 lg:gap-5
          "
        >
          {galleryItems.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="
            mt-12 flex justify-end
            border-t border-border
            pt-7 sm:mt-16
          "
        >
          <Link
            href="/gallery"
            className="
              group inline-flex items-center gap-3
              font-body text-[10px] font-semibold
              uppercase tracking-[0.16em]
              text-foreground
              transition-colors duration-300
              hover:text-gold
            "
          >
            <span>View Full Gallery</span>

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
      </Container>
    </section>
  );
}

interface GalleryCardProps {
  item: (typeof galleryItems)[number];
  index: number;
}

function GalleryCard({ item, index }: GalleryCardProps) {
  const layoutClasses = [
    "lg:col-span-7",
    "lg:col-span-5",
    "lg:col-span-5",
    "lg:col-span-7",
    "lg:col-span-5 lg:col-start-2",
  ];

  const aspectClasses = [
    "aspect-[4/3]",
    "aspect-[4/3]",
    "aspect-[4/3]",
    "aspect-[4/3]",
    "aspect-[4/3]",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease,
      }}
      className={layoutClasses[index]}
    >
      <Link
        href="/gallery"
        className="
          group relative block overflow-hidden
          bg-surface
        "
        aria-label={`View ${item.alt}`}
      >
        <div className={`relative ${aspectClasses[index]}`}>
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              60vw
            "
            className="
              object-cover
              transition-transform duration-1000
              ease-out
              group-hover:scale-[1.035]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute inset-0
              bg-black/5
              transition-colors duration-500
              group-hover:bg-black/25
            "
          />

          <div
            className="
              absolute inset-x-0 bottom-0
              h-32
              bg-gradient-to-t
              from-black/50 to-transparent
              opacity-0
              transition-opacity duration-500
              group-hover:opacity-100
            "
          />

          <div
            className="
              absolute bottom-5 right-5
              flex size-10 items-center justify-center
              rounded-full
              bg-background/90
              text-foreground
              opacity-0
              translate-y-2
              backdrop-blur-sm
              transition-all duration-500
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}