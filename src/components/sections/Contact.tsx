"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { CircuitTraces } from "@/components/brand/CircuitTraces";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { interestAreas, organizationTypes, siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

const field =
  "w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3.5 text-[15px] text-white placeholder:text-white/35 transition-colors focus:border-brand-sky/70 focus:bg-white/10 focus:outline-none";
const label = "mb-2 block text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; code?: string };
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
        return;
      }
      if (json.code === "unconfigured") {
        setStatus("unconfigured");
        return;
      }
      setStatus("error");
      setMessage(json.error ?? "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setMessage("We couldn't reach the server. Please try again.");
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate section-y overflow-hidden bg-navy-950 text-white"
      aria-labelledby="contact-heading"
    >
      <div aria-hidden className="absolute inset-0 -z-20 bg-[radial-gradient(100%_70%_at_100%_0%,#1f3655_0%,#0a1424_60%)]" />
      <div aria-hidden className="absolute -left-40 top-1/3 -z-10 size-[520px] rounded-full bg-brand-blue/30 blur-[140px]" />
      <CircuitTraces className="-z-10 text-brand-sky/50" animated={false} />

      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Get involved"
              title={<span id="contact-heading">Connect with the MAIN Hub</span>}
              lead="Whether you are building a technology, operating a facility, funding innovation, or preparing the next generation of talent, there is a place for you in the ecosystem. Tell us about your organization and we will follow up."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-dark mt-10 rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-brand-sky">
                  <Mail className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Media and press</p>
                  <p className="mt-1 text-sm text-white/60">
                    {siteConfig.contact.mediaName}, {siteConfig.contact.mediaTitle}
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.mediaEmail}`}
                    className="mt-2 inline-block break-all text-sm font-semibold text-brand-sky underline-offset-4 hover:underline"
                  >
                    {siteConfig.contact.mediaEmail}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="lg:col-span-7">
          <div className="glass-dark rounded-4xl p-6 shadow-lift sm:p-9">
            {status === "success" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-brand-green/20 text-emerald-300">
                  <CheckCircle2 className="size-8" />
                </span>
                <h3 className="mt-6 text-2xl font-bold tracking-tight">Thank you</h3>
                <p className="mt-3 max-w-sm text-white/70">
                  Your message has been received. A member of the MAIN Hub team will be in touch.
                </p>
                <Button variant="outline-light" className="mt-8" onClick={() => setStatus("idle")}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate={false} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Honeypot: bots fill it, humans never see it */}
                <div className="hidden" aria-hidden>
                  <label htmlFor="company_website">Website</label>
                  <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <label htmlFor="name" className={label}>Full name</label>
                  <input id="name" name="name" required autoComplete="name" className={field} placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className={label}>Work email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="jane@organization.org" />
                </div>
                <div>
                  <label htmlFor="organization" className={label}>Organization</label>
                  <input id="organization" name="organization" required autoComplete="organization" className={field} placeholder="Organization name" />
                </div>
                <div>
                  <label htmlFor="organizationType" className={label}>Organization type</label>
                  <select id="organizationType" name="organizationType" required defaultValue="" className={cn(field, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2338bdf8%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10")}>
                    <option value="" disabled className="text-navy-900">Select one</option>
                    {organizationTypes.map((t) => (
                      <option key={t} value={t} className="text-navy-900">{t}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="interest" className={label}>I&apos;m interested in</label>
                  <select id="interest" name="interest" required defaultValue="" className={cn(field, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2338bdf8%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10")}>
                    <option value="" disabled className="text-navy-900">Select one</option>
                    {interestAreas.map((t) => (
                      <option key={t} value={t} className="text-navy-900">{t}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={label}>Message</label>
                  <textarea id="message" name="message" rows={4} className={cn(field, "resize-y")} placeholder="Tell us about your technology, capability, or interest in the MAIN Hub." />
                </div>

                <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-relaxed text-white/45">
                    By submitting, you agree to be contacted by the MAIN Hub team about your inquiry.
                  </p>
                  <Button type="submit" variant="sky" size="lg" disabled={status === "submitting"} className="sm:shrink-0">
                    {status === "submitting" ? "Sending…" : "Send message"}
                    <ArrowRight className="size-4" />
                  </Button>
                </div>

                {status === "error" ? (
                  <p role="alert" className="sm:col-span-2 rounded-2xl bg-red-500/15 px-4 py-3 text-sm text-red-200 ring-1 ring-red-400/30">
                    {message}
                  </p>
                ) : null}
                {status === "unconfigured" ? (
                  <p role="alert" className="sm:col-span-2 rounded-2xl bg-white/8 px-4 py-3 text-sm text-white/80 ring-1 ring-white/15">
                    Online submissions are not active yet. Please email{" "}
                    <a href={`mailto:${siteConfig.contact.mediaEmail}`} className="font-semibold text-brand-sky underline-offset-4 hover:underline">
                      {siteConfig.contact.mediaEmail}
                    </a>{" "}
                    and we will follow up.
                  </p>
                ) : null}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
