import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const Projects = () => {
    const baseLinkURL = "https://github.com/Julio23F/";
    const projects = [
        { name: "youstudy", description: "Description du projet youstudy", link: "domestiK", backgroundColor: "#d2ccf2" },
        { name: "msos", description: "Description du projet msos", link: "domestiK", backgroundColor: "#f06d72" },
        { name: "myclasse", description: "Description du projet myclasse", link: "domestiK", backgroundColor: "#3e9998" },
        { name: "myclasse1", description: "Description du projet myclasse1", link: "domestiK", backgroundColor: "#072228" },
        { name: "portfolio", description: "Description du projet portfolio", link: "domestiK", backgroundColor: "#0f0a26" },
    ];

    const containerRef = useRef(null);
    const cardsRef = useRef([]);
    const [activeIndex, setActiveIndex] = useState();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const lenis = new Lenis({ smooth: true, lerp: 0.1, wheelMultiplier: 1, infinite: false });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        cardsRef.current.forEach((card, index) => {
            ScrollTrigger.create({
                markers: true,
                trigger: card,
                start: `${index * 280}px center`,
                end: `+=200`,
                onEnter: () => setActiveIndex(index + 1),
                onEnterBack: () => setActiveIndex(index + 1),
            });
            gsap.fromTo(card, { y: 550, zIndex: projects.length + index }, {
                y: index * 12,
                transform: "scale(1.1)",
                width: `${100 + index * 2}%`,
                marginLeft: `${-index}%`,
                zIndex: projects.length + index,
                scrollTrigger: {
                    markers: true,
                    trigger: containerRef.current,
                    start: `${index * 340}px center`,
                    end: `+=200`,
                    scrub: 1.5,
                },
            });
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    const getImageUrl = (name) => new URL(`../assets/realisations/${name.toLowerCase()}.PNG`, import.meta.url).href;

    return (
        <section id="projects" className="relative min-h-[290vh] flex justify-center mt-[300px]">
            <div ref={containerRef} className="sticky top-[50%] translate-y-[-25%] flex card-project-container">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="card-project z-10 absolute items-center justify-center text-white text-xl font-bold shadow-lg"
                        style={{
                            backgroundColor: project.backgroundColor
                        }}
                    >
                        <div className="relative text-white flex flex-col items-center justify-center py-5">
                            <div className="flex gap-4 mb-4">
                                {["UX/UI", "Dashboard", "Redesign"].map((tag, index) => (
                                    <span key={index} className="px-4 py-1 border border-white/40 rounded-full text-sm font-medium tracking-wide relative">
                                        {tag}
                                        <span className="absolute inset-0 border border-dashed border-white/40 rounded-full"></span>
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-[3rem] font-bold uppercase tracking-wide">{project.name}</h1>
                        </div>
                        <div>
                            <img src={getImageUrl(project.name)} alt={project.name} className="rounded-md" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
