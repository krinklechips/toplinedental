import CatalogBrowseSection from "../components/CatalogBrowseSection";
import { equipmentBrandLineup, equipmentCatalogSections, productHighlights } from "../data/siteContent";

export default function Products() {
  const productSidebarGroups = [
    {
      title: "Product Categories",
      items: [
        "Dental Chairs & Units",
        "Imaging Systems",
        "Sterilization Systems",
        "Utility Support (Water / Air / Suction)",
        "Handpieces & Small Equipment"
      ]
    },
    {
      title: "Manufacturer Focus",
      items: ["A-dec", "Planmeca", "Carestream", "W&H", "Euronda", "NSK", "Cattani / MGF"]
    },
    {
      title: "Project Type",
      items: [
        "New clinic setup",
        "Operatory expansion",
        "Replacement / upgrade",
        "Sterilization room planning",
        "Utility and support systems"
      ]
    }
  ] as const;

  const productBrowseTiles = equipmentCatalogSections.map((section) => ({
    title: section.title,
    subtitle: section.eyebrow,
    description: section.description,
    href: `#${section.id}`
  }));

  const productRailCards = [
    {
      tag: "How To Buy",
      title: "No online checkout yet, but structured purchasing support is available.",
      body:
        "Send a quote request with your room count, priorities, and timeline. We will shortlist suitable systems, confirm availability, and propose options by budget tier.",
      ctaLabel: "Request a Quote",
      ctaHref: "/contact"
    },
    {
      tag: "Featured Program",
      title: "Sterilization workflow review",
      body:
        "Share your current instrument volume and room layout. We can propose autoclave capacity, zoning, and reprocessing support systems for better turnover.",
      ctaLabel: "Discuss Sterilization Setup",
      ctaHref: "/contact"
    },
    {
      tag: "Planning Support",
      title: "Clinic startup and phased upgrades",
      body:
        "If you are building in phases, we can prioritize essential systems first and stage later upgrades around utilization and budget."
    }
  ] as const;

  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Equipment Systems</p>
        <h2>Capital equipment and clinic infrastructure for treatment, diagnostics, and reprocessing.</h2>
        <p className="section-subtitle">
          This page is focused on equipment systems and clinic infrastructure. Consumables and
          replenishment items are organized separately in the Materials catalogue.
        </p>
      </div>

      <CatalogBrowseSection
        eyebrow="Browse Equipment"
        title="Browse equipment categories the way a distributor portal is organized."
        summary="This section is built to feel like a distributor catalogue page: browse by category, manufacturer focus, and project type, then request pricing and availability through our team."
        noticeTitle="Important Notice"
        noticeBody="Topline Dental Concept is currently a quote-based catalogue and procurement site (not an online checkout store). Availability, lead times, and pricing are confirmed through direct enquiry."
        sidebarGroups={productSidebarGroups}
        tiles={productBrowseTiles}
        railCards={productRailCards}
      />

      <div className="section-copy">
        <p className="eyebrow">Equipment Catalogue</p>
        <h3>Browse by clinical workflow zone and equipment type.</h3>
        <p>
          Use the sections below to review treatment-room equipment, diagnostics, sterilization,
          utility support, and high-use chairside equipment categories. Each section is structured
          around practical deployment and uptime considerations.
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
          <h3>Representative equipment categories and supplied lines.</h3>
          <p>
            Sample lineup across operatories, imaging, sterilization, handpieces, utilities, and
            furniture. Availability and exact models may vary by project scope, lead time, and
            supplier allocation.
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
                <h3>Reprocessing systems commonly specified for sterilization workflows.</h3>
                <p>
                  Featured models below are shown as examples for sterilization room planning,
                  reprocessing throughput, and equipment protection discussions.
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
