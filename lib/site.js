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
    name: "Plain Khakhra",
    category: "Khakhra",
    description: "The classic, everyday Gujarati staple. Simple, golden-roasted perfection.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/khakhras/plain-khakhra.jpg`,
    alt: "Plain Khakhra",
  },
  {
    name: "Masala Khakhra",
    category: "Khakhra",
    description: "A fiery blend of traditional Gujarati spices for that perfect chatpata kick.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/khakhras/masala-khakhra.jpg`,
    alt: "Masala Khakhra",
  },
  {
    name: "Jeera Khakhra",
    category: "Khakhra",
    description: "Earthy roasted cumin infuses every crispy bite of this all-time favourite.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/khakhras/jeera-khakhra.jpg`,
    alt: "Jeera Khakhra",
  },
  {
    name: "Methi Khakhra",
    category: "Khakhra",
    description: "Fragrant fenugreek leaves make this the ultimate savory tea-time companion.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/khakhras/methi-khakhra.jpg`,
    alt: "Methi Khakhra",
  },
  {
    name: "Manchurian Khakhra",
    category: "Khakhra",
    description: "Indo-Chinese zing meets Gujarati crunch. A bold, garlicky delight.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/khakhras/manchurian-khakhra.jpg`,
    alt: "Manchurian Khakhra",
  },
  {
    name: "Pani Puri Khakhra",
    category: "Khakhra",
    description: "The tangy, minty magic of street-style Pani Puri in a guilt-free crisp.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/khakhras/pani-puri-khakhra.jpg`,
    alt: "Pani Puri Khakhra",
  },
  {
    name: "Aachari Khakhra",
    category: "Khakhra",
    description: "Bursting with the tangy, lip-smacking flavours of traditional mango pickle.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/khakhras/aachari-khakhra.jpg`,
    alt: "Aachari Khakhra",
  },
  {
    name: "Mungadi Khakhra",
    category: "Khakhra",
    description: "A protein-packed, savoury crunch featuring the wholesome goodness of moong.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/khakhras/mungadi-khakhra.jpg`,
    alt: "Mungadi Khakhra",
  },
  {
    name: "Ragi Khakhra",
    category: "Khakhra",
    description: "A nutrient-rich millet twist on the classic. Healthy, hearty, and crisp.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/khakhras/ragi-khakhra.jpg`,
    alt: "Ragi Khakhra",
  },
  {
    name: "Jowar Khakhra",
    category: "Khakhra",
    description: "Light and rustic sorghum crisps for a wholesome, guilt-free snack.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/khakhras/jowar-khakhra.jpg`,
    alt: "Jowar Khakhra",
  },
  {
    name: "Bajra Methi Khakhra",
    category: "Khakhra",
    description: "Pearl millet and fresh fenugreek combine for a deeply earthy, wintery warmth.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/khakhras/bajra-methi-khakhra.jpg`,
    alt: "Bajra Methi Khakhra",
  },
  {
    name: "Chorafali Khakhra",
    category: "Khakhra",
    description: "The beloved Diwali festive flavor, packed into a spicy, irresistible crisp.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/khakhras/chorafali-khakhra.jpg`,
    alt: "Chorafali Khakhra",
  },
  {
    name: "Moth Khakhra",
    category: "Khakhra",
    description: "Nutty moth beans lend a robust crunch and unique flavor to this rustic treat.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/khakhras/moth-khakhra.jpg`,
    alt: "Moth Khakhra",
  },
  {
    name: "Oats Khakhra",
    category: "Khakhra",
    description: "A modern, fiber-rich take on a Gujarati classic without sacrificing taste.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/khakhras/oats-khakhra.jpg`,
    alt: "Oats Khakhra",
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
