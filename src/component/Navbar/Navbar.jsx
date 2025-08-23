import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="overallnav">
      <div className="brandname">
        <h1>Skill Honour</h1>
      </div>

      {/* Desktop Links */}
      <div className="navbarlink">
        <Link className="navlink" to={"/"}>Home</Link>
        <Link className="navlink" to={"/about"}>About</Link>
        <Link className="navlink" to={"/service"}>Service</Link>
        <Link className="navlink" to={"/portfolio"}>Portfolio</Link>
        <Link className="navlink" to={"/content"}>Contact</Link>
        <Link className="navlink" to={"/testimonial"}>Testimonial</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="menubar">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="mobilemenu">
          <Link className="mobilelink" to={"/"} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link className="mobilelink" to={"/service"} onClick={() => setMenuOpen(false)}>Service</Link>
          <Link className="mobilelink" to={"/portfolio"} onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link className="mobilelink" to={"/about"} onClick={() => setMenuOpen(false)}>About</Link>
          <Link className="mobilelink" to={"/content"} onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link className="mobilelink" to={"/testimonial"} onClick={() => setMenuOpen(false)}>Testimonial</Link>
        </div>
      )}
    </div>
  );
}
