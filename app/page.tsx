import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <main className="main-content">
      <section className="hero">
        <p className="eyebrow">Founder Operating System</p>
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
          <h2 className="section-title">Currently building</h2>
          <p className="section-copy">
            Foundational infrastructure for commerce, identity, and creator economy systems.
          </p>
        </div>

        <ul className="entity-list">
          <li className="entity-item">
            <p className="entity-name">Clesla</p>
            <p className="entity-description">Commerce infrastructure for audio systems.</p>
          </li>
          <li className="entity-item">
            <p className="entity-name">Dee Cleaneagles</p>
            <p className="entity-description">Technology commerce platform for Africa.</p>
          </li>
          <li className="entity-item">
            <p className="entity-name">Orviansla</p>
            <p className="entity-description">Creator identity infrastructure.</p>
          </li>
        </ul>
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
