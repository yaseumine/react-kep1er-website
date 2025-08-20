import React, { useState } from "react";
import "../styles/Shop.css"; // Kita akan buat file CSS ini selanjutnya

// Data produk dibuat dalam bentuk array agar dinamis dan mudah dikelola
const products = [
  {
    id: 1,
    name: "BUBBLE GUM",
    version: "RUSH Ver.",
    price: 18.63,
    imageUrl: "https://placehold.co/258x258/ffc0cb/333?text=RUSH",
  },
  {
    id: 2,
    name: "BUBBLE GUM",
    version: "KiT Ver.",
    price: 12.28,
    imageUrl: "https://placehold.co/258x258/ab81db/fff?text=KiT",
  },
  {
    id: 3,
    name: "BUBBLE GUM",
    version: "Bubble Ver.",
    price: 12.87,
    imageUrl: "https://placehold.co/258x258/a0e9ff/333?text=Bubble",
  },
  {
    id: 4,
    name: "BUBBLE GUM",
    version: "Gum Ver.",
    price: 12.87,
    imageUrl: "https://placehold.co/258x258/f9a825/fff?text=Gum",
  },
  // Tambahkan produk lain di sini dengan mudah
  {
    id: 5,
    name: "BUBBLE GUM",
    version: "RUSH Ver.",
    price: 18.63,
    imageUrl: "https://placehold.co/258x258/ffc0cb/333?text=RUSH",
  },
  {
    id: 6,
    name: "BUBBLE GUM",
    version: "KiT Ver.",
    price: 12.28,
    imageUrl: "https://placehold.co/258x258/ab81db/fff?text=KiT",
  },
  {
    id: 7,
    name: "BUBBLE GUM",
    version: "Bubble Ver.",
    price: 12.87,
    imageUrl: "https://placehold.co/258x258/a0e9ff/333?text=Bubble",
  },
  {
    id: 8,
    name: "BUBBLE GUM",
    version: "Gum Ver.",
    price: 12.87,
    imageUrl: "https://placehold.co/258x258/f9a825/fff?text=Gum",
  },
];

function Shop() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Official Merchandise</h1>
        <div className="filter-buttons">
          <button
            className={filter === "All" ? "active" : ""}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={filter === "Albums" ? "active" : ""}
            onClick={() => setFilter("Albums")}
          >
            Albums
          </button>
          {/* Tambahkan filter lain jika perlu */}
        </div>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageUrl}
              alt={`${product.name} - ${product.version}`}
              className="product-image"
            />
            <div className="product-info">
              <p className="product-name">{`${product.name} (${product.version})`}</p>
              <p className="product-price">${product.price.toFixed(2)} USD</p>
            </div>
            <button className="order-button">ORDER</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
