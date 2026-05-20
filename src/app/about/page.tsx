import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/seo";

const values = [
  "Build fast, but not blindly.",
  "Security should be part of the foundation.",
  "Clear systems create better businesses.",
  "AI should improve trust, not weaken it.",
  "Practical execution beats empty hype.",
];

export const metadata: Metadata = createMetadata({
  title: "About - Alkyora",
  description: "Learn about Alkyora, an AI systems studio helping businesses move from AI experiments to secure, reliable systems.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Built for the moment when AI experiments become real business systems."
          copy="Alkyora was created for a world where businesses can now build websites, automations, and AI-powered workflows faster than ever. But speed alone is not enough."
        />
        <div className="mt-10 max-w-3xl space-y-6 text-lg leading-8 text-slate-300">
          <p>
            As AI tools make execution easier, businesses need stronger structure, safer data handling, clearer documentation, and systems that can be trusted beyond the first launch.
          </p>
          <p>
            Alkyora exists to help businesses move from AI experiments to secure, reliable, business-ready systems.
          </p>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <Card>
            <h2 className="text-2xl font-semibold text-white">Mission</h2>
            <p className="mt-4 leading-7 text-muted">
              To help businesses build and adopt AI-powered systems with clarity, speed, and security built into the foundation.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-white">Values</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <li key={value} className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-slate-300">
                  {value}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
