import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    // State to toggle mobile menu
    const [isMobile, setIsMobile] = useState(false);

    // Toggle mobile menu on button click
    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <div className="overallnav">
            <div className="brandname">
                <h1>Skill Honor</h1>
            </div>

            {/* Hamburger Menu Icon for Mobile */}
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {/* Navbar Links */}
            <div className={`navbarlink ${isMobile ? 'active' : ''}`}>
                <Link className="navlink" to={'/'}>Home</Link>
                <Link className="navlink" to={"/service"}>Service</Link>
                <Link className="navlink" to={"/portfolio"}>Portfolio</Link>
                <Link className="navlink" to={'/about'}>About</Link>
                <Link className="navlink" to={'/content'}>Contact</Link>
                <Link className="navlink" to={'/testimonial'}>Testimonial</Link>
            </div>
        </div>
    );
}
