import React from "react";
import '../Home/Home.css';
import Service from "../Service/Service";
import { useNavigate } from "react-router-dom";
import web from "../../assets/service/serv-web.jpg";
import custom from "../../assets/service/serv-custom.jpg"
import market from "../../assets/service/serv-market.jpeg"
import img2 from '../../assets/testimonial/women4.jpg';
import img3 from '../../assets/testimonial/women2.jpg';
import img4 from '../../assets/testimonial/women5.jpg';
import project1 from '../../assets/portfolio/proj1.jpg';
import project2 from '../../assets/portfolio/proj2.webp';
import project3 from '../../assets/portfolio/proj3.webp';
import project4 from '../../assets/portfolio/proj4.webp';
export default function Home() {

    const homeclient=[
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
    ];

        const portData = [
            {
              projname: "E-Commerce Platform",
              description: "Modern e-commerce website with shopping cart admin dashboard.",
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
            }
        ];
       
        const navigation=useNavigate();
        const moveport=()=>{
            navigation("/portfolio");
        }

        const moveservice=()=>{
            navigation("/service");
            console.log("Hello");
        }

    return (
        <div className="homepage">

            {/* First homepage  */}

            <div className="firsthome">
                <h1>Skill Honor</h1>
                <h2>Your Tech Partner</h2>
                <h3>Specializing in Web development</h3>
                <div className="firstpara">
                    <p>We deliver exceptional technology solutions with skill, honor, and innovation. From web development to cloud hosting, we're your trusted partner for digital transformation.</p>
                </div>
                <div className="firstbutton">
                    <button onClick={moveservice} >Explore our service</button>
                    <button onClick={moveport} >View portfolio</button>
                </div>
            </div>


            {/* Second homepage  */}


            <div className="secondhome">
                <h1>Our <span>Services</span></h1>
                <div className="secondpara">
                    <p>Comprehensive technology solutions designed to transform your business and drive growth in the digital age.</p>
                </div>
                <div className="secondbox-content">
                    <div className="secondboxhome secondbox1">
                        <img src={web} alt="" />
                        <h2> Web Development</h2>
                        <p>Creating modern, responsive websites and web applications using cutting-edge technologies. From simple landing pages to complex e-commerce platforms.</p>
                        <ul>
                            <li>Responsive Design</li>
                            <li>Modern Frameworks</li>
                            <li>SEO Optimization</li>
                            <li> Performance Focused</li>

                        </ul>
                        <div className="secondboxbutton">
                            <button onClick={moveservice}>View More</button>
                            <button>Get Quote</button>
                        </div>
                    </div>
                    <div className="secondboxhome secondbox2">
                        <img src={market} alt="" />
                        <h2>Digital Marketing</h2>
                        <p>Comprehensive digital marketing strategies to boost your online presence and drive meaningful engagement with your target audience.</p>
                        <ul>
                            <li>Social Media Management</li>
                            <li> SEO & SEM</li>
                            <li> Content Strategy</li>
                            <li>  Analytics & Reporting</li>
                        </ul>
                         <div className="secondboxbutton">
                            <button onClick={moveservice}>View More</button>
                            <button>Get Quote</button>
                        </div>
                    </div>
                    <div className="secondboxhome secondbox3">
                        <img src={custom} alt="" />
                        <h2>Custom Applications</h2>
                        <p>Tailored software solutions designed specifically for your business needs. From mobile apps to enterprise systems.</p>
                        <ul>
                            <li>Mobile Development</li>
                            <li>Desktop Applications</li>
                            <li>API Integration</li>
                            <li>Database Design</li>
                        </ul>
                         <div className="secondboxbutton">
                            <button onClick={()=>moveservice()} >View More</button>
                            <button>Get Quote</button>
                        </div>
                    </div>
                </div>
                <button onClick={moveservice} >View All Services</button>
            </div>

            {/* .ThirdHome  */}

            <div className="thirdhome">
                <h1>Recent <span>Projects</span></h1>
                <div className="thirdtopic-para">
                    <p>Take a look at some of our recent work and see how we've helped businesses transform their digital presence.</p>

                </div>

                <div className="thirdbox-content">
                    {portData.map((portdata)=>(
                    <div className="thirdbox thirdbox1">
                        <img src={portdata.img} alt="" />
                        <h2>{portdata.projname} </h2>
                       
                        <p>{portdata.client} </p>
                         <span>{portdata.description} </span> 
                        <a href="/portfolio">View Details</a>
                    </div>
                    ))}
                </div>

                <button onClick={()=>moveport()} >View All Project</button>

            </div>

            <div className="fourhome">
                <h1>What Our <span>Clients Say</span></h1>
                <div className="fourtopic-para">
                    <p>Don't just take our word for it - hear what our satisfied clients have to say about our work.</p>
                </div>
                <div className="fourbox-content">
                   
                    
                        {homeclient.map((homeclientval,index)=>(
                           <div className="fourbox "> 
                            <div className="fourhandling">
                                <div className="lefthandling">
                                    <img src={homeclientval.image} alt="" />
                                </div>
                                <div className="righthandling">
                                    <h1>{homeclientval.name} </h1>
                                    <p>{homeclientval.role} </p>
                                </div>
                            </div>
                            <p>{homeclientval.star} </p>
                            <p>{homeclientval.description} </p>
                            
                            </div>
                        ))}
                       
                        
                   
                   
                </div>

                <button>View All Testimonials</button>
            </div>

            <div className="fivehome">
                <h1>Why Choose <span>Skill Honor?</span></h1>
                <div className="fivetopic-para">
                    <p>We combine technical expertise with creative innovation to deliver solutions that drive real business results.</p>
                </div>
                <div className="five-numcount">
                    <h1>500+ <br /> <span>Projects Completed</span></h1>
                    <h1>200+  <br /><span>Happy Clients</span></h1>
                    <h1>3+ <br /> <span>Years Experience </span></h1>
                    <h1>24/7 <br /> <span>Support Available</span></h1>
                </div>
            </div>

            {/* Sixhome  */}

            <div className="sixhome">
                <h1>Ready to Transform Your Business?</h1>
                <p>Let's discuss how we can help you achieve your digital goals with our comprehensive tech solutions.</p>
                <div className="sixhome-button">
                    <button>Get started Today</button>
                    <button>View Our Work</button>
                </div>
            </div>

        </div>
    )
}