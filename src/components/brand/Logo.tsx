import Link from "next/link";
import { cn } from "@/lib/cn";
import { Mark } from "./Mark";

type Props = {
  tone?: "light" | "dark";
  className?: string;
  withTagline?: boolean;
};

/** Lock-up: monogram + "MAIN Hub" wordmark, optionally with the full name beneath. */
export function Logo({ tone = "dark", className, withTagline = false }: Props) {
  const isLight = tone === "light";
  return (
    <Link
      href="/"
      aria-label="MAIN Hub home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <Mark
        className={cn(
          "h-8 w-auto shrink-0 transition-colors duration-300",
          isLight ? "text-brand-sky group-hover:text-white" : "text-brand-navy group-hover:text-navy-600",
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[1.35rem] font-extrabold tracking-[-0.03em]",
            isLight ? "text-white" : "text-brand-navy",
          )}
        >
          MAIN Hub
        </span>
        {withTagline ? (
          <span
            className={cn(
              "mt-1 text-[0.62rem] font-medium uppercase tracking-[0.14em]",
              isLight ? "text-white/60" : "text-navy-600/80",
            )}
          >
            Microelectronics for American Innovation and National Security
          </span>
        ) : null}
      </span>
    </Link>
  );
}
