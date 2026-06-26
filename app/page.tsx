import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <main className="main-content">
      <section className="hero">
        <p className="eyebrow">{siteConfig.role}</p>
        <h1 className="hero-title">{siteConfig.name}</h1>
        <p className="hero-copy">{siteConfig.mission}</p>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Mission</h2>
          <p className="section-copy">
            Creating lasting value and advancing God’s purpose through product, systems, and institutions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Currently building</h2>
          <p className="section-copy">
            Executive infrastructure for commerce, identity, and creator systems.
          </p>
        </div>

        <div className="section-grid">
          <div className="feature-card">
            <p className="feature-card__title">Clesla</p>
            <p className="feature-card__text">Commerce infrastructure for audio systems.</p>
          </div>
          <div className="feature-card">
            <p className="feature-card__title">Dee Cleaneagles</p>
            <p className="feature-card__text">Technology commerce platform for Africa.</p>
          </div>
          <div className="feature-card">
            <p className="feature-card__title">Orviansla</p>
            <p className="feature-card__text">Creator identity and commerce infrastructure.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Core principles</h2>
          <p className="section-copy">
            A disciplined approach to building with clarity, accountability, and enduring impact.
          </p>
        </div>

        <div className="section-grid">
          <div className="feature-card">
            <p className="feature-card__title">Lasting clarity</p>
            <p className="feature-card__text">
              Every effort is structured for longevity and intentional leadership.
            </p>
          </div>
          <div className="feature-card">
            <p className="feature-card__title">Purposeful restraint</p>
            <p className="feature-card__text">
              Minimal execution, precise thinking, and institutional focus.
            </p>
          </div>
          <div className="feature-card">
            <p className="feature-card__title">Stewardship as standard</p>
            <p className="feature-card__text">
              Decisions are informed by responsibility, trust, and long-term value.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
