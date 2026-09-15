import type { SVGProps } from "react";
import { MARK_PATH, MARK_VIEWBOX } from "./mark-path";

type MarkProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

/**
 * The MAIN Hub monogram as an inline SVG.
 * Inherits its colour from `currentColor`, so it can be tinted with text-* utilities.
 */
export function Mark({ title, className, ...rest }: MarkProps) {
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      fill="currentColor"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path fillRule="evenodd" d={MARK_PATH} />
    </svg>
  );
}
