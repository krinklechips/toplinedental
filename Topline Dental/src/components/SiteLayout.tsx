import { Link, NavLink, Outlet } from "react-router-dom";

export default function SiteLayout() {
  return (
    <div className="page">
      <div className="bg-grid" aria-hidden="true" />

      <header className="site-header">
        <Link className="brand" to="/">
          <span className="brand-mark">
            <img
              className="brand-logo"
              src="/topline-logo.png"
              alt="Topline Dental Concept logo"
            />
          </span>
          <div>
            <p className="brand-title">Topline Dental Concept</p>
            <p className="brand-subtitle">We accelerate your dental practice.</p>
          </div>
        </Link>
        <nav className="nav-links">
          <div className="nav-item has-mega">
            <NavLink className={({ isActive }) => `nav-trigger${isActive ? " active" : ""}`} to="/products">
              Products &amp; Solutions
            </NavLink>
            <div className="mega-menu">
              <div className="mega-col">
                <p className="mega-label">Equipment</p>
                <Link to="/products">Dental Chairs &amp; Units</Link>
                <Link to="/products">Imaging Systems</Link>
                <Link to="/products">Sterilization Systems</Link>
                <Link to="/products">Water Filtration</Link>
              </div>
              <div className="mega-col">
                <p className="mega-label">Euronda Line</p>
                <Link to="/products">E8 Autoclave</Link>
                <Link to="/products">Aquafilter 1 to 1</Link>
                <Link to="/products">Thermodisinfectors</Link>
              </div>
              <div className="mega-col">
                <p className="mega-label">Services</p>
                <Link to="/process">Clinic Planning</Link>
                <Link to="/process">Installation &amp; Training</Link>
                <Link to="/process">Aftercare Support</Link>
                <Link to="/contact">Request a Quote</Link>
              </div>
            </div>
          </div>
          <div className="nav-item">
            <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to="/process">
              Process
            </NavLink>
          </div>
          <div className="nav-item has-mega">
            <NavLink className={({ isActive }) => `nav-trigger${isActive ? " active" : ""}`} to="/company">
              Company
            </NavLink>
            <div className="mega-menu mega-menu--compact">
              <div className="mega-col">
                <p className="mega-label">About</p>
                <Link to="/company">Topline Dental Concept Sdn Bhd</Link>
                <Link to="/company">Business Registration</Link>
                <Link to="/company">Why Topline</Link>
              </div>
              <div className="mega-col">
                <p className="mega-label">Contact</p>
                <Link to="/contact">Contact Carey</Link>
                <Link to="/contact">Office Location</Link>
                <Link to="/contact">Preferred Partners</Link>
              </div>
              <div className="mega-col">
                <p className="mega-label">Resources</p>
                <Link to="/products">Product Catalogue</Link>
                <Link to="/process">Consultation Process</Link>
                <Link to="/contact">Schedule a Visit</Link>
              </div>
            </div>
          </div>
          <NavLink className={({ isActive }) => `nav-cta${isActive ? " active" : ""}`} to="/contact">
            Contact
          </NavLink>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <p className="brand-title">Topline Dental Concept</p>
          <p className="brand-subtitle">Modern dental equipment & supplies.</p>
          <p className="footer-meta">Topline Dental Concept Sdn Bhd</p>
          <p className="footer-meta">Business Reg: 202201028017 (1473714-P)</p>
        </div>
        <div className="footer-nav">
          <p className="footer-label">Navigate</p>
          <Link to="/">Solutions</Link>
          <Link to="/products">Products</Link>
          <Link to="/process">Process</Link>
          <Link to="/company">Company</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-links">
          <a className="footer-link" href="mailto:carey@toplinedc.com">
            carey@toplinedc.com
          </a>
          <a className="footer-link" href="tel:+60169090913">
            Carey +60 16-909 0913
          </a>
          <p className="footer-address">
            I-05-5, Setiawalk, Block I, Persiaran Wawasan, Bandar Pusat Puchong,
            47160 Puchong, Selangor D.E., Malaysia
          </p>
        </div>
      </footer>
    </div>
  );
}
