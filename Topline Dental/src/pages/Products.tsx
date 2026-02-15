import { productHighlights } from "../data/siteContent";

export default function Products() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Featured Products</p>
        <h2>Trusted sterilization and hygiene systems from Euronda.</h2>
        <p className="section-subtitle">
          We focus on equipment that delivers reliable results, protects patient safety,
          and supports compliance for modern dental environments.
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
    </section>
  );
}
