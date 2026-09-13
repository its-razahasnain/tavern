import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Logo } from "@/components/ui/Logo";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background">
      <Container>
        {/* Main footer */}
        <div
          className="
            grid grid-cols-1 gap-14
            border-t border-border
            py-16
            sm:py-20
            lg:grid-cols-[1.4fr_0.7fr_0.9fr_1fr]
            lg:gap-12
            lg:py-24
          "
        >
          {/* Brand */}
          <div className="lg:pr-10">
            <Logo width={155} />

            <p
              className="
                mt-7 max-w-sm
                text-sm leading-7
                text-foreground-muted
              "
            >
              Good food, great drinks, and a warm room made for good company.
              Come as you are. Stay a little longer.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <GoldDivider width="medium" />

              <span
                className="
                  font-body text-[9px]
                  font-semibold uppercase
                  tracking-[0.2em]
                  text-foreground-subtle
                "
              >
                Good Food · Great Vibes · Together
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h2
              className="
                mb-6 font-body text-[9px]
                font-semibold uppercase
                tracking-[0.2em]
                text-gold
              "
            >
              Explore
            </h2>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col items-start"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    group relative py-1.5
                    font-display text-2xl
                    leading-none
                    text-foreground
                    transition-colors duration-300
                    hover:text-gold
                  "
                >
                  {item.label}

                  <span
                    aria-hidden="true"
                    className="
                      absolute bottom-0 left-0
                      h-px w-0 bg-gold
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}

              <Link
                href="/reservation"
                className="
                  group mt-4 inline-flex
                  items-center gap-2
                  font-body text-[9px]
                  font-semibold uppercase
                  tracking-[0.16em]
                  text-gold
                "
              >
                <span>Book a Table</span>

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2
              className="
                mb-6 font-body text-[9px]
                font-semibold uppercase
                tracking-[0.2em]
                text-gold
              "
            >
              Find Us
            </h2>

            <div
              className="
                flex flex-col gap-4
                text-sm leading-6
                text-foreground-muted
              "
            >
              <p>
                {siteConfig.location.address}
                <br />
                {siteConfig.location.city}, {siteConfig.location.country}
              </p>

              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="
                  transition-colors duration-300
                  hover:text-gold
                "
              >
                {siteConfig.contact.phone}
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="
                  transition-colors duration-300
                  hover:text-gold
                "
              >
                {siteConfig.contact.email}
              </a>
            </div>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="
    flex size-9 items-center
    justify-center rounded-full
    border border-border
    font-body text-[10px] font-semibold
    text-foreground-muted
    transition-all duration-300
    hover:border-gold
    hover:bg-gold
    hover:text-background
  "
              >
                IG
              </a>

              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="
    flex size-9 items-center
    justify-center rounded-full
    border border-border
    font-body text-[10px] font-semibold
    text-foreground-muted
    transition-all duration-300
    hover:border-gold
    hover:bg-gold
    hover:text-background
  "
              >
                FB
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h2
              className="
                mb-6 font-body text-[9px]
                font-semibold uppercase
                tracking-[0.2em]
                text-gold
              "
            >
              Opening Hours
            </h2>

            <div className="space-y-2.5">
              {[
                ["Monday", siteConfig.hours.monday],
                ["Tuesday", siteConfig.hours.tuesday],
                ["Wednesday", siteConfig.hours.wednesday],
                ["Thursday", siteConfig.hours.thursday],
                ["Friday", siteConfig.hours.friday],
                ["Saturday", siteConfig.hours.saturday],
                ["Sunday", siteConfig.hours.sunday],
              ].map(([day, hours]) => (
                <div
                  key={day}
                  className="
                    flex items-center justify-between
                    gap-4 border-b border-border-light
                    pb-2.5
                  "
                >
                  <span
                    className="
                      font-body text-[10px]
                      font-medium uppercase
                      tracking-[0.08em]
                      text-foreground-muted
                    "
                  >
                    {day}
                  </span>

                  <span
                    className="
                      text-right font-body text-[9px]
                      text-foreground-subtle
                    "
                  >
                    {hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand statement */}
        <div
          className="
            overflow-hidden
            border-t border-border
            py-12
            sm:py-14
            lg:py-16
          "
        >
          <p
            className="
              select-none whitespace-nowrap
              text-center font-display
              text-[18vw] font-medium
              leading-[0.7]
              tracking-[-0.07em]
              text-foreground/[0.035]
            "
            aria-hidden="true"
          >
            TAVERN
          </p>
        </div>

        {/* Bottom bar */}
        <div
          className="
            flex flex-col gap-4
            border-t border-border
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              font-body text-[9px]
              uppercase tracking-[0.14em]
              text-foreground-subtle
            "
          >
            © {new Date().getFullYear()} Tavern. All rights reserved.
          </p>

          <div
            className="
    border-t border-border
    py-4
    text-center
  "
          >
            <p
              className="
      font-body text-[9px]
      uppercase tracking-[0.12em]
      text-foreground-subtle
    "
            >
              Tavern is a sample website made by{" "}
              <span className="text-gold">The Solo Syntax</span>
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="
                font-body text-[9px]
                uppercase tracking-[0.14em]
                text-foreground-subtle
                transition-colors duration-300
                hover:text-gold
              "
            >
              Privacy
            </Link>

            <Link
              href="/"
              className="
                font-body text-[9px]
                uppercase tracking-[0.14em]
                text-foreground-subtle
                transition-colors duration-300
                hover:text-gold
              "
            >
              Terms
            </Link>

            <span
              className="
                font-body text-[9px]
                uppercase tracking-[0.14em]
                text-foreground-subtle
              "
            >
              Crafted with intention
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
