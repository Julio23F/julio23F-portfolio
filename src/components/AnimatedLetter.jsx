import { useState, useEffect } from "react";

const AnimatedLetter = ({ item, index, activeIndex }) => {
  const [styles, setStyles] = useState({});
  const isActive = index === activeIndex;

  // Liste des couleurs possibles
  const colors = [
    '#FFB6C1', // Rose
    '#FF9A8B', // Orange 
    '#c1ed42', // Vert 
    '#F9E79F'  // Jaune 
  ];

  const rotations = [
    'rotate(-20deg)', 
    'rotate(-10deg)', 
    // 'rotate(0deg)', 
    'rotate(10deg)',
    'rotate(20deg)',
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomRotation = () => {
    return rotations[Math.floor(Math.random() * rotations.length)];
  };

  const getRandomStyle = () => {
    return {
      color: getRandomColor(),
      transform: `${getRandomRotation()} scale(1.5)`, 
      fontVariationSettings: '"wght" 1',
      transition: 'transform 0.3s ease-out, color 0.3s ease-out',
      cursor: "pointer",
      display: "inline-flex",
      zIndex: "5",
    };
  };

  useEffect(() => {
    if (isActive) {
      setStyles(getRandomStyle());
    } else {
      setStyles({}); 
    }
  }, [isActive]);

  const handleMouseEnter = () => {
    setStyles(getRandomStyle());
  };

  const handleMouseLeave = () => {
    setStyles({});
  };

  return (
    <span
      className="animated-letter"
      style={{
        display: 'inline-block',
        ...styles
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item === " " ? "\u00A0" : item}
    </span>
  );
};

export default AnimatedLetter;
