import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const InfoContact = () => {
    const getImageUrl = (name) => new URL(`../assets/images/${name.toLowerCase()}.jpg`, import.meta.url).href;

    const containerRef = useRef(null);
    const collaborationRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({ smooth: true, lerp: 0.1, wheelMultiplier: 1, infinite: false });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        gsap.fromTo(
            ".contact-section",
            { },
            {
                // opacity: 1,
                scrollTrigger: {
                    markers: true,
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
            { backgroundColor: "#1f1634" },
            {
                // backgroundColor: "red",
                scrollTrigger: {
                    markers: true,
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
            { y: 550, position: "absolute", gap: "100px", padding: "40px 0px",  },
            {
                y: 50,
                gap: "10px",
                padding: "40px 40px",
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
        <div className="contact-section relative min-h-[200vh] flex justify-center mt-[300px]">
            <div ref={containerRef} className="sticky top-[50%] translate-y-[-40%] flex contact-section-container">
                {/* Info Contact */}
                <div className="info-contact">
                    <div className="info-contact-container">
                        <div className="info-description">
                            <span className="badge">aim ✶ <span className="highlight">Testimonials</span></span>
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
                            Let's craft a standout web experience together – your success is our aim.
                        </p>
                        <button className="cta-button" style={{position:"absolute", bottom: "75px"}}>
                            <i className={`fab fa-github icon`}></i>Github
                        </button>
                    </div>
                    
                    <div className="contact-box">
                        <p className="contact-text">
                            Catch us on <a href="#">LinkedIn</a>, where every message gets a personal response.
                        </p>
                        <div className="profiles">
                            <div className="profile">
                                <img src={getImageUrl("pdp")} alt="pdp" className="avatar"/>
                                <p className="name"><span className="green">Shahin</span> Azimov</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoContact;
