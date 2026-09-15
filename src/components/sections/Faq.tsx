"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/site";
import { cn } from "@/lib/cn";

function Item({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  const reduce = useReducedMotion();
  return (
    <li className="border-b border-line">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="group flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span
            className={cn(
              "text-[17px] font-semibold tracking-[-0.01em] transition-colors sm:text-lg",
              open ? "text-brand-blue" : "text-brand-navy group-hover:text-brand-blue",
            )}
          >
            {q}
          </span>
          <span
            className={cn(
              "flex size-9 shrink-0 items-center justify-center rounded-full ring-1 transition-all duration-300",
              open ? "rotate-45 bg-brand-navy text-white ring-brand-navy" : "text-brand-navy ring-navy-200 group-hover:ring-brand-navy",
            )}
          >
            <Plus className="size-4" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="panel"
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            initial={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-7 text-[15.5px] leading-relaxed text-navy-700/85">{a}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="section-y bg-white" aria-labelledby="faq-heading">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <SectionHeading
            eyebrow="FAQ"
            title={<span id="faq-heading">Questions about the consolidation</span>}
            lead="What the MAIN Hub is, why it was formed, and how to get involved."
          />
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-8">
          <ul className="border-t border-line">
            {faqs.map((f, i) => (
              <Item
                key={f.q}
                q={f.q}
                a={f.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
