type CatalogSidebarGroup = {
  title: string;
  items: readonly string[];
};

type CatalogTile = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
};

type CatalogRailCard = {
  tag: string;
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
};

type CatalogBrowseSectionProps = {
  eyebrow: string;
  title: string;
  summary: string;
  noticeTitle: string;
  noticeBody: string;
  sidebarGroups: readonly CatalogSidebarGroup[];
  tiles: readonly CatalogTile[];
  railCards: readonly CatalogRailCard[];
};

export default function CatalogBrowseSection({
  eyebrow,
  title,
  summary,
  noticeTitle,
  noticeBody,
  sidebarGroups,
  tiles,
  railCards
}: CatalogBrowseSectionProps) {
  return (
    <section className="catalog-browser-section">
      <div className="catalog-browser-notice" role="note" aria-label={noticeTitle}>
        <p className="catalog-browser-notice-title">{noticeTitle}</p>
        <p>{noticeBody}</p>
      </div>

      <div className="catalog-browser-shell">
        <aside className="catalog-browser-sidebar" aria-label="Browse filters">
          {sidebarGroups.map((group) => (
            <section key={group.title} className="catalog-browser-filter">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </aside>

        <div className="catalog-browser-main">
          <div className="catalog-browser-head">
            <p className="eyebrow">{eyebrow}</p>
            <h3>{title}</h3>
            <p>{summary}</p>
          </div>

          <div className="catalog-browser-grid">
            {tiles.map((tile) => (
              <a key={`${tile.href}-${tile.title}`} className="catalog-browser-tile" href={tile.href}>
                <p className="catalog-browser-tile-subtitle">{tile.subtitle}</p>
                <h4>{tile.title}</h4>
                <p>{tile.description}</p>
                <span className="catalog-browser-tile-link">Browse category →</span>
              </a>
            ))}
          </div>
        </div>

        <aside className="catalog-browser-rail" aria-label="Featured programs">
          {railCards.map((card) => (
            <article key={`${card.tag}-${card.title}`} className="catalog-browser-rail-card">
              <p className="catalog-browser-rail-tag">{card.tag}</p>
              <h4>{card.title}</h4>
              <p>{card.body}</p>
              {card.ctaLabel && card.ctaHref && (
                <a className="catalog-browser-rail-cta" href={card.ctaHref}>
                  {card.ctaLabel}
                </a>
              )}
            </article>
          ))}
        </aside>
      </div>
    </section>
  );
}
