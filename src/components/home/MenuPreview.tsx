"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { featuredMenuItems } from "@/data/menu";

const ease = [0.22, 1, 0.36, 1] as const;

export function MenuPreview() {
  return (
    <section
      id="menu-preview"
      className="
        relative
        overflow-hidden
        bg-background-soft
        py-24
        sm:py-28
        lg:py-36
      "
    >
      <Container>
        {/* Section header */}
        <div
          className="
            mb-14
            flex
            flex-col
            gap-8
            lg:mb-20
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.65,
                ease,
              }}
              className="eyebrow mb-6"
            >
              From Our Kitchen
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease,
              }}
              className="
                max-w-3xl
                font-display
                text-5xl
                leading-[0.88]
                tracking-[-0.035em]
                sm:text-6xl
                lg:text-7xl
              "
            >
              A little taste
              <br />
              of{" "}
              <span className="italic text-gold">
                Tavern.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              delay: 0.18,
              ease,
            }}
            className="
              max-w-md
              text-sm
              leading-7
              text-foreground-muted
              lg:pb-1
            "
          >
            Honest ingredients, generous portions, and
            flavors designed to keep you coming back.
            Explore a few of our favorites.
          </motion.p>
        </div>

        {/* Menu grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-x-6
            gap-y-14
            sm:grid-cols-2
            sm:gap-y-16
            lg:gap-x-8
            lg:gap-y-20
          "
        >
          {featuredMenuItems.map((item, index) => (
            <MenuCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease,
          }}
          className="
            mt-16
            flex
            flex-col
            items-start
            gap-6
            border-t
            border-border
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
            lg:mt-20
          "
        >
          <div className="flex items-center gap-4">
            <GoldDivider width="medium" />

            <span
              className="
                font-body
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-foreground-subtle
              "
            >
              Explore the full menu
            </span>
          </div>

          <Link
            href="/menu"
            className="
              group
              inline-flex
              items-center
              gap-3
              font-body
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-foreground
              transition-colors
              duration-300
              hover:text-gold
            "
          >
            <span>View Full Menu</span>

            <span
              className="
                flex
                size-9
                items-center
                justify-center
                rounded-full
                border
                border-border
                transition-all
                duration-300
                group-hover:border-gold
                group-hover:bg-gold
                group-hover:text-background
              "
            >
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="
                  transition-transform
                  duration-300
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

interface MenuCardProps {
  item: (typeof featuredMenuItems)[number];
  index: number;
}

function MenuCard({
  item,
  index,
}: MenuCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease,
      }}
      className="group"
    >
      {/* Image */}
      <Link
        href={`/menu#${item.id}`}
        className="
          relative
          block
          aspect-[4/3]
          overflow-hidden
          bg-surface
        "
        aria-label={`View ${item.name}`}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            50vw
          "
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
        />

        {/* Image overlay */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-black/5
            transition-colors
            duration-500
            group-hover:bg-black/20
          "
        />

        {/* View indicator */}
        <div
          className="
            absolute
            bottom-5
            right-5
            flex
            size-10
            translate-y-2
            items-center
            justify-center
            rounded-full
            bg-background/90
            text-foreground
            opacity-0
            backdrop-blur-sm
            transition-all
            duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <ArrowUpRight
            size={15}
            strokeWidth={1.5}
          />
        </div>
      </Link>

      {/* Information */}
      <div className="pt-5">
        <div
          className="
            mb-3
            flex
            items-center
            justify-between
            gap-4
          "
        >
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
            {item.category}
          </span>

          <span
            className="
              font-body
              text-xs
              font-medium
              tracking-[0.05em]
              text-foreground-muted
            "
          >
            PKR {item.price}
          </span>
        </div>

        <h3
          className="
            font-display
            text-3xl
            leading-none
            tracking-[-0.02em]
            text-foreground
            transition-colors
            duration-300
            group-hover:text-gold-light
            sm:text-4xl
          "
        >
          {item.name}
        </h3>

        <p
          className="
            mt-3
            max-w-md
            text-xs
            leading-6
            text-foreground-muted
            sm:text-sm
            sm:leading-7
          "
        >
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}