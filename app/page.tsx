import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const executionSignals = [
  { label: "Clesla", status: "Building" },
  { label: "Teclaxon", status: "Building" },
  { label: "Orviansla", status: "Design Phase" },
];

const infrastructureLayers = [
  "Data layer (Supabase / PostgreSQL)",
  "Authentication systems",
  "Commerce rails",
  "Creator infrastructure APIs",
];

const routes = [
  { href: "/about-founder", label: "About Founder" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/execution", label: "Execution" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
  { href: "/god-architect", label: "God Architect" },
];

export default function Home() {
  return (
    <main className="main-content">
      <section className="hero-panel">
        <div className="hero-copy-block">
          <p className="section-label">Founder Execution Platform</p>
          <h1 className="hero-title">Founder Execution Platform</h1>
          <p className="hero-subtitle">Build systems that outlast their builder</p>
          <p className="hero-role">Founder • Builder • Steward</p>
        </div>

        <div className="hero-status-block">
          <div className="status-pill">Mission aligned</div>
          <div className="status-pill">System health nominal</div>
          <div className="status-pill">Execution loop live</div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="section-label">System Overview</p>
          <h2 className="section-title">
            A founder operating system for building interconnected companies and infrastructure layers.
          </h2>
        </div>

        <div className="system-node-grid" aria-label="Core system nodes">
          <article className="system-node">
            <p className="node-label">Clesla</p>
            <h3 className="node-title">Commerce Infrastructure</h3>
            <p className="node-copy">Execution infrastructure for operating commerce with discipline.</p>
          </article>
          <article className="system-node">
            <p className="node-label">Teclaxon</p>
            <h3 className="node-title">Cross-Border Systems</h3>
            <p className="node-copy">Infrastructure for movement, coordination, and durable trade architecture.</p>
          </article>
          <article className="system-node">
            <p className="node-label">Orviansla</p>
            <h3 className="node-title">Identity Systems</h3>
            <p className="node-copy">Foundational systems for presence, trust, and long-term institutional identity.</p>
          </article>
        </div>
      </section>

      <section className="section section-grid-2">
        <article className="panel">
          <p className="section-label">Architecture Principles</p>
          <ul className="principle-list">
            {siteConfig.principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </article>

        <article className="panel">
          <p className="section-label">Execution Layer</p>
          <div className="status-list">
            {executionSignals.map((signal) => (
              <div key={signal.label} className="status-item">
                <span className="status-dot" />
                <div>
                  <p className="status-label">{signal.label}</p>
                  <p className="status-value">{signal.status}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="section-label">Infrastructure Outlook</p>
          <h2 className="section-title">The operating stack that supports the platform over time.</h2>
        </div>

        <div className="stack-grid">
          {infrastructureLayers.map((layer) => (
            <div key={layer} className="stack-item">
              <p>{layer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="section-label">Navigation</p>
          <h2 className="section-title">Core operating layers in the founder system.</h2>
        </div>

        <div className="nav-grid">
          {routes.map((route) => (
            <Link key={route.href} href={route.href} className="nav-card">
              <span>{route.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
