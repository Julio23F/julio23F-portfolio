import { useEffect, useState } from "react";


const animateTextReveal = (realText, setDisplayedText) => {
    const generateRandomWord = (length) => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
    };

    const generateRandomText = (text) => {
        return text.split(/(\s+)/).map(segment => {
            return segment.trim() ? generateRandomWord(segment.length) : segment;
        }).join("");
    };

    let randomText = generateRandomText(realText);
    setDisplayedText(randomText);

    let indexes = Array.from({ length: realText.length }, (_, i) => i);
    let step = Math.ceil(realText.length / 10);

    const interval = setInterval(() => {
        if (indexes.length === 0) {
            clearInterval(interval);
            return;
        }

        let selectedIndexes = indexes.sort(() => 0.5 - Math.random()).slice(0, step);
        setDisplayedText((currentText) => {
            let newText = currentText.split("");
            selectedIndexes.forEach((i) => {
                newText[i] = realText[i];
            });
            return newText.join("");
        });

        indexes = indexes.filter((i) => !selectedIndexes.includes(i));
    }, 110);

    return () => clearInterval(interval);
};

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [monthsSinceApril2024, setMonthsSinceApril2024] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [displayedTextDescription, setDisplayedTextDescription] = useState("");
    const [displayedTextSkill, setDisplayedTextSkill] = useState("");
    const realText = `My name is "Faralahy Julio", and I'm a web and mobile developer, as well as a creative visual designer who creates interactive applications for you.`;

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about");
            const skills = document.querySelectorAll(".skill-item");

            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                setIsVisible(rect.top < window.innerHeight * 0.5);
            }

            document.querySelectorAll(".stat-item").forEach((item) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8) {
                    item.classList.add("visible");
                }
            });
            const descriptionText = document.querySelector(".description-text");
            if (descriptionText) {
                descriptionText.classList.add("visible");
            }

            skills.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8) {
                    setTimeout(() => {
                        item.classList.add("visible");
                    }, index * 150); // Décalage progressif pour chaque élément
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        if (isVisible) {
            animateTextReveal(realText, setDisplayedText);
            animateTextReveal("DESCRIPTION", setDisplayedTextDescription);
            animateTextReveal("SKILLS", setDisplayedTextSkill);
        }
    }, [isVisible]);

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
            
                <h2 className="description-title grid-item">../{displayedTextDescription}</h2>
                <div className="description-stats grid-item">
                    <p className="description-text" >
                        {displayedText}
                    </p>
                </div>

                <h2 className="description-title grid-item">../{displayedTextSkill}</h2>
                <div className="description-stats grid-item">
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
