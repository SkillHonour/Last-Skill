import React from "react";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// assets
import web from "../../assets/service/serv-web.jpg";
import custom from "../../assets/service/serv-custom.jpg";
import market from "../../assets/service/serv-market.jpeg";
import img2 from "../../assets/testimonial/women4.jpg";
import img3 from "../../assets/testimonial/women2.jpg";
import img4 from "../../assets/testimonial/women5.jpg";
import project1 from "../../assets/portfolio/proj1.jpg";
import project2 from "../../assets/portfolio/proj2.webp";
import project3 from "../../assets/portfolio/proj3.webp";
import project4 from "../../assets/portfolio/proj4.webp";

export default function Home() {
  const homeclient = [
    {
      name: "Mukilian",
     
      star: "⭐️⭐️⭐️⭐️⭐️",
      description:
        "The digital marketing campaign exceeded all our expectations. Our social media engagement increased by 250% and lead generation improved by 180%.",
      domain: "Digital Marketing",
      image: img2,
    },
    {
      name: "Rithish",
      
      star: "⭐️⭐️⭐️⭐️⭐️",
      description:
        "Our custom mobile application was delivered on time and exceeded all requirements. The user experience is exceptional, and our app store ratings improved significantly.",
      domain: "Custom Application Development",
      image: img3,
    },
    {
      name: "Muthu",
     
      star: "⭐️⭐️⭐️⭐️⭐️",
      description:
        "The branding package was absolutely perfect. Our new logo and brand identity have received countless compliments from clients.",
      domain: "Graphic Design",
      image: img4,
    },
  ];

  const portData = [
    {
      projname: "E-Commerce Platform",
      description:
        "Modern e-commerce website with shopping cart and admin dashboard.",
      client: "Client: TechStore Inc.",
      img: project1,
    },
    {
      projname: "Social Media Campaign",
      description: "Marketing campaign that increased brand awareness by 250%.",
      client: "Client: Fashion Forward",
      img: project2,
    },
    {
      projname: "Mobile Banking App",
      description:
        "Secure banking app with biometric login and real-time updates.",
      client: "Client: SecureBank",
      img: project3,
    },
    {
      projname: "Brand Identity Design",
      description: "Complete brand identity package for startups.",
      client: "Client: StartupXYZ",
      img: project4,
    },
  ];

  const navigate = useNavigate();
  const movePortfolio = () => navigate("/portfolio");
  const moveService = () => navigate("/service");

  return (
    <div className="homepage">
      {/* ✅ SEO */}
      <Helmet>
        <title>Skill Honour | Your Tech Partner</title>
        <meta
          name="description"
          content="Skill Honour provides web development, digital marketing, custom applications, and IT solutions to help businesses grow online."
        />
        <meta
          name="keywords"
          content="Skill Honour, Web Development, Digital Marketing, Custom Applications, Portfolio, IT Solutions"
        />
      </Helmet>

      {/* ✅ Hero */}
      <section className="firsthome">
        <h1>Skill Honour</h1>
        <h2>Your Tech Partner</h2>
        <h3>Specializing in Web Development</h3>
        <p className="firstpara">
          We deliver exceptional technology solutions with skill, honour, and
          innovation. From web development to cloud hosting, we're your trusted
          partner for digital transformation.
        </p>
        <div className="firstbutton">
          <button onClick={moveService}>Explore Our Services</button>
          <button onClick={movePortfolio}>View Portfolio</button>
        </div>
      </section>

      {/* ✅ Services */}
      <section className="secondhome">
        <h1>
          Our <span>Services</span>
        </h1>
        <p className="secondpara">
          Comprehensive technology solutions designed to transform your business
          and drive growth in the digital age.
        </p>
        <div className="secondbox-content">
          <article className="secondboxhome">
            <img src={web} alt="Web Development" />
            <h2>Web Development</h2>
            <p>
              Creating modern, responsive websites and web applications using
              cutting-edge technologies.
            </p>
            <ul>
              <li>Responsive Design</li>
              <li>Modern Frameworks</li>
              <li>SEO Optimization</li>
              <li>Performance Focused</li>
            </ul>
            <div className="secondboxbutton">
              <button onClick={moveService}>View More</button>
              <button>Get Quote</button>
            </div>
          </article>

          <article className="secondboxhome">
            <img src={market} alt="Digital Marketing" />
            <h2>Digital Marketing</h2>
            <p>
              Comprehensive digital marketing strategies to boost your online
              presence and drive meaningful engagement.
            </p>
            <ul>
              <li>Social Media Management</li>
              <li>SEO & SEM</li>
              <li>Content Strategy</li>
              <li>Analytics & Reporting</li>
            </ul>
            <div className="secondboxbutton">
              <button onClick={moveService}>View More</button>
              <button>Get Quote</button>
            </div>
          </article>

          <article className="secondboxhome">
            <img src={custom} alt="Custom Applications" />
            <h2>Custom Applications</h2>
            <p>
              Tailored software solutions designed specifically for your
              business needs.
            </p>
            <ul>
              <li>Mobile Development</li>
              <li>Desktop Applications</li>
              <li>API Integration</li>
              <li>Database Design</li>
            </ul>
            <div className="secondboxbutton">
              <button onClick={moveService}>View More</button>
              <button>Get Quote</button>
            </div>
          </article>
        </div>
        <button onClick={moveService}>View All Services</button>
      </section>

      {/* ✅ Portfolio */}
      <section className="thirdhome">
        <h1>
          Recent <span>Projects</span>
        </h1>
        <p className="thirdtopic-para">
          Take a look at some of our recent work and see how we've helped
          businesses transform their digital presence.
        </p>
        <div className="thirdbox-content">
          {portData.map((port, index) => (
            <article className="thirdbox" key={index}>
              <img src={port.img} alt={port.projname} />
              <h2>{port.projname}</h2>
              <p>{port.client}</p>
              <span>{port.description}</span>
              <a href="/portfolio">View Details</a>
            </article>
          ))}
        </div>
        <button onClick={movePortfolio}>View All Projects</button>
      </section>

      {/* ✅ Testimonials */}
      <section className="fourhome">
        <h1>
          What Our <span>Clients Say</span>
        </h1>
        <p className="fourtopic-para">
          Hear what our satisfied clients have to say about our work.
        </p>
        <div className="fourbox-content">
          {homeclient.map((client, index) => (
            <article className="fourbox" key={index}>
              <div className="fourhandling">
                <div className="lefthandling">
                  <img src={client.image} alt={client.name} />
                </div>
                <div className="righthandling">
                  <h1>{client.name}</h1>
                  <p>{client.role}</p>
                </div>
              </div>
              <p>{client.star}</p>
              <p>{client.description}</p>
            </article>
          ))}
        </div>
        <button>View All Testimonials</button>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="fivehome">
        <h1>
          Why Choose <span>Skill Honour?</span>
        </h1>
        <p className="fivetopic-para">
          We combine technical expertise with creative innovation to deliver
          solutions that drive real business results.
        </p>
        <div className="five-numcount">
          <h1>
            500+ <br /> <span>Projects Completed</span>
          </h1>
          <h1>
            200+ <br />
            <span>Happy Clients</span>
          </h1>
          <h1>
            3+ <br /> <span>Years Experience</span>
          </h1>
          <h1>
            24/7 <br /> <span>Support Available</span>
          </h1>
        </div>
      </section>

      {/* ✅ Call to Action */}
      <section className="sixhome">
        <h1>Ready to Transform Your Business?</h1>
        <p>
          Let's discuss how we can help you achieve your digital goals with our
          comprehensive tech solutions.
        </p>
        <div className="sixhome-button">
          <button>Get Started Today</button>
          <button onClick={movePortfolio}>View Our Work</button>
        </div>
      </section>
    </div>
  );
}
