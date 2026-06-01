import type {
  Collection,
  FrameFeature,
  ImageAsset,
  JournalEntry,
  NavItem,
  StoryStep,
} from "@/types/content";

export const navItems: NavItem[] = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Collections", href: "#collections" },
  { label: "Craftsmanship", href: "#craftsmanship" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export const campaignImages = {
  concept: {
    src: "/campaign/concept.png",
    alt: "Luxury eyewear landing page art direction concept.",
  },
  hero: {
    src: "/campaign/hero.png",
    alt: "Editorial campaign portrait with sculptural luxury eyewear.",
  },
  craft: {
    src: "/campaign/craft.png",
    alt: "Artisan hands finishing a premium eyewear frame.",
  },
  frame: {
    src: "/campaign/frame.png",
    alt: "Sculptural luxury eyewear frame presented as an art object.",
  },
} satisfies Record<string, ImageAsset>;

export const philosophyPoints = [
  "Timeless Design",
  "Handcrafted Quality",
  "Sustainability",
  "Lasting Materials",
];

export const collections: Collection[] = [
  {
    name: "Titanium Series",
    description: "Featherweight silhouettes shaped from brushed Japanese titanium.",
    image: campaignImages.frame,
  },
  {
    name: "Heritage Collection",
    description: "Classic optical proportions reworked with a quieter modern line.",
    image: campaignImages.hero,
  },
  {
    name: "Everyday Essentials",
    description: "Disciplined frames for daily wear, built to disappear into ritual.",
    image: campaignImages.craft,
  },
  {
    name: "Limited Editions",
    description: "Small-run objects defined by material contrast and exacting finish.",
    image: campaignImages.concept,
  },
];

export const craftsmanshipSteps: StoryStep[] = [
  {
    eyebrow: "01 / Material Selection",
    title: "Chosen For A Longer Life",
    body: "Acetate, titanium, and mineral lenses are selected for stability, tactility, and the way they mature over years of wear.",
    image: campaignImages.craft,
  },
  {
    eyebrow: "02 / Design Process",
    title: "Drawn Until Nothing Is Extra",
    body: "Each line is reduced through prototypes, fit studies, and negative space until the frame feels inevitable.",
    image: campaignImages.concept,
  },
  {
    eyebrow: "03 / Hand Finishing",
    title: "Touched By Human Judgment",
    body: "Edges are softened, hinges are tuned, and every contact point is finished by hand before final inspection.",
    image: campaignImages.frame,
  },
  {
    eyebrow: "04 / Precision Craftsmanship",
    title: "Tolerances Made Visible",
    body: "Each hinge, bridge, and temple is calibrated in small increments until the object feels balanced before it feels noticed.",
    image: campaignImages.concept,
  },
  {
    eyebrow: "05 / Quality Control",
    title: "Measured, Worn, Reconsidered",
    body: "Every frame is balanced, stress tested, and reviewed for the small tolerances that define long-term comfort.",
    image: campaignImages.hero,
  },
];

export const galleryImages: ImageAsset[] = [
  campaignImages.hero,
  campaignImages.frame,
  campaignImages.craft,
  campaignImages.concept,
  campaignImages.hero,
];

export const featuredFrames: FrameFeature[] = [
  {
    name: "No. 01 Arc",
    material: "Black acetate / titanium",
    description: "An architectural optical frame with a softened bridge and barely visible hardware.",
    image: campaignImages.frame,
  },
  {
    name: "No. 07 Line",
    material: "Brushed titanium",
    description: "A near-weightless silhouette shaped for precision, restraint, and all-day balance.",
    image: campaignImages.craft,
  },
  {
    name: "No. 12 Shade",
    material: "Mineral lens / acetate",
    description: "A cinematic sun frame that frames the face without performing for the room.",
    image: campaignImages.hero,
  },
];

export const manifestoLines = [
  "Made To Last.",
  "Designed For Decades.",
  "Every Detail Matters.",
  "Luxury Is Restraint.",
];

export const journalEntries: JournalEntry[] = [
  {
    topic: "Design",
    title: "The discipline of the invisible line",
    image: campaignImages.concept,
  },
  {
    topic: "Craftsmanship",
    title: "Why hand-finishing still matters",
    image: campaignImages.craft,
  },
  {
    topic: "Materials",
    title: "Titanium, acetate, mineral glass",
    image: campaignImages.frame,
  },
  {
    topic: "Style",
    title: "Frames as personal architecture",
    image: campaignImages.hero,
  },
];
