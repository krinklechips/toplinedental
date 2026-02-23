import { materialLineup, productHighlights } from "../data/siteContent";

export default function Products() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Product Catalogue</p>
        <h2>Clinical equipment plus dental materials and consumables.</h2>
        <p className="section-subtitle">
          Browse equipment systems separately from our dental materials and consumables lineup. The
          materials section below focuses on day-to-day clinical consumables across multiple
          disciplines.
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
        <h3>Materials and consumables lineup (separate from equipment systems).</h3>
        <p>
          This section covers materials and consumables only, including restorative, orthodontic,
          endodontic, preventive, surgical, and everyday chairside categories.
        </p>
        <div className="pill-row">
          <span className="pill">Restorative</span>
          <span className="pill">Orthodontics</span>
          <span className="pill">Impression</span>
          <span className="pill">Endodontic</span>
          <span className="pill">Hygiene / Preventive</span>
          <span className="pill">Surgical</span>
          <span className="pill">Disposables</span>
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
