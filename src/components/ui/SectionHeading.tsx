import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "eyebrow mb-6",
            centered && "justify-center"
          )}
        >
          {eyebrow}
        </div>
      )}

      <h2
        className={cn(
          "font-display text-4xl leading-[0.95] tracking-[-0.025em]",
          "sm:text-5xl",
          "md:text-6xl",
          "lg:text-7xl"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-6 max-w-xl text-sm leading-7 text-foreground-muted",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}