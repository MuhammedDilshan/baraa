import React, { useState, useEffect } from "react";
import "./Header.css";
import { assets } from "../../Assets/Assets";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleNavLinkClick = (link) => {
    setActiveLink(link); // Update active link state
  };
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === "/") {
      setActiveLink("home");
    } else {
      setActiveLink(pathname.slice(1));
    }
  }, [location]);

  return (
    <div>
      <header className={`${isMenuOpen ? "open" : ""}`}>
        <div className="logo">
          <img src={assets.Logo} alt="Logo" />
        </div>
        <ul className="nav">
          <li
            className={`link ${activeLink === "home" ? "active" : ""}`}
            onClick={() => handleNavLinkClick("home")}
          >
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li
            className={`link ${activeLink === "about" ? "active" : ""}`}
            onClick={() => handleNavLinkClick("about")}
          >
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
          <li
            className={`link ${activeLink === "service" ? "active" : ""}`}
            onClick={() => handleNavLinkClick("service")}
          >
            <Link to="/service" className="link">
              Services
            </Link>
          </li>
          <li
            className={`link ${activeLink === "blog" ? "active" : ""}`}
            onClick={() => handleNavLinkClick("blog")}
          >
            <Link to="/blog" className="link">
              Blog
            </Link>
          </li>
          <li
            className={`link ${activeLink === "contact" ? "active" : ""}`}
            onClick={() => handleNavLinkClick("contact")}
          >
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </li>
        </ul>
        <Link to="/contact">
          <button>Connect With Us</button>
        </Link>
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
