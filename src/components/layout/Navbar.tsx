"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed left-5 right-5 top-5 z-50",
          "sm:left-8 sm:right-8 sm:top-8",
          "lg:left-10 lg:right-10 lg:top-10",
          "transition-all duration-500",
          scrolled && [
            "rounded-full",
            "border border-border",
            "bg-background/80",
            "backdrop-blur-xl",
            "shadow-[0_10px_40px_rgba(0,0,0,0.2)]",
          ],
        )}
      >
        <Container>
          <nav
            aria-label="Main navigation"
            className="flex h-[72px] items-center justify-between lg:h-20"
          >
            {/* Logo */}
            <Logo width={142} priority className="relative z-[60]" />

            {/* Desktop navigation */}
            <div className="hidden items-center gap-8 lg:flex">
              <div className="flex items-center gap-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="
                      group
                      relative
                      py-2
                      font-body
                      text-[11px]
                      font-medium
                      uppercase
                      tracking-[0.08em]
                      text-foreground/90
                      transition-colors
                      duration-300
                      hover:text-gold-light
                    "
                  >
                    {item.label}

                    <span
                      className="
                        absolute
                        -bottom-0.5
                        left-0
                        h-px
                        w-0
                        bg-gold
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
                ))}
              </div>

              <div className="ml-1 h-5 w-px bg-foreground/20" />

              <Button href="/reservation" className="min-h-10 px-5">
                Book a Table
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              className="
                relative
                z-[60]
                flex
                size-11
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-foreground
                transition-all
                duration-300
                hover:border-gold
                hover:text-gold
                lg:hidden
              "
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={19} strokeWidth={1.5} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={19} strokeWidth={1.5} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="
            fixed
            inset-0
            z-40
            bg-background
            lg:hidden
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex min-h-full flex-col px-5 pb-8 pt-28 sm:px-8 sm:pt-32">
            <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col">
              <nav aria-label="Mobile navigation" className="flex flex-col">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.08 + index * 0.06,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="
                          group
                          flex
                          items-center
                          justify-between
                          border-b
                          border-border
                          py-5
                        "
                    >
                      <span
                        className="
                            font-display
                            text-4xl
                            leading-none
                            text-foreground
                            transition-colors
                            duration-300
                            group-hover:text-gold
                            sm:text-5xl
                          "
                      >
                        {item.label}
                      </span>

                      <span
                        className="
                            font-body
                            text-[9px]
                            tracking-[0.18em]
                            text-foreground-subtle
                          "
                      >
                        0{index + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.42,
                  duration: 0.45,
                }}
                className="mt-auto pt-10"
              >
                <Button
                  href="/reservation"
                  onClick={onClose}
                  className="w-full sm:w-auto"
                >
                  Book a Table
                </Button>

                <div
                  className="
                    mt-8
                    flex
                    flex-col
                    gap-2
                    font-body
                    text-[10px]
                    uppercase
                    tracking-[0.14em]
                    text-foreground-subtle
                  "
                >
                  <span>
                    {siteConfig.location.city} · {siteConfig.location.country}
                  </span>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="transition-colors hover:text-gold"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
