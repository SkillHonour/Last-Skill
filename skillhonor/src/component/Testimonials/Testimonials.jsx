import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Testimonials.css";

import img1 from "../../assets/testimonial/women1.jpg";
import img2 from "../../assets/testimonial/women4.jpg";
import img3 from "../../assets/testimonial/women2.jpg";
import img4 from "../../assets/testimonial/women5.jpg";
import img5 from "../../assets/testimonial/women3.jpg";
import img6 from "../../assets/testimonial/women6.jpg";

const testimonialsData = [
  {
    star: "⭐️⭐️⭐️⭐️⭐️",
    description:
      "Skill Honour transformed our online presence completely. Their web development team created a stunning, responsive website that increased our conversions by 300%. The attention to detail and technical expertise were outstanding.",
    name: "Jennifer Walsh",
    role: "CEO, TechStart Solutions",
    company: "TechStart Solutions",
    project: "E-commerce Platform Development",
    result: "300% increase in conversions",
    domain: "Web Development",
    profile: img1,
  },
  {
    star: "⭐️⭐️⭐️⭐️⭐️",
    description:
      "The digital marketing campaign exceeded all our expectations. Our social media engagement increased by 250% and lead generation improved by 180%. The team's strategic approach was exactly what we needed.",
    name: "Marcus Thompson",
    role: "Marketing Director, GrowthCorp",
    company: "GrowthCorp",
    project: "Comprehensive Digital Marketing Campaign",
    result: "250% increase in social engagement",
    domain: "Digital Marketing",
    profile: img2,
  },
  {
    star: "⭐️⭐️⭐️⭐️⭐️",
    description:
      "Our custom mobile application was delivered on time and exceeded all requirements. The user experience is exceptional, and our app store ratings improved significantly.",
    name: "Sarah Chen",
    role: "Product Manager, InnovateApp",
    company: "InnovateApp",
    project: "Mobile Banking Application",
    result: "4.8/5 app store rating",
    domain: "Custom Application Development",
    profile: img3,
  },
  {
    star: "⭐️⭐️⭐️⭐️⭐️",
    description:
      "The branding package was absolutely perfect. Our new logo and brand identity have received countless compliments from clients.",
    name: "David Rodriguez",
    role: "Founder, CreativeBrand Studio",
    company: "CreativeBrand Studio",
    project: "Complete Brand Identity Package",
    result: "Award-winning brand design",
    domain: "Graphic Design",
    profile: img4,
  },
  {
    star: "⭐️⭐️⭐️⭐️⭐️",
    description:
      "The cloud migration was seamless and professionally executed. Our system performance improved dramatically, and we've experienced zero downtime since the migration.",
    name: "Lisa Park",
    role: "IT Manager, DataFlow Systems",
    company: "DataFlow Systems",
    project: "Enterprise Cloud Migration",
    result: "99.9% uptime guarantee achieved",
    domain: "Cloud Hosting & Migration",
    profile: img5,
  },
  {
    star: "⭐️⭐️⭐️⭐️⭐️",
    description:
      "My custom gaming PC build is absolutely incredible! The performance is outstanding, and the RGB lighting setup is perfect. The team understood exactly what I needed for streaming and gaming at the highest level.",
    name: "Michael Johnson",
    role: "Gamer & Content Creator",
    company: "StreamPro Gaming",
    project: "High-Performance Gaming PC Build",
    result: "4K gaming at 144fps",
    domain: "PC Build & Repair Services",
    profile: img6,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const currentMember = testimonialsData[currentIndex];

  return (
    <section className="testimonials">
      {/* ✅ SEO for Testimonials Page */}
      <Helmet>
        <title>Client Testimonials | Skill Honour Success Stories</title>
        <meta
          name="description"
          content="Read real client success stories and testimonials about Skill Honour's web development, digital marketing, graphic design, cloud migration, and IT services."
        />
        <meta
          name="keywords"
          content="Skill Honour testimonials, client reviews, success stories, web development feedback, digital marketing results, IT solutions, PC build reviews"
        />
        <meta name="author" content="Skill Honour" />

        {/* Open Graph */}
        <meta property="og:title" content="Skill Honour Client Testimonials" />
        <meta
          property="og:description"
          content="Discover how Skill Honour has helped businesses grow with expert digital and IT solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skillhonour.com/testimonials" />
        <meta
          property="og:image"
          content="https://skillhonour.com/preview-testimonials.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Client Testimonials | Skill Honour"
        />
        <meta
          name="twitter:description"
          content="Hear from Skill Honour clients who achieved success with our web, marketing, and IT solutions."
        />
        <meta
          name="twitter:image"
          content="https://skillhonour.com/preview-testimonials.jpg"
        />
      </Helmet>

      {/* ✅ Intro */}
      <div className="client-container">
        <h1 className="client-name">
          Client <span className="color">Testimonials</span>
        </h1>
        <p className="client-para">
          Hear from our satisfied clients about their experience working with{" "}
          <strong>Skill Honour</strong> and the results we've achieved together.
        </p>
      </div>

      {/* ✅ Main Slider */}
      <div className="profile-client-container">
        <div className="first-profile">
          <h3 className="double">"</h3>
          <div className="img-container-profile">
            <img
              src={currentMember.profile}
              alt={`${currentMember.name} - ${currentMember.domain}`}
            />
          </div>
          <h3 className="stared">{currentMember.star}</h3>
          <p className="profile-para">{currentMember.description}</p>
          <hr className="custom-hr" />

          <div className="clients">
            <h4 className="clients-name">{currentMember.name}</h4>
            <h5 className="client-role">{currentMember.role}</h5>
            <h5 className="client-company">{currentMember.company}</h5>
          </div>

          <div className="project-result">
            <div className="project">
              <h6 className="projects-title">Project</h6>
              <h3 className="projects-name">{currentMember.project}</h3>
            </div>
            <div className="results">
              <h6 className="results-title">Result</h6>
              <h3 className="results-name">{currentMember.result}</h3>
            </div>
          </div>

          <div className="arrows">
            <i
              className="ri-arrow-left-line"
              onClick={prevTestimonial}
              style={{ cursor: "pointer" }}
            ></i>
            <i
              className="ri-arrow-right-line"
              onClick={nextTestimonial}
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </div>

        {/* ✅ Dots */}
        <div className="dots">
          {testimonialsData.map((_, idx) => (
            <span
              key={idx}
              className={`one ${idx === currentIndex ? "active-dot" : ""}`}
              onClick={() => setCurrentIndex(idx)}
              style={{ cursor: "pointer" }}
            ></span>
          ))}
        </div>
      </div>

      {/* ✅ Grid Cards */}
      <div className="clients-says">
        <h3 className="says-title">
          What Our <span className="color">Clients Say</span>
        </h3>
        <p className="para-says">
          Join our growing list of satisfied clients who have transformed their
          businesses with <strong>Skill Honour's</strong> innovative solutions.
        </p>

        <div className="cards-container">
          {testimonialsData.map((card, index) => (
            <div className="card" key={index}>
              <div className="img-content">
                <div className="imged">
                  <img
                    src={card.profile}
                    alt={`${card.name} - ${card.domain}`}
                  />
                </div>
                <div className="content-img">
                  <h4 className="name-says">{card.name}</h4>
                  <h5 className="role-says">{card.role}</h5>
                </div>
              </div>
              <div className="stars-says">{card.star}</div>
              <p className="para-desc">{card.description}</p>
              <hr className="chn-hr" />
              <div className="roles-card">{card.domain}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ CTA */}
      <div className="success-container">
        <h1 className="success-title">Ready to Join Our Success Stories?</h1>
        <p className="para-success">
          Let's discuss how <strong>Skill Honour</strong> can help you achieve
          similar results and transform your business with innovative solutions.
        </p>
        <button className="btn">Start Your Project</button>
        <button className="btn1">View Our Work</button>
      </div>
    </section>
  );
};

export default Testimonials;
