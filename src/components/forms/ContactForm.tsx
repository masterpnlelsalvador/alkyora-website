"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const projectTypes = ["AI website", "Landing page or funnel", "n8n automation", "Make/Zapier automation", "AI agent", "Internal workflow", "Not sure yet"];
const helpOptions = ["System review", "SmartWeb build", "Automation guardrails", "Launch readiness", "Data flow review", "Not sure yet"];
const timelines = ["This week", "This month", "Next 60 days", "Planning ahead"];
const budgets = ["Not sure yet", "Under $1,500", "$1,500 - $5,000", "$5,000 - $10,000", "$10,000+"];

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "The submission could not be sent.");
      }

      form.reset();
      setStatus("success");
      setMessage(result.message ?? "Thank you. Your request was sent successfully.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form className="glass-border rounded-lg p-6" aria-label="Request review form" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Name" name="name" autoComplete="name" />
        <FormField label="Email" name="email" type="email" autoComplete="email" />
        <FormField label="Company or project name" name="company" autoComplete="organization" required={false} />
        <SelectField label="What are you building?" name="projectType" options={projectTypes} />
        <SelectField label="What do you need help with?" name="help" options={helpOptions} />
        <SelectField label="Timeline" name="timeline" options={timelines} />
        <SelectField label="Budget range, optional" name="budget" options={budgets} required={false} />
      </div>
      <label className="mt-4 block">
        <span className="text-sm font-medium text-slate-200">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full rounded-lg border border-white/12 bg-background px-4 py-3 text-white outline-none focus:border-accent"
        />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {status === "submitting" ? "Sending request..." : "Request Review"}
      </button>
      {status === "success" ? (
        <p role="status" className="mt-4 rounded-lg border border-emerald-300/25 bg-emerald-300/10 p-4 text-sm leading-6 text-emerald-200">
          {message}
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="mt-4 rounded-lg border border-red-300/25 bg-red-300/10 p-4 text-sm leading-6 text-red-200">
          {message}
        </p>
      ) : null}
    </form>
  );
}

function FormField({
  label,
  name,
  type = "text",
  autoComplete,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input
        required={required}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-lg border border-white/12 bg-background px-4 py-3 text-white outline-none focus:border-accent"
      />
    </label>
  );
}

function SelectField({ label, name, options, required = true }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <select required={required} name={name} className="mt-2 w-full rounded-lg border border-white/12 bg-background px-4 py-3 text-white outline-none focus:border-accent">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
