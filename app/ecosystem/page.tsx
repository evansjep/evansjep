const flowSteps = ["Identity", "Philosophy", "Ecosystem", "Execution", "Infrastructure"];

const nodes = [
  {
    name: "Clesla",
    title: "Commerce Execution Layer",
    description: "Operational infrastructure for commerce systems and execution clarity.",
  },
  {
    name: "Teclaxon",
    title: "Cross-border Trade Infrastructure",
    description: "Coordination systems for movement, trust, and interregional commerce.",
  },
  {
    name: "Orviansla",
    title: "Identity and Reputation Layer",
    description: "Structural systems for identity, rights, and durable digital presence.",
  },
];

export default function Ecosystem() {
  return (
    <main className="main-content">
      <section className="section">
        <div className="section-header">
          <h1 className="page-title">Ecosystem</h1>
          <p className="page-intro">
            A system map of the operating layers that connect identity, philosophy, execution, and infrastructure.
          </p>
        </div>

        <div className="flow-rail" aria-label="Core system flow">
          {flowSteps.map((step, index) => (
            <div key={step} className="flow-step">
              <span className="flow-index">0{index + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>

        <div className="section-grid-2">
          {nodes.map((node) => (
            <article key={node.name} className="panel">
              <div className="panel-label">{node.title}</div>
              <h2 className="panel-title">{node.name}</h2>
              <p className="panel-copy">{node.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
