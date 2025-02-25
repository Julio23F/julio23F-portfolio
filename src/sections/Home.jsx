import { useState, useEffect } from "react";
import AnimatedSentence from "../components/AnimatedSentence";
import SparklesCore from "../components/ui/SparklesCore";
import About from "./About";
import Projects from "./Projects";
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";



const Home = () => {
    gsap.registerPlugin(ScrollTrigger);
    const section1 = document.querySelector(".top");

    if (section1) {
        gsap.to(section1, {
            borderRadius: "0 0 50px 50px",
            transform: "scaleX(0.95)", // Réduit uniquement la largeur visuelle
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                scrub: 1,
                markers: true,
                trigger: section1,
                start: "70% 30%",
                end: "bottom 30%",
            }
        });
    }
    else {
        console.warn('Élément ".top" introuvable.');
    }
    
    return (
        <>
            <main className="home-container flex flex-col items-center justify-center text-center py-24 px-4">
                
                <div className="absolute inset-0 w-full h-full z-0">
                    <SparklesCore background="black" />
                </div>
                <AnimatedSentence
                    text={["Let's build", "your vision"]}
                />
                <p className="mt-4 text-lg text-gray-300">
                    <span className="text-white">Transforming ideas into realities and visions into achievements</span> — I’m your man
                </p>
                <button className="mt-8 bg-green-500 text-black font-bold px-6 py-3 rounded-full hover:bg-green-600 hover:border-none focus:outline-none">
                    Download CV
                </button>
                <div className="section top">
                    <About />
                </div>
                <div className="section middle">
                    <Projects />
                </div>

            </main>
        </>
    );
};

export default Home;
