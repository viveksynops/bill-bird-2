export type NavItem = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
};

export type Collection = {
  name: string;
  description: string;
  image: ImageAsset;
};

export type StoryStep = {
  title: string;
  eyebrow: string;
  body: string;
  image: ImageAsset;
};

export type FrameFeature = {
  name: string;
  description: string;
  material: string;
  image: ImageAsset;
};

export type JournalEntry = {
  topic: string;
  title: string;
  image: ImageAsset;
};
