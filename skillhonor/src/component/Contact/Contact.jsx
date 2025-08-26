import React, { useState } from "react";
import "./Contact.css";
import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoTime } from "react-icons/io5";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

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
        "https://script.google.com/macros/s/AKfycbyg68zPJdBG6zGvLfnxxEGYHBar7PIiVAKExEXMd_sezHOV90qVkgKMHd9f4XDquAmsRA/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        alert("✅ Data saved! Redirecting to payment...");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
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
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Contact Us | Skill Honour</title>
        <meta
          name="description"
          content="Get in touch with Skill Honour. Contact us for web development, digital marketing, UI/UX, WordPress, cloud hosting, PC build, and IT solutions."
        />
        <meta
          name="keywords"
          content="Skill Honour contact, web development support, digital marketing help, IT solutions, WordPress, UI/UX, cloud hosting, PC repair"
        />
        <meta name="author" content="Skill Honour" />
      </Helmet>

      {/* Page Header */}
      <div className="cont-Head">
        <h1>
          Contact <span>Us</span>
        </h1>
        <div className="cont-Head-p">
          <p>
            Ready to start your project? Get in touch with our team and let's
            discuss how we can help transform your business.
          </p>
        </div>
      </div>

      {/* Address & Form */}
      <div className="Adres-Input">
        <div className="address">
          <h1>
            Let's Work <span>Together</span>
          </h1>
          <div className="address-p">
            <p>
              We'd love to hear about your project and discuss how our expertise
              can help you achieve your goals. Fill out the form and we'll get
              back to you within 24 hours.
            </p>
          </div>

          {/* Contact Info */}
          <div className="icons">
            <div className="icon-1">
              <div className="lft-1">
                <FaLocationDot />
              </div>
              <div className="right-1">
                <h4>Our Location</h4>
                <p>Chennai,Tamil Nadu , India</p>
              </div>
            </div>
            <div className="icon-1">
              <div className="lft-1">
                <FaPhoneAlt />
              </div>
              <div className="right-1">
                <h4>Phone Number</h4>
                <p>+91 94454 62917</p>
              </div>
            </div>
            <div className="icon-1">
              <div className="lft-1">
                <HiOutlineMail />
              </div>
              <div className="right-1">
                <h4>Email Address</h4>
                <p>skillhonour@gmail.com</p>
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

          {/* Social Media */}
          <div className="icon-media">
            <p>Follow Us</p>
            <div className="icon-media-1">
              <a
                href="https://www.instagram.com/skillhonour?igsh=MnJqd21jcXJsbnZh"
                target="_blank"
                rel="noopener noreferrer"
                className="lft-2"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579133814913"
                target="_blank"
                rel="noopener noreferrer"
                className="lft-2"
              >
                <FaFacebookF />
              </a>
              <a
                href="www.linkedin.com/in/skill-honour-89353b37a"
                target="_blank"
                rel="noopener noreferrer"
                className="lft-2"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="lft-2"
              >
                <BsTwitterX />
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
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

              <button
                type="submit"
                className="in-put-button"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="map">
        <div className="map-h1">
          <h1>
            Find Us on the <span>Map</span>
          </h1>
        </div>
        <div className="map-p">
          <p>
            Visit our office or schedule a consultation to discuss your project
            in person.
          </p>
        </div>
        <div className="map-iframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.400894640066!2d80.21198279530365!3d13.061099746198632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52668e62aa345d%3A0x7897d2c13a82f4ef!2sChoolaimedu%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1756197202622!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
