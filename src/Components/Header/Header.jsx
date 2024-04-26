import React, { useState } from "react";
import "./Header.css";
import { assets } from "../../Assets/Assets";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <header className={`${isMenuOpen ? "open" : ""}`}>
        <div className="logo">
          <img src={assets.Logo} alt="Logo" />
        </div>
        <ul className="nav">
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
        <button>Connect With Us</button>
        <div className="menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default Header;
