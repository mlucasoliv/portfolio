"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

type Status = "idle" | "sending" | "success" | "error";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export function ContactForm() {
  const { t } = useLanguage();
  const f = t.contact.form;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "Nova mensagem do portfólio");
    data.append("from_name", "Portfólio — marcelo");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      {/* Honeypot anti-spam */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field>
          <Label htmlFor="name">{f.name.label}</Label>
          <Input id="name" name="name" type="text" required placeholder={f.name.placeholder} />
        </Field>
        <Field>
          <Label htmlFor="email">{f.email.label}</Label>
          <Input id="email" name="email" type="email" required placeholder={f.email.placeholder} />
        </Field>
      </div>

      <Field>
        <Label htmlFor="message">{f.message.label}</Label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder={f.message.placeholder}
          className="resize-none w-full border-0 border-b border-border bg-transparent px-0 py-2 text-base text-fg outline-none transition-colors duration-200 ease-out placeholder:text-muted/60 focus:border-fg/50"
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          className="press uppercase text-fg underline decoration-border underline-offset-4 transition-colors duration-200 ease-out hover:decoration-current disabled:opacity-50"
        >
          {sending ? f.sending : f.send}
        </button>
        {status === "success" && (
          <span className="uppercase text-fg">{f.success}</span>
        )}
        {status === "error" && (
          <span className="uppercase text-danger">{f.error}</span>
        )}
      </div>
    </form>
  );
}

function Field({ children }: { children: React.ReactNode }) {
  return <div className="space-y-1.5">{children}</div>;
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block uppercase text-muted">
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full border-0 border-b border-border bg-transparent px-0 py-2 text-base text-fg outline-none transition-colors duration-200 ease-out placeholder:text-muted/60 focus:border-fg/50"
    />
  );
}
