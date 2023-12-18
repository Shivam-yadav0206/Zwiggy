import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnline from "../utils/useOnline";

function Header() {
  const cart = useSelector((store) => store.cart.items);
  const isOnline = useOnline();
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          <img data-testid="logo" src={Logo} alt="Logo" width={70} />
          <Link to="/">Zwiggy</Link>
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link className="list" to="/">
          Home
        </Link>
        <Link className="list" to="/about">
          About
        </Link>
        <Link className="list" to="/contact">
          Contact Us
        </Link>
        <Link className="list" to="/instamart">
          InstaMart
        </Link>
        <Link className="list" to="/cart">
          Cart - {cart.length} {isOnline ? "🟢" : "🔴"}
        </Link>
      </div>
    </div>
  );
}

export default Header;

