import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSentence from "../components/AnimatedSentence";
import SparklesCore from "../components/ui/SparklesCore";
import About from "./About";
import Projects from "./Projects";
import Lenis from "@studio-freight/lenis"; 
import InfoContact from "./InfoContact";
import Experiences from "./Experiences";
import Navbar from "../components/Navbar";
import AnimatedButton from "../components/AnimatedButton"
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    useEffect(() => {
        // Activation de Lenis pour un scroll fluide
        const lenis = new Lenis({
            smooth: true,
            lerp: 0.1, // Ajuste la fluidité (0.1 = très fluide)
            wheelMultiplier: 1, // Sensibilité du scroll
            infinite: false, // Désactiver le scroll infini
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Animation GSAP de la section .top
        gsap.to(".top", {
            borderRadius: "0 0 50px 50px",
            transform: "scale(0.95)",  
            duration: 1, 
            ease: "power2.inOut",
            yPercent: "-3",
            scrollTrigger: {
                scrub: 1.5, 
                trigger: ".top",  
                start: "50% 30%", 
                end: "bottom 30%",
                // markers: true, 
            }
        });

        // Afficher top-nav à la fin de ABOUT
        gsap.fromTo(".top-nav", 
            { opacity: 0},
            {
                opacity: 1,
                transform: "scale(0.95)",  
                duration: 1, 
                ease: "power2.inOut",
                yPercent: "-3",
                scrollTrigger: {
                    scrub: 1.5, 
                    trigger: ".top-nav",  
                    start: "50% 15%", 
                    end: "bottom 30%",
                    // markers: true, 
                }
        });

        // Faire scroller top-nav juste avant InfoContact
        gsap.fromTo(".top", 
            { opacity: 1},
            {
                opacity: 0,
                transform: "scale(0.95)",  
                duration: 1, 
                ease: "power2.inOut",
                scrollTrigger: {
                    scrub: 1.5, 
                    trigger: ".info-contact", 
                    toggleActions: "none none none none",
                    start: "23% 35%",
                    end: "35% 55%",
                    // markers: true,
                }
        });
        // Afficher top-nav juste avant InfoContact
        // gsap.fromTo(".top-nav", 
        //     { opacity: 0 },
        //     {
        //         opacity: 1,
        //         // duration: 1, 
        //         // ease: "power2.inOut",
        //         yPercent: "-3",
        //         scrollTrigger: {
        //             scrub: 1.5, 
        //             trigger: ".info-contact", 
        //             toggleActions: "none none none none",
        //             start: "15% 50%",
        //             end: "35% 70%",
        //             markers: true,
        //         }
        //     }
        // );

        

        return () => {
            lenis.destroy();
        };

    }, []);

    return (
        <div style={{ backgroundColor: "#1c1c1c" }}>
        {/* <div style={{ backgroundColor: "red" }}> */}
            {/* <AnimatedCursor/> */}
            <main className="home-container flex flex-col items-center justify-center text-center py-24 px-4">
                <div className="absolute inset-0 w-full h-full z-0">
                    <SparklesCore background="black" />
                </div>
                <AnimatedSentence text={["Let's build", "your vision"]} />
                <p className="mt-4 text-lg text-gray-300">
                    <span className="text-white">Transforming ideas into realities and visions into achievements</span> — I’m your man
                </p>
                <AnimatedButton content="Download CV"/>
            </main>
            <div className="section top  sticky top-[-152%]" style={{display: "block", zIndex: 10}}>
                <About />
                <div className="top-nav">
                    <Navbar/>
                </div>
            </div>
            <div className="section middle" style={{zIndex: 0}}>
                <Projects />
            </div>
            {/* <Experiences /> */}
            
            <InfoContact />
        </div>
    );
};

export default Home;
