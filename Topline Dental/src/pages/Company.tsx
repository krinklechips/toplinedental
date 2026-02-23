import { companyIdentity, complianceCredentials } from "../data/siteContent";

export default function Company() {
  return (
    <section className="section company-section">
      <div className="split company-overview-grid">
        <div className="company-panel">
          <p className="eyebrow">Company</p>
          <h2>{companyIdentity.tradeName}</h2>
          <p>{companyIdentity.subtitle}</p>
          <div className="company-fact-list" aria-label="Company registration details">
            <p className="company-fact">{companyIdentity.legalName}</p>
            <p className="company-fact">
              Business Reg: {companyIdentity.businessRegistration}
            </p>
          </div>
          <div className="pill-row">
            <span className="pill">Dental chairs</span>
            <span className="pill">Imaging systems</span>
            <span className="pill">Sterilization</span>
            <span className="pill">Materials &amp; consumables</span>
          </div>
        </div>
        <div className="company-panel highlight-panel">
          <p className="eyebrow">Highlights</p>
          <h3>Professional procurement, aligned to clinical outcomes.</h3>
          <ul className="highlight-list">
            <li>Dedicated point of contact for every clinic engagement.</li>
            <li>Equipment selection aligned to workflow, space, and budget.</li>
            <li>Installation guidance and aftercare support.</li>
            <li>Support for both equipment systems and day-to-day clinical supplies.</li>
          </ul>
        </div>
      </div>

      <div className="company-panel company-licensing-panel">
        <p className="eyebrow">Licensing &amp; Compliance</p>
        <h3>Regulatory references for medical device distribution and support.</h3>
        <p className="company-licensing-lead">
          Key registration and licensing references are listed below for procurement
          review and clinic onboarding documentation.
        </p>
        <div className="company-licensing-grid">
          {complianceCredentials.map((credential) => (
            <article key={credential.reference} className="company-license-card">
              <p className="company-license-category">{credential.category}</p>
              <h4>{credential.title}</h4>
              <p className="company-license-reference">{credential.reference}</p>
              <p className="company-license-note">{credential.note}</p>
            </article>
          ))}
        </div>
        <p className="company-license-footnote">
          Reference numbers are shown from the documents on file provided for
          validation. Full copies and validity periods can be shared upon request.
        </p>
      </div>
    </section>
  );
}
