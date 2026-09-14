import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";

interface SharedProps {
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  variant?: ButtonVariant;
}

type ButtonProps =
  | (SharedProps &
      ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
      })
  | (SharedProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
      });

const variants: Record<ButtonVariant, string> = {
  primary: cn(
    "border-gold",
    "bg-gold",
    "text-background",
    "hover:border-gold-light",
    "hover:bg-gold-light",
  ),

  outline: cn(
    "border-gold",
    "bg-transparent",
    "text-foreground",
    "hover:bg-gold",
    "hover:text-background",
  ),

  ghost: cn(
    "border-transparent",
    "bg-transparent",
    "text-foreground",
    "hover:border-gold",
    "hover:text-gold",
  ),
};

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    showArrow = true,
    variant = "primary",
    ...rest
  } = props;

  const classes = cn(
    "group inline-flex items-center justify-center gap-3",
    "min-h-12 px-6",
    "rounded-full",
    "border",
    "font-body text-xs font-semibold",
    "tracking-[0.08em]",
    "uppercase",
    "transition-all duration-300",
    "focus-visible:outline-none",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-gold-light",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",
    "focus-visible:ring-offset-[3px]",
    variants[variant],
    className,
  );

  const arrow = showArrow ? (
    <ArrowUpRight
      size={15}
      strokeWidth={1.75}
      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden="true"
    />
  ) : null;

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <span>{children}</span>
        {arrow}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <span>{children}</span>
      {arrow}
    </button>
  );
}
