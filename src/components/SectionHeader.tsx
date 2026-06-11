import { cn } from "../lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" && "text-center",
        className
      )}
    >
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.26em] text-bronze">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold leading-[0.98] text-charcoal sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-charcoal/68 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
