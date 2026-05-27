import type { Metadata } from "next";
import { FreeMiniReviewForm } from "@/components/forms/FreeMiniReviewForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/seo";

const included = [
  "1 AI-built website, workflow, funnel, automation, or landing page",
  "3-5 practical improvement notes",
  "Basic structure and reliability observations",
  "Basic security-aware and data-flow observations",
  "Suggested next steps",
];

const notIncluded = [
  "Full cybersecurity audit",
  "Penetration testing",
  "Legal or compliance review",
  "Full implementation work",
  "Enterprise security assessment",
];

const audience = [
  "Founders building MVPs with AI tools",
  "Agencies delivering AI-built systems to clients",
  "Freelancers building automations or landing pages",
  "Consultants/coaches using funnels and workflows",
  "Small businesses using forms, webhooks, CRMs, AI tools, or automations",
];

const safetyNotes = [
  "No credentials required for the free mini review",
  "Public links and high-level context only",
  "Sensitive data should never be submitted",
  "Deeper reviews can be scoped separately with proper safeguards",
];

export const metadata: Metadata = createMetadata({
  title: "Free Mini AI System Review | Alkyora",
  description:
    "Get a free mini review of your AI-built website, workflow, funnel, automation, or AI agent. Alkyora provides 3-5 practical improvement notes before you scale.",
  path: "/free-mini-review",
});

export default function FreeMiniReviewPage() {
  return (
    <>
      <section className="aurora-bg relative overflow-hidden py-20 sm:py-24">
        <div className="technical-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-200">Limited free offer</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Get a Free Mini AI System Review
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Have an AI-built website, workflow, funnel, automation, or AI agent? Send it in and get 3-5 practical improvement notes before scaling it.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              AI makes it easy to build fast. But fast systems can still hide broken forms, fragile automations, unclear data flows, weak documentation, or security-aware issues that should be reviewed before launch.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
              This free mini review is designed to give you a quick, practical second look.
            </p>
          </div>
          <FreeMiniReviewForm />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <ReviewList title="Included" items={included} tone="included" />
            <ReviewList title="Not included" items={notIncluded} tone="excluded" />
          </div>
        </Container>
      </section>

      <section className="bg-surface/45 py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="Who it is for"
              title="Built for practical AI builders who want a second look."
              copy="The mini review is intentionally focused: one system, a short set of useful notes, and suggested next steps before you launch or scale."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {audience.map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-background/60 p-5">
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="Submission safety"
              title="How we keep this safe"
              copy="The free mini review is intentionally scoped for public information and high-level context, so you can request a useful second look without exposing sensitive systems."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {safetyNotes.map((item) => (
                <div key={item} className="rounded-lg border border-cyan-300/15 bg-cyan-300/8 p-5">
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <p className="rounded-lg border border-cyan-300/20 bg-cyan-300/8 p-5 text-sm leading-7 text-slate-300">
            This free mini review provides practical observations only. It does not replace a full cybersecurity audit, legal compliance review, penetration test, or enterprise security assessment.
          </p>
        </Container>
      </section>
    </>
  );
}

function ReviewList({ title, items, tone }: { title: string; items: string[]; tone: "included" | "excluded" }) {
  return (
    <div className="glass-border rounded-lg p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
            <span
              className={
                tone === "included"
                  ? "mt-2 h-2 w-2 shrink-0 rounded-full bg-success"
                  : "mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-500"
              }
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
