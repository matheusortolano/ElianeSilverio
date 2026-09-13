export interface Link {
  label: string;
  href: string;
}

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface TextBlock {
  title: string;
  text: string;
}

export interface Contact {
  whatsapp: string;
  email: string;
  linkedin: string;
}

export interface SiteContent {
  name: string;

  nameLines: string[];

  title: string;

  navigation: Link[];

  cta: {
    contact: string;
    hero: string;
    discover: string;
    solutions: string;
    linkedin: string;
  };

  ui: {
    skip: string;
    menuOpen: string;
    menuClose: string;
    navigation: string;
    scroll: string;
    pending: string;
    pendingLabel: string;
    whatsapp: string;
    email: string;
    linkedin: string;
  };

  hero: {
    eyebrow: string;
    text: string;
    note: string;
  };

  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    stat: {
      value: string;
      label: string;
    };
  };

  positioning: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: string[];
    signature: string;
  };

  audience: {
    eyebrow: string;
    title: string;
    text: string;
    items: string[];
  };

  solutions: {
    eyebrow: string;
    title: string;
    text: string;
    items: TextBlock[];
  };

  approach: {
    eyebrow: string;
    title: string;
    items: TextBlock[];
  };

  manifesto: {
    first: string;
    second: string;
  };

  presence: {
    eyebrow: string;
    title: string;
    text: string;
    captions: string[];
  };

  contactSection: {
    eyebrow: string;
    title: string;
    text: string;
  };

  contact: Contact;

  photos: Record<
    | "hero"
    | "about"
    | "presence"
    | "smile"
    | "executive"
    | "color",
    Photo
  >;

  footer: {
    copyright: string;
    credit: string;
    navigationLabel: string;
  };
}