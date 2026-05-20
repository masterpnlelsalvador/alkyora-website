import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "" }: SeoInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: "Alkyora",
    authors: [{ name: "Alkyora" }],
    creator: "Alkyora",
    publisher: "Alkyora",
    keywords: [
      "AI systems studio",
      "AI automation security",
      "AI system review",
      "secure automations",
      "AI-powered websites",
      "workflow guardrails",
      "SmartWeb build",
    ],
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url,
      locale: "en_US",
      siteName: "Alkyora",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og/alkyora-og.svg`,
          width: 1200,
          height: 630,
          alt: "Alkyora - AI Systems Studio with Security Built In",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og/alkyora-og.svg`],
    },
  };
}
