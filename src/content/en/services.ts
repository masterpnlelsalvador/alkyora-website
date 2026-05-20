export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  bestFor?: string;
  deliverables?: string[];
  cta: string;
  detail?: {
    eyebrow: string;
    headline: string;
    intro: string;
    outcomes: string[];
  };
};

export const serviceCards = [
  {
    title: "AI SmartWeb Systems",
    copy:
      "Conversion-focused websites and landing pages built with AI-assisted workflows, clean structure, SEO foundations, and security-aware implementation.",
  },
  {
    title: "AI Automation Workflows",
    copy:
      "Business automations using tools like n8n, Make, Zapier, forms, CRMs, email systems, and AI agents.",
  },
  {
    title: "Security Built-In Reviews",
    copy:
      "Practical security reviews for websites, workflows, automations, forms, integrations, and AI-generated systems.",
  },
  {
    title: "Workflow Guardrails",
    copy:
      "Error handling, access control, validation, logging, documentation, and safer data movement across your business systems.",
  },
];

export const offers: Service[] = [
  {
    slug: "ai-system-review",
    title: "AI System Review",
    shortTitle: "System Review",
    href: "/services/ai-system-review",
    description:
      "A practical review of your AI-built website, automation, workflow, or funnel to identify security, structure, reliability, and conversion issues.",
    bestFor:
      "Businesses, agencies, and founders who already built something with AI and want to make sure it is safe, stable, and ready to use.",
    deliverables: [
      "System review report",
      "Risk and improvement notes",
      "Data flow observations",
      "Security and reliability recommendations",
      "Prioritized action plan",
    ],
    cta: "Request a System Review",
    detail: {
      eyebrow: "Review and harden what already exists",
      headline: "Find weak points before they become business problems.",
      intro:
        "AI System Review is built for teams that have already launched or prototyped a website, workflow, automation, funnel, or AI-assisted business system and need a practical second look.",
      outcomes: [
        "Understand where data enters, moves, and leaves your system.",
        "Identify fragile logic, missing fallback paths, and unclear ownership.",
        "Prioritize fixes by business impact instead of technical noise.",
      ],
    },
  },
  {
    slug: "smartweb-build",
    title: "SmartWeb Build",
    shortTitle: "SmartWeb",
    href: "/services/smartweb-build",
    description:
      "A premium AI-assisted website or landing page built with clear messaging, conversion strategy, SEO foundations, and security-aware implementation.",
    bestFor:
      "Consultants, agencies, startups, creators, local businesses, and service providers who need a modern website built fast but responsibly.",
    deliverables: [
      "Website or landing page",
      "Conversion-focused structure",
      "Responsive design",
      "SEO-ready foundation",
      "Secure form and integration setup",
      "Launch checklist",
    ],
    cta: "Build My SmartWeb",
    detail: {
      eyebrow: "Premium AI-assisted websites",
      headline: "Launch a polished web presence without fragile foundations.",
      intro:
        "SmartWeb Build combines sharp messaging, modern design, fast implementation, and security-aware setup for forms, integrations, and launch workflows.",
      outcomes: [
        "Clarify the offer, pages, sections, calls to action, and conversion path.",
        "Build a responsive, SEO-ready foundation that can evolve.",
        "Prepare forms and integrations with practical launch checks.",
      ],
    },
  },
  {
    slug: "automation-guardrails",
    title: "Automation Guardrails",
    shortTitle: "Guardrails",
    href: "/services/automation-guardrails",
    description:
      "We help secure and improve your business automations with better validation, access control, error handling, documentation, and recovery logic.",
    bestFor:
      "Teams using n8n, Make, Zapier, CRMs, webhooks, AI agents, spreadsheets, email tools, or internal workflows.",
    deliverables: [
      "Automation review",
      "Workflow map",
      "Guardrail recommendations",
      "Error handling suggestions",
      "Data movement notes",
      "Improvement roadmap",
    ],
    cta: "Review My Automation",
    detail: {
      eyebrow: "Safer workflow execution",
      headline: "Improve the workflows your operations already depend on.",
      intro:
        "Automation Guardrails focuses on reliability and safer data movement across no-code tools, AI agents, CRMs, webhooks, forms, and internal workflows.",
      outcomes: [
        "Map triggers, permissions, integrations, and handoffs.",
        "Add practical validation, logging, error handling, and recovery logic.",
        "Document critical workflow behavior so another person can maintain it.",
      ],
    },
  },
];

export function getService(slug: string) {
  return offers.find((service) => service.slug === slug);
}
