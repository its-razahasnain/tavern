import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { fullMenu } from "@/data/full-menu";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";

export function MenuPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pt-32 pb-24 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36">
        <Container>
          <Reveal>
            <div className="max-w-4xl">
              <div className="eyebrow mb-7">
                The Tavern Menu
              </div>

              <h1 className="font-display text-6xl leading-[0.88] tracking-[-0.035em] sm:text-7xl md:text-8xl lg:text-[9rem]">
                Good food,
                <br />
                <span className="italic text-gold">worth sharing.</span>
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-7 text-foreground-muted sm:text-base">
                Honest ingredients, thoughtful cooking, and plates made
                for the middle of the table. Come hungry. Stay awhile.
              </p>
            </div>
          </Reveal>
        </Container>

        <div className="pointer-events-none absolute -right-24 bottom-0 hidden font-display text-[18rem] leading-none text-white/[0.015] lg:block">
          T
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-xl">
        <Container>
          <nav
            aria-label="Menu categories"
            className="scrollbar-none flex overflow-x-auto"
          >
            {fullMenu.map((category) => (
              <Link
                key={category.id}
                href={`#${category.id}`}
                className="group flex shrink-0 items-center gap-3 border-r border-border px-5 py-5 first:pl-0 last:border-r-0 sm:px-7"
              >
                <span className="font-body text-[9px] font-semibold tracking-[0.15em] text-foreground-subtle transition-colors duration-300 group-hover:text-gold">
                  {category.number}
                </span>

                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground-muted transition-colors duration-300 group-hover:text-foreground">
                  {category.name}
                </span>
              </Link>
            ))}
          </nav>
        </Container>
      </section>

      {/* Menu */}
      <section className="section-padding">
        <Container>
          <div className="space-y-24 lg:space-y-32">
            {fullMenu.map((category, categoryIndex) => (
              <Reveal
                key={category.id}
                id={category.id}
                delay={categoryIndex * 0.04}
              >
                <section
                  aria-labelledby={`${category.id}-heading`}
                  className="scroll-mt-28"
                >
                  {/* Category Header */}
                  <div className="mb-10 grid gap-6 border-b border-border pb-7 md:grid-cols-[1fr_2fr] md:items-end">
                    <div>
                      <div className="mb-4 flex items-center gap-4">
                        <span className="font-body text-[10px] font-semibold tracking-[0.18em] text-gold">
                          {category.number}
                        </span>

                        <GoldDivider width="small" />
                      </div>

                      <h2
                        id={`${category.id}-heading`}
                        className="font-display text-5xl leading-none tracking-[-0.025em] sm:text-6xl"
                      >
                        {category.name}
                      </h2>
                    </div>

                    <p className="max-w-lg text-sm leading-7 text-foreground-muted md:justify-self-end">
                      {category.description}
                    </p>
                  </div>

                  {/* Items */}
                  <div className="divide-y divide-border">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={`${category.id}-${item.name}`}
                        className="group grid gap-4 py-7 transition-colors duration-300 hover:bg-white/[0.015] sm:grid-cols-[1fr_auto] sm:gap-8"
                      >
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <h3 className="font-display text-2xl leading-tight tracking-[-0.015em] transition-colors duration-300 group-hover:text-gold-light sm:text-3xl">
                              {item.name}
                            </h3>

                            {item.featured && (
                              <span className="inline-flex items-center rounded-full border border-border-strong px-2.5 py-1 font-body text-[8px] font-semibold uppercase tracking-[0.14em] text-gold">
                                Tavern Signature
                              </span>
                            )}
                          </div>

                          <p className="mt-2 max-w-2xl text-xs leading-6 text-foreground-muted sm:text-sm">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between gap-6 sm:block sm:min-w-24 sm:text-right">
                          <span className="font-body text-sm font-semibold tracking-[0.04em] text-foreground">
                            {item.price}
                          </span>

                          <span className="mt-2 hidden font-body text-[8px] uppercase tracking-[0.16em] text-foreground-subtle sm:block">
                            PKR
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-xl border border-border bg-surface px-6 py-16 text-center sm:px-10 sm:py-20 lg:py-24">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,164,92,0.08),transparent_55%)]" />

              <div className="relative z-10">
                <div className="eyebrow mb-7 justify-center">
                  Your Table Awaits
                </div>

                <h2 className="mx-auto max-w-3xl font-display text-5xl leading-[0.92] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                  Come for the food.
                  <br />
                  <span className="italic text-gold">
                    Stay for the evening.
                  </span>
                </h2>

                <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-foreground-muted">
                  Good plates, good drinks, and a table waiting for you.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button href="/reservation">
                    Book a Table
                  </Button>

                  <Button
                    href="/contact"
                    variant="outline"
                    showArrow={false}
                  >
                    Find Us
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Back to top */}
      <div className="pb-12">
        <Container>
          <div className="flex justify-center">
            <Link
              href="#top"
              className="group inline-flex items-center gap-2 font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-foreground-subtle transition-colors duration-300 hover:text-gold"
            >
              <ArrowDown
                size={13}
                className="rotate-180 transition-transform duration-300 group-hover:-translate-y-1"
                aria-hidden="true"
              />
              Back to top
            </Link>
          </div>
        </Container>
      </div>
    </main>
  );
}