export default function Projects() {
  return (
    <main className="main-content">
      <section className="section">
        <div className="section-header">
          <h1 className="page-title">Projects</h1>
          <p className="page-intro">
            Focused, intentional ventures that reflect the discipline of building lasting value.
          </p>
        </div>

        <div className="project-list">
          <article className="project-card">
            <h2 className="project-title">Clesla</h2>
            <p className="project-description">
              Commerce and operations infrastructure for audio equipment.
            </p>
          </article>

          <article className="project-card">
            <h2 className="project-title">Dee Cleaneagles</h2>
            <p className="project-description">
              Technology commerce platform focused on Africa.
            </p>
          </article>

          <article className="project-card">
            <h2 className="project-title">Orviansla</h2>
            <p className="project-description">
              Identity and commerce infrastructure for creators and businesses.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
