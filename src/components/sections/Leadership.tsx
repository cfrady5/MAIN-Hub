import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { leadership } from "@/content/site";

function QuoteGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 36" fill="currentColor" aria-hidden className={className}>
      <path d="M0 36V21.6C0 9.6 6.4 2.4 19.2 0l2.4 5.6C14.4 7.6 10.8 12 10.8 18h8.4v18H0Zm28.8 0V21.6C28.8 9.6 35.2 2.4 48 0l-2.4 5.6c-7.2 2-10.8 6.4-10.8 12.4h8.4v18H28.8Z" />
    </svg>
  );
}

export function Leadership() {
  return (
    <section id="leadership" className="section-y bg-white" aria-labelledby="leadership-heading">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Leadership"
            title={<span id="leadership-heading">In their words</span>}
            lead="Leaders from both hubs and their operating organizations on why one national ecosystem matters."
          />
        </Reveal>

        <RevealGroup as="ul" className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3" stagger={0.1}>
          {leadership.map((q) => (
            <RevealItem as="li" key={q.name} className="h-full">
              <figure className="relative flex h-full flex-col rounded-3xl bg-navy-50 p-8 ring-1 ring-navy-100 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-lift">
                <QuoteGlyph className="h-7 w-auto text-brand-green/40" />
                <blockquote className="mt-5 flex-1">
                  <p className="text-pretty text-[16px] leading-relaxed text-navy-800">“{q.quote}”</p>
                </blockquote>
                <figcaption className="mt-7 border-t border-navy-200/70 pt-5">
                  <p className="text-base font-bold text-brand-navy">{q.name}</p>
                  <p className="mt-1 text-[13px] leading-snug text-navy-700/80">{q.title}</p>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-navy-600">{q.org}</p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
