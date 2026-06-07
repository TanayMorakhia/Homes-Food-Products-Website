import { useState } from "react";

const WHATSAPP_NUMBER = "919999999999";
const baseMessage =
  "Hello Homes Food Products, I would like to know more about your products.";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#purity", label: "Purity" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Order" },
];

const trustItems = [
  {
    label: "100% Hand-Rolled",
    paths: [
      "M5 17c5-1 9-5 12-12 2 7-1 13-6 15-3 1-5 0-6-3Z",
      "M8 16c2-3 5-6 9-9",
    ],
  },
  {
    label: "Jain-Friendly",
    paths: [
      "M12 3c5 3 8 7 8 11a8 8 0 0 1-16 0c0-4 3-8 8-11Z",
      "M9 13l2 2 4-5",
    ],
  },
  {
    label: "No Palm Oil",
    paths: ["M7 4h10v16H7z", "M9 8h6", "M9 12h4", "M6 6l12 12"],
  },
  {
    label: "Small Batch",
    paths: ["M4 8h16l-2 12H6L4 8Z", "M8 8V5h8v3", "M9 13h6"],
  },
];

const standards = [
  {
    title: "Hand-Rolled Excellence",
    description:
      "No industrial machines. This keeps the khakhra crisp, textured, and close to home.",
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
    description:
      "Limited-batch preparation helps every order reach you with real freshness.",
  },
];

const products = [
  {
    category: "Khakhra",
    title: "Hand-Rolled Gujarati Khakhra",
    description:
      "Traditional tava-roasted khakhra with handmade texture and clean ingredients.",
    image: "/assets/placeholders/khakhra-stack.svg",
    alt: "Hand-rolled Gujarati khakhra placeholder",
  },
  {
    category: "Cookies",
    title: "Healthy Cookies",
    description:
      "Homemade cookies crafted for modern taste with a lighter, cleaner feel.",
    image: "/assets/placeholders/cookies-healthy.svg",
    alt: "Healthy cookies placeholder",
  },
  {
    category: "Cakes",
    title: "Custom Cakes",
    description:
      "Small-batch cakes for birthdays, celebrations, and thoughtful gifting.",
    image: "/assets/placeholders/custom-cake.svg",
    alt: "Custom cake placeholder",
  },
  {
    category: "Namkeen",
    title: "Gujarati Namkeen and Snacks",
    description:
      "Crunchy, savoury snacks made in limited batches for everyday tea time.",
    image: "/assets/placeholders/namkeen-snacks.svg",
    alt: "Gujarati namkeen snacks placeholder",
  },
  {
    category: "Bulk Orders",
    title: "Festive Hampers",
    description:
      "Curated packs for festivals, offices, family gifting, and special occasions.",
    image: "/assets/placeholders/festive-hamper.svg",
    alt: "Festive hamper placeholder",
  },
  {
    category: "Jain-Friendly",
    title: "Jain-Friendly Snacks",
    description:
      "Selected products prepared with strict ingredient protocols for sensitive needs.",
    image: "/assets/placeholders/purity-ingredients.svg",
    alt: "Clean ingredients placeholder",
  },
];

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Icon({ paths }) {
  return (
    <span className="icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        {paths.map((path) => (
          <path key={path} d={path} />
        ))}
      </svg>
    </span>
  );
}

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Homes Food Products home">
        <span className="brand-mark">H</span>
        <span>
          <strong>Homes</strong>
          <small>Food Products</small>
        </span>
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-label="Open navigation"
        aria-expanded={isNavOpen}
        onClick={() => setIsNavOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        className={`site-nav${isNavOpen ? " is-open" : ""}`}
        aria-label="Primary navigation"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsNavOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Authentic Gujarati Taste</p>
        <h1>Homes Food Products</h1>
        <p className="tagline">Purity by Hand. Tradition by Heart.</p>
        <p>
          Hand-rolled khakhra, homemade snacks, healthy cookies, custom cakes,
          and festive orders crafted in small batches with uncompromising purity.
        </p>
        <div className="hero-actions">
          <a
            className="button primary"
            href={whatsappUrl(baseMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order on WhatsApp
          </a>
          <a className="button secondary" href="#products">
            View Products
          </a>
        </div>
      </div>
      <div className="hero-media">
        <img
          src="/assets/placeholders/hero-khakhra-chai.svg"
          alt="Khakhra and chai placeholder"
        />
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Purity highlights">
      {trustItems.map((item) => (
        <article key={item.label}>
          <Icon paths={item.paths} />
          <strong>{item.label}</strong>
        </article>
      ))}
    </section>
  );
}

function Story() {
  return (
    <section id="about" className="story section-grid">
      <div>
        <p className="eyebrow">Our Story</p>
        <h2>From creative baking to authentic hand-rolled tradition.</h2>
      </div>
      <div className="story-body">
        <p>
          Homes Food Products began as a side quest in creative baking and grew
          into a mission to restore the true taste of a Gujarati household.
        </p>
        <p>
          We saw shelves filled with machine-made snacks that looked perfect but
          missed the soul of food made by hand. So we moved from the oven to the
          tava, bringing the same artisanal care to khakhra, namkeen, cookies,
          and cakes.
        </p>
        <img
          src="/assets/placeholders/hand-rolling-process.svg"
          alt="Hand rolling process placeholder"
        />
      </div>
    </section>
  );
}

function Purity() {
  return (
    <section id="purity" className="purity">
      <div className="section-heading">
        <p className="eyebrow">Purity Standards</p>
        <h2>Made with strict choices, not shortcuts.</h2>
      </div>

      <div className="standards">
        {standards.map((standard) => (
          <article key={standard.title}>
            <h3>{standard.title}</h3>
            <p>{standard.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const message = `Hello Homes Food Products, I would like to order/enquire about ${product.title}. Please share availability, pack size, and price.`;

  return (
    <article className="product-card">
      <img src={product.image} alt={product.alt} />
      <div>
        <p className="category">{product.category}</p>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <button
          className="button small"
          type="button"
          onClick={() => window.open(whatsappUrl(message), "_blank", "noopener")}
        >
          Order on WhatsApp
        </button>
      </div>
    </article>
  );
}

function Products() {
  return (
    <section id="products" className="products">
      <div className="section-heading">
        <p className="eyebrow">Product Gallery</p>
        <h2>Top sellers and custom favourites.</h2>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Homes Food Products, I have an inquiry.",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Order Type: ${data.get("type")}`,
      `Message: ${data.get("message") || "Please contact me with details."}`,
    ].join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener");
  }

  return (
    <section id="contact" className="contact section-grid">
      <div>
        <p className="eyebrow">Contact and Orders</p>
        <h2>Bulk, festive, and custom cake inquiries.</h2>
        <p>
          Share the product, quantity, delivery date, and dietary preference. We
          will prepare a WhatsApp inquiry for a quick conversation.
        </p>
      </div>

      <form className="inquiry-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          Order Type
          <select name="type" required defaultValue="">
            <option value="">Select one</option>
            <option>Bulk Order</option>
            <option>Festive Hamper</option>
            <option>Custom Cake</option>
            <option>Product Inquiry</option>
          </select>
        </label>
        <label>
          Message
          <textarea
            name="message"
            rows="4"
            placeholder="Quantity, date, product names, dietary needs"
          ></textarea>
        </label>
        <button className="button primary" type="submit">
          Send Inquiry on WhatsApp
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        <strong>Homes Food Products</strong> | Purity by Hand. Tradition by
        Heart.
      </p>
      <a
        href={whatsappUrl(baseMessage)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Order on WhatsApp
      </a>
    </footer>
  );
}

function FloatingWhatsapp() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl(baseMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3a8.7 8.7 0 0 0-7.4 13.3L4 21l4.8-1.3A8.7 8.7 0 1 0 12 3Z" />
        <path d="M9 8.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.5c.1.3.1.5-.1.7l-.4.5c.6 1 1.4 1.8 2.6 2.4l.5-.6c.2-.2.5-.3.8-.2l1.4.7c.3.1.4.3.4.6v.4c0 .4-.2.7-.5.9-.5.3-1.4.4-2.4.1-2.6-.8-4.5-2.6-5.4-5.2-.3-.9-.2-1.8.2-2.4Z" />
      </svg>
    </a>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <TrustStrip />
        <Story />
        <Purity />
        <Products />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
