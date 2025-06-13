import React, { useState, useEffect } from "react";
import useMobile from "../hooks/useMobile";

export default function HeroOverlay() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const isMobile = useMobile();
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      setTilt({ x, y });
    };

    // Only apply tilt effect on desktop
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  const transformStyle = {
    transform: `
      perspective(800px)
      rotateX(${isMobile ? 0 : tilt.y * 10}deg)
      rotateY(${isMobile ? 0 : tilt.x * 10}deg)
      translateZ(30px)
    `,
  };

  return (
    <div
      className={`absolute left-1/2 transform -translate-x-1/2
             max-w-xs sm:max-w-md md:max-w-lg px-4 text-center text-[var(--color-text-heading)] 
             select-none pointer-events-none
             ${isMobile ? 'bottom-16' : 'bottom-8'}`} // Higher on mobile
      style={transformStyle}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-2 font-orbitron drop-shadow-lg whitespace-nowrap sm:whitespace-normal">
        Welcome to <span className="text-red-700">devAman</span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg mb-5 font-bebas font-semibold tracking-wide drop-shadow-md">
        For the Glory of Humanity
      </p>
      <button
        className={`pointer-events-auto cursor-pointer px-5 py-2.5 rounded-full text-white font-semibold text-sm sm:text-base active:scale-[0.95] transition-colors
    ${isMobile ? 'bg-red-700' : 'hover:bg-red-700'}`}
        onClick={() => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Explore My Journey →
      </button>
    </div >
  );
}