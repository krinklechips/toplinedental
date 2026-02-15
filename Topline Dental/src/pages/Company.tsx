export default function Company() {
  return (
    <section className="section split">
      <div className="company-panel">
        <p className="eyebrow">Company</p>
        <h2>Topline Dental Concept Sdn Bhd</h2>
        <p>
          Business Reg: 202201028017 (1473714-P). We partner with clinics across
          Malaysia to deliver equipment that supports modern dentistry.
        </p>
        <div className="pill-row">
          <span className="pill">Dental chairs</span>
          <span className="pill">Imaging systems</span>
          <span className="pill">Sterilization</span>
        </div>
      </div>
      <div className="company-panel highlight-panel">
        <p className="eyebrow">Highlights</p>
        <h3>Professional procurement, aligned to clinical outcomes.</h3>
        <ul className="highlight-list">
          <li>Dedicated point of contact for every clinic engagement.</li>
          <li>Equipment selection aligned to workflow, space, and budget.</li>
          <li>Installation guidance and aftercare support.</li>
        </ul>
      </div>
    </section>
  );
}
