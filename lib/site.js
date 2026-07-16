export const navItems = [
  { href: "#about", label: "About" },
  { href: "#purity", label: "Purity" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Order" },
];

export const trustItems = [
  {
    title: "100% Hand-Rolled",
    icon: "leaf",
  },
  {
    title: "Jain-Friendly",
    icon: "drop",
  },
  {
    title: "No Palm Oil",
    icon: "ban",
  },
  {
    title: "Small Batch",
    icon: "basket",
  },
];

export const standards = [
  {
    title: "Hand-Rolled Excellence",
    description: "No industrial machines. This keeps the khakhra crisp, textured, and close to home.",
  },
  {
    title: "Jain Compliance",
    description:
      "Designated products follow strict no onion, garlic, potato, or root vegetable protocols.",
  },
  {
    title: "Clean Label",
    description:
      "No palm oil, artificial preservatives, synthetic colors, or unnecessary additives.",
  },
  {
    title: "Small-Batch Freshness",
    description: "Limited-batch preparation helps every order reach you with real freshness.",
  },
];

export const products = [
  {
    name: "Hand-Rolled Gujarati Khakhra",
    category: "Khakhra",
    description: "Traditional tava-roasted khakhra with handmade texture and clean ingredients.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/placeholders/khakhra-stack.svg`,
    alt: "Hand-rolled Gujarati khakhra placeholder",
  },
  {
    name: "Healthy Cookies",
    category: "Cookies",
    description: "Homemade cookies crafted for modern taste with a lighter, cleaner feel.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/placeholders/cookies-healthy.svg`,
    alt: "Healthy cookies placeholder",
  },
  {
    name: "Custom Cakes",
    category: "Cakes",
    description: "Small-batch cakes for birthdays, celebrations, and thoughtful gifting.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/placeholders/custom-cake.svg`,
    alt: "Custom cake placeholder",
  },
  {
    name: "Gujarati Namkeen and Snacks",
    category: "Namkeen",
    description: "Crunchy, savoury snacks made in limited batches for everyday tea time.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/placeholders/namkeen-snacks.svg`,
    alt: "Gujarati namkeen snacks placeholder",
  },
  {
    name: "Festive Hampers",
    category: "Bulk Orders",
    description: "Curated packs for festivals, offices, family gifting, and special occasions.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/placeholders/festive-hamper.svg`,
    alt: "Festive hamper placeholder",
  },
  {
    name: "Jain-Friendly Snacks",
    category: "Jain-Friendly",
    description: "Selected products prepared with strict ingredient protocols for sensitive needs.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/placeholders/purity-ingredients.svg`,
    alt: "Clean ingredients placeholder",
  },
];
