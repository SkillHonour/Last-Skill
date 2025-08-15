import React from "react";
import './foot.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <footer>
            <div className="Foot-overall">
                <div className="foot-top">
                    <div className="skillhonor">
                        <h1>Skill Honor</h1>
                        <div className="skillhonor-p">
                            <p>
                                Delivering exceptional tech solutions with skill, honor, and innovation.
                                Your trusted partner for digital transformation.
                            </p>
                        </div>
                        <div className="skillhonor-icon">
                            <div className="icon1"><FaFacebookF /></div>
                            <div className="icon1"><FaXTwitter /></div>
                            <div className="icon1"><FaInstagram /></div>
                            <div className="icon1"><FaLinkedinIn /></div>
                        </div>
                    </div>

                    <div className="services">
                        <h1>Services</h1>
                        <Link to="/" className="link">Web Development</Link>
                        <Link to="/" className="link">Digital Marketing</Link>
                        <Link to="/" className="link">Custom Application Development</Link>
                        <Link to="/" className="link">Graphic Design</Link>
                        <Link to="/" className="link">PC Build & Repair Services</Link>
                        <Link to="/" className="link">Cloud Hosting & Migration</Link>
                    </div>

                    <div className="Quick-Links">
                        <h1>Quick Links</h1>
                        <Link className="link" to={'/'}>Home</Link>
                        <Link className="link" to={"/service"}>Service</Link>
                        <Link className="link" to={"/portfolio"}>Portfolio</Link>
                        <Link className="link" to={'/about'}>About</Link>
                        <Link className="link" to={'/content'}>Content</Link>
                        <Link className="link" to={'/testimonial'}>Testimonial</Link>
                    </div>

                    <div className="Contact">
                        <h1>Contact</h1>
                        <p className="link"> <span><FaLocationDot /></span> 123 Tech Street, Digital City, DC 12345</p>
                        <p className="link"><span><IoCall /></span> +1 (555) 123-4567</p>
                        <Link to="/" className="link"> <span><MdMail /></span> info@skillhonor.com</Link>
                    </div>
                </div>

                <div className="foot-middle-line"></div>

                <div className="foot-end-copy-right">
                    <p>© 2025 Skill Honor. All rights reserved. Built with skill and honor.</p>
                </div>
            </div>
        </footer>
    );
}
