import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Testimonials.css";
// import images
import img1 from '../../assets/testimonial/women1.jpg';
import img2 from '../../assets/testimonial/women4.jpg';
import img3 from '../../assets/testimonial/women2.jpg';
import img4 from '../../assets/testimonial/women5.jpg';
import img5 from '../../assets/testimonial/women3.jpg';
import img6 from '../../assets/testimonial/women6.jpg';
import team1 from '../../assets/team/team1.jpg';
import team2 from '../../assets/team/team2.jpg';
import team3 from '../../assets/team/team3.jpg';
import team4 from '../../assets/team/team4.jpg';

const teamData = [
  {
    staring: "⭐️⭐️⭐️⭐️⭐️",
    para: "Skill Honour transformed our online presence completely. Their web development team created a stunning, responsive website that increased our conversions by 300%. The attention to detail and technical expertise were outstanding.",
    name: "Rithish",
    projects: "E-commerce Platform Development",
    results: "300% increase in conversions",
    profile: img1
  },
  {
    staring: "⭐️⭐️⭐️⭐️⭐️",
    para: "The digital marketing campaign exceeded all our expectations. Our social media engagement increased by 250% and lead generation improved by 180%. The team's strategic approach was exactly what we needed.",
    name: "Saravanan",
    projects: "Comprehensive Digital Marketing Campaign",
    results: "250% increase in social engagement",
    profile: img2
  },
  {
    staring: "⭐️⭐️⭐️⭐️⭐️",
    para: "Our custom mobile application was delivered on time and exceeded all requirements. The user experience is exceptional, and our app store ratings improved significantly. Highly recommend their development services.",
    name: "Balaji",
    projects: "Mobile Banking Application",
    results: "4.8/5 app store rating",
    profile: img3
  },
  {
    staring: "⭐️⭐️⭐️⭐️⭐️",
    para: "The branding package was absolutely perfect. Our new logo and brand identity have received countless compliments from clients. The creative team understood our vision perfectly and brought it to life beautifully.",
    name: "Shai",
    projects: "Complete Brand Identity Package",
    results: "Award-winning brand design",
    profile: img4
  },
  {
    staring: "⭐️⭐️⭐️⭐️⭐️",
    para: "The cloud migration was seamless and professionally executed. Our system performance improved dramatically, and we've experienced zero downtime since the migration. Their ongoing support is exceptional.",
    name: "Gopalakrishan",
    projects: "Enterprise Cloud Migration",
    results: "99.9% uptime guarantee achieved",
    profile: img5
  },
  {
    staring: "⭐️⭐️⭐️⭐️⭐️",
    para: "My custom gaming PC build is absolutely incredible! The performance is outstanding, and the RGB lighting setup is perfect. The team understood exactly what I needed for streaming and gaming at the highest level.",
    name: "Arun",
    projects: "High-Performance Gaming PC Build",
    results: "4K gaming at 144fps",
    profile: img6
  },
];

const cardData = [
  {
    img: team3,
    name: "Sanjay",
    role: "Web Developer",
    desc: "Specialized in building responsive, scalable, and user-friendly websites with modern technologies.",
    icon1: "ri-linkedin-fill",
    icon2: "ri-twitter-fill",
  },
  {
    img: team4,
    name: "Ashwin",
    role: "Digital Marketing Specialist",
    desc: "Expert in SEO, SEM, and social media marketing strategies that drive business growth and visibility.",
    icon1: "ri-linkedin-fill",
    icon2: "ri-twitter-fill",
  },
  {
    img: team1,
    name: "Gopi",
    role: "Graphic Designer",
    desc: "Creative designer with expertise in branding, UI/UX, and compelling visual content for digital platforms.",
    icon1: "ri-linkedin-fill",
    icon2: "ri-twitter-fill",
  },
  {
    img: team2,
    name: "Magesh",
    role: "WordPress Developer",
    desc: "Focused on building customized and high-performance WordPress websites that empower businesses.",
    icon1: "ri-linkedin-fill",
    icon2: "ri-twitter-fill",
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

  return (
    <>
      <Helmet>
        <title>Skill Honour | Client Testimonials & Team Overview</title>
        <meta
          name="description"
          content="Read client reviews and meet our expert team at Skill Honour. See how we deliver exceptional web development, digital marketing, and design services to drive results."
        />
        <meta
          name="keywords"
          content="Skill Honour, client testimonials, web development, digital marketing, graphic design, WordPress, team, success stories"
        />
      </Helmet>

      <header>
        {/* ============== client container ============= */}
        <div className="client-container">
          <h1 className="client-name">
            Client <span className="color">Testimonials</span>
          </h1>
          <p className="client-para">
            Hear from our satisfied clients about their experience working with
            Skill Honour and the results we've achieved together.
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

        {/* ======== team cards ========= */}
        <div className="clients-says">
          <h3 className="says-title">
            Meet Our <span className="color">Team</span>
          </h3>
          <p className="para-says">
            Our expert professionals drive results and innovation for our clients.
          </p>
          <div className="cards-container">
            {cardData.map((card, index) => (
              <div className="card" key={index}>
                <div className="img-content">
                  <div className="imged">
                    <img src={card.img} alt={card.name} />
                  </div>
                  <div className="content-img">
                    <h4 className="name-says">{card.name}</h4>
                    <h5 className="role-says">{card.role}</h5>
                    <p className="para-desc">{card.desc}</p>
                    <div className="social-icons">
                      <i className={card.icon1}></i>
                      <i className={card.icon2}></i>
                    </div>
                  </div>
                </div>
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
