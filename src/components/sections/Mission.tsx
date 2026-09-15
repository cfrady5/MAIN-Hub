import { Mark } from "@/components/brand/Mark";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pillars, siteConfig } from "@/content/site";

export function Mission() {
  return (
    <section id="about" className="relative section-y overflow-hidden bg-white" aria-labelledby="mission-heading">
      <Mark
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-[520px] w-auto -translate-y-1/2 text-navy-50 lg:-right-10"
      />
      <div className="container-x relative grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="Our mission"
              title={<span id="mission-heading">Built to move innovation toward use</span>}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-8 border-l-2 border-brand-sky pl-6">
              <p className="text-pretty text-xl font-medium leading-snug tracking-[-0.01em] text-brand-navy sm:text-2xl">
                {siteConfig.mission}
              </p>
            </blockquote>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-md text-[15.5px] leading-relaxed text-navy-700/80">
              The Hub connects technology with mission and market impact, aligning technical performance,
              affordability, manufacturability, and development milestones with the requirements of the
              warfighter and the realities of the microelectronics supply chain.
            </p>
          </Reveal>
        </div>

        <RevealGroup as="ol" className="flex flex-col divide-y divide-line lg:col-span-7 lg:pl-8">
          {pillars.map((p, i) => (
            <RevealItem as="li" key={p.title} className="group grid grid-cols-[3.5rem_1fr] gap-4 py-8 first:pt-0 last:pb-0 sm:grid-cols-[5rem_1fr] sm:gap-6">
              <span className="text-[2.6rem] font-extrabold leading-none tracking-[-0.04em] text-navy-200 transition-colors group-hover:text-brand-sky sm:text-[3.4rem]">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-xl font-bold tracking-[-0.015em] text-brand-navy sm:text-2xl">{p.title}</h3>
                <p className="mt-3 max-w-xl text-[15.5px] leading-relaxed text-navy-700/80">{p.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
