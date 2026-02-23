import { equipmentCatalogSections, materialLineup } from "./siteContent";

export type CatalogCategoryDetail = {
  slug: string;
  kind: "equipment" | "materials";
  eyebrow: string;
  title: string;
  summary: string;
  lead: string;
  badges: readonly string[];
  highlights: readonly { title: string; detail: string }[];
  projectScenarios: readonly string[];
  quoteChecklist: readonly string[];
  relatedCategories: readonly { label: string; to: string }[];
};

export const getMaterialCategorySlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const equipmentPageOverrides: Record<
  string,
  Pick<CatalogCategoryDetail, "lead" | "projectScenarios" | "quoteChecklist">
> = {
  operatories: {
    lead:
      "Operatory systems should be selected as a room workflow decision, not only a chair decision. We help align chair, delivery, seating, and supporting utilities to how your team actually works.",
    projectScenarios: [
      "New clinic setup with standardized treatment room layouts",
      "Replacement of aging chairs while minimizing downtime",
      "Additional operatory expansion for higher patient volume"
    ],
    quoteChecklist: [
      "Number of operatories and room dimensions",
      "Preferred delivery style (over-the-patient, side, rear, etc.)",
      "Procedure mix and clinician ergonomics priorities",
      "Timeline for installation or replacement"
    ]
  },
  imaging: {
    lead:
      "Imaging procurement impacts diagnosis speed, patient communication, and room planning. We structure recommendations around treatment scope, space constraints, and future upgrade path.",
    projectScenarios: [
      "Panoramic / CBCT upgrade for implant and surgical cases",
      "Intraoral imaging standardization across multiple operatories",
      "Imaging room planning for a clinic expansion"
    ],
    quoteChecklist: [
      "Current imaging setup and intended upgrade goal",
      "Space available and room planning constraints",
      "Typical case types (general, ortho, surgery, implants)",
      "Budget range and target commissioning timeline"
    ]
  },
  sterilization: {
    lead:
      "Sterilization systems should be sized by instrument throughput and workflow zoning. We focus on cycle capacity, dirty-to-clean flow, and supporting reprocessing infrastructure.",
    projectScenarios: [
      "Sterilization room redesign for better instrument turnover",
      "Autoclave capacity upgrade due to increased procedure volume",
      "Reprocessing workflow standardization for multi-room clinics"
    ],
    quoteChecklist: [
      "Daily instrument load volume / peak periods",
      "Current sterilization room layout or floor plan",
      "Autoclave / thermodisinfection requirements",
      "Compliance and documentation requirements for procurement"
    ]
  },
  "water-filtration": {
    lead:
      "Utility support systems are often overlooked until performance issues appear. We review water, air, suction, and serviceability so connected equipment runs reliably long term.",
    projectScenarios: [
      "New clinic utility planning before equipment installation",
      "Equipment protection upgrades for unstable supply conditions",
      "Serviceability improvements during renovation or expansion"
    ],
    quoteChecklist: [
      "Clinic footprint and number of connected rooms",
      "Installed / planned equipment mix",
      "Known water or utility reliability issues",
      "Available service access / plant room constraints"
    ]
  },
  "small-equipment": {
    lead:
      "Handpieces and small devices affect daily uptime more than most teams expect. We help clinics standardize core sets, plan replacements, and reduce interruption when servicing is needed.",
    projectScenarios: [
      "Handpiece fleet refresh and standardization by room",
      "Startup chairside equipment list for new operatories",
      "Replacement planning for high-use devices and backups"
    ],
    quoteChecklist: [
      "Procedure volume and high-speed / low-speed usage needs",
      "Current brands/models and replacement priorities",
      "Need for backup units during servicing",
      "Preferred purchasing model (batch replacement vs phased)"
    ]
  }
};

export const equipmentCategoryPages: CatalogCategoryDetail[] = equipmentCatalogSections.map((section) => {
  const override = equipmentPageOverrides[section.id];
  return {
    slug: section.id,
    kind: "equipment",
    eyebrow: section.eyebrow,
    title: section.title,
    summary: section.description,
    lead: override?.lead ?? section.description,
    badges: section.brands,
    highlights: section.highlights,
    projectScenarios: override?.projectScenarios ?? [
      "Clinic expansion and room planning updates",
      "Replacement of existing systems",
      "Specification comparison and procurement review"
    ],
    quoteChecklist: override?.quoteChecklist ?? [
      "Clinic requirements and intended use",
      "Site dimensions / installation constraints",
      "Budget range and timeline",
      "Preferred brands or current setup"
    ],
    relatedCategories: equipmentCatalogSections
      .filter((candidate) => candidate.id !== section.id)
      .slice(0, 3)
      .map((candidate) => ({
        label: candidate.title,
        to: `/products/${candidate.id}`
      }))
  };
});

const materialCategoryOverrides: Record<
  string,
  Pick<CatalogCategoryDetail, "lead" | "projectScenarios" | "quoteChecklist">
> = {
  "restorative-materials": {
    lead:
      "Restorative consumables should be organized by daily throughput, preferred technique, and consistency across operators. We support category planning rather than one-off item chasing.",
    projectScenarios: [
      "Monthly replenishment list for general restorative workflows",
      "Branch standardization across multiple clinicians",
      "Budget-tier alternatives for high-turnover restorative items"
    ],
    quoteChecklist: [
      "Preferred restorative systems / brands (if any)",
      "Typical monthly consumption or patient volume",
      "Pack size preferences and ordering cadence",
      "Need for alternatives or price-tier options"
    ]
  },
  "impression-and-prosthetic-materials": {
    lead:
      "Impression and prosthetic materials procurement depends on case type, handling preference, and consistency across clinicians and labs. We can help shortlist categories by workflow.",
    projectScenarios: [
      "General prosthetic and crown/bridge impression support",
      "Case-based sourcing for prosthetic workflows",
      "Practice-wide standardization of impression categories"
    ],
    quoteChecklist: [
      "Primary case types and impression workflows",
      "Preferred material family (alginate, VPS, bite registration)",
      "Usage volume and urgency",
      "Any compatibility requirements with existing workflow"
    ]
  },
  "disposables-and-infection-control-consumables": {
    lead:
      "This category is about continuity. We focus on recurring-use items, pack-size fit, and reorder rhythm so clinics can avoid supply interruptions on high-turnover products.",
    projectScenarios: [
      "Monthly replenishment for multi-room clinics",
      "Startup disposable stock planning",
      "Cross-branch standardization and price control"
    ],
    quoteChecklist: [
      "Rooms / branches to be supplied",
      "High-turnover items and current monthly usage",
      "Preferred pack sizes and delivery cadence",
      "Need for substitution options during shortages"
    ]
  },
  "sterilization-packaging-and-monitoring": {
    lead:
      "Sterilization packaging and indicators are part of the reprocessing workflow, not just consumables. We help align pouches, indicators, and labeling with instrument flow and monitoring routines.",
    projectScenarios: [
      "Sterilization room process standardization",
      "Packaging and monitoring supplies for new reprocessing workflows",
      "Replacement of current indicator / pouch categories"
    ],
    quoteChecklist: [
      "Current sterilization workflow and monitoring routine",
      "Autoclave load volume and pouch size needs",
      "Labeling / indicator preferences",
      "Ordering frequency and storage constraints"
    ]
  }
};

const materialKeywordFallback = (title: string) => {
  const lower = title.toLowerCase();

  if (lower.includes("orthodontic")) {
    return {
      projectScenarios: [
        "Routine orthodontic adjustment consumables replenishment",
        "Chairside ortho supply setup for a new service line",
        "Stock continuity planning for high-use ortho consumables"
      ],
      quoteChecklist: [
        "Orthodontic services offered and case volume",
        "High-turnover consumables to prioritize",
        "Preferred brands/categories if any",
        "Reorder cadence and budget range"
      ]
    };
  }

  if (lower.includes("endo")) {
    return {
      projectScenarios: [
        "Endodontic procedure support consumables sourcing",
        "Case-driven replenishment for root canal workflows",
        "Alternative sourcing for urgent endo consumables"
      ],
      quoteChecklist: [
        "Procedure types and approximate monthly usage",
        "Consumable categories required (irrigation, obturation, sealers)",
        "Preferred systems or compatibility needs",
        "Timeline / urgency"
      ]
    };
  }

  if (lower.includes("surgical") || lower.includes("implant")) {
    return {
      projectScenarios: [
        "Case-by-case surgical consumables support",
        "Implant procedure setup consumables planning",
        "Procedure pack and support item sourcing"
      ],
      quoteChecklist: [
        "Procedure type and expected case frequency",
        "Consumable categories required",
        "Sterile / disposable preferences",
        "Case date or delivery timeline"
      ]
    };
  }

  return {
    projectScenarios: [
      "Recurring replenishment and restocking support",
      "Category sourcing for new or expanded services",
      "Alternative options when preferred items are unavailable"
    ],
    quoteChecklist: [
      "Category requirements and expected usage",
      "Preferred brands / pack sizes",
      "Timeline and urgency",
      "Budget tier or substitution preferences"
    ]
  };
};

export const materialCategoryPages: CatalogCategoryDetail[] = materialLineup.map((item) => {
  const slug = getMaterialCategorySlug(item.title);
  const override = materialCategoryOverrides[slug];
  const fallback = materialKeywordFallback(item.title);

  return {
    slug,
    kind: "materials",
    eyebrow: "Materials & Consumables",
    title: item.title,
    summary: item.description,
    lead:
      override?.lead ??
      `${item.description} We can help clinics source by usage rate, category priority, and replenishment cadence rather than one-off item requests.`,
    badges: [item.tag, ...item.examples].slice(0, 5),
    highlights: item.examples.map((example) => ({
      title: example,
      detail: `Category support and sourcing guidance for ${example.toLowerCase()} based on clinic usage and procurement requirements.`
    })),
    projectScenarios: override?.projectScenarios ?? fallback.projectScenarios,
    quoteChecklist: override?.quoteChecklist ?? fallback.quoteChecklist,
    relatedCategories: materialLineup
      .filter((candidate) => candidate.title !== item.title)
      .slice(0, 3)
      .map((candidate) => ({
        label: candidate.title,
        to: `/materials/${getMaterialCategorySlug(candidate.title)}`
      }))
  };
});

export const getEquipmentCategoryPage = (slug: string) =>
  equipmentCategoryPages.find((page) => page.slug === slug);

export const getMaterialCategoryPage = (slug: string) =>
  materialCategoryPages.find((page) => page.slug === slug);
