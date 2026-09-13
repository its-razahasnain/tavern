import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  priority?: boolean;
}

export function Logo({
  className,
  width = 150,
  priority = false,
}: LogoProps) {
  const height = Math.round(width * 0.357);

  return (
    <Link
      href="/"
      aria-label="Tavern home"
      className={cn(
        "inline-flex shrink-0",
        "transition-opacity duration-300",
        "hover:opacity-80",
        className
      )}
    >
      <Image
        src="/logo/tavern-logo.svg"
        alt="Tavern"
        width={width}
        height={height}
        priority={priority}
      />
    </Link>
  );
}