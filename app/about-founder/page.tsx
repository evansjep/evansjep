import Image from "next/image";

const doctrines = [
  {
    label: "Operating Role",
    title: "Founder",
    copy:
      "The role is to identify leverage, shape the architecture, and create disciplined conditions for execution.",
  },
  {
    label: "Practice",
    title: "Builder",
    copy:
      "The work is grounded in durable construction: systems, teams, standards, and operating habits that compound over time.",
  },
  {
    label: "Operating Standard",
    title: "Steward",
    copy:
      "Every decision is made as a trust. Capital, attention, and relationships are held with a long horizon in view.",
  },
  {
    label: "Timeframe",
    title: "Long-range",
    copy:
      "The standard is institutional resilience rather than short-term signal. The system must outlive any single leader.",
  },
];

const laws = [
  {
    title: "Law of Clear Ownership",
    copy: "Every function must have a responsible owner, an explicit standard, and a measurable outcome.",
  },
  {
    title: "Law of Structural Simplicity",
    copy: "Complexity is introduced only when the operating benefit is explicit and durable.",
  },
  {
    title: "Law of Compounding Reliability",
    copy: "A system is valuable when it performs repeatedly under stress without constant intervention.",
  },
  {
    title: "Law of Decision Traceability",
    copy: "Important decisions must be visible in process, language, and accountability so the institution can learn.",
  },
  {
    title: "Law of Human Multiplication",
    copy: "The strongest systems extend the capacity of the people inside them rather than relying on heroics.",
  },
];

export default function AboutFounder() {
  return (
    <main className="main-content">
      <section className="section">
        <div className="section-header">
          <h1 className="page-title">About Founder</h1>
          <p className="page-intro">
            A founder operating identity built for institutional clarity, enduring execution, and disciplined stewardship.
          </p>
        </div>

        <div className="founder-profile">
          <div className="founder-profile__image">
            <Image
              src="/founder.jpg"
              alt="Portrait of Evans Jep"
              width={720}
              height={960}
              priority
              className="founder-image"
            />
          </div>

          <div className="founder-profile__content">
            <div className="panel-label">Founder Operating Doctrine</div>
            <h2 className="section-title">Identity, structure, and execution are inseparable.</h2>
            <p className="panel-copy">
              Evans Jep operates at the intersection of architecture and stewardship. The mission is to build systems that remain useful across time, withstand pressure, and create leverage for others.
            </p>

            <div className="section-grid-2">
              {doctrines.map((item) => (
                <article key={item.title} className="panel">
                  <div className="panel-label">{item.label}</div>
                  <h3 className="panel-title">{item.title}</h3>
                  <p className="panel-copy">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">System Laws</h2>
          <p className="section-copy">
            These laws govern how the operating architecture is designed and maintained.
          </p>
        </div>

        <div className="law-list">
          {laws.map((law) => (
            <article key={law.title} className="law-card">
              <h3 className="panel-title">{law.title}</h3>
              <p className="panel-copy">{law.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Ecosystem Gravity Statement</h2>
          <p className="section-copy">
            The ecosystem is organized around long-range execution, not personal visibility.
          </p>
        </div>

        <article className="philosophy-statement">
          <p className="philosophy-quote">
            Clesla, Teclaxon, and Orviansla are operating layers in one larger architecture of trust, infrastructure, and durable value.
          </p>
          <p className="philosophy-elaboration">
            Their purpose is to create a coherent system in which commerce, identity, and institutional execution reinforce one another. The gravity of the ecosystem comes from clarity, disciplined coordination, and a commitment to build what lasts.
          </p>
        </article>
      </section>
    </main>
  );
}
