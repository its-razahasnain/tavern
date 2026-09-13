import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { fullMenu, type FullMenuItem } from "@/data/full-menu";

function MenuItem({ item }: { item: FullMenuItem }) {
  return (
    <article
      className="
        group relative
        border-b border-border-light
        py-7
        transition-colors duration-300
        hover:border-border
      "
    >
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <h3
              className="
                font-display text-2xl
                leading-none tracking-[-0.015em]
                text-foreground
                transition-colors duration-300
                group-hover:text-gold-light
                sm:text-3xl
              "
            >
              {item.name}
            </h3>

            {item.featured && (
              <span
                className="
                  hidden shrink-0
                  border border-border
                  px-2 py-1
                  font-body text-[7px]
                  font-semibold uppercase
                  tracking-[0.16em]
                  text-gold
                  sm:inline-block
                "
              >
                Signature
              </span>
            )}
          </div>

          <p
            className="
              mt-3 max-w-xl
              font-body text-xs
              leading-6
              text-foreground-muted
              sm:text-sm
            "
          >
            {item.description}
          </p>
        </div>

        <span
          className="
            shrink-0
            font-display text-xl
            leading-none
            text-gold
            sm:text-2xl
          "
        >
          {item.price}
        </span>
      </div>
    </article>
  );
}

export function MenuPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
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
            h-[500px] w-[700px]
            -translate-x-1/2
            rounded-full
            bg-gold/[0.045]
            blur-[120px]
          "
        />

        <Container>
          <div className="relative">
            <div className="eyebrow">
              The Tavern Menu
            </div>

            <div
              className="
                mt-7
                flex flex-col
                gap-8
                lg:flex-row
                lg:items-end
                lg:justify-between
              "
            >
              <div>
                <h1
                  className="
                    max-w-4xl
                    font-display
                    text-6xl leading-[0.88]
                    tracking-[-0.04em]
                    sm:text-7xl
                    md:text-8xl
                    lg:text-[9rem]
                  "
                >
                  Good food,
                  <br />
                  <span className="italic text-gold">
                    worth sharing.
                  </span>
                </h1>
              </div>

              <div className="max-w-sm lg:pb-2">
                <p
                  className="
                    font-body text-sm
                    leading-7
                    text-foreground-muted
                  "
                >
                  From small plates to open-fire
                  favorites, every dish is made for
                  good food, good conversation, and
                  staying a little longer.
                </p>

                <div className="mt-7 flex items-center gap-3">
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

      {/* Category Navigation */}
      <div
        className="
          sticky top-0 z-30
          border-b border-border
          bg-background/90
          backdrop-blur-xl
        "
      >
        <Container>
          <nav
            aria-label="Menu categories"
            className="
              flex items-center
              gap-6 overflow-x-auto
              py-4
              scrollbar-none
              sm:gap-8
            "
          >
            {fullMenu.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="
                  group flex shrink-0
                  items-center gap-2
                  font-body text-[9px]
                  font-semibold uppercase
                  tracking-[0.16em]
                  text-foreground-subtle
                  transition-colors duration-300
                  hover:text-gold
                "
              >
                <span className="text-gold">
                  {category.number}
                </span>
                {category.name}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* Menu */}
      <section className="section-padding">
        <Container>
          <div className="mx-auto max-w-6xl">
            {fullMenu.map((category) => (
              <section
                key={category.id}
                id={category.id}
                className="
                  scroll-mt-24
                  border-t border-border
                  py-14
                  sm:py-16
                  lg:py-20
                  first:border-t-0
                  first:pt-0
                "
              >
                <div
                  className="
                    grid grid-cols-1
                    gap-8
                    lg:grid-cols-[0.7fr_1.8fr]
                    lg:gap-16
                  "
                >
                  {/* Category heading */}
                  <div className="lg:sticky lg:top-28 lg:self-start">
                    <div className="flex items-center gap-4">
                      <span
                        className="
                          font-body text-[9px]
                          font-semibold
                          tracking-[0.18em]
                          text-gold
                        "
                      >
                        {category.number}
                      </span>

                      <GoldDivider width="small" />
                    </div>

                    <h2
                      className="
                        mt-5
                        font-display
                        text-5xl leading-[0.9]
                        tracking-[-0.025em]
                        sm:text-6xl
                      "
                    >
                      {category.name}
                    </h2>

                    <p
                      className="
                        mt-5 max-w-xs
                        font-body text-xs
                        leading-6
                        text-foreground-subtle
                      "
                    >
                      {category.description}
                    </p>
                  </div>

                  {/* Items */}
                  <div>
                    {category.items.map((item) => (
                      <MenuItem
                        key={item.name}
                        item={item}
                      />
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding-sm border-t border-border">
        <Container>
          <div
            className="
              relative overflow-hidden
              border border-border
              px-6 py-14
              text-center
              sm:px-10 sm:py-16
              lg:px-16 lg:py-20
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                left-1/2 top-1/2
                size-[400px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-gold/[0.04]
                blur-[100px]
              "
            />

            <div className="relative">
              <div className="eyebrow justify-center">
                Your Table Awaits
              </div>

              <h2
                className="
                  mx-auto mt-6 max-w-3xl
                  font-display
                  text-5xl leading-[0.9]
                  tracking-[-0.03em]
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                Come hungry.
                <br />
                <span className="italic text-gold">
                  Stay awhile.
                </span>
              </h2>

              <p
                className="
                  mx-auto mt-6 max-w-md
                  text-sm leading-7
                  text-foreground-muted
                "
              >
                Good food tastes better when the
                table is full. Reserve yours and make
                an evening of it.
              </p>

              <Link
                href="/reservation"
                className="
                  group mt-8 inline-flex
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