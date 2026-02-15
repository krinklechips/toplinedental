import { Link } from "react-router-dom";
import { engagementSteps, overviewMetrics, solutions } from "../data/siteContent";

export default function Home() {
  const processIcons = ["C", "S", "I", "A"];
  const recommendedMix = [
    {
      title: "Chairs",
      description: "Ergonomic operatories designed for long clinical sessions."
    },
    {
      title: "Imaging",
      description: "Digital diagnostics that speed up planning and accuracy."
    },
    {
      title: "Sterilization",
      description: "Reliable hygiene systems that protect every procedure."
    }
  ];

  return (
    <>
      <section className="hero-shell">
        <video
          className="hero-video-bg"
          autoPlay
          muted
          loop
          playsInline
          poster="/topline-logo.png"
        >
          <source src="/6192868-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="hero-inner">
          <div className="hero">
            <div className="hero-content">
              <p className="eyebrow">Dental Equipment Partner</p>
              <h1>Modern dental equipment for clinics that demand precision.</h1>
              <p className="hero-body">
                We supply advanced chair systems, imaging, and sterilization technology so
                your team can deliver confident, efficient care.
              </p>
              <div className="hero-actions">
                <Link className="button primary" to="/contact">
                  Request a Quote
                </Link>
                <Link className="button ghost" to="/products">
                  View Products
                </Link>
              </div>
            </div>

            <div className="hero-card">
              <p className="eyebrow">Clinic Snapshot</p>
              <h3>Upgrade-ready workflows, delivered with precision.</h3>
              <p className="hero-card-body">
                Curated equipment plans that align clinical outcomes, patient comfort, and
                long-term reliability.
              </p>
              <div className="hero-card-list">
                <span>Digital imaging</span>
                <span>Sterilization systems</span>
                <span>Ergonomic operatories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-alt">
        <div className="section-inner">
          <p className="eyebrow">Process Overview</p>
          <h2>From consultation to long-term aftercare.</h2>
          <p className="section-subtitle">
            A structured engagement flow that keeps clinical upgrades predictable and efficient.
          </p>
          <div className="card-row">
            {engagementSteps.map((step, index) => (
              <article key={step.title} className="process-card">
                <span className="process-icon">{processIcons[index]}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <p className="eyebrow">Recommended Mix</p>
          <h2>Core equipment that powers modern clinics.</h2>
          <p className="section-subtitle">
            We balance performance, comfort, and sterilization to support daily operations.
          </p>
          <div className="card-row card-row--three">
            {recommendedMix.map((item) => (
              <article key={item.title} className="mix-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-alt">
        <div className="section-inner">
          <p className="eyebrow">Impact Metrics</p>
          <h2>Clear metrics that keep projects aligned.</h2>
          <p className="section-subtitle">
            A concise view of equipment scope, featured systems, and dedicated support.
          </p>
          <div className="metric-row">
            {overviewMetrics.map((metric) => (
              <div key={metric.label} className="metric-card metric-card--minimal">
                <p className="metric-value">{metric.value}</p>
                <p className="metric-label">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Solutions</p>
          <h2>Equipment portfolios curated for high-performing practices.</h2>
        </div>
        <div className="grid-4">
          {solutions.map((solution) => (
            <article key={solution.title} className="card">
              <span className="card-tag">{solution.tag}</span>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-strip">
        <div>
          <p className="eyebrow">Ready to plan?</p>
          <h2>Let us map your ideal equipment stack.</h2>
          <p className="section-subtitle">
            Our team will align products, specifications, and timelines to your clinic goals.
          </p>
        </div>
        <div className="cta-actions">
          <Link className="button primary" to="/contact">
            Start a consultation
          </Link>
          <Link className="button ghost" to="/products">
            See Euronda line
          </Link>
        </div>
      </section>
    </>
  );
}
