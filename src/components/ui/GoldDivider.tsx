import { cn } from "@/lib/utils";

interface GoldDividerProps {
  className?: string;
  width?: "small" | "medium" | "large";
}

const widths = {
  small: "w-6",
  medium: "w-10",
  large: "w-16",
};

export function GoldDivider({
  className,
  width = "medium",
}: GoldDividerProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block h-px bg-gold",
        widths[width],
        className
      )}
    />
  );
}