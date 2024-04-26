import React from "react";
import "./MobileMenu.css";
import { Link } from "react-router-dom";

function MobileMenu({ isMenuOpen, toggleMenu }) {
  return (
    <div className="mobile">
      <ul className={`nav ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/service" className="link">
            Services
          </Link>
        </li>
        <li>
          <Link to="/blog" className="link">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default MobileMenu;
