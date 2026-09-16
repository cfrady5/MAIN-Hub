import { ArrowUpRight, MapPin } from "lucide-react";
import { Mark } from "@/components/brand/Mark";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { legacyHubs, type LegacyHub } from "@/content/site";
import { cn } from "@/lib/cn";

function HubCard({ hub, delay }: { hub: LegacyHub; delay: number }) {
  const sky = hub.accent === "sky";
  return (
    <Reveal delay={delay} as="article" className="h-full">
      <div
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-soft ring-1 ring-navy-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-9",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "absolute -right-16 -top-16 size-48 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100",
            sky ? "bg-brand-sky/25 opacity-70" : "bg-brand-green/20 opacity-60",
          )}
        />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <span
              className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em]",
                sky ? "bg-navy-100 text-brand-navy" : "bg-brand-green/10 text-brand-green",
              )}
            >
              {hub.acronym}
            </span>
            <h3 className="mt-4 text-balance text-2xl font-bold leading-tight tracking-[-0.02em] text-brand-navy">
              {hub.name}
            </h3>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-mist px-3 py-1.5 text-xs font-medium text-navy-700">
            <MapPin className="size-3.5" />
            {hub.region}
          </span>
        </div>

        <p className="relative mt-3 text-sm text-navy-700/80">
          Operated by{" "}
          <a
            href={hub.operatorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-navy underline decoration-brand-sky decoration-2 underline-offset-4 hover:decoration-brand-navy"
          >
            {hub.operator}
          </a>{" "}
          · {hub.state}
        </p>

        <ul className="relative mt-6 flex flex-col gap-3 border-t border-line pt-6">
          {hub.strengths.map((s) => (
            <li key={s} className="flex items-start gap-3 text-[15px] leading-snug text-navy-800">
              <span className={cn("mt-2 size-2 shrink-0", sky ? "bg-brand-sky" : "bg-brand-green")} aria-hidden />
              {s}
            </li>
          ))}
        </ul>

        <div className="relative mt-auto pt-8">
          <a
            href={hub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-between rounded-2xl bg-brand-navy px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-900"
          >
            <span>Visit the {hub.acronym} website</span>
            <ArrowUpRight className="size-4 text-brand-sky transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <p className="mt-3 truncate text-center text-xs text-navy-700/60">{hub.url.replace(/^https?:\/\//, "")}</p>
        </div>
      </div>
    </Reveal>
  );
}

function Merge() {
  return (
    <Reveal delay={0.16} className="flex items-center justify-center lg:h-full">
      <div className="relative flex w-full items-center justify-center lg:h-full lg:w-auto lg:flex-col">
        {/* connectors */}
        <div aria-hidden className="hidden lg:block lg:h-full lg:w-px lg:bg-gradient-to-b lg:from-transparent lg:via-navy-300 lg:to-transparent" />
        <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-navy-300 to-transparent lg:hidden" />
        <div className="absolute flex flex-col items-center gap-3">
          <div className="relative flex size-24 items-center justify-center rounded-full bg-brand-navy text-white shadow-lift ring-8 ring-white">
            <span aria-hidden className="absolute inset-0 rounded-full bg-brand-sky/40 animate-pulse-ring" />
            <Mark className="relative h-10 w-auto text-brand-sky" />
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-brand-navy shadow-soft ring-1 ring-navy-100">
            MAIN Hub
          </span>
        </div>
      </div>
    </Reveal>
  );
}

export function LegacyHubs() {
  return (
    <section id="hubs" className="relative section-y bg-mist" aria-labelledby="hubs-heading">
      <div aria-hidden className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />
      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            eyebrow="Two hubs. One ecosystem"
            title={<span id="hubs-heading">NEMC and Silicon Crossroads are now the MAIN Hub</span>}
            lead="Two established Microelectronics Commons hubs have consolidated into a single national platform. Their networks, capabilities, and partnerships now operate as one, and both legacy sites remain available while the transition continues."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-[1fr_140px_1fr] lg:gap-4">
          <HubCard hub={legacyHubs[0]} delay={0.05} />
          <div className="relative py-10 lg:py-0">
            <Merge />
          </div>
          <HubCard hub={legacyHubs[1]} delay={0.1} />
        </div>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <Eyebrow className="text-center">Formerly two regional hubs. Now one national ecosystem</Eyebrow>
        </Reveal>
      </div>
    </section>
  );
}
