import { Link } from "react-router-dom";
import type { CatalogCategoryDetail } from "../data/catalogCategoryPages";

type CatalogCategoryDetailPageProps = {
  detail: CatalogCategoryDetail;
  backTo: string;
  backLabel: string;
};

export default function CatalogCategoryDetailPage({
  detail,
  backTo,
  backLabel
}: CatalogCategoryDetailPageProps) {
  return (
    <section className="section catalog-detail-page">
      <div className="catalog-detail-hero">
        <div className="catalog-detail-hero-main">
          <p className="eyebrow">{detail.eyebrow}</p>
          <h1>{detail.title}</h1>
          <p className="catalog-detail-summary">{detail.summary}</p>
          <p className="catalog-detail-lead">{detail.lead}</p>

          <div className="pill-row">
            {detail.badges.map((badge) => (
              <span key={badge} className="pill">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <aside className="catalog-detail-hero-side">
          <p className="catalog-detail-side-title">Request Support</p>
          <p className="catalog-detail-side-copy">
            This is a category page for discovery and specification planning. Pricing and
            availability are shared through direct enquiry.
          </p>
          <div className="catalog-detail-side-actions">
            <Link className="button primary" to="/contact">
              Request pricing
            </Link>
            <Link className="button ghost" to={backTo}>
              {backLabel}
            </Link>
          </div>
        </aside>
      </div>

      <section className="catalog-section">
        <div className="section-copy">
          <p className="eyebrow">Key Highlights</p>
          <h3>What this category covers.</h3>
          <p>
            Use the points below as a starting framework when comparing options or preparing your
            enquiry for quotation and specification support.
          </p>
        </div>

        <div className="grid-3">
          {detail.highlights.map((item) => (
            <article key={item.title} className="card">
              <p className="card-tag">{detail.kind === "equipment" ? "Equipment" : "Consumables"}</p>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="split catalog-detail-lists">
        <section className="catalog-detail-panel">
          <p className="eyebrow">Typical Scenarios</p>
          <h3>Common project requests for this category.</h3>
          <ul className="catalog-detail-list">
            {detail.projectScenarios.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="catalog-detail-panel">
          <p className="eyebrow">Before We Quote</p>
          <h3>What to include in your enquiry.</h3>
          <ul className="catalog-detail-list catalog-detail-list--check">
            {detail.quoteChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="catalog-detail-related">
        <div className="section-copy">
          <p className="eyebrow">Related Categories</p>
          <h3>Continue browsing.</h3>
          <p>
            Open related category pages to compare workflows, procurement requirements, and what to
            prepare before requesting a quote.
          </p>
        </div>

        <div className="grid-3">
          {detail.relatedCategories.map((item) => (
            <Link key={item.to} to={item.to} className="card catalog-detail-link-card">
              <p className="card-tag">Category Page</p>
              <h3>{item.label}</h3>
              <p>Open page and review category-specific considerations.</p>
              <span className="catalog-detail-link-arrow">View page →</span>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
