// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const totalQuantity = useSelector(
    (state) => state.cart.totalQuantity
  );

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        backgroundColor: "green",
        color: "white",
      }}
    >
      <h2>Paradise Nursery</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link to="/plants" style={{ color: "white" }}>
          Plants
        </Link>

        <Link to="/cart" style={{ color: "white" }}>
          Cart 🛒 ({totalQuantity})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;