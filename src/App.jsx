import React from "react";
import Home from "./component/Home/Home";
import Service from "./component/Service/Service";
import About from "./component/about/About";
import Contact from "./component/Contact/Contact";
import Testimonials from "./component/Testimonials/Testimonials";
import Footer from "./component/Footer/foot";
import Navbar from "./component/Navbar/Navbar";
import Portfolio from "./component/Portfolio/portfolio";
import ScrollToTop from "./component/Scrolltop/scrolltotop";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// import Helmet Provider
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* Default SEO for entire site */}
        <Helmet>
          <title>Skill Honour | Web Development & Digital Marketing Services</title>
          <meta
            name="description"
            content="Skill Honour provides expert web development, UI/UX design, WordPress solutions, cloud computing, and digital marketing services to help your business grow online."
          />
          <meta
            name="keywords"
            content="Skill Honour, web development, digital marketing, UI/UX design, WordPress, cloud computing, SEO services"
          />
          <meta name="author" content="Skill Honour" />
        </Helmet>

        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/content" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonials />} />
        </Routes>
        <Footer />

        {/* ✅ Floating call button (always visible) */}
        <div className="call-button">
          <a href="tel:+919876543210">
            📞
          </a>
        </div>
      </Router>
    </HelmetProvider>
  );
}
