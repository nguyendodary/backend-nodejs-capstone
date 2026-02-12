import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        🛍️ SecondChance
      </Link>
      <div className="navbar-links">
        <Link to="/" className={isActive("/")}>Home</Link>
        <Link to="/items" className={isActive("/items")}>Browse</Link>
        <Link to="/search" className={isActive("/search")}>Search</Link>
        <Link to="/add" className={isActive("/add")}>Add Item</Link>
      </div>
    </nav>
  );
}
