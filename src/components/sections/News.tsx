import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pressRelease } from "@/content/press-release";
import { siteConfig } from "@/content/site";
import { formatDate } from "@/lib/format";

export function News() {
  return (
    <section id="news" className="section-y bg-mist" aria-labelledby="news-heading">
      <div className="container-x">
        <Reveal>
          <SectionHeading eyebrow="Newsroom" title={<span id="news-heading">Announcement</span>} />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Reveal delay={0.05} className="lg:col-span-8">
            <Link
              href={`/news/${pressRelease.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-4xl bg-brand-navy p-8 text-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-10"
            >
              <div aria-hidden className="absolute -right-24 -top-24 size-80 rounded-full bg-brand-sky/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div aria-hidden className="absolute inset-0 bg-line-grid opacity-40 [mask-image:linear-gradient(to_left,black,transparent_60%)]" />
              <div className="relative flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-sky">
                <span>Press release</span>
                <span className="size-1 rounded-full bg-white/40" aria-hidden />
                <time dateTime={siteConfig.announcementDate} className="text-white/60">
                  {formatDate(siteConfig.announcementDate)}
                </time>
              </div>
              <h3 className="relative mt-5 max-w-2xl text-balance text-2xl font-bold leading-tight tracking-[-0.02em] sm:text-3xl">
                {pressRelease.title}
              </h3>
              <p className="relative mt-4 max-w-2xl text-[15.5px] leading-relaxed text-white/70">{pressRelease.subtitle}</p>
              <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Read the full release
                <ArrowRight className="size-4 text-brand-sky transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-4">
            <div className="flex h-full flex-col rounded-4xl bg-white p-8 ring-1 ring-navy-100">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-navy-50 text-brand-navy">
                <Mail className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-[-0.015em] text-brand-navy">Media inquiries</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/75">
                Reporters and editors can reach the MAIN Hub communications team directly.
              </p>
              <div className="mt-auto border-t border-line pt-5">
                <p className="text-base font-semibold text-brand-navy">{siteConfig.contact.mediaName}</p>
                <p className="text-[13px] text-navy-700/75">{siteConfig.contact.mediaTitle}</p>
                <a
                  href={`mailto:${siteConfig.contact.mediaEmail}`}
                  className="mt-3 inline-block break-all text-sm font-semibold text-brand-navy underline decoration-brand-sky decoration-2 underline-offset-4 hover:underline"
                >
                  {siteConfig.contact.mediaEmail}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
