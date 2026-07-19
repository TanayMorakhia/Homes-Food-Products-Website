"use client";

import { createProductMessage, createWhatsAppUrl } from "@/lib/whatsapp";

function openWhatsApp(message) {
  window.open(createWhatsAppUrl(message), "_blank", "noopener");
}

export default function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <p>No products found in this category.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <article className="product-card" key={product.name}>
          <img src={product.image} alt={product.alt || product.name} />
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
  );
}
