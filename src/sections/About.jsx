import { useEffect, useState } from "react";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [monthsSinceApril2024, setMonthsSinceApril2024] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                setIsVisible(rect.top < window.innerHeight * 0.5);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const calculateMonthsSinceApril2024 = () => {
            const startDate = new Date(2024, 3, 23);
            const today = new Date();

            const yearsDiff = today.getFullYear() - startDate.getFullYear();
            const monthsDiff = today.getMonth() - startDate.getMonth();

            const totalMonths = yearsDiff * 12 + monthsDiff;
            setMonthsSinceApril2024(totalMonths);
        };

        calculateMonthsSinceApril2024();
    }, []);

    const skills = [
        { name: 'HTML5', icon: 'fa-html5' },
        { name: 'CSS3', icon: 'fa-css3-alt' },
        { name: 'JavaScript', icon: 'fa-js' },
        { name: 'ReactJS', icon: 'fa-react' },
        { name: 'PHP', icon: 'fa-brands fa-php' },
        { name: 'Laravel', icon: 'fa-laravel' },
        { name: 'Flutter', icon: 'fa-mobile' },
        { name: 'Cypress', icon: 'fa-vial' }
    ];
    

    return (
        <section 
            id="about"
            className={`about-container ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
            <div className="about grid-container">
                <h2 className="about-title grid-item">ABOUT</h2>
                <div className="about-stats grid-item">
                    <div className="stat-item">
                        <div>
                            <p className="stat-number">
                                <span>{monthsSinceApril2024}</span>
                                <span>+</span>
                            </p>
                        </div>
                        <p className="stat-text">
                            <span>Months</span>
                            <span>of Experience</span>
                        </p>
                    </div>
                    <div className="stat-item">
                        <div>
                            <p className="stat-number">
                                <span>17</span>
                                <span>+</span>
                            </p>
                        </div>
                        <p className="stat-text">
                            <span>Personnal</span>
                            <span>Projects</span>
                        </p>
                    </div>

                    <div className="stat-item">
                        <div>
                            <p className="stat-number">
                                <span>3</span>
                                <span>+</span>
                            </p>
                        </div>
                        <p className="stat-text"> 
                        <span>Professional</span>
                        <span>Project</span>
                        </p>
                    </div>
                </div>
            
                <h2 className="description-title grid-item">../DESCRIPTION</h2>
                <div className="description-stats grid-item">
                    <p className="description-text">
                    My name is "Faralahy Julio", and I'm a web and mobile developer, as well as a creative visual designer who creates interactive applications for you.
                    </p>
                </div>

                <h2 className="description-title grid-item">../SKILLS</h2>
                <div className="description-stats grid-item">
                    {/* <p className="description-text">
                    My name is "Faralahy Julio", and I'm a web and mobile developer, as well as a creative visual designer who creates interactive applications for you.
                    </p> */}
                    <div className="skills-container">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-item">
                            <i className={`fab ${skill.icon}`}></i>
                            <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
