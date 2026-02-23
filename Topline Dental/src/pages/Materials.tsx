import { Link } from "react-router-dom";
import { getMaterialCategorySlug } from "../data/catalogCategoryPages";
import { consumableBrandLineup, materialLineup } from "../data/siteContent";

export default function Materials() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Dental Materials & Consumables</p>
        <h2>Consumables category hub with individual pages for each material group.</h2>
        <p className="section-subtitle">
          This page is now an index. Open individual category pages to review usage scenarios,
          replenishment planning notes, and quote checklist items for each material group.
        </p>
      </div>

      <div className="section-copy products-materials-copy">
        <p className="eyebrow">How To Use This Page</p>
        <h3>Browse categories first, then request pricing and availability.</h3>
        <p>
          Topline Dental Concept currently supports quote-based procurement, not online checkout.
          Each category page is structured to help you prepare a clearer consumables enquiry.
        </p>
        <div className="pill-row">
          <span className="pill">Quote-based</span>
          <span className="pill">Replenishment planning</span>
          <span className="pill">Category sourcing</span>
          <span className="pill">Alternative options support</span>
        </div>
      </div>

      <section className="catalog-section">
        <div className="grid-3">
          {materialLineup.map((material) => {
            const slug = getMaterialCategorySlug(material.title);
            return (
              <article key={material.title} className="card catalog-category-card">
                <p className="card-tag">{material.tag}</p>
                <h3>{material.title}</h3>
                <p>{material.description}</p>
                <div className="pill-row">
                  {material.examples.slice(0, 3).map((example) => (
                    <span key={`${slug}-${example}`} className="pill">
                      {example}
                    </span>
                  ))}
                </div>
                <Link className="catalog-category-link" to={`/materials/${slug}`}>
                  View category page →
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="catalog-section">
        <div className="section-copy">
          <p className="eyebrow">Stocked Examples</p>
          <h3>Examples of consumable brands and high-turnover categories.</h3>
          <p>
            These are representative examples for procurement discussions. Final pack sizes and
            availability are confirmed during quotation.
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
    </section>
  );
}
