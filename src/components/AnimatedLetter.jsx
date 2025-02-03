import { useState } from "react";

const AnimatedLetter = ({ item }) => {
  const [hoverColor, setHoverColor] = useState('');
  const [rotation, setRotation] = useState('');

  // Liste des 4 couleurs possibles
  const colors = [
    '#FFB6C1', // Rose pâle
    '#FF9A8B', // Orange clair
    '#98FB98', // Vert menthe
    '#F9E79F'  // Jaune doux
  ];

  const rotations = [
    'rotate(-10deg)', 'rotate(-5deg)', 'rotate(0deg)', 
    'rotate(5deg)', 'rotate(10deg)'
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomRotation = () => {
    return rotations[Math.floor(Math.random() * rotations.length)];
  };

  return (
    <div
      className="animated-letter"
      onMouseEnter={() => {
        setHoverColor(getRandomColor());
        setRotation(getRandomRotation());
      }}
      onMouseLeave={() => {
        setHoverColor('');
        setRotation('');
      }}
      style={{
        color: hoverColor,
        transform: rotation,  
      }}
    >
      {item === " " ? "\u00A0" : item}
    </div>
  );
};

export default AnimatedLetter;
