import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pathway } from "@/content/site";

const focus = [
  "Exceptional performance",
  "Reliability",
  "Security",
  "Power handling",
  "Extreme environments",
];

export function Pathway() {
  return (
    <section id="pathway" className="relative section-y bg-mist" aria-labelledby="pathway-heading">
      <div aria-hidden className="absolute inset-0 bg-dot-grid [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />
      <div className="container-x relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Capabilities"
              title={<span id="pathway-heading">From breakthrough research to fielded capability</span>}
              lead="MAIN connects innovators with the expertise, infrastructure, industry relationships, and mission partners needed at every stage, engaging the right capabilities wherever they exist rather than being constrained by geography."
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:pb-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-700/60">
              Where conventional approaches fall short
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {focus.map((f) => (
                <li
                  key={f}
                  className="rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-brand-navy ring-1 ring-navy-100"
                >
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="relative mt-14 lg:mt-20">
          {/* Connecting rail */}
          <div aria-hidden className="absolute left-[1.35rem] top-0 h-full w-px bg-gradient-to-b from-brand-sky via-navy-300 to-transparent lg:left-0 lg:top-[1.375rem] lg:h-px lg:w-full lg:bg-gradient-to-r" />
          <RevealGroup as="ol" className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6" stagger={0.12}>
            {pathway.map((step, i) => (
              <RevealItem as="li" key={step.title} className="relative pl-16 lg:pl-0 lg:pt-16">
                <span className="absolute left-0 top-0 flex size-11 items-center justify-center rounded-full bg-brand-navy text-[13px] font-bold text-white shadow-lift ring-4 ring-mist">
                  {step.step}
                </span>
                <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <h3 className="text-xl font-bold tracking-[-0.015em] text-brand-navy">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-700/80">{step.body}</p>
                  {i < pathway.length - 1 ? (
                    <span className="mt-5 inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-600">
                      Next: {pathway[i + 1].title}
                    </span>
                  ) : (
                    <span className="mt-5 inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-green">
                      Mission impact
                    </span>
                  )}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
