import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const Projects = () => {
    const baseLinkURL = "https://github.com/Julio23F/";
    const projects = [
        { name: "youstudy", description: "Description du projet youstudy", link: "domestiK" },
        { name: "msos", description: "Description du projet msos", link: "domestiK" },
        { name: "myclasse", description: "Description du projet myclasse", link: "domestiK" },
        { name: "myclasse1", description: "Description du projet myclasse1", link: "domestiK" },
        { name: "portfolio", description: "Description du projet portfolio", link: "domestiK" },
    ];

    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Activation de Lenis pour un scroll fluide
        const lenis = new Lenis({
            smooth: true,
            lerp: 0.1, // Ajuste la fluidité
            wheelMultiplier: 1,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 200, opacity: 0, zIndex: projects.length + index },
                {
                    y: index * 3,
                    transform: "scale(1.1)",
                    width: `${100 + index * 2}%`,
                    marginLeft: `${-index}%`,
                    opacity: 1,
                    zIndex: projects.length + index,
                    scrollTrigger: {
                        markers: true,
                        trigger: containerRef.current,
                        start: `${index * 300}px center`,
                        end: `+=200`,
                        scrub: 1.5,
                    },
                }
            );
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    const getImageUrl = (name) => {
        return new URL(`../assets/realisations/${name.toLowerCase()}.PNG`, import.meta.url).href;
    };

    return (
        <div className="relative min-h-[250vh] flex justify-center mt-[300px]">
            <div ref={containerRef} className="sticky top-[50%] translate-y-[-60%] card-project-container">
                {projects.map((project, index) => (
                    <div
                    key={index}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="card-project absolute h-[350px] flex items-center justify-center text-white text-xl font-bold shadow-lg"
                    style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        border: "solid 1px rgba(226, 226, 226, 0.08)",
                        opacity: 0.5,
                        backgroundColor: "#2c2c2e",
                        backdropFilter: "blur(50px)",
                        zIndex: 500
                    }}
                >
                    <img src={getImageUrl(project.name)} alt={project.name} />
                    <div
                      className="card-description"
                    >
                      <p style={{marginBottom: "40px"}}>{project.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, nisi? Enim, perspiciatis quod iure eaque modi culpa voluptatum expedita quasi.</p>
                      <button className="custom-button" style={{ alignSelf: "flex-end", position: "absolute", right: "20px", bottom: "25px" }}>
                          Afficher le projet
                      </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;