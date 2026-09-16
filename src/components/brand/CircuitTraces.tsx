import { cn } from "@/lib/cn";

/**
 * Decorative circuit-trace field inspired by the monogram's traces.
 * Purely presentational; positioned absolutely by the parent.
 */
export function CircuitTraces({ className, animated = true }: { className?: string; animated?: boolean }) {
  const traces = [
    "M-40 120 H220 L300 200 H520 L600 280 H820",
    "M-40 320 H160 L240 400 H420 L500 480 H760 L840 560 H1100",
    "M1480 80 H1240 L1160 160 H980 L900 240 H700",
    "M1480 620 H1280 L1200 540 H1000 L920 460 H720",
    "M120 900 V720 L200 640 V520 L280 440 V300",
    "M1360 920 V760 L1280 680 V560 L1200 480 V360",
    "M-40 760 H120 L180 700 H360 L440 620 H620",
    "M1480 340 H1320 L1260 400 H1080 L1000 480 H860",
  ];
  const nodes: Array<[number, number]> = [
    [820, 280], [1100, 560], [700, 240], [720, 460], [280, 300], [1200, 360], [620, 620], [860, 480],
    [520, 200], [420, 400], [980, 160], [1000, 540],
  ];
  return (
    <svg
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <linearGradient id="trace-glow" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#7cc8ea" stopOpacity="0" />
          <stop offset="0.5" stopColor="#7cc8ea" stopOpacity="0.9" />
          <stop offset="1" stopColor="#7cc8ea" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.28">
        {traces.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      {animated ? (
        <g stroke="url(#trace-glow)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {traces.slice(0, 5).map((d, i) => (
            <path
              key={`glow-${d}`}
              d={d}
              strokeDasharray="60 340"
              className="animate-dash"
              style={{ animationDelay: `${i * -1.3}s`, animationDuration: `${7 + i * 1.4}s` }}
            />
          ))}
        </g>
      ) : null}
      <g fill="#0a1424" stroke="currentColor" strokeWidth="1.5" opacity="0.6">
        {nodes.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="5" />
        ))}
      </g>
    </svg>
  );
}
