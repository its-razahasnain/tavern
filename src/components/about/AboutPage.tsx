import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { aboutContent } from "@/data/about";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";

const philosophy = [
  {
    number: "01",
    title: "Good Food",
    description:
      "Fresh ingredients, thoughtful cooking, and dishes that never need to shout for attention.",
  },
  {
    number: "02",
    title: "Great Vibes",
    description:
      "Warm light, good music, crafted drinks, and a room that makes staying awhile feel natural.",
  },
  {
    number: "03",
    title: "Good Company",
    description:
      "Because the best meals are rarely about the food alone. They are about who is sitting across the table.",
  },
];

export function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-border pt-32 pb-24 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36"
      >
        <Container>
          <Reveal>
            <div className="max-w-5xl">
              <div className="eyebrow mb-7">
                {aboutContent.eyebrow}
              </div>

              <h1 className="font-display text-6xl leading-[0.88] tracking-[-0.035em] sm:text-7xl md:text-8xl lg:text-[9rem]">
                {aboutContent.title}
                <br />
                <span className="italic text-gold">
                  {aboutContent.titleAccent}
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-foreground-muted sm:text-base">
                {aboutContent.description}
              </p>
            </div>
          </Reveal>
        </Container>

        <div className="pointer-events-none absolute -right-20 bottom-0 hidden font-display text-[18rem] leading-none text-white/[0.015] lg:block">
          T
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
            <Reveal>
              <div className="tavern-image-wrap relative aspect-[4/5] overflow-hidden rounded-xl border border-border">
                <Image
                  src={aboutContent.image}
                  alt="Warm interior of Tavern"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <div className="eyebrow mb-6">
                  Why Tavern
                </div>

                <h2 className="font-display text-5xl leading-[0.92] tracking-[-0.025em] sm:text-6xl">
                  A place to
                  <br />
                  <span className="italic text-gold">
                    settle in.
                  </span>
                </h2>

                <GoldDivider width="medium" className="my-8" />

                <p className="text-sm leading-7 text-foreground-muted sm:text-base">
                  {aboutContent.description}
                </p>

                <p className="mt-5 text-sm leading-7 text-foreground-muted sm:text-base">
                  {aboutContent.secondaryDescription}
                </p>

                <div className="mt-9">
                  <Button href="/menu" variant="outline">
                    Explore the Menu
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="section-padding-sm border-y border-border bg-surface">
        <Container>
          <Reveal>
            <div className="mb-14 max-w-3xl">
              <div className="eyebrow mb-6">
                The Tavern Philosophy
              </div>

              <h2 className="font-display text-5xl leading-[0.92] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Simple things,
                <br />
                <span className="italic text-gold">
                  done properly.
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {philosophy.map((item, index) => (
              <Reveal
                key={item.number}
                delay={index * 0.08}
                className="h-full"
              >
                <div className="h-full bg-surface p-7 sm:p-9 lg:p-10">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="font-body text-[10px] font-semibold tracking-[0.18em] text-gold">
                      {item.number}
                    </span>

                    <GoldDivider width="small" />
                  </div>

                  <h3 className="font-display text-3xl tracking-[-0.02em] sm:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-foreground-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="section-padding-sm">
        <Container>
          <Reveal>
            <div className="grid border-y border-border sm:grid-cols-3">
              {aboutContent.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-5 py-9 text-center sm:py-12 ${
                    index !== 0 ? "border-t border-border sm:border-l sm:border-t-0" : ""
                  }`}
                >
                  <div className="font-display text-5xl tracking-[-0.025em] text-gold sm:text-6xl">
                    {stat.value}
                  </div>

                  <div className="mt-2 font-body text-[9px] font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-xl border border-border bg-surface px-6 py-16 text-center sm:px-10 sm:py-20 lg:py-24">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,164,92,0.08),transparent_55%)]" />

              <div className="relative z-10">
                <div className="eyebrow mb-7 justify-center">
                  Come See For Yourself
                </div>

                <h2 className="mx-auto max-w-3xl font-display text-5xl leading-[0.92] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                  Good food.
                  <br />
                  <span className="italic text-gold">
                    Good company.
                  </span>
                </h2>

                <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-foreground-muted">
                  There is always room at the Tavern.
                </p>

                <div className="mt-9">
                  <Button href="/reservation">
                    Book a Table
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
          <Reveal>
            <div className="flex justify-center">
              <Link
                href="#top"
                className="group inline-flex items-center gap-2 font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-foreground-subtle transition-colors duration-300 hover:text-gold"
              >
                <ArrowUpRight
                  size={13}
                  className="-rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                Back to top
              </Link>
            </div>
          </Reveal>
        </Container>
      </div>
    </main>
  );
}