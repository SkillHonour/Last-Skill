import React from 'react'
import { Helmet } from "react-helmet-async";
import './About.css';

const About = () => {
    const cardData = [
        {
            icon: "ri-shield-star-line",
            name: "Honor",
            description:
                "We conduct business with integrity and respect, building trust through honest communication and ethical practices.",
        },
        {
            icon: "ri-lightbulb-flash-line",
            name: "Innovation",
            description:
                "We embrace cutting-edge technologies and creative solutions to deliver exceptional results for our clients.",
        },
        {
            icon: "ri-group-line",
            name: "Collaboration",
            description:
                "We work closely with our clients as partners, ensuring their vision becomes reality through teamwork.",
        },
        {
            icon: "ri-trophy-line",
            name: "Excellence",
            description:
                "We strive for perfection in every project, delivering high-quality solutions that exceed expectations.",
        },
    ];

    // ✅ Updated Team Data
    const teamData = [
        {
            name: "Sanjay",
            role: "Senior Web Developer",
            desc: "Sanjay is an experienced full-stack web developer with expertise in building modern, scalable, and high-performance web applications.",
            icon1: "ri-linkedin-fill",
            icon2: "ri-twitter-fill",
        },
        {
            name: "Ashwin",
            role: "Digital Marketing Specialist",
            desc: "Ashwin drives impactful digital marketing strategies, focusing on SEO, social media, and lead generation to maximize business growth.",
            icon1: "ri-linkedin-fill",
            icon2: "ri-twitter-fill",
        },
        {
            name: "Gopi",
            role: "Graphic Designer",
            desc: "Gopi specializes in creating visually stunning designs, branding assets, and creative content that strengthen brand identity.",
            icon1: "ri-linkedin-fill",
            icon2: "ri-twitter-fill",
        },
        {
            name: "Magesh",
            role: "WordPress Developer",
            desc: "Magesh develops and customizes WordPress websites with user-friendly design, performance optimization, and robust functionality.",
            icon1: "ri-linkedin-fill",
            icon2: "ri-twitter-fill",
        },
        {
            name: "Balaji",
            role: "Cloud Specialist",
            desc: "Balaji is skilled in cloud computing solutions, helping businesses leverage cloud platforms for scalability, security, and cost efficiency.",
            icon1: "ri-linkedin-fill",
            icon2: "ri-twitter-fill",
        },
    ];

    return (
        <>
            <Helmet>
                <title>About Us | Skill Honor</title>
                <meta
                    name="description"
                    content="Learn about Skill Honor's mission, values, and talented team of developers, designers, marketers, and cloud specialists delivering innovative digital solutions."
                />
                <meta
                    name="keywords"
                    content="Skill Honor, About Skill Honor, Web Development Team, Digital Marketing, WordPress Developer, Cloud Specialist, Graphic Designer, Sanjay Web Developer, Ashwin Digital Marketing, Gopi Graphic Designer, Magesh WordPress, Balaji Cloud"
                />
            </Helmet>

            <div className="about-container">
                {/* ========== About Skill Honor ========== */}
                <div className="askill-honor">
                    <h1 className="skill-name">About <span className='color-skill'>Skill Honor</span></h1>
                    <p className="skill-para1">Learn about our mission, values, and the talented team behind our</p>
                    <p className="skill-para2">innovative technology soluctions.</p>
                </div>

                {/* ======== Our story =========== */}
                <div className="our-story">
                    <h1 className="story-name">Our <span className="color-skilled">Story</span></h1>
                    <p className="story-para1">Founded in 2019, Skill Honor began as a vision to bridge the gap between cutting-edge technology and</p>
                    <p className="story-para2">business success. We believe that every business deserves access to innovative solutions that drive growth and</p>
                    <p className="story-para3">transformation.</p>
                    <p className="story-para4">Today, we're a team of passionate professionals dedicated to delivering exceptional results through skill, honor,</p>
                    <p className="story-para5">and innovation. Our comprehensive approach combines technical expertise with creative problem-solving to</p>
                    <p className="story-para6">help businesses thrive in the digital age.</p>
                    <div className="story-works">
                        <div className="counters">
                            <h1 className="story-num">500<span className='special-char'>+</span></h1>
                            <h5 className="counter-name">Projects Completed</h5>
                        </div>
                        <div className="counters">
                            <h1 className="story-num">200<span className='special-char'>+</span></h1>
                            <h5 className="counter-name">Happy Clients</h5>
                        </div>
                        <div className="counters">
                            <h1 className="story-num">5<span className="special-char">+</span></h1>
                            <h5 className="counter-name">Years Experience</h5>
                        </div>
                        <div className="counters">
                            <h1 className="story-num">50<span className='special-char'>+</span></h1>
                            <h5 className="counter-name">Team Members</h5>
                        </div>
                    </div>
                </div>

                {/* ============= our Mission =========== */}
                <div className="our-mission">
                    <h1 className="missioned-name">Our <span className='color-skilled'>Mission</span></h1>
                    <p className="mission-para1">To empower businesses with innovative technology solutions that drive growth,</p>
                    <p className="mission-para2">efficiency, and success in the digital world.</p>
                    <div className="card-mission">
                        {cardData.map((card, index) => (
                            <div className="cards" key={index}>
                                <div className="iconics">
                                    <i className={card.icon}></i>
                                </div>
                                <h3 className="mission-nameed">{card.name}</h3>
                                <p className="mission-paras">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/*================ meet our team ============ */}
                <div className="our-team">
                    <h1 className="team-name">Meet Our <span className='color-skilled'>Team</span></h1>
                    <p className="team-para1">The talented professionals behind Skill Honor's success, each bringing unique expertise</p>
                    <p className="team-para2">and passion to every project.</p>
                    
                    <div className="team-cards-container">
                        {teamData.map((member, index) => (
                            <div className="card-container" key={index}>
                                <div className="card-content">
                                    <h4 className="em-name">{member.name}</h4>
                                    <h5 className="role">{member.role}</h5>
                                    <p className="para-card">{member.desc}</p>
                                    <div className="card-icons">
                                        <span className='icon-one'><i className={member.icon1}></i></span>
                                        <span className='icon-two'><i className={member.icon2}></i></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
