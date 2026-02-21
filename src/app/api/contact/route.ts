import { NextRequest, NextResponse } from "next/server";

type Body = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Body;
    const { name, email, phone, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER || "info@cleanspree-uk.com";

    // Use Nodemailer if SMTP is configured; otherwise return success and log (for local dev)
    const useSmtp =
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS;

    if (useSmtp) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || `"Clean Spree UK Website" <${process.env.SMTP_USER}>`,
        to: toEmail,
        replyTo: email,
        subject: `Contact form: ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : "",
          "",
          "Message:",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
        html: `
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        `,
      });
    } else {
      // Development: log and still return 200 so form works without SMTP
      console.log("[Contact form submission]", { name, email, phone, message });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
