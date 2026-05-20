import { SITE_URL } from "@/lib/constants";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Alkyora",
    url: SITE_URL,
    slogan: "AI Systems Studio with Security Built In",
    description:
      "Alkyora helps businesses build, audit, and harden AI-powered websites, automations, and workflows with security built into the foundation.",
    areaServed: "Global",
    serviceType: [
      "AI system reviews",
      "AI-powered websites",
      "Automation guardrails",
      "Workflow security reviews",
    ],
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "ProfessionalService",
      name: "Alkyora",
      url: SITE_URL,
    },
    url: `${SITE_URL}${path}`,
  };
}
