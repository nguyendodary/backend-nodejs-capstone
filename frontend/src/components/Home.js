import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to SecondChance</h1>
        <p>Buy and sell second-hand items with confidence</p>
        <Link to="/items" className="hero-button">Start Shopping</Link>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <h3>🔍 Easy Search</h3>
          <p>Find exactly what you're looking for with our powerful search and filter options.</p>
        </div>
        <div className="feature-card">
          <h3>💰 Great Prices</h3>
          <p>Get amazing deals on quality second-hand items from trusted sellers.</p>
        </div>
        <div className="feature-card">
          <h3>📦 Safe Transactions</h3>
          <p>Browse with confidence knowing all items are verified and authentic.</p>
        </div>
      </div>
    </div>
  );
}
