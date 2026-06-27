import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

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
          <h1 className="hero-title">{siteConfig.identity.name}</h1>
          <p className="hero-subtitle">{siteConfig.identity.mission}</p>
          <p className="hero-role">{siteConfig.identity.role}</p>
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
            A founder operating system for building durable companies and infrastructure layers.
          </h2>
          <p className="section-copy">
            The work is intentionally structured around identity, execution, and long-term stewardship.
          </p>
        </div>

        <div className="system-node-grid" aria-label="Core system nodes">
          {siteConfig.ecosystem.map((company) => (
            <article key={company.name} className="system-node">
              <p className="node-label">{company.name}</p>
              <h3 className="node-title">{company.type}</h3>
              <p className="node-copy">{company.description}</p>
            </article>
          ))}
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

        <article className="panel panel--highlight">
          <p className="section-label">Execution Layer</p>
          <div className="status-list">
            {siteConfig.ecosystem.map((company) => (
              <div key={company.name} className="status-item">
                <span className="status-dot" />
                <div>
                  <p className="status-label">{company.name}</p>
                  <p className="status-value">{company.status}</p>
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
