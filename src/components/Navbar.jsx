import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["#about", "#projects", "#infoContact"];
    // Pour l'effet selectionner l'item du nav correspondant
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => setActiveSection(section),
        onEnterBack: () => setActiveSection(section),
      });
    });
  }, []);

  const handleClick = (e, target) => {
    e.preventDefault();

    const targetElement = document.querySelector(target);
    if (targetElement) {
      // Décalage pour éviter les conflits avec ScrollTrigger
      const offset = -300; 
      const targetPosition = targetElement.offsetTop - offset;

      gsap.to(window, {
        duration: 1,
        scrollTo: targetPosition,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <header className="relative flex items-center p-4" style={{ zIndex: 5 }}>
      <div className="text-xl font-bold tracking-wide">JULIO²³ᶠ</div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <nav>
          {["#about", "#projects", "#infoContact"].map((section, index) => (
            <a
              key={index}
              href={section}
              className={`text-gray-300 hover:text-white nav-link ${
                activeSection === section ? "active" : ""
              }`}
              onClick={(e) => handleClick(e, section)}
            >
              {section === "#about"
                ? "À propos"
                : section === "#projects"
                ? "Réalisations"
                : "Contact"}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
