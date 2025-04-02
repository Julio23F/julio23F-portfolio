import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedLetter = ({ item, index, activeIndex }) => {
  const [styles, setStyles] = useState({});
  const isActive = index === activeIndex;

  const colors = ["#FFB6C1", "#FF9A8B", "#c1ed42", "#F9E79F"];
  const rotations = ["rotate(-20deg)", "rotate(-10deg)", "rotate(10deg)", "rotate(20deg)"];

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
  const getRandomRotation = () => rotations[Math.floor(Math.random() * rotations.length)];

  const getRandomStyle = () => ({
    color: getRandomColor(),
    transform: `${getRandomRotation()} scale(1.5)`,
    fontVariationSettings: '"wght" 800',
    transition: "transform 0.3s ease-out, color 0.3s ease-out",
    cursor: "pointer",
    display: "inline-flex",
    zIndex: "5",
  });

  useEffect(() => {
    if (isActive) {
      setStyles(getRandomStyle());
    } else {
      setStyles({ transform: "scale(1)", transition: "transform 0.3s ease-out, color 0.3s ease-out" });
    }
  }, [isActive]);

  const handleMouseEnter = () => {setStyles(getRandomStyle())};
  // const handleMouseLeave = () => setStyles({});
  const handleMouseLeave = () => setStyles({ transform: "scale(1)", transition: "transform , color" });

  return (
    <motion.span
      className="animated-letter"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, ...styles  }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{ display: "inline-block"}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item === " " ? "\u00A0" : item}
    </motion.span>
  );
};

export default AnimatedLetter;
