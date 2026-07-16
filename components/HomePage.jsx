"use client";

import { useState } from "react";
import { navItems, products, standards, trustItems } from "@/lib/site";
import {
  createInquiryMessage,
  createProductMessage,
  createWhatsAppUrl,
  defaultWhatsAppMessage,
} from "@/lib/whatsapp";

function TrustIcon({ type }) {
  const paths = {
    leaf: (
      <>
        <path d="M5 17c5-1 9-5 12-12 2 7-1 13-6 15-3 1-5 0-6-3Z" />
        <path d="M8 16c2-3 5-6 9-9" />
      </>
    ),
    drop: (
      <>
        <path d="M12 3c5 3 8 7 8 11a8 8 0 0 1-16 0c0-4 3-8 8-11Z" />
        <path d="M9 13l2 2 4-5" />
      </>
    ),
    ban: (
      <>
        <path d="M7 4h10v16H7z" />
        <path d="M9 8h6" />
        <path d="M9 12h4" />
        <path d="M6 6l12 12" />
      </>
    ),
    basket: (
      <>
        <path d="M4 8h16l-2 12H6L4 8Z" />
        <path d="M8 8V5h8v3" />
        <path d="M9 13h6" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

function openWhatsApp(message) {
  window.open(createWhatsAppUrl(message), "_blank", "noopener");
}

export default function HomePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleInquirySubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = createInquiryMessage({
      name: formData.get("name"),
      phone: formData.get("phone"),
      type: formData.get("type"),
      message: formData.get("message"),
    });

    openWhatsApp(message);
  }

  return (
    <>
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
          onClick={() => setIsNavOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`site-nav ${isNavOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsNavOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Authentic Gujarati Taste</p>
            <h1>Homes Food Products</h1>
            <p className="tagline">Purity by Hand. Tradition by Heart.</p>
            <p>
              Hand-rolled khakhra, homemade snacks, healthy cookies, custom cakes, and festive
              orders crafted in small batches with uncompromising purity.
            </p>
            <div className="hero-actions">
              <a
                className="button primary"
                href={createWhatsAppUrl(defaultWhatsAppMessage)}
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
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/placeholders/hero-khakhra-chai.svg`} alt="Khakhra and chai placeholder" />
          </div>
        </section>

        <section className="trust-strip" aria-label="Purity highlights">
          {trustItems.map((item) => (
            <article key={item.title}>
              <span className="icon" aria-hidden="true">
                <TrustIcon type={item.icon} />
              </span>
              <strong>{item.title}</strong>
            </article>
          ))}
        </section>

        <section id="about" className="story section-grid">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2>From creative baking to authentic hand-rolled tradition.</h2>
          </div>
          <div className="story-body">
            <p>
              Homes Food Products began as a side quest in creative baking and grew into a mission
              to restore the true taste of a Gujarati household.
            </p>
            <p>
              We saw shelves filled with machine-made snacks that looked perfect but missed the soul
              of food made by hand. So we moved from the oven to the tava, bringing the same
              artisanal care to khakhra, namkeen, cookies, and cakes.
            </p>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/placeholders/hand-rolling-process.svg`}
              alt="Hand rolling process placeholder"
            />
          </div>
        </section>

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

        <section id="products" className="products">
          <div className="section-heading">
            <p className="eyebrow">Product Gallery</p>
            <h2>Top sellers and custom favourites.</h2>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <img src={product.image} alt={product.alt} />
                <div>
                  <p className="category">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <button
                    className="button small"
                    type="button"
                    onClick={() => openWhatsApp(createProductMessage(product.name))}
                  >
                    Order on WhatsApp
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section-grid">
          <div>
            <p className="eyebrow">Contact and Orders</p>
            <h2>Bulk, festive, and custom cake inquiries.</h2>
            <p>
              Share the product, quantity, delivery date, and dietary preference. We will prepare a
              WhatsApp inquiry for a quick conversation.
            </p>
          </div>

          <form className="inquiry-form" onSubmit={handleInquirySubmit}>
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
      </main>

      <footer className="site-footer">
        <p>
          <strong>Homes Food Products</strong> | Purity by Hand. Tradition by Heart.
        </p>
        <a href={createWhatsAppUrl(defaultWhatsAppMessage)} target="_blank" rel="noopener noreferrer">
          Order on WhatsApp
        </a>
      </footer>

      <a
        className="floating-whatsapp"
        href={createWhatsAppUrl(defaultWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3a8.7 8.7 0 0 0-7.4 13.3L4 21l4.8-1.3A8.7 8.7 0 1 0 12 3Z" />
          <path d="M9 8.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.5c.1.3.1.5-.1.7l-.4.5c.6 1 1.4 1.8 2.6 2.4l.5-.6c.2-.2.5-.3.8-.2l1.4.7c.3.1.4.3.4.6v.4c0 .4-.2.7-.5.9-.5.3-1.4.4-2.4.1-2.6-.8-4.5-2.6-5.4-5.2-.3-.9-.2-1.8.2-2.4Z" />
        </svg>
      </a>
    </>
  );
}
