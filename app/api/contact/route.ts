import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { type, ...formData } = data;

    let emailContent;
    let emailSubject;

    if (type === "newsletter") {
      emailSubject = "New Newsletter Subscription";
      emailContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">New Newsletter Subscription</h2>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            <p><strong>Email:</strong> ${formData.email}</p>
          </div>
        </div>
      `;
    } else {
      emailSubject = "New Contact Form Submission";
      emailContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
        </div>
      `;
    }

    const msg = {
      to: "Gomobile@sincapp.mobi",
      from: process.env.VERIFIED_EMAIL as string,
      subject: emailSubject,
      html: emailContent,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error: unknown) {
    const err = error as Error & { code?: string; response?: string };
    console.error("Error sending email:", err);
    return NextResponse.json(
      {
        message: "Failed to send email",
        error: err.message,
        code: err.code,
        response: err.response,
      },
      { status: 500 },
    );
  }
}
