import React from 'react';
import './portfflio.css';
import project1 from '../../assets/portfolio/proj1.jpg';
import project2 from '../../assets/portfolio/proj2.webp';
import project3 from '../../assets/portfolio/proj3.webp';
import project4 from '../../assets/portfolio/proj4.webp';
import project5 from '../../assets/portfolio/proj5.jpg';
import project6 from '../../assets/portfolio/proj6.webp';

const Portfolio = () => {
    const cardData = [
        {
          projname: "E-Commerce Platform",
          description: "Modern e-commerce website with shopping cart, payment, and admin dashboard.",
          client: "Client: TechStore Inc.",
          lang1: "React",
          lang2: "Next.js",
          lang3: "Stripe",
          lang4: "MongoDB",
          btn: "View Details",
          img: project1,
        },
        {
          projname: "Social Media Campaign",
          description: "Marketing campaign that increased brand awareness by 250%.",
          client: "Client: Fashion Forward",
          lang1: "Facebook Ads",
          lang2: "Instagram",
          lang3: "Analytics",
          lang4: "Hootsuite",
          btn: "View Details",
          img: project2,
        },
        {
          projname: "Mobile Banking App",
          description: "Secure banking app with biometric login and real-time updates.",
          client: "Client: SecureBank",
          lang1: "React Native",
          lang2: "Firebase",
          lang3: "Auth",
          lang4: "Encryption",
          btn: "View Details",
          img: project3,
        },
        {
          projname: "Brand Identity Design",
          description: "Complete brand identity package for startups.",
          client: "Client: StartupXYZ",
          lang1: "Illustrator",
          lang2: "Photoshop",
          lang3: "InDesign",
          lang4: "Figma",
          btn: "View Details",
          img: project4,
        },
        {
          projname: "Gaming PC Build",
          description: "Custom high-performance gaming setup.",
          client: "Client: Pro Gamer",
          lang1: "RTX 4090",
          lang2: "Intel i9",
          lang3: "DDR5 RAM",
          lang4: "Custom Cooling",
          btn: "View Details",
          img: project5,
        },
        {
          projname: "Cloud Migration Project",
          description: "Cloud migration with 99.9% uptime guarantee.",
          client: "Client: Enterprise Corp",
          lang1: "AWS",
          lang2: "Docker",
          lang3: "Kubernetes",
          lang4: "Terraform",
          btn: "View Details",
          img: project6,
        },
      ];
    
    return (
        <div className="portfolio-container">
            {/* Header */}
            <div className="our-portfolio">
                <h1 className="portfolio-title">
                    Our <span className="orange">Portfolio</span>
                </h1>
                <p className="para-port1">
                    Explore our successful projects and see how we've helped businesses transform their
                </p>
                <p className="para-port2">digital presence.</p>
            </div>
            <div className="projects">
                {/* Categories */}
                <div className="project-language">
                    <h4 className="lang-name1">All Projects</h4>
                    <h4 className="lang-name">Web Development</h4>
                    <h4 className="lang-name">Digital Marketing</h4>
                    <h4 className="lang-name">Custom Applications</h4>
                    <h4 className="lang-name">Graphic Design</h4>
                    <h4 className="lang-name">PC Build & Repair</h4>
                    <h4 className="lang-name">Cloud Hosting</h4>
                </div>

                {/* Projects Grid */}
                <div className="portfolio-wrapper">
                    {cardData.map((card, index) => (
                        <div className="project-one" key={index}>
                            <div className="img-container-proj">
                                <h4 className="date">2024</h4>
                                <img src={card.img} alt={card.projname} />
                            </div>
                            <div className="proj-content">
                                <h5 className="proj-name">{card.projname}</h5>
                                <p className="proj-para">{card.description}</p>
                                <h6 className="title">{card.client}</h6>
                                <div className="proj-lang">
                                    <span>{card.lang1}</span>
                                    <span>{card.lang2}</span>
                                    <span>{card.lang3}</span>
                                    <span>{card.lang4}</span>
                                </div>
                                <button className="btn-proj">{card.btn}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Ready to start section */}
            <div className="ready-start">
                <h3 className="name-ready">Ready to Start Your Project?</h3>
                <p className="para-ready">
                    Let's discuss your project requirements and create something amazing together.
                </p>
                <div className="ready-btn">
                    <button className="start">Start a Project</button>
                    <button className="start1">View Services</button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
