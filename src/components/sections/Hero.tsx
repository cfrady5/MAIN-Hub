import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CircuitTraces } from "@/components/brand/CircuitTraces";
import { Mark } from "@/components/brand/Mark";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { pressRelease } from "@/content/press-release";
import { legacyHubs, siteConfig } from "@/content/site";

const chips = [
  { value: "600+", label: "organizations", className: "left-0 top-[14%] lg:-left-6" },
  { value: "6", label: "technology areas", className: "bottom-[4%] right-[2%] lg:-right-2" },
  { value: "2 → 1", label: "hubs, one ecosystem", className: "bottom-[14%] left-0 lg:-left-2" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-navy-950 text-white"
      aria-labelledby="hero-heading"
    >
      {/* Background layers */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-[radial-gradient(120%_80%_at_50%_-10%,#1f3655_0%,#12233a_45%,#0a1424_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-line-grid opacity-70 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]" />
      <div aria-hidden className="absolute -right-40 top-[-10%] -z-10 size-[720px] rounded-full bg-brand-sky/20 blur-[140px]" />
      <div aria-hidden className="absolute -left-40 bottom-[-20%] -z-10 size-[560px] rounded-full bg-navy-600/40 blur-[140px]" />
      <CircuitTraces className="-z-10 text-brand-sky/70" />

      <div className="container-x relative grid min-h-[100svh] grid-cols-1 items-center gap-14 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-20 lg:pt-32">
        {/* Copy */}
        <div className="max-w-2xl">
          <Reveal delay={0.08}>
            <h1
              id="hero-heading"
              className="text-balance text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.4rem]"
            >
              One national pathway from <span className="text-gradient-sky">research to deployment</span>
              <span className="text-brand-sky">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-pretty text-[17px] leading-relaxed text-white/72 sm:text-lg">
              The <strong className="font-semibold text-white">{siteConfig.fullName}</strong> unites the
              Northeast and Midwest into a single ecosystem of more than 600 organizations, moving
              emerging microelectronics from the lab to domestic prototyping, manufacturing, and
              operational use.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#hubs" variant="sky" size="lg">
                Explore the MAIN Hub
                <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
              </Button>
              <Button href={`/news/${pressRelease.slug}`} variant="outline-light" size="lg">
                Read the announcement
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.34}>
            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                Bringing together
              </p>
              <ul className="mt-3 flex flex-wrap gap-2.5">
                {legacyHubs.map((hub) => (
                  <li key={hub.id}>
                    <a
                      href={hub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-dark group inline-flex items-center gap-2.5 rounded-full py-2 pl-3.5 pr-3 text-sm text-white/80 transition-all hover:-translate-y-0.5 hover:text-white"
                    >
                      <span
                        className={
                          hub.accent === "sky"
                            ? "size-1.5 rounded-full bg-brand-sky"
                            : "size-1.5 rounded-full bg-brand-green"
                        }
                        aria-hidden
                      />
                      <span className="font-semibold">{hub.acronym}</span>
                      <span className="hidden text-white/50 sm:inline">{hub.name}</span>
                      <ArrowUpRight className="size-3.5 text-brand-sky transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={0.2} className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <div className="relative aspect-[1.05/1] w-full">
            {/* Glow disc */}
            <div aria-hidden className="absolute left-1/2 top-1/2 size-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,200,234,0.22),rgba(124,200,234,0.06)_55%,transparent_75%)]" />
            {/* Orbit rings */}
            <div aria-hidden className="absolute left-1/2 top-1/2 size-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />
            <div aria-hidden className="absolute left-1/2 top-1/2 size-[66%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-sky/20" />

            {/* Mark */}
            <div className="absolute inset-[12%] flex items-center justify-center animate-float-slow">
              <Mark
                title="MAIN Hub monogram"
                className="h-auto w-full text-white drop-shadow-[0_30px_60px_rgba(124,200,234,0.35)]"
              />
            </div>

            {/* Floating stat chips */}
            {chips.map((chip, i) => (
              <div
                key={chip.label}
                className={`glass-dark absolute flex items-baseline gap-2 rounded-2xl px-4 py-3 shadow-lift animate-float ${chip.className}`}
                style={{ animationDelay: `${i * -2.2}s` }}
              >
                <span className="text-2xl font-extrabold tracking-tight text-white">{chip.value}</span>
                <span className="text-xs font-medium text-white/60">{chip.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Tagline ribbon */}
      <div className="relative border-t border-white/10 bg-navy-950/60 backdrop-blur-sm">
        <div className="container-x flex flex-col gap-3 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium">
            {siteConfig.tagline.map((line, i) => (
              <span key={i} className="mr-3 inline-block">
                {line.text}
                <span className="font-semibold text-white">{line.strong}</span>
                {line.after}
              </span>
            ))}
          </p>
          <a href="#hubs" className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white">
            Scroll to explore
            <span className="relative inline-flex size-6 items-center justify-center rounded-full border border-white/20">
              <ArrowRight className="size-3 rotate-90" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
