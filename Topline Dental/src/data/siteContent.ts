import eurondaE8 from "../assets/euronda-e8-apertura-edited.jpg";
import eurondaAquafilter from "../assets/euronda-aquafilter-1to1-edited-1.jpg";
import eurondaThermodisinfectors from "../assets/euronda-prosystem-cleaning-eurosafe-thermodisinfectors-ok.jpg";

export const solutions = [
  {
    title: "Operatory Suites",
    tag: "Chairs & Units",
    description:
      "Ergonomic dental chair systems and delivery units designed for efficient, patient-friendly workflows."
  },
  {
    title: "Digital Imaging",
    tag: "Diagnostics",
    description:
      "Digital X-ray and intraoral camera solutions that enhance diagnostics and treatment planning."
  },
  {
    title: "Sterilization",
    tag: "Infection Control",
    description:
      "Autoclaves, thermodisinfectors, and filtration systems for reliable clinical hygiene."
  },
  {
    title: "Practice Essentials",
    tag: "Workflow Tools",
    description:
      "Curated equipment and accessories that keep chairside operations smooth and consistent."
  }
];

export const overviewMetrics = [
  { value: "4", label: "Core equipment categories" },
  { value: "3", label: "Featured Euronda systems" },
  { value: "1", label: "Dedicated contact for every clinic" }
];

export const engagementSteps = [
  {
    title: "Consultation",
    detail: "Align on goals, room layouts, and clinical priorities."
  },
  {
    title: "Specification",
    detail: "Compare equipment options and confirm the right mix."
  },
  {
    title: "Installation",
    detail: "Coordinate delivery, setup, and team onboarding."
  },
  {
    title: "Aftercare",
    detail: "Stay supported with maintenance guidance and upgrades."
  }
];

export const productHighlights = [
  {
    id: "euronda-e8",
    title: "Euronda E8 Autoclave",
    detail: "Reliable sterilization performance engineered for daily clinical demand.",
    image: eurondaE8,
    alt: "Euronda E8 autoclave sterilization system"
  },
  {
    id: "euronda-aquafilter",
    title: "Euronda Aquafilter 1 to 1",
    detail: "Water filtration system that protects equipment and ensures consistency.",
    image: eurondaAquafilter,
    alt: "Euronda Aquafilter 1 to 1 dental water filtration system"
  },
  {
    id: "euronda-thermodisinfectors",
    title: "Euronda Thermodisinfectors",
    detail: "Automated instrument disinfection for compliant, efficient workflows.",
    image: eurondaThermodisinfectors,
    alt: "Euronda thermodisinfector units for dental practices"
  }
];

export const equipmentCatalogSections = [
  {
    id: "operatories",
    eyebrow: "Operatories",
    title: "Dental Chairs & Units",
    description:
      "Operatory chair systems, delivery units, stools, and chairside support configurations for ergonomic treatment workflows.",
    brands: ["A-dec", "Chairside delivery systems", "Operator stools", "Assistant support units"],
    highlights: [
      {
        title: "Chair & Delivery Platforms",
        detail: "Integrated chair, delivery, and lighting configurations designed for daily throughput and clinician comfort."
      },
      {
        title: "Ergonomic Stool Pairing",
        detail: "Dentist and assistant stool recommendations matched to operatory layout and procedure mix."
      },
      {
        title: "Chairside Support Configuration",
        detail: "Tray, cabinetry, and workflow support planning to improve movement and reduce reset time."
      }
    ]
  },
  {
    id: "imaging",
    eyebrow: "Diagnostics",
    title: "Imaging Systems",
    description:
      "Digital imaging platforms and diagnostic tools that support treatment planning, case communication, and chairside efficiency.",
    brands: ["Planmeca", "Carestream", "Intraoral imaging", "Diagnostic workflows"],
    highlights: [
      {
        title: "Panoramic / 3D Imaging Options",
        detail: "Imaging system recommendations aligned to practice scope, case volume, and treatment planning needs."
      },
      {
        title: "Intraoral Imaging Setup",
        detail: "Chairside image capture workflows for diagnostics, patient education, and case presentation."
      },
      {
        title: "Imaging Room Workflow Planning",
        detail: "Placement and access planning to reduce congestion and support smoother patient flow."
      }
    ]
  },
  {
    id: "sterilization",
    eyebrow: "Infection Control",
    title: "Sterilization Systems",
    description:
      "Sterilization and instrument reprocessing systems for compliant, efficient infection-control workflows in modern clinics.",
    brands: ["W&H", "Euronda", "Autoclaves", "Thermodisinfection"],
    highlights: [
      {
        title: "Autoclaves",
        detail: "Validated sterilization cycles and chamber capacity options for routine clinical demand."
      },
      {
        title: "Thermodisinfection",
        detail: "Automated instrument cleaning/disinfection to improve consistency and reduce manual handling."
      },
      {
        title: "Sterilization Workflow Planning",
        detail: "Dirty-to-clean process design, zoning, and support accessories to improve instrument turnover."
      }
    ]
  },
  {
    id: "water-filtration",
    eyebrow: "Utilities",
    title: "Water Filtration & Support Systems",
    description:
      "Filtration and support systems that protect equipment performance and improve consistency in daily operation.",
    brands: ["Euronda", "Water filtration", "Utility support", "Equipment protection"],
    highlights: [
      {
        title: "Chairside Water Filtration",
        detail: "Filtration systems that support water quality consistency and help protect connected equipment."
      },
      {
        title: "Equipment Protection Planning",
        detail: "Utility support recommendations based on clinic footprint and installed system mix."
      },
      {
        title: "Maintenance-Oriented Setup",
        detail: "Installation layouts that allow easier servicing and long-term upkeep."
      }
    ]
  }
] as const;

export const equipmentBrandLineup = [
  {
    category: "Dental Chair",
    items: [
      "Stern Weber, Italy",
      "Foshan Safety, China",
      "Siamdent Morita, Thailand"
    ]
  },
  {
    category: "Imaging",
    items: ["Stern Weber, Italy (IOPA)", "MyRay, Italy (HyScan)"]
  },
  {
    category: "Autoclave",
    items: ["Euronda, Italy"]
  },
  {
    category: "Handpieces",
    items: ["NSK, Japan", "Koungsun, China", "Foshan Safety, China"]
  },
  {
    category: "Compressor & Suction",
    items: ["MGF, Italy", "Cattani, Italy"]
  },
  {
    category: "Furniture",
    items: ["Rossicaws, Italy", "Hensles Technology, China"]
  }
] as const;

export const consumableBrandLineup = [
  {
    category: "Consumables",
    items: ["Euronda, Italy (Disposable)", "Nipro, Japan (Needle)"]
  }
] as const;

export const materialLineup = [
  {
    title: "Restorative Materials",
    tag: "Composites • Adhesives • Cements",
    description:
      "Composite restoratives, bonding agents, etchants, liners, and luting / resin cements for direct and indirect restorative workflows.",
    examples: ["Universal composites", "Bonding systems", "Resin / glass ionomer cements"]
  },
  {
    title: "Impression & Prosthetic Materials",
    tag: "Alginate • VPS • Bite Registration",
    description:
      "Impression materials and accessories for study models, prosthetic work, and precision restorative cases.",
    examples: ["Alginate", "Vinyl polysiloxane (VPS)", "Bite registration materials"]
  },
  {
    title: "Orthodontic Materials & Consumables",
    tag: "Bonding • Elastomerics • Chairside Ortho Supplies",
    description:
      "Chairside orthodontic consumables used for bonding, ligation, finishing, and routine adjustments in orthodontic treatment workflows.",
    examples: ["Bracket bonding consumables", "Elastomeric ligatures / chains", "Orthodontic wax & accessories"]
  },
  {
    title: "Endodontic Consumables",
    tag: "Obturation • Irrigation • Sealers",
    description:
      "Core root canal consumables and supporting materials for shaping, irrigation, obturation, and sealing protocols.",
    examples: ["Gutta-percha / obturation materials", "Endo sealers", "Irrigation materials"]
  },
  {
    title: "Surgical & Implant Consumables",
    tag: "Procedure Consumables",
    description:
      "Consumables and supporting materials used in oral surgery and implant-related procedures, prep, and post-op workflow support.",
    examples: ["Surgical drapes / disposables", "Sutures & hemostatic materials", "Procedure setup consumables"]
  },
  {
    title: "Preventive & Hygiene Materials",
    tag: "Prophy • Fluoride • Infection Control",
    description:
      "Day-to-day preventive and hygiene materials that support infection control, patient safety, and chairside turnover.",
    examples: ["Prophy and preventive products", "Surface barriers / disposables", "Sterilization consumables"]
  },
  {
    title: "Disposables & Infection Control Consumables",
    tag: "PPE • Barriers • Sterilization Support",
    description:
      "Single-use clinic consumables for chairside protection, cross-contamination control, and sterilization packaging workflows.",
    examples: ["Barrier films and sleeves", "Patient bibs / cups / suction tips", "Sterilization pouches and wraps"]
  },
  {
    title: "Finishing, Polishing & Chairside Accessories",
    tag: "Workflow Consumables",
    description:
      "Chairside materials and accessories used to complete restorative procedures efficiently and consistently.",
    examples: ["Finishing and polishing consumables", "Mixing and dispensing accessories", "Matrices and wedges"]
  },
  {
    title: "Whitening & Cosmetic Consumables",
    tag: "Aesthetic Procedures",
    description:
      "Chairside and take-home whitening support consumables plus accessories used in cosmetic treatment workflows.",
    examples: ["Whitening gels / kits", "Retractors and trays", "Shade and finishing accessories"]
  },
  {
    title: "Anesthesia & Procedure Support Consumables",
    tag: "Chairside Procedure Prep",
    description:
      "Common procedure support consumables used for patient preparation and routine treatment delivery across disciplines.",
    examples: ["Topical prep materials", "Dispensing accessories", "Chairside setup consumables"]
  },
  {
    title: "Pediatric & General Practice Consumables",
    tag: "Everyday Clinical Use",
    description:
      "High-turnover consumables used across general and pediatric practice for preventive, restorative, and routine chairside care.",
    examples: ["Fluoride / preventive consumables", "Isolation accessories", "Disposable chairside supplies"]
  },
  {
    title: "Lab & Digital Workflow Materials",
    tag: "CAD/CAM • 3D Print • Model Materials",
    description:
      "Selected laboratory and digital workflow materials for model work, chairside fabrication support, and modern clinic-lab coordination.",
    examples: ["CAD/CAM material categories", "3D printing resins", "Model / gypsum materials"]
  }
] as const;

export const dashboardSignals = [
  {
    label: "Recommended Mix",
    value: "Chairs, imaging, sterilization"
  },
  {
    label: "Procurement Focus",
    value: "Performance + longevity"
  },
  {
    label: "Clinic Impact",
    value: "Faster diagnostics + smoother flow"
  }
];

export const enquiryOptions = [
  "General Inquiry",
  "Equipment Quote",
  "Dental Materials & Consumables",
  "Dental Chairs & Units",
  "Digital Imaging Systems",
  "Sterilization & Hygiene",
  "Service & Maintenance",
  "Partnership Request",
  "Other"
];

export const clinicSizeOptions = [
  "1-2 operatories",
  "3-5 operatories",
  "6-10 operatories",
  "11+ operatories"
];

export const timelineOptions = [
  "Immediate (0-1 month)",
  "Short term (1-3 months)",
  "Mid term (3-6 months)",
  "Long term (6+ months)"
];

export const budgetOptions = [
  "Below RM50k",
  "RM50k - RM150k",
  "RM150k - RM300k",
  "RM300k+",
  "Not sure yet"
];

export const contactMethodOptions = [
  "Email",
  "Phone call",
  "WhatsApp",
  "On-site visit"
];

export const equipmentFocusOptions = [
  "Operatory chairs & units",
  "Digital X-ray / imaging",
  "Sterilization systems",
  "Water filtration",
  "Dental materials & consumables",
  "Orthodontic materials / consumables",
  "Accessories & consumables"
];

export const companyIdentity = {
  tradeName: "Topline Dental Concept",
  legalName: "Topline Dental Concept Sdn Bhd",
  subtitle: "Modern dental equipment & supplies.",
  businessRegistration: "202201028017 (1473714-P)"
} as const;

export const complianceCredentials = [
  {
    title: "MDA Establishment License (Authorized Representative)",
    reference: "MDA-9146-W125",
    category: "Medical Device Authority (Malaysia)",
    note: "Authorized Representative establishment license reference on file."
  },
  {
    title: "MDA Establishment License (Importer)",
    reference: "MDA-9447-P125",
    category: "Medical Device Authority (Malaysia)",
    note: "Importer establishment license reference on file."
  },
  {
    title: "GDPMD Certification / Recertification",
    reference: "QS GDPMD 008",
    category: "Quality System / GDPMD",
    note: "Certification and recertification documents (2025) are on file."
  },
  {
    title: "Lesen Kelas C & E",
    reference: "LPTA A 3748",
    category: "Local Operating License",
    note: "License documents and annexure are on file."
  }
] as const;
