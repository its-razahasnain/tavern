import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Logo } from "@/components/ui/Logo";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Container>
        <section className="flex min-h-screen flex-col justify-center py-20">
          <div className="mb-12">
            <Logo width={180} priority />
          </div>

          <div className="eyebrow mb-7">Good Food · Great Vibes · Together</div>

          <h1 className="max-w-5xl font-display text-6xl leading-[0.88] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-9xl">
            More Than a Meal,
            <br />
            It&apos;s a <span className="italic text-gold">Tavern.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-foreground-muted">
            Fresh ingredients, bold flavors, and a welcoming atmosphere — where
            every visit feels like home.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/menu">View Menu</Button>

            <Button href="/reservation" variant="outline">
              Book a Table
            </Button>
          </div>

          <GoldDivider width="large" className="mt-16" />
        </section>

        <section className="section-padding border-t border-border">
          <SectionHeading
            eyebrow="Our Philosophy"
            title={
              <>
                Food made with
                <span className="italic text-gold"> intention.</span>
              </>
            }
            description="A simple approach to good food, thoughtful drinks, and memorable evenings."
          />
        </section>
      </Container>
    </main>
  );
}
