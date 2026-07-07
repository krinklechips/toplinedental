import { useId, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  enquiryOptions,
  clinicSizeOptions,
  timelineOptions,
  budgetOptions,
  contactMethodOptions,
  equipmentFocusOptions
} from "../data/siteContent";

const INITIAL_FORM_STATE = {
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
};

type FormState = typeof INITIAL_FORM_STATE;

const SelectField = ({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
  placeholder = "Select option"
}: {
  label: string;
  name: keyof FormState;
  options: readonly string[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  placeholder?: string;
}) => {
  const id = useId();
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="form-input"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM_STATE);
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
      setForm(INITIAL_FORM_STATE);
    }, 600);
  };

  return (
    <section className="section contact-section">
      <div className="contact-page-shell">
        <div className="contact-hero-head section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Tell us what you need and we will recommend the right next step.</h2>
          <p className="section-subtitle">
            Startups, clinic expansions, replacement projects, sterilization workflow upgrades, and
            recurring consumables enquiries are all supported through the same contact team.
          </p>
        </div>

        <div className="contact-inline-strip">
          <div className="contact-inline-item">
            <p className="contact-label">Sales &amp; Project Contact</p>
            <p className="contact-detail">Carey</p>
            <div className="contact-link-stack">
              <a className="contact-link" href="mailto:carey@toplinedc.com">
                carey@toplinedc.com
              </a>
              <a className="contact-link" href="tel:+60169090913">
                +60 16-909 0913
              </a>
            </div>
          </div>
          <div className="contact-inline-item">
            <p className="contact-label">Office</p>
            <p className="contact-address">
              I-05-5, Setiawalk, Block I, Persiaran Wawasan, Bandar Pusat Puchong, 47160 Puchong,
              Selangor D.E., Malaysia
            </p>
          </div>
          <div className="contact-inline-item contact-inline-item--meta">
            <p className="contact-label">Quick Facts</p>
            <div className="contact-meta-list">
              <div className="contact-meta-row">
                <span className="contact-meta-label">Response</span>
                <span className="contact-meta-value">24-48h target</span>
              </div>
              <div className="contact-meta-row">
                <span className="contact-meta-label">Support</span>
                <span className="contact-meta-value">Equipment + consumables</span>
              </div>
              <div className="contact-meta-row">
                <span className="contact-meta-label">Visit</span>
                <span className="contact-meta-value">Site review scheduling available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="form-card contact-form-card">
          {!status.ok ? (
            <form onSubmit={handleSubmit} className="form-stack form-stack--compact">
              <input
                type="text"
                name="company_website"
                value={form.company_website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div className="contact-form-clean">
                <SelectField
                  label="Enquiry Type"
                  name="enquiryType"
                  value={form.enquiryType}
                  onChange={handleChange}
                  options={enquiryOptions}
                  required
                  placeholder="Select an option"
                />

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
                    <label htmlFor="companyName">Clinic / Company</label>
                    <input
                      id="companyName"
                      type="text"
                      name="companyName"
                      value={form.companyName}
                      onChange={handleChange}
                      placeholder="Clinic or company name"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="location">Clinic Location</label>
                    <input
                      id="location"
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="City, State / Region"
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

                <div className="form-grid form-grid--quad">
                  <SelectField
                    label="Clinic Size"
                    name="clinicSize"
                    value={form.clinicSize}
                    onChange={handleChange}
                    options={clinicSizeOptions}
                    placeholder="Select size"
                  />
                  <SelectField
                    label="Budget Range"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    options={budgetOptions}
                    placeholder="Select budget"
                  />
                  <SelectField
                    label="Timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    options={timelineOptions}
                    placeholder="Select timeline"
                  />
                  <SelectField
                    label="Preferred Contact"
                    name="preferredContact"
                    value={form.preferredContact}
                    onChange={handleChange}
                    options={contactMethodOptions}
                    placeholder="Select method"
                  />
                </div>

                <div className="form-field">
                  <div className="contact-focus-head">
                    <label>Equipment / Materials Focus</label>
                    <p className="form-helper">Select any that apply.</p>
                  </div>
                  <div className="contact-focus-grid" role="group" aria-label="Equipment or materials focus">
                    {equipmentFocusOptions.map((option) => {
                      const isSelected = form.equipmentFocus.includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          className={`contact-focus-chip${isSelected ? " active" : ""}`}
                          aria-pressed={isSelected}
                          onClick={() => handleEquipmentToggle(option)}
                        >
                          <span className="contact-focus-chip-dot" aria-hidden="true" />
                          <span>{option}</span>
                        </button>
                      );
                    })}
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
                    rows={5}
                    placeholder="Example: 4-chair expansion, panoramic imaging upgrade, sterilization room redesign, or monthly consumables support."
                    className="form-input form-textarea"
                  />
                </div>

                <p className="form-helper contact-form-helper">
                  Include what you know now (room count, preferred brands, budget range, timeline,
                  or current equipment). We can refine the specification during the first call.
                </p>
              </div>

              <div className="form-actions">
                <p className="form-note">By submitting, you agree to our privacy policy.</p>
                <button className="button primary" type="submit" disabled={status.sending}>
                  {status.sending ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          ) : (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h3>Thanks, your request has been received.</h3>
              <p>We will follow up within one business day to confirm scope and next steps.</p>
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
