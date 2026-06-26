import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <main className="main-content">
      <section className="hero">
        <p className="eyebrow">Founder Execution Platform</p>
        <h1 className="hero-title">Evans Jep</h1>
        <p className="hero-copy">
          Creating lasting value and advancing God’s purpose.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Mission</h2>
          <p className="section-copy">
            Create structures, products, and systems that serve people well and endure.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Ecosystem</h2>
          <p className="section-copy">
            Structured system modules representing foundational infrastructure.
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

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Principles</h2>
          <p className="section-copy">
            A simple operating approach for long-term action.
          </p>
        </div>

        <ul className="principles-list">
          <li className="principle-item">Long-term clarity in every decision.</li>
          <li className="principle-item">Stewardship as the primary operating model.</li>
          <li className="principle-item">Build systems that increase capacity over time.</li>
          <li className="principle-item">Maintain focus through restraint and structure.</li>
        </ul>
      </section>
    </main>
  );
}
