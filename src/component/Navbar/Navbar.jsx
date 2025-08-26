import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div className="overallnav">
            <div className="brandname">
                <h1>Skill Honor</h1>
            </div>
            <div className="navbarlink">
               <Link className="navlink" to={'/'}>Home</Link>
               <Link className="navlink" to={"/service"}>Service</Link>
                <Link className="navlink" to={"/portfolio"}>Portfolio</Link>
               <Link className="navlink" to={'/about'}>About</Link>
               <Link className="navlink" to={'/content'}>Contact</Link>
               <Link className="navlink" to={'/testimonial'}>Testimonial</Link>
            </div>
        </div>
    )
}

