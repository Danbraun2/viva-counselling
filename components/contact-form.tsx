"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/contact/actions";

const initial: ContactState = { ok: false, message: "" };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial);

  return (
    <form action={action} className="rounded-3xl border border-border bg-surface p-8 sm:p-10">
      <h2 className="font-serif text-2xl">Send a message</h2>
      <p className="mt-2 text-sm text-muted">
        I&apos;ll respond within two business days.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Your name" required error={state.errors?.name} />
        <Field id="email" label="Email" type="email" required error={state.errors?.email} />
      </div>
      <div className="mt-4">
        <Field id="phone" label="Phone (optional)" type="tel" error={state.errors?.phone} />
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted">
          How can I help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
        />
        {state.errors?.message && (
          <p className="mt-1 text-xs text-accent">{state.errors.message}</p>
        )}
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary-hover disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send"}
      </button>

      {state.message && (
        <p
          className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${
            state.ok
              ? "border-primary/30 bg-primary/10 text-foreground"
              : "border-accent/30 bg-accent/10 text-foreground"
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
      <label htmlFor={id} className="block text-xs uppercase tracking-widest text-muted">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
      />
      {error && <p className="mt-1 text-xs text-accent">{error}</p>}
    </div>
  );
}
