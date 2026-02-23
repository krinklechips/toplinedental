import { Link, NavLink, Outlet } from "react-router-dom";
import { companyIdentity } from "../data/siteContent";

export default function SiteLayout() {
  const currentYear = new Date().getFullYear();
  const footerLicenseLines = [
    { label: "MDA AR", reference: "MDA-9146-W125" },
    { label: "MDA Importer", reference: "MDA-9447-P125" },
    { label: "GDPMD", reference: "QS GDPMD 008" },
    { label: "LPTA C & E", reference: "LPTA A 3748" }
  ] as const;
  const footerColumns = [
    {
      title: "Products & Solutions",
      groups: [
        {
          label: "Equipment",
          links: [
            { to: "/products#operatories", label: "Dental Chairs & Units" },
            { to: "/products#imaging", label: "Imaging Systems" },
            { to: "/products#sterilization", label: "Sterilization Systems" },
            { to: "/products#water-filtration", label: "Water Filtration" }
          ]
        },
        {
          label: "Materials",
          links: [
            { to: "/materials", label: "Dental Materials & Consumables" },
            { to: "/materials", label: "Orthodontic Consumables" },
            { to: "/materials", label: "Infection Control Consumables" }
          ]
        }
      ]
    },
    {
      title: "Planning & Support",
      groups: [
        {
          label: "Workflow",
          links: [
            { to: "/process", label: "Consultation Process" },
            { to: "/process", label: "Installation & Training" },
            { to: "/process", label: "Aftercare Support" },
            { to: "/layout-studio", label: "Layout Studio" }
          ]
        },
        {
          label: "Contact",
          links: [
            { to: "/contact", label: "Request a Quote" },
            { to: "/contact", label: "Schedule a Visit" }
          ]
        }
      ]
    },
    {
      title: "Company",
      groups: [
        {
          label: "About",
          links: [
            { to: "/company", label: "Topline Dental Concept Sdn Bhd" },
            { to: "/company", label: "Business Registration" },
            { to: "/company", label: "Licensing & Compliance" }
          ]
        },
        {
          label: "Catalogues",
          links: [
            { to: "/products", label: "Equipment Catalogue" },
            { to: "/materials", label: "Materials Catalogue" }
          ]
        }
      ]
    }
  ] as const;

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
                <Link to="/products#operatories">Dental Chairs &amp; Units</Link>
                <Link to="/products#imaging">Imaging Systems</Link>
                <Link to="/products#sterilization">Sterilization Systems</Link>
                <Link to="/products#water-filtration">Water Filtration</Link>
                <p className="mega-label">Materials</p>
                <Link to="/materials">Dental Materials &amp; Consumables</Link>
                <Link to="/materials">Orthodontic Consumables</Link>
              </div>
              <div className="mega-col">
                <p className="mega-label">Euronda Line</p>
                <Link to="/products#euronda-e8">E8 Autoclave</Link>
                <Link to="/products#euronda-aquafilter">Aquafilter 1 to 1</Link>
                <Link to="/products#euronda-thermodisinfectors">Thermodisinfectors</Link>
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
          <div className="nav-item">
            <NavLink
              className={({ isActive }) => `nav-link nav-link--feature${isActive ? " active" : ""}`}
              to="/layout-studio"
            >
              <span className="nav-feature-dot" aria-hidden="true" />
              <span>Layout Studio</span>
              <span className="nav-feature-badge">Interactive</span>
            </NavLink>
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
        <div className="footer-sitemap">
          <div className="footer-brand-column">
            <Link className="footer-brand-link" to="/company">
              <img
                className="footer-brand-logo"
                src="/topline-logo.png"
                alt="Topline Dental Concept logo"
              />
              <div>
                <p className="footer-brand-name">{companyIdentity.tradeName}</p>
                <p className="footer-brand-tagline">{companyIdentity.subtitle}</p>
              </div>
            </Link>
            <p className="footer-meta">{companyIdentity.legalName}</p>
            <p className="footer-meta">Business Reg: {companyIdentity.businessRegistration}</p>
            <div className="footer-inline-licenses">
              <p className="footer-label">Licensing &amp; Compliance</p>
              <div className="footer-license-lines">
                {footerLicenseLines.map((item) => (
                  <p key={item.reference} className="footer-license-line">
                    <span className="footer-license-line-label">{item.label}</span>
                    <span className="footer-license-line-sep">:</span>
                    <span className="footer-license-line-ref">{item.reference}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="footer-column">
              <p className="footer-column-title">{column.title}</p>
              <div className="footer-column-groups">
                {column.groups.map((group) => (
                  <div key={`${column.title}-${group.label}`} className="footer-group">
                    <p className="footer-label">{group.label}</p>
                    <div className="footer-link-list">
                      {group.links.map((link) => (
                        <Link key={`${column.title}-${group.label}-${link.label}`} to={link.to}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="footer-column footer-contact-column">
            <p className="footer-column-title">Contact</p>
            <div className="footer-column-groups">
              <div className="footer-group">
                <p className="footer-label">Direct</p>
                <div className="footer-contact-stack">
                  <a className="footer-link" href="mailto:carey@toplinedc.com">
                    carey@toplinedc.com
                  </a>
                  <a className="footer-link" href="tel:+60169090913">
                    Carey +60 16-909 0913
                  </a>
                </div>
              </div>
              <div className="footer-group">
                <p className="footer-label">Office</p>
                <p className="footer-address">
                  I-05-5, Setiawalk, Block I, Persiaran Wawasan, Bandar Pusat Puchong,
                  47160 Puchong, Selangor D.E., Malaysia
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="footer-bottom">
          <p className="footer-legal">
            © {currentYear} {companyIdentity.legalName}. All rights reserved.
          </p>
          <div className="footer-legal-links" aria-label="Footer legal links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/governance">Governance</Link>
            <Link to="/sitemap">Site Map</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
