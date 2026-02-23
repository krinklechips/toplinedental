import { Routes, Route } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Materials from "./pages/Materials";
import Process from "./pages/Process";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import LayoutStudio from "./pages/LayoutStudio";
import InteractiveDrafts from "./pages/InteractiveDrafts";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="materials" element={<Materials />} />
        <Route path="process" element={<Process />} />
        <Route path="layout-studio" element={<LayoutStudio />} />
        <Route path="layout" element={<LayoutStudio />} />
        <Route path="drafts" element={<InteractiveDrafts />} />
        <Route path="company" element={<Company />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
