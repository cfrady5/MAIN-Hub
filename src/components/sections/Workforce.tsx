import { ArrowUpRight, Check } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { operators, workforce } from "@/content/site";

export function Workforce() {
  return (
    <section id="workforce" className="section-y border-t border-line bg-white" aria-labelledby="workforce-heading">
      <div className="container-x">
        {/* Workforce */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SectionHeading
              eyebrow="People and talent"
              title={<span id="workforce-heading">{workforce.heading}</span>}
              lead={workforce.body}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-4xl bg-brand-navy p-8 text-white shadow-lift sm:p-10">
              <div aria-hidden className="absolute -right-20 -top-20 size-64 rounded-full bg-brand-green/30 blur-3xl" />
              <div aria-hidden className="absolute -bottom-24 -left-16 size-64 rounded-full bg-brand-sky/20 blur-3xl" />
              <p className="relative text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                A workforce ecosystem that scales nationally
              </p>
              <ul className="relative mt-6 flex flex-col gap-4">
                {workforce.points.map((p) => (
                  <li key={p} className="flex items-start gap-4">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-[16px] leading-snug text-white/90">{p}</span>
                  </li>
                ))}
              </ul>
              <p className="relative mt-8 border-t border-white/10 pt-6 text-sm text-white/60">
                The goal is a workforce ecosystem that can scale nationally while adapting to regional needs.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Operators */}
        <div className="mt-24 lg:mt-28">
          <Reveal>
            <SectionHeading
              eyebrow="Operated by"
              title="Two organizations, one operating partnership"
              lead="ARI and MassTech are bringing together their respective networks, capabilities, and partnerships to support the continued growth and operation of the MAIN Hub as a single, nationally focused ecosystem."
            />
          </Reveal>
          <RevealGroup as="ul" className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.1}>
            {operators.map((o) => (
              <RevealItem as="li" key={o.short} className="h-full">
                <a
                  href={o.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-3xl bg-white p-8 ring-1 ring-navy-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift hover:ring-brand-sky/60"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex rounded-full bg-navy-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-navy">
                        {o.short}
                      </span>
                      <h3 className="mt-4 text-2xl font-bold tracking-[-0.02em] text-brand-navy">{o.name}</h3>
                      <p className="mt-1 text-sm font-medium text-brand-green">{o.role}</p>
                    </div>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-mist text-brand-navy transition-colors group-hover:bg-brand-navy group-hover:text-white">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="mt-5 text-[15px] leading-relaxed text-navy-700/80">{o.body}</p>
                  <p className="mt-6 text-xs font-medium text-navy-700/60">{o.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</p>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
