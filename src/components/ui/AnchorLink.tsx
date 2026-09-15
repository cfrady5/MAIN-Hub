"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentPropsWithoutRef, MouseEvent } from "react";

type Props = Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
  /** Section id on the home page, e.g. "about". */
  section: string;
};

/**
 * Link to a landing-page section.
 * On the home page it smooth-scrolls in place without triggering a navigation;
 * from any other page it routes to "/#section" client-side.
 */
export function AnchorLink({ section, onClick, ...rest }: Props) {
  const pathname = usePathname();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented || pathname !== "/") return;
    const target = document.getElementById(section);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${section}`);
  }

  return <Link href={`/#${section}`} onClick={handleClick} scroll {...rest} />;
}
