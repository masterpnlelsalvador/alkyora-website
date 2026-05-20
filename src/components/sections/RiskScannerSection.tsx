"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const questions = [
  {
    label: "What did you build?",
    options: ["AI website", "Landing page or funnel", "n8n automation", "Make/Zapier automation", "AI agent", "Internal workflow", "Not sure yet"],
  },
  { label: "Does it handle customer or business data?", options: ["Yes", "No", "Not sure"] },
  { label: "Does it use forms, webhooks, APIs, or integrations?", options: ["Yes", "No", "Not sure"] },
  { label: "Is there documentation or a recovery plan?", options: ["Yes", "No", "Not sure"] },
  { label: "Was security considered before launch?", options: ["Yes", "No", "Not sure"] },
];

export function RiskScannerSection() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const complete = Object.keys(answers).length === questions.length;

  const result = useMemo(() => {
    const riskSignals = [
      answers[1] !== "No",
      answers[2] !== "No",
      answers[3] !== "Yes",
      answers[4] !== "Yes",
      ["n8n automation", "Make/Zapier automation", "AI agent", "Internal workflow"].includes(answers[0]),
    ].filter(Boolean).length;

    if (!complete) return null;
    if (riskSignals <= 1) {
      return {
        level: "Low Risk",
        copy: "Your system may only need a light review before scaling.",
      };
    }
    if (riskSignals <= 3) {
      return {
        level: "Medium Risk",
        copy: "Your system may benefit from a practical review to improve reliability, documentation, and data handling.",
      };
    }
    return {
      level: "High Risk",
      copy:
        "Your system should be reviewed before scaling. AI workflows can multiply small mistakes quickly when data, webhooks, or customer-facing processes are involved.",
    };
  }, [answers, complete]);

  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Interactive"
            title="AI System Risk Scanner"
            copy="A lightweight, front-end-only check to help frame where a practical review may be useful. It is not a legal, compliance, or cybersecurity guarantee."
          />
          <div className="glass-border rounded-lg p-5 sm:p-6">
            <div className="space-y-6">
              {questions.map((question, questionIndex) => (
                <fieldset key={question.label}>
                  <legend className="text-sm font-semibold text-white">{question.label}</legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {question.options.map((option) => {
                      const active = answers[questionIndex] === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setAnswers((current) => ({ ...current, [questionIndex]: option }))}
                          className={`rounded-full border px-3 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                            active
                              ? "border-cyan-300/60 bg-cyan-300/15 text-white"
                              : "border-white/12 bg-white/[0.035] text-slate-300 hover:border-white/30"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              ))}
            </div>
            {result ? (
              <div className="mt-8 rounded-lg border border-cyan-300/25 bg-cyan-300/8 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-100">Result</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{result.level}</h3>
                <p className="mt-3 leading-7 text-slate-300">{result.copy}</p>
                <Button href="/contact" className="mt-5">
                  Book a System Review
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
