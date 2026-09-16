import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  tone = "navy",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "navy" | "light" | "sky";
}) {
  const color =
    tone === "light" ? "text-white/70" : tone === "sky" ? "text-brand-sky" : "text-brand-navy";
  return (
    <span className={cn("eyebrow", color, className)}>
      <span className="eyebrow-dot" aria-hidden />
      {children}
    </span>
  );
}
