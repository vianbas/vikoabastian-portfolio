"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-400 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-sky-600";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch(siteConfig.contactFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Submission failed (${res.status})`);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError(
        "Something went wrong while sending your message. Please try again, or email me directly.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-900 dark:bg-emerald-950/50">
        <p className="text-emerald-700 font-semibold dark:text-emerald-300">
          Message sent — thank you!
        </p>
        <p className="mt-1.5 text-sm text-emerald-600 dark:text-emerald-400">
          I usually reply within 1–2 business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-sky-600 hover:text-sky-700 font-medium dark:text-sky-400 dark:hover:text-sky-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 text-left"
      noValidate={false}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="cf-name"
            className="block text-xs font-medium text-slate-600 mb-1.5 dark:text-slate-400"
          >
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="cf-email"
            className="block text-xs font-medium text-slate-600 mb-1.5 dark:text-slate-400"
          >
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="cf-subject"
          className="block text-xs font-medium text-slate-600 mb-1.5 dark:text-slate-400"
        >
          Subject
        </label>
        <input
          id="cf-subject"
          name="subject"
          type="text"
          required
          value={form.subject}
          onChange={handleChange}
          placeholder="What is this about?"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="cf-message"
          className="block text-xs font-medium text-slate-600 mb-1.5 dark:text-slate-400"
        >
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project or role…"
          className={`${inputClass} resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all shadow-md shadow-sky-600/20 hover:shadow-sky-500/30 hover:-translate-y-0.5 dark:from-sky-500 dark:to-sky-400 dark:text-slate-950 dark:hover:from-sky-400 dark:hover:to-sky-300"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          I&apos;ll get back to you by email.
        </p>
      </div>
    </form>
  );
}
