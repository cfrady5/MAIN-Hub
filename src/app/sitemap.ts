import type { MetadataRoute } from "next";
import { pressRelease } from "@/content/press-release";
import { siteConfig } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return [
    { url: `${base}/`, lastModified: new Date(siteConfig.announcementDate), changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/news/${pressRelease.slug}`,
      lastModified: new Date(siteConfig.announcementDate),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
