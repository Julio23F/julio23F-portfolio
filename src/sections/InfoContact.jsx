import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const InfoContact = () => {
    const getImageUrl = (name) => new URL(`../assets/images/${name.toLowerCase()}.jpg`, import.meta.url).href;

    const containerRef = useRef(null);
    const collaborationRef = useRef(null);

    const contactList = [
        { name: '+261 45 018 01', icon: 'fas fa-phone', link: 'tel:+2614501801' },
        // { name: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/Julio23F' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/julio-faralahy/' },
        { name: 'juliofaralahy23@gmail.com', icon: 'fas fa-envelope', link: 'mailto:juliofaralahy23@gmail.com' }
    ];
    

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({ smooth: true, lerp: 0.1, wheelMultiplier: 1, infinite: false });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        gsap.fromTo(
            ".info-contact-container",
            {opacity: 1, },
            {
                transform: "scale(0.8)",
                opacity: 0,
                scrollTrigger: {
                    // markers: true,
                    trigger: containerRef.current,
                    start: "75% center",
                    end: "bottom top",
                    scrub: 1.5,
                },
            }
        );

        // Animation de "info-contact"
        gsap.set(containerRef.current, { backgroundColor: "black" });

        gsap.fromTo(
            ".info-contact",
            { backgroundColor: "#000"},
            {
                backgroundColor: "#1f1634",
                scrollTrigger: {
                    // markers: true,
                    trigger: containerRef.current,
                    start: "center center",
                    end: "bottom top",
                    scrub: 1.5,
                },
            }
        );

        // Animation de "collaboration-container" lorsqu'on atteint "info-contact"
        gsap.fromTo(
            ".collaboration-container",
            { y: 550, position: "absolute", gap: "100px", padding: "40px 0px" },
            {
                y: 50,
                gap: "10px",
                padding: "40px 40px",
                backgroundColor: "#1f1634",
                opacity: 1,
                scrollTrigger: {
                    // markers: true,
                    trigger: containerRef.current,
                    start: "center center",
                    end: "bottom top",
                    scrub: true,
                    // toggleActions: "play none none reverse",
                },
            }
        );

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
    <>
        <div className="contact-section relative min-h-[180vh] flex justify-center mt-[300px]" style={{ backgroundColor: "#1f1634"}}>
            <div ref={containerRef} className="sticky top-[10%] translate-y-[-10%] flex contact-section-container">
                {/* Info Contact */}
                <div className="info-contact"  style={{paddingTop: "90px"}}>
                    <div className="info-contact-container">
                        <div className="info-description">
                            <span className="badge">web ✶ <span className="highlight">Developer</span></span>
                            <p className="description">
                                {/* Our clients speak louder than pixels! Check out what they have to say 
                                about their experience working with us – real stories, real satisfaction. */}
                                Créer, c'est donner vie à l'invisible. Chaque idée devient une réalité qui évolue, interagit et marque les esprits – simple, mais marquant.
                            </p>
                        </div>
                        <p className="testimonial">
                            {/* "AIMPIE HAS BEEN EXCEPTIONAL THROUGHOUT OUR JOURNEY. FROM" */}
                            "Simple mais percutante, avec une touche d'élégance."
                        </p>
                    </div>
                </div>

                {/* Collaboration Container */}
                <div ref={collaborationRef} className="collaboration-container">
                    <div className="collaboration-box" style={{position: "relative"}}>
                        <h1 className="title">LET'S COLLABORATE</h1>
                        <p className="subtitle">
                            Envie de discuter d'un projet ou juste de dire bonjour ? Mon inbox est toujours ouverte.
                        </p>
                        <a href="https://github.com/Julio23F" target="_blank" rel="noopener noreferrer">
                            <button className="cta-button" style={{ position: "absolute", bottom: "75px" }}>
                                <i className="fab fa-github icon"></i> Github
                            </button>
                        </a>

                    </div>
                    
                    <div className="contact-box">
                        <p className="contact-name"><span className="green">FARALAHY</span> Julio</p>

                        <div className="profiles">
                            <div className="profile">
                                <img src={getImageUrl("pdp")} alt="pdp" className="avatar"/>
                            </div>
                        </div>
                        <div className="contact-container">
                            {contactList.map((contact, index) => (
                                <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" className="contact-item">
                                    <i className={`${contact.icon}`}></i>
                                    <span>{contact.name}</span>
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="footer-container">
            <span class="email">juliofaralahy23@gmail.com</span>
            <div class="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">Dribbble</a>
                <a href="#">Instagram</a>
            </div>
        </div>
    </>
    );
};

export default InfoContact;
