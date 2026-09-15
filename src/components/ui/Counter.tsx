"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

type Props = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

/**
 * Counts up to `value` when scrolled into view.
 * The final value is server-rendered (good for crawlers and no-JS). The
 * count-up drives a motion value directly, so there is no React state to
 * mismatch during hydration and nothing is set synchronously inside effects.
 */
export function Counter({ value, suffix = "", prefix = "", duration = 1.6, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const raw = useMotionValue(value);
  const text = useTransform(raw, (v) => `${prefix}${Math.round(v).toLocaleString("en-US")}${suffix}`);

  useEffect(() => {
    if (!inView || reduce !== false) return;
    raw.set(0);
    const controls = animate(raw, value, { duration, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, reduce, raw, value, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {text}
    </motion.span>
  );
}
