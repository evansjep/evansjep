export default function Writing() {
  const writingTopics = [
    {
      title: "System Thinking in Practice",
      description: "How to build durable systems that scale beyond the founder.",
    },
    {
      title: "Long-term Value vs. Short-term Output",
      description: "Why compounding clarity matters more than velocity metrics.",
    },
    {
      title: "Stewardship as Operating Principle",
      description: "Building for longevity rather than extraction.",
    },
    {
      title: "Commerce as Infrastructure",
      description: "Why commerce systems enable other ecosystems to function.",
    },
    {
      title: "Faith and Execution",
      description: "How theological grounding informs operational strategy.",
    },
    {
      title: "Identity as Architecture",
      description: "How founder identity shapes the systems they build.",
    },
  ];

  return (
    <main className="main-content">
      <section className="section">
        <div className="section-header">
          <h1 className="page-title">Writing</h1>
          <p className="page-intro">
            Structured thinking on systems, strategy, and the practice of long-term building.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Core Topics</h2>
          <p className="section-copy">
            A collection of structured essays and insights on founder operating systems, institutional building, and the architecture of durable companies.
          </p>
        </div>

        <div className="writing-grid">
          {writingTopics.map((topic) => (
            <article key={topic.title} className="writing-card">
              <h3 className="writing-title">{topic.title}</h3>
              <p className="writing-description">{topic.description}</p>
              <span className="writing-arrow">→</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Writing Philosophy</h2>
        </div>
        <div className="section-grid-2">
          <article className="panel">
            <div className="panel-label">Clarity</div>
            <h3 className="panel-title">First Principle</h3>
            <p className="panel-copy">
              Writing begins with thinking clearly. Each piece is an attempt to articulate a system, principle, or insight with precision and depth.
            </p>
          </article>
          <article className="panel">
            <div className="panel-label">Structure</div>
            <h3 className="panel-title">Layered Depth</h3>
            <p className="panel-copy">
              Complex ideas are presented through structured breakdowns: principle first, examples second, implications third. System thinking requires system exposition.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Frequency</h2>
          <p className="section-copy">
            Writing is published as structured essays when insights reach clarity. Quality over frequency. Depth over rapid output.
          </p>
        </div>
      </section>
    </main>
  );
}
