import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 200, opacity: 0, zIndex: cardsRef.current.length + index }, 
        {
          y: 0,
          opacity: 1,
          zIndex: cardsRef.current.length + index, 
          scrollTrigger: {
            // markers: true,

            trigger: containerRef.current,
            start: `${index * 100}px center`, 
            end: `+=150`,
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative min-h-[110vh] flex justify-center items-center" style={{marginBottom: "250px"}}>
      <div ref={containerRef} className="sticky top-[50%] translate-y-[-50%] w-[300px] h-[250px]">
        {["#FF6B6B", "#6BFFB6", "#6B8BFF", "#F5A623", "#9B59B6"].map((color, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="absolute w-[300px] h-[250px] flex items-center justify-center text-white text-xl font-bold shadow-lg rounded-xl"
            style={{
              backgroundColor: color,
            }}
          >
            Card {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
