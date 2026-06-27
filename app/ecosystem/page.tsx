import { siteConfig } from "@/lib/site-config";

const flowSteps = ["Identity", "Philosophy", "Ecosystem", "Execution", "Infrastructure"];

export default function Ecosystem() {
  return (
    <main className="main-content">
      <section className="section">
        <div className="section-header">
          <p className="section-label">Ecosystem</p>
          <h1 className="page-title">Structured systems for long-term growth</h1>
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
          {siteConfig.ecosystem.map((node) => (
            <article key={node.name} className="panel">
              <div className="panel-label">{node.type}</div>
              <h2 className="panel-title">{node.name}</h2>
              <p className="panel-copy">{node.description}</p>
              <div className="panel-meta">
                <span className="module-status">{node.status}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
