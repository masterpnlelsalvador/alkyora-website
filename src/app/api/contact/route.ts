import { NextResponse } from "next/server";

const contactSource = "Alkyora Contact Form";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    company?: string;
    projectType?: string;
    help?: string;
    timeline?: string;
    budget?: string;
    message?: string;
  };

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();
  const leadPayload = {
    name,
    email,
    companyOrProjectName: body.company?.trim() || "Not provided",
    whatAreYouBuilding: body.projectType ?? "Not provided",
    whatDoYouNeedHelpWith: body.help ?? "Not provided",
    timeline: body.timeline ?? "Not provided",
    budgetRange: body.budget ?? "Not provided",
    message,
    source: contactSource,
    submittedAt,
  };

  // n8n contact webhook integration:
  // Configure N8N_CONTACT_WEBHOOK_URL in the server environment.
  // This request is made only from the API route, so the private webhook URL
  // is never exposed to browser code. Because this is a contact request, a
  // webhook failure returns a friendly error so the visitor knows to retry.
  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("N8N_CONTACT_WEBHOOK_URL is not configured. Contact form submission was not sent.", {
      email: leadPayload.email,
      submittedAt: leadPayload.submittedAt,
    });

    return NextResponse.json(
      { error: "The contact form is not configured yet. Please try again later or contact Alkyora directly." },
      { status: 503 },
    );
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadPayload),
    });

    if (!webhookResponse.ok) {
      throw new Error(`n8n contact webhook returned ${webhookResponse.status}`);
    }
  } catch (error) {
    console.error("Contact n8n webhook failed", {
      error,
      lead: {
        email: leadPayload.email,
        source: leadPayload.source,
        submittedAt: leadPayload.submittedAt,
      },
    });

    return NextResponse.json(
      { error: "We could not send your request right now. Please try again in a moment." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Thank you. Your request was sent successfully." });
}
