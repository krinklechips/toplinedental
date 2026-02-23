import { useParams } from "react-router-dom";
import CatalogCategoryDetailPage from "../components/CatalogCategoryDetailPage";
import { getEquipmentCategoryPage } from "../data/catalogCategoryPages";
import { productHighlights } from "../data/siteContent";
import NotFound from "./NotFound";

export default function ProductCategory() {
  const { categoryId } = useParams();

  if (!categoryId) {
    return <NotFound />;
  }

  const detail = getEquipmentCategoryPage(categoryId);
  if (!detail) {
    return <NotFound />;
  }

  return (
    <>
      <CatalogCategoryDetailPage detail={detail} backTo="/products" backLabel="Back to products" />
      {detail.slug === "sterilization" && (
        <section className="section catalog-detail-followup">
          <div className="section-copy">
            <p className="eyebrow">Featured Euronda Systems</p>
            <h3>Reference products often discussed in sterilization workflow projects.</h3>
            <p>
              These examples are here for planning conversations and product referencing. Pricing,
              model configuration, and availability are confirmed via direct enquiry.
            </p>
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
      )}
    </>
  );
}
