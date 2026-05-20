import { NextResponse } from "next/server";

const downloadUrl = "/downloads/ai-automation-security-checklist.pdf";
const checklistSource = "Alkyora Checklist";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    projectType?: string;
  };

  if (!body.name || !body.email || !body.email.includes("@")) {
    return NextResponse.json({ error: "Name and a valid email are required." }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();
  const leadPayload = {
    name: body.name,
    email: body.email,
    whatAreYouBuilding: body.projectType ?? "Not provided",
    source: checklistSource,
    submittedAt,
  };

  // n8n webhook integration:
  // Configure N8N_CHECKLIST_WEBHOOK_URL in the server environment.
  // This call happens server-side so the private webhook URL is never exposed
  // to the browser. If n8n is down or returns an error, we log it but still
  // return the checklist download URL so the visitor experience does not break.
  const webhookUrl = process.env.N8N_CHECKLIST_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadPayload),
      });

      if (!webhookResponse.ok) {
        throw new Error(`n8n webhook returned ${webhookResponse.status}`);
      }
    } catch (error) {
      console.error("Checklist n8n webhook failed", {
        error,
        lead: {
          email: leadPayload.email,
          source: leadPayload.source,
          submittedAt: leadPayload.submittedAt,
        },
      });
    }
  } else {
    console.warn("N8N_CHECKLIST_WEBHOOK_URL is not configured. Checklist lead was not sent to n8n.", {
      email: leadPayload.email,
      submittedAt: leadPayload.submittedAt,
    });
  }

  return NextResponse.json({ downloadUrl });
}
