import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { corridor } from "@/content/site";

/** Deterministic pseudo-random generator so server and client render identical dot fields. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function networkDots(count: number) {
  const rand = mulberry32(2026);
  const dots: Array<{ x: number; y: number; r: number; o: number }> = [];
  for (let i = 0; i < count; i++) {
    const x = 60 + rand() * 1080;
    // bias dots toward the corridor band, with a wide national spread
    const y = 80 + rand() * 300;
    const r = 1.2 + rand() * 1.8;
    const o = 0.18 + rand() * 0.5;
    dots.push({ x, y, r, o });
  }
  return dots;
}

const DOTS = networkDots(140);
const ROUTE = "M150 250 C 330 170, 420 330, 600 230 S 870 130, 1050 210";

function CorridorGraphic() {
  return (
    <svg
      viewBox="0 0 1200 460"
      className="h-auto w-full"
      role="img"
      aria-labelledby="corridor-title corridor-desc"
    >
      <title id="corridor-title">Massachusetts to Indiana innovation corridor</title>
      <desc id="corridor-desc">
        A stylized map showing the MAIN Hub corridor connecting the Midwest and Northeast, with a
        national field of connected organizations.
      </desc>
      <defs>
        <linearGradient id="corridor-line" x1="0" x2="1">
          <stop offset="0" stopColor="#279643" />
          <stop offset="0.5" stopColor="#38bdf8" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="corridor-pulse" x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="node-glow">
          <stop offset="0" stopColor="#38bdf8" stopOpacity="0.55" />
          <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="node-glow-green">
          <stop offset="0" stopColor="#279643" stopOpacity="0.6" />
          <stop offset="1" stopColor="#279643" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Organization field */}
      <g fill="#7dd3fc">
        {DOTS.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.r} opacity={d.o} />
        ))}
      </g>

      {/* Faint spokes to imply national reach */}
      <g stroke="#38bdf8" strokeOpacity="0.14" strokeWidth="1">
        {DOTS.filter((_, i) => i % 9 === 0).map((d, i) => {
          const toWest = i % 2 === 0;
          return <line key={i} x1={d.x} y1={d.y} x2={toWest ? 150 : 1050} y2={toWest ? 250 : 210} />;
        })}
      </g>

      {/* Corridor route */}
      <path d={ROUTE} fill="none" stroke="url(#corridor-line)" strokeWidth="3" strokeLinecap="round" />
      <path
        d={ROUTE}
        fill="none"
        stroke="url(#corridor-pulse)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="70 900"
        className="animate-dash"
        style={{ animationDuration: "6s" }}
      />

      {/* Midwest node */}
      <circle cx="150" cy="250" r="70" fill="url(#node-glow-green)" />
      <circle cx="150" cy="250" r="14" fill="#0a1424" stroke="#279643" strokeWidth="3" />
      <circle cx="150" cy="250" r="5" fill="#279643" />
      <g className="hidden sm:block">
        <text x="150" y="312" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="700">
          {corridor.west.place}
        </text>
        <text x="150" y="336" textAnchor="middle" fill="#7dd3fc" fontSize="12" fontWeight="600" letterSpacing="2">
          {corridor.west.label.toUpperCase()} · {corridor.west.hub}
        </text>
      </g>

      {/* Northeast node */}
      <circle cx="1050" cy="210" r="70" fill="url(#node-glow)" />
      <circle cx="1050" cy="210" r="14" fill="#0a1424" stroke="#38bdf8" strokeWidth="3" />
      <circle cx="1050" cy="210" r="5" fill="#38bdf8" />
      <g className="hidden sm:block">
        <text x="1050" y="272" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="700">
          {corridor.east.place}
        </text>
        <text x="1050" y="296" textAnchor="middle" fill="#7dd3fc" fontSize="12" fontWeight="600" letterSpacing="2">
          {corridor.east.label.toUpperCase()} · {corridor.east.hub}
        </text>
      </g>

      {/* Midpoint label */}
      <g transform="translate(600 230)">
        <circle r="9" fill="#0a1424" stroke="#38bdf8" strokeWidth="2.5" />
        <circle r="3" fill="#38bdf8" />
        <text y="-20" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="600" letterSpacing="2" className="hidden sm:block">
          ONE NATIONAL ECOSYSTEM
        </text>
      </g>
    </svg>
  );
}

export function Corridor() {
  return (
    <section
      id="corridor"
      className="relative isolate section-y overflow-hidden bg-navy-950 text-white"
      aria-labelledby="corridor-heading"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(90%_60%_at_50%_100%,#1f3655_0%,#0a1424_70%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-line-grid opacity-50 [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]" />

      <div className="container-x">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="National reach"
            align="center"
            title={<span id="corridor-heading">A strategic corridor from Massachusetts to Indiana</span>}
            lead="MAIN links the Northeast's concentration of semiconductor development with the Midwest's defense-transition and manufacturing strengths, while connecting organizations across a national ecosystem."
          />
        </Reveal>

        <Reveal delay={0.12} className="mt-12 lg:mt-16">
          <div className="glass-dark rounded-4xl p-3 sm:p-6">
            <CorridorGraphic />
            <div className="mt-2 flex items-center gap-3 px-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.14em] sm:hidden">
              <span className="flex items-center gap-2 whitespace-nowrap text-white">
                <span className="size-2 rounded-full bg-brand-green" aria-hidden />
                {corridor.west.place}
              </span>
              <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-brand-green via-white/30 to-brand-sky" />
              <span className="flex items-center gap-2 whitespace-nowrap text-white">
                {corridor.east.place}
                <span className="size-2 rounded-full bg-brand-sky" aria-hidden />
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[corridor.west, corridor.east].map((side, i) => (
            <Reveal key={side.label} delay={0.15 + i * 0.08}>
              <div className="glass-dark rounded-3xl p-7">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                    {side.label} · {side.place}
                  </p>
                  <span
                    className={
                      side.hub === "SCMC"
                        ? "rounded-full bg-brand-green/20 px-2.5 py-1 text-[11px] font-bold text-emerald-300"
                        : "rounded-full bg-brand-sky/15 px-2.5 py-1 text-[11px] font-bold text-brand-sky"
                    }
                  >
                    {side.hub}
                  </span>
                </div>
                <ul className="mt-5 flex flex-col gap-3">
                  {side.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15px] text-white/85">
                      <span className={side.hub === "SCMC" ? "size-2 bg-brand-green" : "size-2 bg-brand-sky"} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
