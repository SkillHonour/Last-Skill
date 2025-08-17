import React from 'react'
import './About.css';
import team1 from '../../assets/men1.jpg';
import team2 from '../../assets/women1.jpg'
import team3 from '../../assets/men2.jpg'
import team4 from '../../assets/women2.jpg'

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

    const teamData = [
        {
            img: team2,
            name: "Sarah Johnson",
            role: "CEO & Founder",
            desc: "With over 10 years of experience in tech leadership, Sarah founded Skill  innovative technology and business success.",
            icon1: "ri-linkedin-fill",
            icon2: "ri-twitter-fill",
        },
        {
            img: team3,
            name: "Michael Chen",
            role: "CTO & Lead Developer",
            desc: "Michael brings 8 years of full-stack development expertise, specializing in modern web technologies and cloud architecture.",
            icon1: "ri-linkedin-fill",
            icon2: "ri-twitter-fill",
        },
        {
            img: team4,
            name: "Emily Rodriguez",
            role: "Creative Director",
            desc: "Emily leads our design team with 7 years of experience in branding, UI/UX design, and digital marketing campaigns.",
            icon1: "ri-linkedin-fill",
            icon2: "ri-twitter-fill",
        },
        {
            img: team1,
            name: "Praveen Kumar R",
            role: "Marketing Manager",
            desc: "David specializes in digital marketing strategies and has helped over 100 businesses grow their online presence.",
            icon1: "ri-linkedin-fill",
            icon2: "ri-twitter-fill",
        },
    ];
    return (
        <>
            <div className="about-container">
                {/* ========== About Skill Honor ========== */}
                <div cl                              uu assName="askill-honor">
                    <h1 className="skill-name">About <span className='color-skill'>Skill Honor</span></h1>
                    <p className="skill-para1">Learn about our mission, values, and the talented team behind our</p>
                    <p className="skill-para2">innovative technology soluctions.</p>
                </div>

                {/* ======== Our story =========== */}
                <div className="our-story">
                    <h1 className="story-name">Our <span className="color-skilled">Story</span></h1>
                    {/* ========para 1 ============ */}
                    <p className="story-para1">Founded in 2019, Skill Honor began as a vision to bridge the gap between cutting-edge technology and</p>
                    <p className="story-para2">business success. We believe that every business deserves access to innovative solutions that drive growth and</p>
                    <p className="story-para3">transformation.</p>
                    {/* ========== para 2 ========== */}
                    <p className="story-para4">Today, we're a team of passionate professionals dedicated to delivering exceptional results through skill, honor,</p>
                    <p className="story-para5">and innovation. Our comprehensive approach combines technical expertise with creative problem-solving to</p>
                    <p className="story-para6">help businesses thrive in the digital age.</p>
                    {/* ====== works ======== */}
                    <div className="story-works">
                        <div className="counters">
                            <h1 className="story-num">500<span className='special-char'>+</span>
                            </h1>
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
                    {/* ========== Cards Section ========== */}
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
                    {/* ====== Dynamic Team Cards using props ====== */}
                    <div className="team-cards-container">
                        {teamData.map((member, index) => (
                            <div className="card-container" key={index}>
                                <div className="img-container">
                                    <img src={member.img} alt={member.name} />
                                </div>
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