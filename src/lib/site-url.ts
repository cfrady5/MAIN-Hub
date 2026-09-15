/**
 * Resolves the canonical site URL for metadata, sitemaps and Open Graph tags.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.mainhub.org).
 * Falls back to the Vercel production URL, then to localhost for development.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
