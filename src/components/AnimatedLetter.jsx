import { useState, useEffect } from "react";

const AnimatedLetter = ({ item, index, activeIndex }) => {
  const [styles, setStyles] = useState({});
  const isActive = index === activeIndex;

  // Liste des couleurs possibles
  const colors = [
    '#FFB6C1', // Rose pâle
    '#FF9A8B', // Orange clair
    '#98FB98', // Vert menthe
    '#F9E79F'  // Jaune doux
  ];

  const rotations = [
    'rotate(-20deg)', 
    'rotate(0deg)', 
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
      transform: getRandomRotation(),
      fontVariationSettings: '"wght" 354.078', 
      transition: 'all 0.3s ease-out',
      cursor: "pointer",
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
