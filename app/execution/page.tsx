export default function Execution() {
  const initiatives = [
    {
      layer: "Execution Cadence",
      items: [
        "Quarterly strategy reviews",
        "Monthly operational updates",
        "Weekly execution loops",
        "Daily systems monitoring",
      ],
    },
    {
      layer: "Governance Structure",
      items: [
        "Decision architecture by domain",
        "Cross-functional coordination systems",
        "Resource allocation frameworks",
        "Progress tracking mechanisms",
      ],
    },
    {
      layer: "System Health Indicators",
      items: [
        "Operational clarity maintained",
        "Execution loop active",
        "Governance structures stable",
        "Foundation systems aligned",
      ],
    },
  ];

  const executionPrinciples = [
    "Clarity precedes execution",
    "Systems scale, heroics don't",
    "Discipline compounds over time",
    "Execution is a daily practice",
    "Structure enables freedom",
  ];

  return (
    <main className="main-content">
      <section className="section">
        <div className="section-header">
          <h1 className="page-title">Execution</h1>
          <p className="page-intro">
            The operating system where strategy meets daily practice. Structured discipline, iterative refinement, and clear accountability.
          </p>
        </div>
      </section>

      {initiatives.map((section) => (
        <section key={section.layer} className="section">
          <div className="section-header">
            <h2 className="section-title">{section.layer}</h2>
          </div>
          <ul className="stack-list">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Execution Principles</h2>
          <p className="section-copy">
            The mindset and practices that transform strategy into sustained results.
          </p>
        </div>
        <ul className="principles-list">
          {executionPrinciples.map((principle) => (
            <li key={principle} className="principle-item">
              {principle}
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Operating Model</h2>
        </div>
        <div className="section-grid-2">
          <article className="panel">
            <div className="panel-label">Foundation</div>
            <h3 className="panel-title">Clarity First</h3>
            <p className="panel-copy">
              Before action, establish clarity. Define the problem, the principle, the approach. A clear system executed imperfectly outperforms a perfect system executed with confusion.
            </p>
          </article>
          <article className="panel">
            <div className="panel-label">Rhythm</div>
            <h3 className="panel-title">Consistent Iteration</h3>
            <p className="panel-copy">
              Execution is not a sprint. It's a daily discipline. Small, consistent improvements compound into systemic change over months and years.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
