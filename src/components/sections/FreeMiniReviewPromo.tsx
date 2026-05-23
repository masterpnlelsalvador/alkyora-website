import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reviewPoints = ["Broken forms", "Fragile automations", "Unclear data flows", "Launch-readiness gaps"];

export function FreeMiniReviewPromo() {
  return (
    <section className="bg-surface/45 py-24">
      <Container>
        <div className="grid gap-8 rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="Free mini review"
            title="Get 3-5 practical notes before your AI-built system scales."
            copy="Send in one AI-built website, workflow, funnel, automation, landing page, or AI agent. Alkyora will take a quick, security-aware second look and send practical improvement notes."
          />
          <div className="space-y-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {reviewPoints.map((point) => (
                <div key={point} className="rounded-lg border border-white/10 bg-background/60 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-200">Review signal</p>
                  <p className="mt-2 text-sm font-medium text-white">{point}</p>
                </div>
              ))}
            </div>
            <Button href="/free-mini-review">Get a Free Mini Review</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
