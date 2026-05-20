from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "downloads" / "ai-automation-security-checklist.pdf"


def build_pdf() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        rightMargin=0.65 * inch,
        leftMargin=0.65 * inch,
        topMargin=0.62 * inch,
        bottomMargin=0.62 * inch,
        title="AI Automation Security Checklist",
        author="Alkyora",
    )

    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="Kicker",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8,
            leading=12,
            textColor=colors.HexColor("#22D3EE"),
            uppercase=True,
            spaceAfter=10,
        )
    )
    styles.add(
        ParagraphStyle(
            name="TitleLarge",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=28,
            leading=32,
            textColor=colors.HexColor("#050816"),
            spaceAfter=12,
        )
    )
    styles.add(
        ParagraphStyle(
            name="BodyMuted",
            parent=styles["BodyText"],
            fontSize=10,
            leading=15,
            textColor=colors.HexColor("#334155"),
            spaceAfter=12,
        )
    )
    styles.add(
        ParagraphStyle(
            name="SectionTitle",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=14,
            leading=18,
            textColor=colors.HexColor("#0B1020"),
            spaceBefore=12,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Small",
            parent=styles["BodyText"],
            fontSize=8.5,
            leading=12,
            textColor=colors.HexColor("#64748B"),
        )
    )

    story = [
        Paragraph("ALKYORA - SECURITY-AWARE AI SYSTEMS", styles["Kicker"]),
        Paragraph("AI Automation Security Checklist", styles["TitleLarge"]),
        Paragraph(
            "A practical pre-launch checklist for founders, agencies, and small teams using AI workflows, forms, webhooks, CRMs, spreadsheets, and automation tools.",
            styles["BodyMuted"],
        ),
    ]

    sections = [
        (
            "1. Exposure",
            [
                "List every public page, form, webhook, API endpoint, and shared link.",
                "Confirm test URLs, draft forms, and temporary automations are not publicly exposed.",
                "Check whether any automation can be triggered by unauthenticated users.",
            ],
        ),
        (
            "2. Access",
            [
                "Document who can edit, trigger, view, or disable each workflow.",
                "Remove unused collaborators, shared credentials, and old tool access.",
                "Use separate admin, operator, and viewer permissions where tools allow it.",
            ],
        ),
        (
            "3. Data Flow",
            [
                "Map what data is collected, transformed, stored, emailed, or sent to AI tools.",
                "Avoid sending unnecessary sensitive data into prompts or third-party systems.",
                "Confirm where submissions, logs, exports, and generated outputs are stored.",
            ],
        ),
        (
            "4. Automation Logic",
            [
                "Validate required fields before a workflow continues.",
                "Add checks for incomplete, duplicate, suspicious, or malformed inputs.",
                "Avoid irreversible actions without a review step when customer impact is high.",
            ],
        ),
        (
            "5. Error Handling",
            [
                "Define what happens when an API fails, times out, or returns bad output.",
                "Send failure alerts to the right person or channel.",
                "Keep failed runs visible enough to diagnose and replay safely.",
            ],
        ),
        (
            "6. Documentation and Recovery",
            [
                "Write a short workflow map with tools, owners, triggers, and fallback steps.",
                "Record where credentials, webhook URLs, and key settings are managed.",
                "Create a rollback or pause plan before launch.",
            ],
        ),
    ]

    for title, items in sections:
        story.append(Paragraph(title, styles["SectionTitle"]))
        table_data = [[Paragraph("[ ]", styles["BodyText"]), Paragraph(item, styles["BodyMuted"])] for item in items]
        table = Table(table_data, colWidths=[0.35 * inch, 6.65 * inch])
        table.setStyle(
            TableStyle(
                [
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 0),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
                ]
            )
        )
        story.append(table)
        story.append(Spacer(1, 4))

    story.append(Spacer(1, 10))
    story.append(
        Paragraph(
            "Note: This checklist is practical guidance only. It does not replace legal compliance work, enterprise cybersecurity services, or formal penetration testing when those are required.",
            styles["Small"],
        )
    )
    story.append(Paragraph("Alkyora - AI Systems Studio with Security Built In", styles["Small"]))

    doc.build(story)


if __name__ == "__main__":
    build_pdf()
    print(OUTPUT)
