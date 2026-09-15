import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { pressRelease } from "@/content/press-release";
import { externalLinks, legacyHubs, siteConfig } from "@/content/site";
import { formatDate } from "@/lib/format";

const releases = [pressRelease];

export function generateStaticParams() {
  return releases.map((r) => ({ slug: r.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const release = releases.find((r) => r.slug === slug);
  if (!release) return {};
  return {
    title: release.title,
    description: release.subtitle,
    alternates: { canonical: `/news/${release.slug}` },
    openGraph: {
      type: "article",
      title: release.title,
      description: release.subtitle,
      url: `/news/${release.slug}`,
      publishedTime: siteConfig.announcementDate,
    },
  };
}

export default async function ReleasePage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const release = releases.find((r) => r.slug === slug);
  if (!release) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: release.title,
    description: release.subtitle,
    datePublished: siteConfig.announcementDate,
    publisher: { "@type": "Organization", name: siteConfig.fullName },
  };

  return (
    <>
      <Navbar initialTone="dark" />
      <main className="bg-white">
        {/* Masthead */}
        <header className="relative isolate overflow-hidden bg-navy-950 pb-16 pt-36 text-white sm:pb-20 sm:pt-40">
          <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(100%_80%_at_80%_0%,#1f3655_0%,#0a1424_60%)]" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-line-grid opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]" />
          <div className="container-x max-w-4xl">
            <Link href="/#news" className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white">
              <ArrowLeft className="size-4" />
              Back to MAIN Hub
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em]">
              <Eyebrow tone="sky">{release.label}</Eyebrow>
              <span className="text-white/40">·</span>
              <time dateTime={siteConfig.announcementDate} className="text-white/60">
                {formatDate(siteConfig.announcementDate)}
              </time>
            </div>
            <h1 className="mt-6 text-balance text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
              {release.title}
              <span className="text-brand-sky">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">{release.subtitle}</p>
          </div>
        </header>

        {/* Body */}
        <article className="container-x max-w-4xl py-14 sm:py-20">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          <div className="flex flex-col gap-7 text-[17px] leading-[1.75] text-navy-800">
            {release.blocks.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2 key={i} className="mt-6 text-2xl font-bold tracking-[-0.02em] text-brand-navy">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <figure key={i} className="my-2 rounded-3xl bg-navy-50 p-7 ring-1 ring-navy-100 sm:p-9">
                    <blockquote className="text-pretty text-[18px] font-medium leading-relaxed text-brand-navy sm:text-xl">
                      “{block.text}”
                    </blockquote>
                    <figcaption className="mt-5 border-t border-navy-200/70 pt-4 text-[14px] text-navy-700/85">
                      <span className="font-bold text-brand-navy">{block.name}</span>, {block.title}
                    </figcaption>
                  </figure>
                );
              }
              const isFirst = i === 0;
              return (
                <p key={i}>
                  {isFirst ? <strong className="font-bold text-brand-navy">{release.dateline} – </strong> : null}
                  {block.text}
                </p>
              );
            })}
          </div>

          <div className="mt-14 rounded-3xl bg-mist p-7 ring-1 ring-navy-100 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-700/60">Media contact</p>
            <p className="mt-3 text-lg font-bold text-brand-navy">{siteConfig.contact.mediaName}</p>
            <p className="text-[15px] text-navy-700/85">{siteConfig.contact.mediaTitle}</p>
            <a href={`mailto:${siteConfig.contact.mediaEmail}`} className="mt-2 inline-block break-all text-[15px] font-semibold text-brand-blue underline-offset-4 hover:underline">
              {siteConfig.contact.mediaEmail}
            </a>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-navy-200/70 pt-5 text-sm">
              <a href={externalLinks.ari} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-navy underline-offset-4 hover:underline">theari.us</a>
              <a href={externalLinks.masstech} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-navy underline-offset-4 hover:underline">masstech.org</a>
              {legacyHubs.map((h) => (
                <a key={h.id} href={h.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-navy underline-offset-4 hover:underline">
                  {h.acronym} website
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button href="/#contact" variant="primary" size="lg">
              Connect with the MAIN Hub
              <ArrowRight className="size-4" />
            </Button>
            <Button href="/#hubs" variant="secondary" size="lg">
              Explore the ecosystem
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
