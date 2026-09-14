import Image from "next/image";
import Link from "next/link";

import { galleryItems } from "@/data/gallery";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const captions: Record<string, { title: string; description: string }> = {
  "gallery-01": {
    title: "The Room",
    description: "Warm light.",
  },
  "gallery-02": {
    title: "From The Kitchen",
    description: "Made with intention.",
  },
  "gallery-03": {
    title: "Around The Table",
    description: "Good company.",
  },
  "gallery-04": {
    title: "After Dark",
    description: "Stay awhile.",
  },
  "gallery-05": {
    title: "The Bar",
    description: "One more?",
  },
};

export function GalleryPage() {
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
                Inside Tavern
              </div>

              <h1 className="font-display text-6xl leading-[0.88] tracking-[-0.035em] sm:text-7xl md:text-8xl lg:text-[9rem]">
                Good food.
                <br />
                <span className="italic text-gold">
                  Good moments.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-7 text-foreground-muted sm:text-base">
                A little look inside the room, the plates, the bar,
                and the moments that make Tavern what it is.
              </p>
            </div>
          </Reveal>
        </Container>

        <div className="pointer-events-none absolute -right-20 bottom-0 hidden font-display text-[18rem] leading-none text-white/[0.015] lg:block">
          T
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
            {galleryItems.map((item, index) => {
              const caption = captions[item.id];

              const layout =
                item.size === "large"
                  ? "md:col-span-7"
                  : "md:col-span-5";

              return (
                <Reveal
                  key={item.id}
                  delay={index * 0.07}
                  distance={24}
                  className={layout}
                >
                  <figure
                    className={`group ${
                      index % 2 === 1 ? "md:pt-20" : ""
                    }`}
                  >
                    <div
                      className={`tavern-image-wrap relative overflow-hidden rounded-xl border border-border ${
                        item.size === "large"
                          ? "aspect-[4/3]"
                          : "aspect-[4/5]"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes={
                          item.size === "large"
                            ? "(max-width: 768px) 100vw, 58vw"
                            : "(max-width: 768px) 100vw, 42vw"
                        }
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                        <div className="translate-y-2 opacity-80 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                          <div className="font-body text-[9px] font-semibold uppercase tracking-[0.18em] text-gold">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <h2 className="mt-2 font-display text-2xl tracking-[-0.015em] sm:text-3xl">
                            {caption?.title ?? "Tavern"}
                          </h2>

                          <p className="mt-1 text-xs text-foreground-muted">
                            {caption?.description ?? ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  </figure>
                </Reveal>
              );
            })}
          </div>
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
                  See You Soon
                </div>

                <h2 className="mx-auto max-w-3xl font-display text-5xl leading-[0.92] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                  Pictures are nice.
                  <br />
                  <span className="italic text-gold">
                    Being here is better.
                  </span>
                </h2>

                <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-foreground-muted">
                  Come take a seat, order something good, and make
                  your own Tavern memories.
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
          <div className="flex justify-center">
            <Link
              href="#top"
              className="font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-foreground-subtle transition-colors duration-300 hover:text-gold"
            >
              Back to top
            </Link>
          </div>
        </Container>
      </div>
    </main>
  );
}