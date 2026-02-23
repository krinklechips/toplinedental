import CatalogBrowseSection from "../components/CatalogBrowseSection";
import { consumableBrandLineup, materialLineup } from "../data/siteContent";

export default function Materials() {
  const materialId = (title: string) =>
    title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const materialSidebarGroups = [
    {
      title: "Browse By Discipline",
      items: [
        "Restorative",
        "Orthodontic",
        "Endodontic",
        "Surgical / Implant",
        "Preventive / Hygiene",
        "Sterilization Support"
      ]
    },
    {
      title: "Consumable Type",
      items: [
        "Disposables & PPE",
        "Procedure support",
        "Sterilization pouches / indicators",
        "Finishing / polishing",
        "Impression materials",
        "Whitening accessories"
      ]
    },
    {
      title: "Supply Model",
      items: [
        "Monthly replenishment",
        "Case-by-case sourcing",
        "Startup stock list",
        "Branch standardization",
        "Budget-tier alternatives"
      ]
    }
  ] as const;

  const materialBrowseTiles = materialLineup.slice(0, 8).map((item) => ({
    title: item.title,
    subtitle: item.tag,
    description: item.description,
    href: `#${materialId(item.title)}`
  }));

  const materialRailCards = [
    {
      tag: "Replenishment",
      title: "Build a recurring consumables list by clinic usage.",
      body:
        "We can structure recurring supply support by department and usage rate so your team reorders faster without rebuilding lists every time.",
      ctaLabel: "Send Consumables Enquiry",
      ctaHref: "/contact"
    },
    {
      tag: "Procurement Support",
      title: "Alternatives when preferred items are unavailable",
      body:
        "For fast-moving consumables, we can propose equivalent categories or budget-tier alternatives based on clinical workflow and stock continuity."
    },
    {
      tag: "Operations",
      title: "Startup and expansion stock planning",
      body:
        "Share room count, service mix, and expected patient volume to receive a starter list for high-turnover clinical consumables."
    }
  ] as const;

  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Dental Materials & Consumables</p>
        <h2>Clinical materials, disposables, and replenishment categories by discipline.</h2>
        <p className="section-subtitle">
          This page is dedicated to recurring-use materials and consumables across restorative,
          orthodontic, endodontic, surgical, preventive, sterilization support, and everyday
          chairside workflows.
        </p>
      </div>

      <CatalogBrowseSection
        eyebrow="Browse Consumables"
        title="Browse materials and consumables like a distributor catalogue."
        summary="This page is organized for category discovery and replenishment planning rather than online checkout. Use it to identify categories, then request availability and quote support."
        noticeTitle="Catalogue Format"
        noticeBody="This is a category and procurement reference page. Pricing, pack sizes, and exact availability are confirmed through direct enquiry because stock can vary by supplier and lead time."
        sidebarGroups={materialSidebarGroups}
        tiles={materialBrowseTiles}
        railCards={materialRailCards}
      />

      <div className="section-copy products-materials-copy">
        <p className="eyebrow">Coverage</p>
        <h3>Consumables sourcing support for both routine replenishment and specialty cases.</h3>
        <p>
          We support materials sourcing by discipline, usage rate, and budget tier, including
          high-turnover chairside consumables, sterilization support items, and specialty workflow
          categories.
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
          <p className="eyebrow">Stocked Examples</p>
          <h3>Examples of consumable brands and categories in our supply mix.</h3>
          <p>
            This list highlights selected consumable-focused lines (for example disposables and
            needles). Additional categories are sourced and quoted based on case type, usage
            volume, and availability.
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
          <article key={material.title} id={materialId(material.title)} className="card page-anchor">
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
