import React, { useEffect, useState } from "react";

const Cursor = ({ cursorSrc, yOffset }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999]  w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-slate-700/30 p-2 backdrop-blur-md "
      style={{
        left: `${position.x}px`,
        top: `${position.y - yOffset}px`,
      }}
    >
      <img src={cursorSrc} alt="Cursor Preview" />
    </div>
  );
};

export default Cursor;
