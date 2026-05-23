"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const buildOptions = [
  "AI website",
  "Landing page or funnel",
  "n8n automation",
  "Make/Zapier automation",
  "AI agent",
  "Internal workflow",
  "Other",
];

const liveOptions = ["Yes", "No", "Not yet"];

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function FreeMiniReviewForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/free-mini-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "The free mini review request could not be sent.");
      }

      form.reset();
      setStatus("success");
      setMessage(result.message ?? "Thank you. Your free mini review request was sent successfully.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form className="glass-border rounded-lg p-6" aria-label="Free Mini AI System Review form" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Name" name="name" autoComplete="name" />
        <FormField label="Email" name="email" type="email" autoComplete="email" />
        <FormField
          label="Company or project name"
          name="companyOrProjectName"
          autoComplete="organization"
          required={false}
        />
        <SelectField label="What did you build?" name="whatDidYouBuild" options={buildOptions} />
        <FormField label="Link to review" name="linkToReview" type="url" placeholder="https://..." />
        <SelectField label="Is it live?" name="isItLive" options={liveOptions} />
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-medium text-slate-200">What do you want reviewed?</span>
        <textarea
          required
          name="whatDoYouWantReviewed"
          rows={4}
          className="mt-2 w-full rounded-lg border border-white/12 bg-background px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-accent"
          placeholder="Share the main flow, risk, or launch question you want a second look on."
        />
      </label>

      <label className="mt-4 block">
        <span className="text-sm font-medium text-slate-200">Message / context</span>
        <textarea
          name="message"
          rows={4}
          className="mt-2 w-full rounded-lg border border-white/12 bg-background px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-accent"
          placeholder="Optional context, tools used, or anything we should know before reviewing."
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {status === "submitting" ? "Requesting review..." : "Request Free Mini Review"}
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
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
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
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-white/12 bg-background px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-accent"
      />
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <select required name={name} className="mt-2 w-full rounded-lg border border-white/12 bg-background px-4 py-3 text-white outline-none focus:border-accent">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
