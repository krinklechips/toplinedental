import { Link } from "react-router-dom";
import { equipmentBrandLineup, equipmentCatalogSections, productHighlights } from "../data/siteContent";

export default function Products() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Equipment Systems</p>
        <h2>Equipment category hub with dedicated pages for each clinical system.</h2>
        <p className="section-subtitle">
          Start here to browse equipment categories. Each category has its own page with planning
          notes, project scenarios, and enquiry checklists so the content is not duplicated across
          the catalogue.
        </p>
      </div>

      <div className="section-copy">
        <p className="eyebrow">Category Pages</p>
        <h3>Open a dedicated page for the system you are evaluating.</h3>
        <p>
          These category pages are designed for quote-based procurement support, not online
          checkout. Use them to review category-specific considerations before contacting us.
        </p>
        <div className="pill-row catalog-quick-links">
          {equipmentCatalogSections.map((section) => (
            <Link key={section.id} className="pill" to={`/products/${section.id}`}>
              {section.title}
            </Link>
          ))}
        </div>
      </div>

      <section className="catalog-section">
        <div className="grid-3">
          {equipmentCatalogSections.map((section) => (
            <article key={section.id} className="card catalog-category-card">
              <p className="card-tag">{section.eyebrow}</p>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <div className="pill-row">
                {section.brands.slice(0, 3).map((brand) => (
                  <span key={`${section.id}-${brand}`} className="pill">
                    {brand}
                  </span>
                ))}
              </div>
              <Link className="catalog-category-link" to={`/products/${section.id}`}>
                View category page →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="catalog-section">
        <div className="section-copy">
          <p className="eyebrow">Representative Brands</p>
          <h3>Examples of lines we supply across major equipment categories.</h3>
          <p>
            The lineup below is a representative overview. Final recommendations depend on workflow
            needs, room planning, lead times, and project budget.
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

      <section className="catalog-section">
        <div className="section-copy">
          <p className="eyebrow">Featured Reprocessing Systems</p>
          <h3>Examples often reviewed during sterilization workflow projects.</h3>
          <p>
            These featured products support sterilization room planning discussions. Use the
            dedicated Sterilization Systems category page for broader planning guidance.
          </p>
          <div className="pill-row">
            <Link className="pill" to="/products/sterilization">
              Open Sterilization Systems page
            </Link>
          </div>
        </div>

        <div className="grid-3">
          {productHighlights.map((product) => (
            <article key={product.title} id={product.id} className="product-card page-anchor">
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
      </section>
    </section>
  );
}
