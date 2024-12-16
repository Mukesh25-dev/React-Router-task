import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <h1>Fake Store</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
};

export default NavBar;
