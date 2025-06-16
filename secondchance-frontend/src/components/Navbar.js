import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
function Navbar() {
  const username = "testuser"; // Replace with auth logic if implemented
  return (
    <nav className="navbar">
      <Link to="/">SecondChance</Link>
      <div>
        {username ? <span>Logged in as: {username}</span> : <Link to="/register">Register</Link>}
      </div>
    </nav>
  );
}
export default Navbar;
