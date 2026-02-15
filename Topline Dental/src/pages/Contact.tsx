import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  enquiryOptions,
  clinicSizeOptions,
  timelineOptions,
  budgetOptions,
  contactMethodOptions,
  equipmentFocusOptions
} from "../data/siteContent";

export default function Contact() {
  const [form, setForm] = useState({
    enquiryType: "",
    companyName: "",
    role: "",
    name: "",
    email: "",
    phone: "",
    clinicSize: "",
    location: "",
    budget: "",
    timeline: "",
    preferredContact: "",
    equipmentFocus: [] as string[],
    message: "",
    company_website: ""
  });
  const [status, setStatus] = useState({ sending: false, ok: false });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEquipmentToggle = (option: string) => {
    setForm((prev) => {
      const exists = prev.equipmentFocus.includes(option);
      return {
        ...prev,
        equipmentFocus: exists
          ? prev.equipmentFocus.filter((item) => item !== option)
          : [...prev.equipmentFocus, option]
      };
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (form.company_website) return;
    setStatus({ sending: true, ok: false });
    setTimeout(() => {
      setStatus({ sending: false, ok: true });
      setForm({
        enquiryType: "",
        companyName: "",
        role: "",
        name: "",
        email: "",
        phone: "",
        clinicSize: "",
        location: "",
        budget: "",
        timeline: "",
        preferredContact: "",
        equipmentFocus: [],
        message: "",
        company_website: ""
      });
    }, 600);
  };

  return (
    <section className="section contact-section">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Tell us what you need. We will respond within one business day.</h2>
        <p className="section-subtitle">
          Share your clinic goals, preferred equipment, or project timeline and our
          team will prepare the right recommendation.
        </p>
      </div>
      <div className="contact-grid">
        <div className="contact-panel">
          <div>
            <p className="contact-label">Primary Contact</p>
            <h3>Carey</h3>
          </div>
          <div className="contact-block">
            <p className="contact-detail">carey@toplinedc.com</p>
            <p className="contact-detail">Carey +60 16-909 0913</p>
          </div>
          <div className="contact-block">
            <p className="contact-label">Office</p>
            <p className="contact-address">
              I-05-5, Setiawalk, Block I, Persiaran Wawasan, Bandar Pusat Puchong,
              47160 Puchong, Selangor D.E., Malaysia
            </p>
          </div>
          <div className="pill-row">
            <span className="pill">Quote turnaround 24-48h</span>
            <span className="pill">On-site consults available</span>
          </div>
        </div>

        <div className="form-card">
          {!status.ok ? (
            <form onSubmit={handleSubmit} className="form-stack">
              <input
                type="text"
                name="company_website"
                value={form.company_website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div className="form-field">
                <label htmlFor="enquiryType">Enquiry Type</label>
                <select
                  id="enquiryType"
                  name="enquiryType"
                  value={form.enquiryType}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">Select an option</option>
                  {enquiryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <p className="form-helper">Choose the topic that best matches your request.</p>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="companyName">Clinic / Company</label>
                  <input
                    id="companyName"
                    type="text"
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    placeholder="Topline Dental Clinic"
                    className="form-input"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="role">Role / Title</label>
                  <input
                    id="role"
                    type="text"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    placeholder="Owner, Dentist, Practice Manager"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="form-input"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@clinic.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+60 12-345 6789"
                    className="form-input"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="location">Clinic Location</label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="City, State"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="clinicSize">Clinic Size</label>
                  <select
                    id="clinicSize"
                    name="clinicSize"
                    value={form.clinicSize}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select size</option>
                    {clinicSizeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select budget</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="timeline">Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="preferredContact">Preferred Contact</label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={form.preferredContact}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select method</option>
                    {contactMethodOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label>Equipment Focus</label>
                <div className="checkbox-grid">
                  {equipmentFocusOptions.map((option) => (
                    <label key={option} className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={form.equipmentFocus.includes(option)}
                        onChange={() => handleEquipmentToggle(option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Share your equipment needs, current setup, or any special requirements."
                  className="form-input form-textarea"
                />
              </div>

              <div className="form-actions">
                <p className="form-note">
                  By submitting, you agree to our privacy policy.
                </p>
                <button className="button primary" type="submit" disabled={status.sending}>
                  {status.sending ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          ) : (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h3>Thanks — message received!</h3>
              <p>We will be in touch within one business day.</p>
              <button
                className="button ghost"
                type="button"
                onClick={() => setStatus({ sending: false, ok: false })}
              >
                Send another
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
