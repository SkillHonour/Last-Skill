import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className="overallnav">
      {/* Brand Name */}
      <div className="brandname">
        <h1>Skill Honor</h1>
      </div>

      {/* Menu Links */}
      <ul className={`navbarlink ${isMobile ? "active" : ""}`}>
        <li>
          <Link className="navlink" to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link className="navlink" to="/service" onClick={closeMenu}>Service</Link>
        </li>
        <li>
          <Link className="navlink" to="/portfolio" onClick={closeMenu}>Portfolio</Link>
        </li>
        <li>
          <Link className="navlink" to="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link className="navlink" to="/content" onClick={closeMenu}>Contact</Link>
        </li>
        <li>
          <Link className="navlink" to="/testimonial" onClick={closeMenu}>Testimonial</Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
