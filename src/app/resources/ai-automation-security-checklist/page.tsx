import type { Metadata } from "next";
import { LeadMagnetSection } from "@/components/sections/LeadMagnetSection";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "AI Automation Security Checklist - Alkyora",
  description: "Download a practical checklist to review AI-powered workflows, webhooks, forms, and automations before they go live.",
  path: "/resources/ai-automation-security-checklist",
});

export default function ChecklistPage() {
  return (
    <>
      <section className="aurora-bg py-20">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">Lead magnet</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            AI Automation Security Checklist
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A practical checklist to help founders, agencies, and small teams review AI-powered workflows before they go live.
          </p>
        </Container>
      </section>
      <LeadMagnetSection compact />
    </>
  );
}
