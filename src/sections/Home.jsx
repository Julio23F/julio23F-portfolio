import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSentence from "../components/AnimatedSentence";
import SparklesCore from "../components/ui/SparklesCore";
import About from "./About";
import Projects from "./Projects";
import Lenis from "@studio-freight/lenis"; // Import de Lenis

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
            scaleX: 0.95,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                scrub: 1.5,
                trigger: ".top",
                start: "80% 30%",
                end: "bottom 30%",
            }
        });

        return () => {
            lenis.destroy(); // Nettoyage du scroll lors du démontage du composant
        };

    }, []);

    return (
        <div style={{ backgroundColor: "#1c1c1c" }}>
            <main className="home-container flex flex-col items-center justify-center text-center py-24 px-4">
                <div className="absolute inset-0 w-full h-full z-0">
                    <SparklesCore background="black" />
                </div>
                <AnimatedSentence text={["Let's build", "your vision"]} />
                <p className="mt-4 text-lg text-gray-300">
                    <span className="text-white">Transforming ideas into realities and visions into achievements</span> — I’m your man
                </p>
                <button className="mt-8 bg-green-500 text-black font-bold px-6 py-3 rounded-full hover:bg-green-600 hover:border-none focus:outline-none">
                    Download CV
                </button>
            </main>
            <div className="section top">
                <About />
            </div>
            <div className="section middle">
                <Projects />
            </div>
        </div>
    );
};

export default Home;
