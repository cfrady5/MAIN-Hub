import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline-light" | "sky";
type Size = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.005em] transition-all duration-300 ease-[var(--ease-out-expo)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-navy text-white shadow-soft hover:bg-navy-900 hover:shadow-lift hover:-translate-y-0.5 focus-visible:ring-offset-white",
  secondary:
    "bg-white text-brand-navy ring-1 ring-inset ring-navy-200 hover:ring-navy-300 hover:-translate-y-0.5 hover:shadow-soft focus-visible:ring-offset-white",
  ghost:
    "text-brand-navy hover:bg-navy-50 focus-visible:ring-offset-white",
  "outline-light":
    "text-white ring-1 ring-inset ring-white/25 hover:ring-white/50 hover:bg-white/5 hover:-translate-y-0.5 focus-visible:ring-offset-navy-950",
  sky:
    "bg-brand-sky text-navy-950 shadow-[0_10px_30px_-10px_rgb(56_189_248_/_0.7)] hover:bg-sky-300 hover:-translate-y-0.5 focus-visible:ring-offset-navy-950",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & { href: string; external?: boolean } & Omit<
    ComponentPropsWithoutRef<"a">,
    "href" | "className" | "children"
  >;
type ButtonAsButton = CommonProps & { href?: undefined } & Omit<
    ComponentPropsWithoutRef<"button">,
    "className" | "children"
  >;

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { href, external, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    void _v; void _s; void _c; void _ch;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
  void _v; void _s; void _c; void _ch;
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
