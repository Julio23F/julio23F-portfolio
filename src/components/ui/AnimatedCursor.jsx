import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import "./AnimatedCursor.css";

const AnimatedCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className={`cursor ${hovered ? "hovered" : ""}`}
      animate={{
        left: cursorPos.x,
        top: cursorPos.y,
        scale: hovered ? 1.5 : 1,
      }}
      transition={{ type: "tween", duration: 0.15 }}
    />
  );
};

export default AnimatedCursor;
