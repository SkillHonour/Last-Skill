import React from "react";
import "./foot.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="Foot-overall">
        <div className="foot-top">
          {/* Brand Info */}
          <div className="skillhonor">
            <h1>Skill Honor</h1>
            <div className="skillhonor-p">
              <p>
                Delivering exceptional tech solutions with skill, honor, and
                innovation. Your trusted partner for digital transformation.
              </p>
            </div>

            {/* ✅ Social Media Icons with Links */}
            <div className="skillhonor-icon">
              <a
                href="https://www.facebook.com/profile.php?id=61579133814913"
                target="_blank"
                rel="noopener noreferrer"
                className="icon1"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="icon1"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/skillhonour?igsh=MnJqd21jcXJsbnZh"
                target="_blank"
                rel="noopener noreferrer"
                className="icon1"
              >
                <FaInstagram />
              </a>
              <a
                href="www.linkedin.com/in/skill-honour-89353b37a"
                target="_blank"
                rel="noopener noreferrer"
                className="icon1"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="services">
            <h1>Services</h1>
            <Link to="/" className="link">
              Web Development
            </Link>
            <Link to="/" className="link">
              Digital Marketing
            </Link>
            <Link to="/" className="link">
              Custom Application Development
            </Link>
            <Link to="/" className="link">
              Graphic Design
            </Link>
            <Link to="/" className="link">
              PC Build & Repair Services
            </Link>
            <Link to="/" className="link">
              Cloud Hosting & Migration
            </Link>
          </div>

          {/* Quick Links */}
          <div className="Quick-Links">
            <h1>Quick Links</h1>
            <Link className="link" to={"/"}>
              Home
            </Link>
            <Link className="link" to={"/service"}>
              Service
            </Link>
            <Link className="link" to={"/portfolio"}>
              Portfolio
            </Link>
            <Link className="link" to={"/about"}>
              About
            </Link>
            <Link className="link" to={"/contact"}>
              Contact
            </Link>
            <Link className="link" to={"/testimonial"}>
              Testimonial
            </Link>
          </div>

          {/* Contact */}
          <div className="Contact">
            <h1>Contact</h1>
            <p className="link">
              <span>
                <FaLocationDot />
              </span>{" "}
            Chennai,Tamil Nadu , <Chennai></Chennai>
            </p>
            <p className="link">
              <span>
                <IoCall />
              </span>{" "}
             +91 94454 62917
            </p>
            <a
              href="mailto:skillhonour.com"
              className="link"
            >
              <span>
                <MdMail />
              </span>{" "}
              skillhonor@gmail.com
            </a>
          </div>
        </div>

        <div className="foot-middle-line"></div>

        {/* Copyright */}
        <div className="foot-end-copy-right">
          <p>© 2025 Skill Honor. All rights reserved. Built with skill and honor.</p>
        </div>
      </div>
    </footer>
  );
}
