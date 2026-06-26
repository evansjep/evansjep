import { siteConfig } from "@/lib/site-config";

export default function Ecosystem() {
  return (
    <main className="main-content">
      <section className="section">
        <div className="section-header">
          <h1 className="page-title">Ecosystem</h1>
          <p className="page-intro">
            Operating systems and platforms that support long-term founder activity.
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
    </main>
  );
}
