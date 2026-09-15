import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * Validates the submission and forwards it as JSON to CONTACT_WEBHOOK_URL
 * (for example a Zapier/Make hook, a CRM intake endpoint, or a Slack incoming
 * webhook). When the variable is not set the API replies with `code:
 * "unconfigured"` so the UI can show the email fallback instead of a false
 * success message.
 */

const MAX = { name: 120, email: 200, organization: 200, organizationType: 80, interest: 80, message: 4000 } as const;

type Payload = {
  name: string;
  email: string;
  organization: string;
  organizationType: string;
  interest: string;
  message: string;
};

function str(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: real users never fill this field.
  if (str(body.company_website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const payload: Payload = {
    name: str(body.name, MAX.name),
    email: str(body.email, MAX.email),
    organization: str(body.organization, MAX.organization),
    organizationType: str(body.organizationType, MAX.organizationType),
    interest: str(body.interest, MAX.interest),
    message: str(body.message, MAX.message),
  };

  const missing = (["name", "email", "organization", "organizationType", "interest"] as const).filter(
    (k) => !payload[k],
  );
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Please complete the required fields: ${missing.join(", ")}.` },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json(
      { ok: false, code: "unconfigured", error: "Contact form is not configured." },
      { status: 503 },
    );
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json", "User-Agent": "main-hub-site/1.0" },
      body: JSON.stringify({
        source: "main-hub-website",
        submittedAt: new Date().toISOString(),
        ...payload,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error("Contact webhook responded", res.status);
      return NextResponse.json({ ok: false, error: "We couldn't deliver your message. Please try again." }, { status: 502 });
    }
  } catch (err) {
    console.error("Contact webhook failed", err);
    return NextResponse.json({ ok: false, error: "We couldn't deliver your message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
