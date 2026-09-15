import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ecosystem } from "@/content/site";

const marqueeTerms = [
  "Startups",
  "Emerging technology companies",
  "Defense industry",
  "Commercial industry",
  "Government laboratories",
  "FFRDCs",
  "Universities",
  "Massachusetts",
  "Indiana",
  "Prototyping",
  "Manufacturing",
  "Testing",
  "Workforce",
  "Mission partners",
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="section-y overflow-hidden border-t border-line bg-mist" aria-labelledby="ecosystem-heading">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="The ecosystem"
            align="center"
            title={<span id="ecosystem-heading">A broad community of more than 600 organizations</span>}
            lead="At the center of the MAIN Hub is a community of startups, emerging companies, and other non-traditional innovators, connected to defense and commercial industry, government laboratories, FFRDCs, and academic institutions."
          />
        </Reveal>

        <RevealGroup as="ul" className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5" stagger={0.06}>
          {ecosystem.map((e, i) => (
            <RevealItem as="li" key={e.title} className="h-full">
              <div className="group flex h-full flex-col rounded-3xl bg-white p-6 ring-1 ring-navy-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <span className="text-[2rem] font-extrabold leading-none tracking-[-0.04em] text-navy-200 transition-colors group-hover:text-brand-green">
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-[17px] font-bold leading-snug tracking-[-0.01em] text-brand-navy">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/75">{e.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {/* Marquee */}
      <div className="marquee-pause relative mt-16 border-y border-line bg-white py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" aria-hidden>
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...marqueeTerms, ...marqueeTerms].map((term, i) => (
            <span key={`${term}-${i}`} className="inline-flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.2em] text-navy-700/60">
              {term}
              <span className="size-1.5 bg-brand-green" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
