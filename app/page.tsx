import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <main className="main-content">
      {/* Identity Section - Enhanced Prominence */}
      <section className="identity-section">
        <p className="eyebrow">Founder Execution Platform</p>
        <h1 className="identity-title">{siteConfig.identity.name}</h1>
        <p className="identity-subtitle">{siteConfig.identity.role}</p>
        <p className="identity-mission">{siteConfig.identity.mission}</p>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Mission</h2>
          <p className="section-copy">
            {siteConfig.focus}
          </p>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Building</h2>
          <p className="section-copy">
            Systems and infrastructure representing the current execution focus.
          </p>
        </div>

        <div className="ecosystem-grid">
          {siteConfig.ecosystem.map((company) => (
            <article key={company.name} className="ecosystem-module">
              <div className="module-header">
                <h3 className="module-name">{company.name}</h3>
                <p className="module-type">{company.type}</p>
              </div>
              <div className="module-meta">
                <span className="module-status">{company.status}</span>
              </div>
              <p className="module-description">{company.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Principles Section */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Principles</h2>
          <p className="section-copy">
            The operating foundation for long-term execution.
          </p>
        </div>

        <ul className="principles-list">
          {siteConfig.principles.map((principle) => (
            <li key={principle} className="principle-item">
              {principle}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
