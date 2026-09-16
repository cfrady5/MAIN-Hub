import { Atom, Cpu, Radar, Radio, Rocket, ShieldCheck, type LucideIcon } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { technologyAreas, type TechArea } from "@/content/site";

const icons: Record<TechArea["icon"], LucideIcon> = {
  radio: Radio,
  cpu: Cpu,
  rocket: Rocket,
  radar: Radar,
  shield: ShieldCheck,
  atom: Atom,
};

export function Technology() {
  return (
    <section id="technology" className="section-y bg-white" aria-labelledby="technology-heading">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <SectionHeading
              eyebrow="Microelectronics Commons"
              title={<span id="technology-heading">Six critical technology areas</span>}
              lead="MAIN's capabilities span every Microelectronics Commons technical area. Through connections spanning universities, FFRDCs, industry, government, and startups, the Hub helps technologies move from promising research toward domestic manufacturing and operational use."
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:justify-self-end">
            <p className="max-w-xs text-sm leading-relaxed text-navy-700/70 lg:text-right">
              One ecosystem, six critical technology areas, and a stronger pathway from innovation to deployment.
            </p>
          </Reveal>
        </div>

        <RevealGroup as="ul" className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3" stagger={0.07}>
          {technologyAreas.map((area, i) => {
            const Icon = icons[area.icon];
            return (
              <RevealItem as="li" key={area.id} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-navy-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift hover:ring-brand-sky/60">
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 size-36 rounded-full bg-gradient-to-br from-brand-sky/25 to-brand-mint/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative flex items-start justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-navy text-brand-sky shadow-soft transition-colors duration-500 group-hover:bg-navy-600">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <span className="text-xs font-bold tracking-[0.2em] text-navy-200">0{i + 1}</span>
                  </div>
                  <h3 className="relative mt-6 text-xl font-bold tracking-[-0.015em] text-brand-navy">{area.title}</h3>
                  <p className="relative mt-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-navy-600">
                    {area.short}
                  </p>
                  <p className="relative mt-4 text-[15px] leading-relaxed text-navy-700/80">{area.body}</p>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
