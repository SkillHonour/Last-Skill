import React, { useState } from "react";
import '../Service/Service.css'
import { DiCode } from "react-icons/di";
import web from "../../assets/service/serv-web.jpg";
import cloud from "../../assets/service/serv-cloud.jpg"
import custom from "../../assets/service/serv-custom.jpg"
import graphic from "../../assets/service/serv-graphic.jpg"
import market from "../../assets/service/serv-market.jpeg"
import pcc from "../../assets/service/serv-pc.jpg"




export default function Service() {
    const [firsthand, setfirsthand] = useState(0);

    let firstval = [{
        name: "Web Development",
        para: "Creating modern, responsive websites and web applications using cutting-edge technologies. We build everything from simple landing pages to complex e-commerce platforms and enterprise web applications.",
        type: ["Responsive Design", "SEO Optimization", "Cross-browser Compatibility", "Modern Frameworks (React, Next.js)", "Performance Focused", "API Integration"],
        pc: web,
        skill: ["HTML", "css", "Bootstrap", "Javascript", "React", "Node.js", "Express.js",]
    },
    {
        name: "Digital Marketing",
        para: "Comprehensive digital marketing strategies to boost your online presence and drive meaningful engagement with your target audience. We help businesses grow through data-driven marketing campaigns.",
        type: ["Social Media Management", "SEO & SEM", "Content Strategy", "Analytics & Reporting", "Email Marketing", "PPC Campaigns"],
        pc: market,
        skill: ["Google Analytics", "Google Ads", "Facebook Ads", "HubSpot", "Mailchimp", "SEMrush"]
    },
    {
        name: "Custom Application Development",
        para: "Tailored software solutions designed specifically for your business needs. From mobile apps to enterprise systems, we create applications that solve real business problems.",
        type: ["Mobile Development", "Desktop Applications", "API Integration", "Database Design", "Cloud Integration", "Security Implementation"],
        pc: custom,
        skill: ["React Native", "Flutter", "Swift", "Kotlin", "Python", "Java"]
    },
    {
        name: "Graphic Design",
        para: "Creative visual solutions that communicate your brand message effectively. We design everything from logos and branding materials to marketing collateral and digital assets.",
        type: ["Logo Design", "Brand Identity", "Marketing Materials", "UI/UX Design", "Print Design", "Digital Assets"],
        pc: graphic,
        skill: ["Adobe Creative Suite", "Figma", "Sketch", "Canva", "Illustrator", "Photoshop"]
    },
    {
        name: "PC build & repair service",
        para: "Professional computer building and repair services for businesses and individuals. From custom gaming rigs to enterprise workstations, we handle all your hardware needs.",
        type: ["Custom PC Building", "Hardware Troubleshooting", "System Optimization", "Upgrade Services", "Maintenance Plans", "Emergency Repairs"],
        pc: pcc,
        skill: ["Intel/AMD CPUs", "NVIDIA/AMD GPUs", "DDR4/DDR5 RAM", "SSD Storage", "Custom Cooling", "RGB Lighting"]
    },
    {
        name: "Cloud Hosting & Migration",
        para: "Secure and scalable cloud solutions for your business applications and data. We help you migrate to the cloud and optimize your infrastructure for maximum performance.",
        type: [" Cloud Migration", "Server Management", "Security Implementation", "Backup Solutions", "Performance Optimization", "24/7 Monitoring"],
        pc: cloud,
        skill: [" AWS", "Google Cloud", "Microsoft Azure", "Docker", "Kubernetes", "Terraform"]
    }
    ];
    return (
        <div className="serviceoverall">

            {/* Servicetopic  */}

            <div className="servicetopic">
                <h1>Our <span> Services</span></h1>
                <p>Comprehensive technology solutions designed to transform your business and drive growth in the digital age.</p>

            </div>

            {/* Firstservice  */}

            <div className="firstservice">
                <div className="firsthanding">
                    <button onClick={() => setfirsthand(0)} >Web Development</button>
                    <button onClick={() => setfirsthand(1)} >Digital Marketing</button>
                    <button onClick={() => setfirsthand(2)}>Custom Application Development</button>
                    <button onClick={() => setfirsthand(3)}>Graphic Design</button>
                    <button onClick={() => setfirsthand(4)}>PC build & repair service</button>
                    <button onClick={() => setfirsthand(5)}>Cloud Hosting & Migration</button>
                </div>

                <div className="firstcontent">
                    <div className="onecontent">
                        <div className="onecontentleft">
                            <div className="onecontenttopic">
                                <span>{<DiCode />} </span>
                                <h1> {firstval[firsthand].name}</h1>
                            </div>
                            <p>{firstval[firsthand].para}</p>
                            <ul>
                                {firstval[firsthand].type.map((item1, i) => (
                                    <li key={i}>{item1}</li>
                                ))}

                            </ul>
                        </div>
                        <div className="onecontentright">
                            <img src={firstval[firsthand].pc} alt="" />
                            <h1>Technologies We Use:</h1>
                            <div className="onecontentright-cont">
                                <ul>
                                    {firstval[firsthand].skill.map((item2, j) => (
                                        <li key={j}>{item2} </li>
                                    ))}


                                </ul>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            {/* Second service  */}

            <div className="secondservice">

              <div className="secondservicetitle">
                <h1>All Our <span> Services</span></h1>
                <p>Browse through our complete range of technology services designed to meet your business needs.</p>
              </div>
                <div className="secondboxall">
                    <div className="secondbox secondbox1">
                        <img src={firstval[0].pc} alt="" />
                        <p>{firstval[0].para}</p>
                        <ul>
                            {firstval[0].type.map((secitem, secind) => (
                                <li key={secind}>{secitem}</li>
                            ))}
                        </ul>
                        <div className="secondbox-button">
                            <button>View More</button>
                            <button>Get Quote</button>
                        </div>
                    </div>
                    <div className="secondbox secondbox2">
                        <img src={firstval[1].pc} alt="" />
                        <p>{firstval[1].para}</p>
                        <ul>
                            {firstval[1].type.map((secitem, secind) => (
                                <li key={secind}>{secitem}</li>
                            ))}
                        </ul>
                        <div className="secondbox-button">
                            <button>View More</button>
                            <button>Get Quote</button>
                        </div>
                    </div>

                    <div className="secondbox secondbox3">

                        <img src={firstval[2].pc} alt="" />
                        <p>{firstval[2].para}</p>
                        <ul>
                            {firstval[2].type.map((secitem, secind) => (
                                <li key={secind}>{secitem}</li>
                            ))}
                        </ul>
                        <div className="secondbox-button">
                            <button>View More</button>
                            <button>Get Quote</button>
                        </div>

                    </div>
                    <div className="secondbox secondbox4">

                        <img src={firstval[3].pc} alt="" />
                        <p>{firstval[3].para}</p>
                        <ul>
                            {firstval[3].type.map((secitem, secind) => (
                                <li key={secind}>{secitem}</li>
                            ))}
                        </ul>
                        <div className="secondbox-button">
                            <button>View More</button>
                            <button>Get Quote</button>
                        </div>

                    </div>
                    <div className="secondbox secondbox5">

                        <img src={firstval[4].pc} alt="" />
                        <p>{firstval[4].para}</p>
                        <ul>
                            {firstval[4].type.map((secitem, secind) => (
                                <li key={secind}>{secitem}</li>
                            ))}
                        </ul>
                        <div className="secondbox-button">
                            <button>View More</button>
                            <button>Get Quote</button>
                        </div>

                    </div>
                    <div className="secondbox secondbox6">

                        <img src={firstval[5].pc} alt="" />
                        <p>{firstval[5].para}</p>
                        <ul>
                            {firstval[5].type.map((secitem, secind) => (
                                <li key={secind}>{secitem}</li>
                            ))}
                        </ul>
                        <div className="secondbox-button">
                            <button>View More</button>
                            <button>Get Quote</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}