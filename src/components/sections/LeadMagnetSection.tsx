"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LeadMagnetSection({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/checklist-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) {
        throw new Error("Lead capture failed");
      }

      const { downloadUrl } = (await response.json()) as { downloadUrl: string };
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "ai-automation-security-checklist.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={compact ? "py-12" : "bg-surface/45 py-24"}>
      <Container>
        <div className="grid gap-10 rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Checklist"
            title="Download the AI Automation Security Checklist"
            copy="A practical checklist to help founders, agencies, and small teams review AI-powered workflows before they go live."
          />
          <form className="space-y-4" aria-label="AI Automation Security Checklist form" onSubmit={handleSubmit}>
            <FormField label="Name" name="name" />
            <FormField label="Email" name="email" type="email" />
            <label className="block">
              <span className="text-sm font-medium text-slate-200">What are you building?</span>
              <select name="projectType" className="mt-2 w-full rounded-lg border border-white/12 bg-background px-4 py-3 text-white outline-none focus:border-accent">
                <option>AI website</option>
                <option>Landing page or funnel</option>
                <option>n8n automation</option>
                <option>Make/Zapier automation</option>
                <option>AI agent</option>
                <option>Internal workflow</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {status === "submitting" ? "Preparing download..." : "Get the Checklist"}
            </button>
            {status === "success" ? (
              <p role="status" className="text-sm leading-6 text-emerald-300">
                Your checklist download has started. Check your downloads folder.
              </p>
            ) : null}
            {status === "error" ? (
              <p role="alert" className="text-sm leading-6 text-red-300">
                Something went wrong. Please try again or contact Alkyora directly.
              </p>
            ) : null}
          </form>
        </div>
      </Container>
    </section>
  );
}

function FormField({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input
        required
        name={name}
        type={type}
        className="mt-2 w-full rounded-lg border border-white/12 bg-background px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-accent"
      />
    </label>
  );
}
