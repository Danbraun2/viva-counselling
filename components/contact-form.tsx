"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/contact/actions";

const initial: ContactState = { ok: false, message: "" };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial);

  return (
    <form action={action} className="bg-surface-cream p-8 sm:p-10">
      <h2
        className="text-3xl leading-tight sm:text-4xl"
        style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
      >
        Send a message
      </h2>
      <p className="mt-3 text-[15px] text-muted-foreground">
        I&apos;ll respond within two business days.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your name" required error={state.errors?.name} />
        <Field id="email" label="Email" type="email" required error={state.errors?.email} />
      </div>
      <div className="mt-5">
        <Field id="phone" label="Phone (optional)" type="tel" error={state.errors?.phone} />
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="block text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
          How can I help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-[15px] focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
        {state.errors?.message && (
          <p className="mt-1 text-xs text-accent-dark">{state.errors.message}</p>
        )}
      </div>

      <div className="hidden" aria-hidden>
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-8 inline-flex items-center rounded-md bg-accent px-7 py-3 text-[15px] tracking-wide text-white transition hover:bg-accent-dark disabled:opacity-60"
        style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
      >
        {pending ? "Sending…" : "Send"}
      </button>

      {state.message && (
        <p
          className={`mt-5 border px-4 py-3 text-[14px] ${
            state.ok
              ? "border-accent/40 bg-accent-soft text-foreground"
              : "border-foreground/20 bg-background text-foreground"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 w-full border border-border bg-background px-4 py-3 text-[15px] focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />
      {error && <p className="mt-1 text-xs text-accent-dark">{error}</p>}
    </div>
  );
}
