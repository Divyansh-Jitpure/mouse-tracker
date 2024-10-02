import React, { useState } from "react";
import Cursor from "./Cursor";

const HoverComp = ({ src, y, txt }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-52 h-52 bg-cyan-600 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && <Cursor cursorSrc={src} yOffset={y} />}
      <p className="text-center text-2xl font-bold">{txt}</p>
    </div>
  );
};

export default HoverComp;
