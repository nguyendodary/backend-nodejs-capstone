import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function Navbar() {
  return (
    <div className="navbar">
      <span>SecondChance</span>
      <div>
        <Link to="/">Home</Link>
        <Link to="/items">Items</Link>
        <Link to="/search">Search</Link>
        <Link to="/register">Register</Link>
        <span>Logged in as: testuser</span>
      </div>
    </div>
  );
}

export default Navbar;
