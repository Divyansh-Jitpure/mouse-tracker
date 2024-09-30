import React, { useEffect, useRef, useState } from "react";

const CursorTracker = ({ src, prevSize, yOffset }) => {
  const trackRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  useEffect(() => {
    const tracker = trackRef.current;
    if (!tracker) return;

    const animateTracker = () => {
      tracker.style.left = coords.x + 10 + "px";
      tracker.style.top = coords.y - yOffset + "px";

      requestAnimationFrame(animateTracker);
    };

    animateTracker();
  }, [coords]);

  return (
    <div
      ref={trackRef}
      className="absolute pointer-events-none   backdrop-blur-md bg-slate-500/30 rounded-lg"
    >
      <img
        src={src}
        alt="ProjectPreview"
        className={`w-[${prevSize}px] p-[10px] `}
      />
    </div>
  );
};

export default CursorTracker;
