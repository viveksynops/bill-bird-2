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
    src: "/campaign/concept-v2.png",
    alt: "Black acetate luxury eyeglasses displayed on a warm stone plinth.",
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

export const frameImages = {
  crystal: {
    src: "/images/optical-glass1.jpeg",
    alt: "Transparent crystal eyewear frame with soft green lenses on a white plinth.",
  },
  amber: {
    src: "/images/optical-glass2.jpeg",
    alt: "Amber acetate eyewear frame with rose-tinted lenses on a warm stone plinth.",
  },
  black: {
    src: "/images/optical-glass3.jpeg",
    alt: "Bold black rectangular eyewear frame photographed front-on.",
  },
  honey: {
    src: "/images/optical-glass4.jpeg",
    alt: "Honey acetate eyewear frame with brown lenses photographed front-on.",
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
    name: "No. 01 Crystal",
    material: "Crystal acetate / mineral green lens",
    description: "A translucent frame cut with quiet geometry, built for lightness and clarity.",
    image: frameImages.crystal,
  },
  {
    name: "No. 07 Amber",
    material: "Amber acetate / rose lens",
    description: "A warm sculptural silhouette with softened edges and a precise interior line.",
    image: frameImages.amber,
  },
  {
    name: "No. 12 Obsidian",
    material: "Black acetate / smoke lens",
    description: "A decisive rectangular frame with weight, polish, and gallery-like presence.",
    image: frameImages.black,
  },
  {
    name: "No. 18 Honey",
    material: "Honey acetate / brown lens",
    description: "A luminous sun frame shaped for warmth, balance, and long-wearing restraint.",
    image: frameImages.honey,
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
