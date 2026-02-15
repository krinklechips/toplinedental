import { engagementSteps } from "../data/siteContent";

export default function Process() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Process</p>
        <h2>A streamlined path from selection to ongoing support.</h2>
        <p className="section-subtitle">
          We guide clinics through planning, specification, installation, and aftercare.
        </p>
      </div>
      <div className="timeline">
        {engagementSteps.map((step, index) => (
          <div key={step.title} className="timeline-item">
            <p className="timeline-step">0{index + 1}</p>
            <div>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
