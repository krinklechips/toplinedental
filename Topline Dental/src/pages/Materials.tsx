import { consumableBrandLineup, materialLineup } from "../data/siteContent";

export default function Materials() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Dental Materials & Consumables</p>
        <h2>Materials and consumables lineup only (no equipment systems).</h2>
        <p className="section-subtitle">
          This page is dedicated to clinical materials and consumables across restorative,
          orthodontic, endodontic, surgical, preventive, and everyday chairside workflows.
        </p>
      </div>

      <div className="section-copy products-materials-copy">
        <p className="eyebrow">Coverage</p>
        <h3>Procurement support across multiple dental disciplines.</h3>
        <p>
          We can support materials and consumables sourcing by category, case mix, and clinic needs,
          including high-turnover chairside consumables and specialty workflow items.
        </p>
        <div className="pill-row">
          <span className="pill">Restorative</span>
          <span className="pill">Orthodontics</span>
          <span className="pill">Impression / Prosthetic</span>
          <span className="pill">Endodontic</span>
          <span className="pill">Surgical</span>
          <span className="pill">Hygiene / Preventive</span>
          <span className="pill">Disposables</span>
        </div>
      </div>

      <section className="catalog-section">
        <div className="section-copy">
          <p className="eyebrow">Stocked Consumable Brands</p>
          <h3>Examples of consumable lines we currently supply.</h3>
          <p>
            This is separate from equipment systems and reflects consumable-focused items such as
            disposables and needles.
          </p>
        </div>

        <div className="grid-3">
          {consumableBrandLineup.map((group) => (
            <article key={group.category} className="card brand-portfolio-card">
              <p className="card-tag">Consumables</p>
              <h3>{group.category}</h3>
              <ul className="brand-portfolio-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div className="grid-3">
        {materialLineup.map((material) => (
          <article key={material.title} className="card">
            <p className="card-tag">{material.tag}</p>
            <h3>{material.title}</h3>
            <p>{material.description}</p>
            <div className="pill-row">
              {material.examples.map((example) => (
                <span key={example} className="pill">
                  {example}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
