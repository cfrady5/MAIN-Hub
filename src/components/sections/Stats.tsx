import { Counter } from "@/components/ui/Counter";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { stats } from "@/content/site";

export function Stats() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white" aria-label="MAIN Hub by the numbers">
      <div aria-hidden className="absolute inset-0 -z-10 bg-line-grid opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      <div aria-hidden className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/30 blur-[120px]" />
      <div className="container-x py-16 sm:py-20">
        <RevealGroup as="ul" className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((s) => (
            <RevealItem as="li" key={s.label} className="relative pl-6 before:absolute before:left-0 before:top-1 before:h-[calc(100%-0.5rem)] before:w-px before:bg-gradient-to-b before:from-brand-sky before:to-transparent">
              <p className="text-5xl font-extrabold leading-none tracking-[-0.04em] sm:text-[3.6rem]">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-base font-semibold text-white">{s.label}</p>
              <p className="mt-1 text-sm text-white/55">{s.detail}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
