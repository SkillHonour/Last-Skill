import React from "react";
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoTime } from "react-icons/io5";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbyg68zPJdBG6zGvLfnxxEGYHBar7PIiVAKExEXMd_sezHOV90qVkgKMHd9f4XDquAmsRA/exec", // replace with your Apps Script Web App URL
                {
                    method: "POST",
                    body: JSON.stringify(formData),
                }
            );

            const result = await response.json();

            if (result.status === "success") {
                alert("✅ Data saved! Redirecting to payment...");
                // This goes to Razorpay payment page
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    service: "",
                    message: "",
                });cm
            } else {
                alert("❌ Error: " + result.message);
            }
        } catch (error) {
            alert("❌ Failed to send message.");
        }

        setLoading(false);
    };
    return (
        <div className="overall">
            <div className="cont-Head">
                <h1>Contact <span>Us</span></h1>
                <div className="cont-Head-p">
                    <p>Ready to start your project? Get in touch with our team and let's discuss how we can
                        help transform your business.</p>
                </div>
            </div>
            {/*-----Address and Input details---- */}
            <div className="Adres-Input">
                <div className="address">
                    <h1>Let's Work <span>Together</span></h1>
                    <div className="address-p">
                        <p>We'd love to hear about your project and discuss how our expertise can help you
                            achieve your goals. Fill out the form and we'll get back to you within 24 hours.</p>
                    </div>
                    <div className="icons">
                        <div className="icon-1">
                            <div className="lft-1">
                                <FaLocationDot />
                            </div>
                            <div className="right-1">
                                <h4>Our Location</h4>
                                <p>123 Tech Street, Digital City, DC 12345</p>
                            </div>
                        </div>
                        <div className="icon-1">
                            <div className="lft-1">
                                <FaPhoneAlt />
                            </div>
                            <div className="right-1">
                                <h4>Phone Number</h4>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="icon-1">
                            <div className="lft-1">
                                <HiOutlineMail />
                            </div>
                            <div className="right-1">
                                <h4>Email Address</h4>
                                <p>info@skillhonor.com</p>
                            </div>
                        </div>
                        <div className="icon-1">
                            <div className="lft-1">
                                <IoTime />
                            </div>
                            <div className="right-1">
                                <h4>Business Hours</h4>
                                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="icon-media">
                        <p>Follow Us</p>
                        <div className="icon-media-1">
                            <div className="lft-2">
                                <FaInstagram />
                            </div>
                            <div className="lft-2">
                                <FaFacebookF />
                            </div>
                            <div className="lft-2">
                                <FaLinkedinIn />
                            </div>
                            <div className="lft-2">
                                <BsTwitterX />
                            </div>
                        </div>
                    </div>
                </div>
                {/* -------input-secetion----- */}
                <div className="Input">
                    <div className="in-put">
                        <form onSubmit={handleSubmit}>
                            <label>Full Name*</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your Fullname"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />

                            <label>Email ID*</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your Email Id"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <label>Phone Number*</label>
                            <input
                                type="number"
                                name="phone"
                                placeholder="Enter your Mobile Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                            <label>Service Interested In*</label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select the service</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Custom Application Development">
                                    Custom Application Development
                                </option>
                                <option value="Graphic Design">Graphic Design</option>
                                <option value="Cloud Hosting & Migration">
                                    Cloud Hosting & Migration
                                </option>
                                <option value="PC Build & Repair service">
                                    PC Build & Repair service
                                </option>
                            </select>

                            <label>Write your message</label>
                            <textarea
                                name="message"
                                placeholder="Enter messages..."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>

                            <button type="submit" className="in-put-button" disabled={loading}>
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            <div className="map">
                <div className="map-h1">
                    <h1>Find Us on the <span>Map</span> </h1>
                </div>
                <div className="map-p">
                    <p>Visit our office or schedule a consultation to discuss your project in person.</p>
                </div>
                <div className="map-iframe">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4173374910636!2d144.9559252154987!3d-37.81720987975152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f4d6fd%3A0x2b08d40b57bd330!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1615341711499!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>


            </div>
        </div>
    )
}