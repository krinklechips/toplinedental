import { materialLineup, productHighlights } from "../data/siteContent";

export default function Products() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Products & Materials</p>
        <h2>Equipment systems and dental materials for complete clinic workflows.</h2>
        <p className="section-subtitle">
          Beyond equipment planning, we also support clinics with day-to-day dental materials and
          consumables used across restorative, hygiene, and procedural workflows.
        </p>
      </div>

      <div className="section-copy">
        <p className="eyebrow">Equipment</p>
        <h3>Featured sterilization and hygiene systems from Euronda.</h3>
        <p>
          We focus on equipment that delivers reliable results, protects patient safety, and supports
          compliance for modern dental environments.
        </p>
      </div>

      <div className="grid-3">
        {productHighlights.map((product) => (
          <article key={product.title} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.alt} loading="lazy" />
            </div>
            <div className="product-header">
              <span className="product-icon" />
              <span className="product-label">Euronda</span>
            </div>
            <h3>{product.title}</h3>
            <p>{product.detail}</p>
          </article>
        ))}
      </div>

      <div className="section-copy products-materials-copy">
        <p className="eyebrow">Dental Materials</p>
        <h3>Clinical materials and consumables to support daily treatment delivery.</h3>
        <p>
          We can support procurement across key material categories used in restorative, preventive,
          endodontic, prosthetic, and infection-control workflows.
        </p>
        <div className="pill-row">
          <span className="pill">Restorative</span>
          <span className="pill">Impression</span>
          <span className="pill">Endodontic</span>
          <span className="pill">Hygiene / Preventive</span>
          <span className="pill">Consumables</span>
        </div>
      </div>

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
