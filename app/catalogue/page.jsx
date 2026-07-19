"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems, products } from "@/lib/site";
import ProductList from "@/components/ProductList";
import { createWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/whatsapp";

export default function CataloguePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const gujaratiSnacks = products.filter(
    (p) => p.category === "Khakhra" || p.category === "Namkeen" || p.category === "Jain-Friendly"
  );

  const bakeryItems = products.filter(
    (p) => p.category === "Cookies" || p.category === "Cakes"
  );

  const otherItems = products.filter(
    (p) => !["Khakhra", "Namkeen", "Jain-Friendly", "Cookies", "Cakes"].includes(p.category)
  );

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Homes Food Products home">
          <span className="brand-mark">H</span>
          <span>
            <strong>Homes</strong>
            <small>Food Products</small>
          </span>
        </Link>

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
            <Link key={item.href} href={item.href.startsWith("#") ? `/${item.href}` : item.href} onClick={() => setIsNavOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/catalogue" onClick={() => setIsNavOpen(false)} style={{ color: "var(--terracotta-dark)", fontWeight: "800" }}>
            Catalogue
          </Link>
        </nav>
      </header>

      <main style={{ padding: "4rem 1rem", maxWidth: "1120px", margin: "0 auto" }}>
        <h1 className="catalogue-title">Product Catalogue</h1>

        <section style={{ marginBottom: "4rem" }}>
          <div className="section-heading">
            <h2>Gujarati Snacks</h2>
            <p>Authentic hand-rolled khakhra and traditional namkeen.</p>
          </div>
          <ProductList products={gujaratiSnacks} />
        </section>

        <section style={{ marginBottom: "4rem" }}>
          <div className="section-heading">
            <h2>Bakery Items</h2>
            <p>Freshly baked healthy cookies and custom cakes.</p>
          </div>
          <ProductList products={bakeryItems} />
        </section>

        {otherItems.length > 0 && (
          <section style={{ marginBottom: "4rem" }}>
            <div className="section-heading">
              <h2>Other Offerings</h2>
              <p>Special packages and hampers.</p>
            </div>
            <ProductList products={otherItems} />
          </section>
        )}
      </main>

      <footer className="site-footer">
        <p>
          <strong>Homes Food Products</strong> | Purity by Hand. Tradition by Heart.
        </p>
        <a href={createWhatsAppUrl(defaultWhatsAppMessage)} target="_blank" rel="noopener noreferrer">
          Order on WhatsApp
        </a>
      </footer>
    </>
  );
}
