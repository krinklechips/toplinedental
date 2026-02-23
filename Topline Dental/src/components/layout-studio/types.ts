export type LayoutItemType =
  | "dental-chair"
  | "dentist-stool"
  | "assistant-stool"
  | "cabinet"
  | "sink"
  | "sterilizer"
  | "xray-imaging"
  | "pc-workstation"
  | "reception-desk";

export type LayoutItem = {
  id: string;
  type: LayoutItemType;
  x: number;
  y: number;
  rotation: number;
};

export type LayoutItemDefinition = {
  type: LayoutItemType;
  label: string;
  footprint: {
    width: number;
    height: number;
  };
};

export const GRID_SIZE = 20;

export const SCALE_LABEL = "1 square = 0.5m";

export const LAYOUT_ITEM_DEFINITIONS: LayoutItemDefinition[] = [
  {
    type: "dental-chair",
    label: "Dental Chair",
    footprint: { width: 130, height: 88 }
  },
  {
    type: "dentist-stool",
    label: "Dentist Stool",
    footprint: { width: 104, height: 78 }
  },
  {
    type: "assistant-stool",
    label: "Assistant Stool",
    footprint: { width: 104, height: 78 }
  },
  {
    type: "cabinet",
    label: "Cabinet",
    footprint: { width: 132, height: 84 }
  },
  {
    type: "sink",
    label: "Sink",
    footprint: { width: 118, height: 82 }
  },
  {
    type: "sterilizer",
    label: "Sterilizer",
    footprint: { width: 124, height: 84 }
  },
  {
    type: "xray-imaging",
    label: "X-ray / Imaging",
    footprint: { width: 138, height: 92 }
  },
  {
    type: "pc-workstation",
    label: "PC / Workstation",
    footprint: { width: 128, height: 86 }
  },
  {
    type: "reception-desk",
    label: "Reception Desk",
    footprint: { width: 152, height: 90 }
  }
];

export const LAYOUT_ITEM_BY_TYPE = Object.fromEntries(
  LAYOUT_ITEM_DEFINITIONS.map((definition) => [definition.type, definition])
) as Record<LayoutItemType, LayoutItemDefinition>;

export const isLayoutItemType = (value: string): value is LayoutItemType =>
  LAYOUT_ITEM_DEFINITIONS.some((definition) => definition.type === value);
