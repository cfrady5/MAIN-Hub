import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Mark } from "@/components/brand/Mark";
import { AnchorLink } from "@/components/ui/AnchorLink";
import { pressRelease } from "@/content/press-release";
import { legacyHubs, navLinks, operators, siteConfig } from "@/content/site";

const funding =
  "Funded through Microelectronics Commons, established through the Strategic & Spectrum Missions Advanced Resilient Trusted Systems (S²MARTS) Other Transaction Agreement established by the Naval Surface Warfare Center (NSWC), Crane Division, and managed by the National Security Technology Accelerator (NSTXL).";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">{title}</p>
      <ul className="mt-4 flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

const linkClass = "group inline-flex items-center gap-1.5 text-[14.5px] text-white/75 transition-colors hover:text-white";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <Mark aria-hidden className="pointer-events-none absolute -bottom-24 -right-16 h-[360px] w-auto text-white/[0.03]" />
      <div className="container-x relative">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 py-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo tone="light" withTagline />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
              {siteConfig.tagline.map((line, i) => (
                <span key={i} className="block">
                  {line.text}
                  <span className="font-semibold text-white/90">{line.strong}</span>
                  {line.after}
                </span>
              ))}
            </p>
            <p className="mt-6 text-[13px] text-white/45">
              Formed through the consolidation of the NEMC and SCMC Microelectronics Commons hubs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <Column title="Explore">
              {navLinks.map((l) => (
                <li key={l.section}>
                  <AnchorLink section={l.section} className={linkClass}>{l.label}</AnchorLink>
                </li>
              ))}
              <li>
                <AnchorLink section="contact" className={linkClass}>Contact</AnchorLink>
              </li>
              <li>
                <Link href={`/news/${pressRelease.slug}`} className={linkClass}>Press release</Link>
              </li>
            </Column>
            <Column title="Legacy hubs">
              {legacyHubs.map((hub) => (
                <li key={hub.id}>
                  <a href={hub.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {hub.acronym}
                    <ArrowUpRight className="size-3.5 text-brand-sky opacity-70 transition-opacity group-hover:opacity-100" />
                  </a>
                  <p className="text-xs text-white/40">{hub.name}</p>
                </li>
              ))}
            </Column>
            <Column title="Operators">
              {operators.map((o) => (
                <li key={o.short}>
                  <a href={o.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {o.short}
                    <ArrowUpRight className="size-3.5 text-brand-sky opacity-70 transition-opacity group-hover:opacity-100" />
                  </a>
                  <p className="text-xs text-white/40">{o.name}</p>
                </li>
              ))}
              <li className="hidden pt-2 sm:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">Media</p>
                <a href={`mailto:${siteConfig.contact.mediaEmail}`} className={`${linkClass} mt-2 [overflow-wrap:anywhere]`}>
                  {siteConfig.contact.mediaEmail}
                </a>
              </li>
            </Column>
            <div className="col-span-2 sm:hidden">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">Media</p>
              <a href={`mailto:${siteConfig.contact.mediaEmail}`} className={`${linkClass} mt-3`}>
                {siteConfig.contact.mediaEmail}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-8 lg:flex-row lg:items-start lg:justify-between">
          <p className="max-w-3xl text-[12px] leading-relaxed text-white/40">{funding}</p>
          <p className="shrink-0 text-[12px] text-white/50">
            © {year} {siteConfig.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
