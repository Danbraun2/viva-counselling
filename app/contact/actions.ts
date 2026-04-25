"use server";

import { Resend } from "resend";
import { site } from "@/lib/site";

export type ContactState = {
  ok: boolean;
  message: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
};

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot
  if ((formData.get("company") as string)?.trim()) {
    return { ok: true, message: "Thanks — we'll be in touch soon." };
  }

  const name = ((formData.get("name") as string) ?? "").trim();
  const email = ((formData.get("email") as string) ?? "").trim();
  const phone = ((formData.get("phone") as string) ?? "").trim();
  const message = ((formData.get("message") as string) ?? "").trim();

  const errors: ContactState["errors"] = {};
  if (name.length < 2) errors.name = "Please share your name.";
  if (!isEmail(email)) errors.email = "Please enter a valid email.";
  if (message.length < 10) errors.message = "A few more words, please.";

  if (Object.keys(errors).length) {
    return { ok: false, message: "Please check the fields below.", errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "VIVA Counselling <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set — message not sent.", { name, email, phone, message });
    return {
      ok: true,
      message: "Thanks — your message has been recorded. (Email delivery isn't configured yet; ping the developer.)",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("[contact] resend error", error);
      return { ok: false, message: "Something went wrong sending the message. Please email us directly." };
    }
  } catch (e) {
    console.error("[contact] unexpected error", e);
    return { ok: false, message: "Something went wrong sending the message. Please email us directly." };
  }

  return { ok: true, message: "Thanks — your message is on its way. I'll respond within two business days." };
}
