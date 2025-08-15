import React, { useState } from "react";
import "./Testimonials.css";
// import img1 from './assets/women1.jpg'
import img1 from '../../assets/testimonial/women1.jpg';
import img2 from '../../assets/testimonial/women4.jpg';
import img3 from '../../assets/testimonial/women2.jpg';
import img4 from '../../assets/testimonial/women5.jpg';
import img5 from '../../assets/testimonial/women3.jpg';
import img6 from '../../assets/testimonial/women6.jpg';



  const teamData = [
    {
      staring: "⭐️⭐️⭐️⭐️⭐️",
      para: "Skill Honor transformed our online presence completely. Their web development team created a stunning, responsive website that increased our conversions by 300%. The attention to detail and technical expertise were outstanding.",
      name: "Jennifer Walsh",
      role: "CEO, TechStart Solutions",
      company: "TechStart Solutions",
      projects: "E-commerce Platform Development",
      results: "300% increase in conversions",
      profile: img1
    },
    {
      staring: "⭐️⭐️⭐️⭐️⭐️",
      para: "The digital marketing campaign exceeded all our expectations. Our social media engagement increased by 250% and lead generation improved by 180%. The team's strategic approach was exactly what we needed.",
      name: "Marcus Thompson",
      role: "Marketing Director, GrowthCorp",
      company: "GrowthCorp",
      projects: "Comprehensive Digital Marketing Campaign",
      results: "250% increase in social engagement",
      profile: img2
    },
    {
      staring: "⭐️⭐️⭐️⭐️⭐️",
      para: "Our custom mobile application was delivered on time and exceeded all requirements. The user experience is exceptional, and our app store ratings improved significantly. Highly recommend their development services.",
      name: "Sarah Chen",
      role: "Product Manager, InnovateApp",
      company: "InnovateApp",
      projects: "Mobile Banking Application",
      results: "4.8/5 app store rating",
      profile: img3
    },
    {
      staring: "⭐️⭐️⭐️⭐️⭐️",
      para: "The branding package was absolutely perfect. Our new logo and brand identity have received countless compliments from clients. The creative team understood our vision perfectly and brought it to life beautifully.",
      name: "David Rodriguez",
      role: "Founder, CreativeBrand Studio",
      company: "CreativeBrand Studio",
      projects: "Complete Brand Identity Package",
      results: "Award-winning brand design",
      profile: img4
    },
    {
      staring: "⭐️⭐️⭐️⭐️⭐️",
      para: "The cloud migration was seamless and professionally executed. Our system performance improved dramatically, and we've experienced zero downtime since the migration. Their ongoing support is exceptional.",
      name: "Lisa Park",
      role: "IT Manager, DataFlow Systems",
      company: "DataFlow Systems",
      projects: "Enterprise Cloud Migration",
      results: "99.9% uptime guarantee achieved",
      profile: img5
    },
    {
      staring: "⭐️⭐️⭐️⭐️⭐️",
      para: "My custom gaming PC build is absolutely incredible! The performance is outstanding, and the RGB lighting setup is perfect. The team understood exactly what I needed for streaming and gaming at the highest level.",
      name: "Michael Johnson",
      role: "Gamer & Content Creator",
      company: "StreamPro Gaming",
      projects: "High-Performance Gaming PC Build",
      results: "4K gaming at 144fps",
      profile: img6
    },
  ];

  const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === teamData.length - 1 ? 0 : prev + 1));
  };

  const currentMember = teamData[currentIndex];


  const cardData = [
    {
      name: "Jennifer Walsh",
      role: "CEO, TechStart Solutions",
      star: "⭐️⭐️⭐️⭐️⭐️",
      description: "Skill Honor transformed our online presence completely. Their web development team created a stunning, responsive website that increased our conversions by 300%. The attention to detail and technical expertise were outstanding.",
      domain: "Web Development",
      image: img1
    },
    {
      name: "Marcus Thompson",
      role: "Marketing Director, GrowthCorp",
      star: "⭐️⭐️⭐️⭐️⭐️",
      description: "The digital marketing campaign exceeded all our expectations. Our social media engagement increased by 250% and lead generation improved by 180%. The team's strategic approach was exactly what we needed.",
      domain: "Digital Marketing",
      image: img2
    },
    {
      name: "Sarah Chen",
      role: "Product Manager, InnovateApp",
      star: "⭐️⭐️⭐️⭐️⭐️",
      description: "Our custom mobile application was delivered on time and exceeded all requirements. The user experience is exceptional, and our app store ratings improved significantly. Highly recommend their development services.",
      domain: "Custom Application Development",
      image: img3
      
    },
    {
      name: "David Rodriguez",
      role: "Founder, CreativeBrand Studio",
      star: "⭐️⭐️⭐️⭐️⭐️",
      description: "The branding package was absolutely perfect. Our new logo and brand identity have received countless compliments from clients. The creative team understood our vision perfectly and brought it to life beautifully.",
      domain: "Graphic Design",
      image: img4
    },
    {
      name: "Lisa Park",
      role: "IT Manager, DataFlow Systems",
      star: "⭐️⭐️⭐️⭐️⭐️",
      description: "The cloud migration was seamless and professionally executed. Our system performance improved dramatically, and we've experienced zero downtime since the migration. Their ongoing support is exceptional.",
      domain: "Cloud Hosting & Migration",
      image: img5
    },
    {
      name: "Michael Johnson",
      role: "Gamer & Content Creator",
      star: "⭐️⭐️⭐️⭐️⭐️",
      description: "My custom gaming PC build is absolutely incredible! The performance is outstanding, and the RGB lighting setup is perfect. The team understood exactly what I needed for streaming and gaming at the highest level.",
      domain: "PC Build & Repair Services",
      image: img6
    },
  ];

  

  return (
    <>
      <header>
        {/* ============== client container ============= */}
        <div className="client-container">
          <h1 className="client-name">
            Client <span className="color">Testimonials</span>
          </h1>
          <p className="client-para">
            Hear from our satisfied clients about their experience working with
            Skill Honor and the results we've achieved together.
          </p>
        </div>

        {/* =========== profile client =========== */}
        <div className="profile-client-container">
          <div className="first-profile">
            <h3 className="double">"</h3>
            <div className="img-container-profile">
              <img src={currentMember.profile} alt={currentMember.name} />
            </div>
            <h3 className="stared">{currentMember.staring}</h3>
            <p className="profile-para">{currentMember.para}</p>
            <hr className="custom-hr" />
            {/* ========== clients ========= */}
            <div className="clients">
              <h4 className="clients-name">{currentMember.name}</h4>
              <h5 className="client-role">{currentMember.role}</h5>
              <h5 className="client-company">{currentMember.company}</h5>
            </div>
            {/* ======== projects and results ========== */}
            <div className="project-result">
              <div className="project">
                <h6 className="projects-title">Project</h6>
                <h3 className="projects-name">{currentMember.projects}</h3>
              </div>
              <div className="results">
                <h6 className="results-title">Result</h6>
                <h3 className="results-name">{currentMember.results}</h3>
              </div>
            </div>
            {/* ========== arrow < > ========== */}
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

          {/* ======== dots ====== */}
          <div className="dots">
            {teamData.map((_, idx) => (
              <span
                key={idx}
                className={`one ${idx === currentIndex ? "active-dot" : ""}`}
                onClick={() => setCurrentIndex(idx)}
                style={{ cursor: "pointer" }}
              ></span>
            ))}
          </div>
        </div>

        {/* ========clients says ========= */}
        <div className="clients-says">
          <h3 className="says-title">
            What Our <span className="color">Clients Say</span>
          </h3>
          <p className="para-says">
            Join our growing list of satisfied clients who have transformed their
            businesses with our innovative solutions.
          </p>
          {/* ======= cards ===== */}
          <div className="cards-container">
            {cardData.map((card, index) => (
              <div className="card" key={index}>
                {/* ========= first ======= */}
                <div className="img-content">
                  <div className="imged">
                    <img src={card.image} alt={card.name} />
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

        {/* ========= success stories =========*/}
        <div className="sucess-container">
          <h1 className="success-title">Ready to Join Our Success Stories?</h1>
          <p className="para-success">
            Let's discuss how we can help you achieve similar results and transform
            your business with our innovative solutions.
          </p>
          <button className="btn">Start Your Project</button>
          <button className="btn1">View Our Work</button>
        </div>
      </header>
    </>
  );
};

export default Testimonials;
