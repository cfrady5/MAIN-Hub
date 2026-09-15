import { ArrowLeft } from "lucide-react";
import { Mark } from "@/components/brand/Mark";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden bg-navy-950 px-6 text-center text-white">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,#1f3655_0%,#0a1424_70%)]" />
      <Mark className="h-16 w-auto text-brand-sky" />
      <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">404</p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">This page isn&apos;t on the map</h1>
      <p className="mt-3 max-w-md text-white/65">The page you requested doesn&apos;t exist or has moved.</p>
      <Button href="/" variant="sky" size="lg" className="mt-8">
        <ArrowLeft className="size-4" />
        Back to the MAIN Hub
      </Button>
    </main>
  );
}
