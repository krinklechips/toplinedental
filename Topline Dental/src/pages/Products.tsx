import { equipmentBrandLineup, equipmentCatalogSections, productHighlights } from "../data/siteContent";

export default function Products() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Equipment Systems</p>
        <h2>Clinical equipment systems for sterilization and hygiene workflows.</h2>
        <p className="section-subtitle">
          This page focuses on equipment systems. Dental materials and consumables are listed
          separately in the dedicated Materials section of the website.
        </p>
      </div>

      <div className="section-copy">
        <p className="eyebrow">Equipment Catalogue</p>
        <h3>Browse by equipment system category.</h3>
        <p>
          Use the sections below to jump to operatories, imaging, sterilization, and water filtration
          systems. Each category has its own focus and recommendations.
        </p>
        <div className="pill-row catalog-quick-links">
          {equipmentCatalogSections.map((section) => (
            <a key={section.id} className="pill" href={`#${section.id}`}>
              {section.title}
            </a>
          ))}
        </div>
      </div>

      <section className="catalog-section">
        <div className="section-copy">
          <p className="eyebrow">Topline Dental Concept Sdn Bhd</p>
          <h3>Some of the equipment brands and lines we sell.</h3>
          <p>
            Representative equipment lineup across operatories, imaging, sterilization, handpieces,
            utility systems, and clinic furniture.
          </p>
        </div>

        <div className="grid-3">
          {equipmentBrandLineup.map((group) => (
            <article key={group.category} className="card brand-portfolio-card">
              <p className="card-tag">Equipment</p>
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

      {equipmentCatalogSections.map((section) => (
        <section key={section.id} id={section.id} className="catalog-section page-anchor">
          <div className="catalog-section-head">
            <div className="section-copy">
              <p className="eyebrow">{section.eyebrow}</p>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <div className="pill-row">
                {section.brands.map((brand) => (
                  <span key={brand} className="pill">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid-3">
            {section.highlights.map((item) => (
              <article key={item.title} className="card">
                <p className="card-tag">{section.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>

          {section.id === "sterilization" && (
            <div className="catalog-feature-block">
              <div className="section-copy">
                <p className="eyebrow">Featured Euronda Systems</p>
                <h3>Autoclave, thermodisinfection, and water support systems.</h3>
                <p>
                  Featured models shown below are aligned to sterilization and hygiene workflow
                  planning.
                </p>
              </div>
              <div className="grid-3">
                {productHighlights.map((product) => (
                  <article
                    key={product.title}
                    id={product.id}
                    className="product-card page-anchor"
                  >
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
            </div>
          )}
        </section>
      ))}
    </section>
  );
}
