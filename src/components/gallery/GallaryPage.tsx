import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { galleryItems } from "@/data/gallery";

const galleryCaptions = [
  {
    eyebrow: "01 · The Room",
    title: "Warm light.",
    description: "A room designed to make you forget the time.",
  },
  {
    eyebrow: "02 · From The Kitchen",
    title: "Made with intention.",
    description: "Thoughtful plates, honest ingredients, bold flavors.",
  },
  {
    eyebrow: "03 · Around The Table",
    title: "Good company.",
    description: "The best evenings are the ones you don't want to end.",
  },
  {
    eyebrow: "04 · After Dark",
    title: "Stay awhile.",
    description: "When dinner turns into another drink and another story.",
  },
  {
    eyebrow: "05 · The Bar",
    title: "One more?",
    description: "Classic pours and cocktails made for slow evenings.",
  },
];

export function GalleryPage() {
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
            left-1/2 top-0
            size-[600px]
            -translate-x-1/2
            rounded-full
            bg-gold/[0.045]
            blur-[140px]
          "
        />

        <Container>
          <div className="relative max-w-6xl">
            <div className="eyebrow">
              Inside Tavern
            </div>

            <div
              className="
                mt-7
                grid grid-cols-1
                gap-8
                lg:grid-cols-[1.4fr_0.6fr]
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
                Good food.
                <br />
                <span className="italic text-gold">
                  Good moments.
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
                  A glimpse into the room, the plates,
                  the pours, and the moments that make
                  Tavern what it is.
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

      {/* Gallery */}
      <section className="section-padding">
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
              {galleryItems.map((item, index) => {
                const caption = galleryCaptions[index];

                const layoutClasses = [
                  "lg:col-span-7",
                  "lg:col-span-5 lg:mt-24",
                  "lg:col-span-5 lg:ml-10",
                  "lg:col-span-7",
                  "lg:col-span-5 lg:col-start-3",
                ];

                const aspectClasses = [
                  "aspect-[4/3]",
                  "aspect-[4/5]",
                  "aspect-[4/5]",
                  "aspect-[4/3]",
                  "aspect-[4/5]",
                ];

                return (
                  <article
                    key={item.id}
                    className={layoutClasses[index]}
                  >
                    <div
                      className={`
                        group relative overflow-hidden
                        rounded-[1rem]
                        border border-border
                        bg-surface
                        ${aspectClasses[index]}
                      `}
                    >
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
                          transition-transform
                          duration-1000
                          ease-out
                          group-hover:scale-[1.04]
                        "
                      />

                      <div
                        className="
                          pointer-events-none absolute inset-0
                          bg-gradient-to-t
                          from-background/75
                          via-transparent
                          to-transparent
                          opacity-80
                        "
                      />

                      <div
                        className="
                          absolute inset-x-0 bottom-0
                          p-6
                          sm:p-7
                          lg:p-8
                        "
                      >
                        <span
                          className="
                            font-body text-[8px]
                            font-semibold uppercase
                            tracking-[0.2em]
                            text-gold
                          "
                        >
                          {caption.eyebrow}
                        </span>

                        <h2
                          className="
                            mt-2
                            font-display text-3xl
                            leading-none
                            text-white
                            sm:text-4xl
                          "
                        >
                          {caption.title}
                        </h2>

                        <p
                          className="
                            mt-2 max-w-xs
                            font-body text-xs
                            leading-5
                            text-white/65
                          "
                        >
                          {caption.description}
                        </p>
                      </div>

                      <div
                        className="
                          absolute right-5 top-5
                          flex size-9
                          items-center justify-center
                          rounded-full
                          border border-white/20
                          bg-black/20
                          text-white
                          opacity-0
                          backdrop-blur-sm
                          transition-all duration-500
                          group-hover:opacity-100
                        "
                      >
                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.5}
                          className="
                            transition-transform duration-500
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                          "
                        />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Closing statement */}
      <section className="section-padding-sm border-t border-border">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="eyebrow justify-center">
              The Tavern Experience
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
              Some places are made
              <br />
              <span className="italic text-gold">
                to be remembered.
              </span>
            </h2>

            <p
              className="
                mx-auto mt-6
                max-w-lg
                font-body text-sm
                leading-7
                text-foreground-muted
              "
            >
              Come for the food. Stay for the atmosphere.
              Leave with a reason to come back.
            </p>

            <div className="mt-8">
              <Link
                href="/reservation"
                className="
                  group inline-flex
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