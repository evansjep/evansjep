"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  const [form, setForm] = useState({ email: "", message: "" });
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok) {
      setStatus({ type: "success", message: "Message received. A response will follow through the operating system." });
      setForm({ email: "", message: "" });
    } else {
      setStatus({ type: "error", message: data.error || "The message could not be submitted right now." });
    }

    setIsSubmitting(false);
  }

  return (
    <main className="main-content">
      <section className="section">
        <div className="section-header">
          <h1 className="page-title">Contact</h1>
          <p className="page-intro">
            Direct access to the founder and the operating system behind the ecosystem.
          </p>
        </div>

        <div className="section-grid-2">
          <article className="panel">
            <div className="panel-label">Primary Contact</div>
            <h2 className="panel-title">Email</h2>
            <p className="panel-copy">
              For inquiries, collaborations, or correspondence aligned to execution and systems:
            </p>
            <p className="contact-link">
              <a href={`mailto:${siteConfig.links.email}`}>{siteConfig.links.email}</a>
            </p>
          </article>

          <article className="panel">
            <div className="panel-label">Direct Message</div>
            <h2 className="panel-title">Capture</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="form-field">
                <span className="form-label">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  autoComplete="email"
                  required
                />
              </label>
              <label className="form-field">
                <span className="form-label">Message</span>
                <textarea
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  rows={5}
                  required
                />
              </label>
              <div className="form-actions">
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting" : "Submit"}
                </button>
              </div>
              {status.message ? (
                <p className={`status-message ${status.type || ""}`}>{status.message}</p>
              ) : null}
            </form>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Connect</h2>
          <p className="section-copy">
            Engage across multiple platforms. Choose the channel that fits the context.
          </p>
        </div>

        <div className="contact-grid">
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-platform">{link.platform}</span>
              <span className="contact-handle">{link.label}</span>
              <span className="contact-arrow">→</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
