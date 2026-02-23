import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ProcessSection } from "./Process";

export default function Home() {
  const coreClinicalSystems = [
    {
      title: "Operatories",
      brand: "A-dec",
      description:
        "Ergonomic chair-and-delivery platforms designed for long clinical sessions and smoother clinician movement."
    },
    {
      title: "Imaging",
      brand: "Planmeca / Carestream",
      description:
        "Digital imaging systems that accelerate diagnostics, improve treatment planning clarity, and streamline chair time."
    },
    {
      title: "Sterilization",
      brand: "W&H / Euronda",
      description:
        "Reliable sterilization workflows with validated cycle performance for daily infection-control consistency."
    },
    {
      title: "Workflow Tools",
      brand: "Curated Essentials",
      description:
        "Practice-ready accessories and support systems that reduce friction across setup, turnover, and team coordination."
    }
  ];

  const partnerSignals = [
    {
      label: "Preferred Platform Brands",
      value: "A-dec, Planmeca, Carestream, W&H, Euronda"
    },
    {
      label: "Project Coverage",
      value: "Consultation, specification, installation, aftercare"
    },
    {
      label: "Focus",
      value: "Long-term reliability and clinical usability"
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
          <source src="/hero-background.mp4" type="video/mp4" />
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

      <section className="section home-core-section">
        <div className="section-heading">
          <p className="eyebrow">Core Clinical Systems</p>
          <h2>Four foundational systems for modern, high-performing practices.</h2>
          <p className="section-subtitle">
            A curated mix of operatory, imaging, sterilization, and workflow infrastructure.
          </p>
        </div>
        <div className="core-systems-grid">
          {coreClinicalSystems.map((system) => (
            <article key={system.title} className="core-system-card">
              <p className="core-system-brand">{system.brand}</p>
              <h3>{system.title}</h3>
              <p>{system.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ProcessSection
        eyebrow="Process"
        title="From consultation to long-term aftercare."
        subtitle="A structured engagement flow that keeps clinical upgrades predictable and efficient."
        className="section-block section-alt process-carousel-section home-process-section"
      />

      <section className="section home-credibility-section">
        <div className="partner-strip">
          {partnerSignals.map((signal) => (
            <article key={signal.label} className="partner-pill">
              <p className="partner-pill-label">{signal.label}</p>
              <p className="partner-pill-value">{signal.value}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
