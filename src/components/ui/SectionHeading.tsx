import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/** Section title block: eyebrow, display heading with the brand "period", optional lead paragraph. */
export function SectionHeading({ eyebrow, title, lead, align = "left", tone = "dark", className }: Props) {
  const isLight = tone === "light";
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={isLight ? "sky" : "navy"} className="mb-5">
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={cn(
          "text-balance text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] sm:text-4xl lg:text-[2.85rem]",
          isLight ? "text-white" : "text-brand-navy",
        )}
      >
        {title}
        <span className={isLight ? "text-brand-sky" : "text-brand-sky"}>.</span>
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-5 text-pretty text-[17px] leading-relaxed sm:text-lg",
            isLight ? "text-white/70" : "text-navy-700/80",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
