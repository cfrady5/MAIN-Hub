"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { legacyHubs, navLinks } from "@/content/site";
import { cn } from "@/lib/cn";

export function Navbar({ initialTone = "light" }: { initialTone?: "light" | "dark" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Over the dark hero the bar is transparent with light text; once scrolled it frosts to white.
  const light = initialTone === "light" && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-light shadow-soft" : "bg-transparent",
      )}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Logo tone={light ? "light" : "dark"} />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors",
                light ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-navy-800/80 hover:bg-navy-50 hover:text-brand-navy",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#contact" variant={light ? "sky" : "primary"} size="md">
            Connect with MAIN
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full transition-colors lg:hidden",
            light ? "text-white hover:bg-white/10" : "text-brand-navy hover:bg-navy-50",
          )}
        >
          <Menu className="size-6" />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-navy-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex h-[72px] items-center justify-between">
              <Logo tone="light" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex size-11 items-center justify-center rounded-full text-white hover:bg-white/10"
              >
                <X className="size-6" />
              </button>
            </div>
            <motion.nav
              aria-label="Mobile"
              className="container-x mt-6 flex flex-col"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
            >
              {navLinks.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                  className="border-b border-white/10 py-4 text-2xl font-semibold tracking-tight text-white"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                className="mt-8"
              >
                <Button href="#contact" variant="sky" size="lg" className="w-full" onClick={() => setOpen(false)}>
                  Connect with MAIN
                </Button>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                className="mt-10"
              >
                <p className="eyebrow text-white/50">
                  <span className="eyebrow-dot" aria-hidden />
                  Legacy hub sites
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {legacyHubs.map((hub) => (
                    <a
                      key={hub.id}
                      href={hub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-dark flex items-center justify-between rounded-2xl px-4 py-3 text-white"
                    >
                      <span className="text-sm font-medium">
                        {hub.acronym} <span className="text-white/50">· {hub.name}</span>
                      </span>
                      <ArrowUpRight className="size-4 text-brand-sky" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
