// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { user_name, user_email, message } = await req.json();

    if (!user_name || !user_email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail app password
      },
    });

    await transporter.sendMail({
      from: user_email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${user_name}`,
      text: message,
      html: `<p><strong>From:</strong> ${user_name} (${user_email})</p><p>${message}</p>`,
    });

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}