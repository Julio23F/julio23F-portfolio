import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = ["#about", "#projects", "#infoContact"];

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
    setIsOpen(false); // Ferme le menu après un clic

    const targetElement = document.querySelector(target);
    if (targetElement) {
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
    <header className="relative flex items-center justify-between p-4 bg-black text-white" style={{ zIndex: 5 }}>
      <div className="text-xl font-bold tracking-wide">JULIO²³ᶠ</div>

      {/* Icône burger pour mobile */}
      <button
        className="lg:hidden text-white focus:outline-none focus:ring-0 hover:border-transparent z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Fond semi-transparent */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} // Ferme le menu en cliquant à l'extérieur
          />
        )}
      </AnimatePresence>

      {/* Navigation principale (toujours visible sur grand écran) */}
      <nav className="hidden lg:flex space-x-6">
        {["#about", "#projects", "#infoContact"].map((section, index) => (
          <a
            key={index}
            href={section}
            className={`nav-link ${activeSection === section ? "active" : ""}`}
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

      {/* Navigation mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="absolute top-16 left-0 w-full bg-black flex flex-col items-center py-6 space-y-4 z-50 lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {["#about", "#projects", "#infoContact"].map((section, index) => (
              <a
                key={index}
                href={section}
                className={`nav-link ${activeSection === section ? "active" : ""}`}
                onClick={(e) => handleClick(e, section)}
              >
                {section === "#about"
                  ? "À propos"
                  : section === "#projects"
                  ? "Réalisations"
                  : "Contact"}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
