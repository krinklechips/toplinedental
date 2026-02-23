import { useParams } from "react-router-dom";
import CatalogCategoryDetailPage from "../components/CatalogCategoryDetailPage";
import { getMaterialCategoryPage } from "../data/catalogCategoryPages";
import NotFound from "./NotFound";

export default function MaterialCategory() {
  const { categoryId } = useParams();

  if (!categoryId) {
    return <NotFound />;
  }

  const detail = getMaterialCategoryPage(categoryId);
  if (!detail) {
    return <NotFound />;
  }

  return (
    <CatalogCategoryDetailPage
      detail={detail}
      backTo="/materials"
      backLabel="Back to materials"
    />
  );
}
