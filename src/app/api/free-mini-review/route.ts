import { NextResponse } from "next/server";

const freeMiniReviewSource = "Alkyora Free Mini Review";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    companyOrProjectName?: string;
    whatDidYouBuild?: string;
    linkToReview?: string;
    whatDoYouWantReviewed?: string;
    isItLive?: string;
    message?: string;
  };

  const name = body.name?.trim();
  const email = body.email?.trim();
  const linkToReview = body.linkToReview?.trim();
  const whatDoYouWantReviewed = body.whatDoYouWantReviewed?.trim();

  if (!name || !email || !linkToReview || !whatDoYouWantReviewed) {
    return NextResponse.json(
      { error: "Name, email, link to review, and what you want reviewed are required." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();
  const reviewPayload = {
    name,
    email,
    companyOrProjectName: body.companyOrProjectName?.trim() || "Not provided",
    whatDidYouBuild: body.whatDidYouBuild ?? "Not provided",
    linkToReview,
    whatDoYouWantReviewed,
    isItLive: body.isItLive ?? "Not provided",
    message: body.message?.trim() || "Not provided",
    source: freeMiniReviewSource,
    submittedAt,
  };

  const webhookUrl = process.env.N8N_FREE_REVIEW_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewPayload),
      });

      if (!webhookResponse.ok) {
        throw new Error(`n8n free review webhook returned ${webhookResponse.status}`);
      }
    } catch (error) {
      console.error("Free mini review n8n webhook failed", {
        error,
        lead: {
          email: reviewPayload.email,
          source: reviewPayload.source,
          submittedAt: reviewPayload.submittedAt,
        },
      });

      return NextResponse.json(
        { error: "We could not send your free mini review request right now. Please try again in a moment." },
        { status: 502 },
      );
    }
  } else {
    console.warn("N8N_FREE_REVIEW_WEBHOOK_URL is not configured. Free mini review request was accepted without n8n delivery.", {
      email: reviewPayload.email,
      submittedAt: reviewPayload.submittedAt,
    });
  }

  return NextResponse.json({
    message: "Thank you. Your free mini review request was sent successfully.",
  });
}
