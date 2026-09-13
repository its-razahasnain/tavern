import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { aboutContent } from "@/data/about";

const philosophy = [
  {
    number: "01",
    title: "Good Food",
    description:
      "We believe great food starts with good ingredients, thoughtful cooking, and dishes that don't need to shout to be remembered.",
  },
  {
    number: "02",
    title: "Great Vibes",
    description:
      "Warm light, good music, comfortable corners, and an atmosphere that makes staying for one more drink feel like the obvious choice.",
  },
  {
    number: "03",
    title: "Good Company",
    description:
      "Tavern was made for people. Long conversations, shared plates, celebrations, first dates, old friends, and new memories.",
  },
];

export function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section
        className="
          relative overflow-hidden
          border-b border-border
          pt-36 pb-20
          sm:pt-40 sm:pb-24
          lg:pt-48 lg:pb-32
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            right-[-10%] top-[-20%]
            size-[600px]
            rounded-full
            bg-gold/[0.045]
            blur-[140px]
          "
        />

        <Container>
          <div className="relative max-w-6xl">
            <div className="eyebrow">
              {aboutContent.eyebrow}
            </div>

            <h1
              className="
                mt-7
                max-w-5xl
                font-display
                text-6xl leading-[0.88]
                tracking-[-0.04em]
                sm:text-7xl
                md:text-8xl
                lg:text-[9rem]
              "
            >
              {aboutContent.title}
              <br />
              <span className="italic text-gold">
                {aboutContent.titleAccent}
              </span>
            </h1>

            <div
              className="
                mt-10
                grid grid-cols-1
                gap-8
                lg:grid-cols-[1fr_0.55fr]
                lg:items-end
              "
            >
              <p
                className="
                  max-w-2xl
                  font-body text-base
                  leading-8
                  text-foreground-muted
                  sm:text-lg
                "
              >
                {aboutContent.description}
              </p>

              <div className="lg:justify-self-end">
                <div className="flex items-center gap-4">
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

      {/* Story */}
      <section className="section-padding">
        <Container>
          <div
            className="
              grid grid-cols-1
              gap-12
              lg:grid-cols-[1fr_0.8fr]
              lg:items-center
              lg:gap-24
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[1.5rem]
                border border-border
                bg-surface
              "
            >
              <div className="aspect-[4/5]">
                <Image
                  src={aboutContent.image}
                  alt="Warm atmospheric interior of Tavern"
                  fill
                  sizes="
                    (max-width: 1024px) 100vw,
                    55vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-1000
                    hover:scale-[1.03]
                  "
                />
              </div>

              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-gradient-to-t
                  from-background/35
                  via-transparent
                  to-transparent
                "
              />

              <div
                className="
                  absolute bottom-6 left-6
                  flex items-center gap-3
                  sm:bottom-8 sm:left-8
                "
              >
                <span
                  className="
                    font-body text-[9px]
                    font-semibold uppercase
                    tracking-[0.18em]
                    text-white/70
                  "
                >
                  Since 2018
                </span>

                <span className="h-px w-8 bg-gold" />
              </div>
            </div>

            <div>
              <div className="eyebrow">
                Our Story
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
                A room made
                <br />
                <span className="italic text-gold">
                  to linger in.
                </span>
              </h2>

              <div className="mt-8 space-y-6">
                <p
                  className="
                    font-body text-sm
                    leading-7
                    text-foreground-muted
                  "
                >
                  {aboutContent.description}
                </p>

                <p
                  className="
                    font-body text-sm
                    leading-7
                    text-foreground-muted
                  "
                >
                  {aboutContent.secondaryDescription}
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <GoldDivider width="medium" />

                <span
                  className="
                    font-body text-[9px]
                    font-semibold uppercase
                    tracking-[0.18em]
                    text-foreground-subtle
                  "
                >
                  Good Food · Great Vibes · Together
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section
        className="
          border-y border-border
          bg-background-soft
        "
      >
        <Container>
          <div className="section-padding">
            <div
              className="
                grid grid-cols-1
                gap-10
                lg:grid-cols-[0.8fr_1.5fr]
                lg:gap-20
              "
            >
              <div>
                <div className="eyebrow">
                  What We Believe
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
                  Simple ideas.
                  <br />
                  <span className="italic text-gold">
                    Done well.
                  </span>
                </h2>
              </div>

              <div>
                {philosophy.map((item) => (
                  <article
                    key={item.number}
                    className="
                      grid grid-cols-[auto_1fr]
                      gap-6
                      border-b border-border
                      py-8
                      first:pt-0
                      last:border-b-0
                    "
                  >
                    <span
                      className="
                        pt-1
                        font-body text-[9px]
                        font-semibold
                        tracking-[0.18em]
                        text-gold
                      "
                    >
                      {item.number}
                    </span>

                    <div>
                      <h3
                        className="
                          font-display text-3xl
                          leading-none
                          sm:text-4xl
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-4 max-w-xl
                          font-body text-sm
                          leading-7
                          text-foreground-muted
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="section-padding-sm">
        <Container>
          <div className="border-y border-border">
            <div
              className="
                grid grid-cols-1
                sm:grid-cols-3
              "
            >
              {aboutContent.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    px-6 py-10
                    sm:px-8 sm:py-12
                    lg:py-14
                    ${
                      index !== 0
                        ? "border-t border-border sm:border-l sm:border-t-0"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      font-display
                      text-6xl leading-none
                      tracking-[-0.04em]
                      text-gold
                      sm:text-7xl
                    "
                  >
                    {stat.value}
                  </div>

                  <div
                    className="
                      mt-4
                      font-body text-[9px]
                      font-semibold uppercase
                      tracking-[0.18em]
                      text-foreground-subtle
                    "
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding-sm">
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
                size-[450px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-gold/[0.04]
                blur-[110px]
              "
            />

            <div className="relative">
              <div className="eyebrow justify-center">
                Come See Us
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
                There&apos;s always
                <br />
                <span className="italic text-gold">
                  room at the Tavern.
                </span>
              </h2>

              <p
                className="
                  mx-auto mt-6 max-w-md
                  font-body text-sm
                  leading-7
                  text-foreground-muted
                "
              >
                Bring your people, pull up a chair,
                and stay for a while.
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