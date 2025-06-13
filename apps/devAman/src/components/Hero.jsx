import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerformanceMonitor, OrbitControls } from '@react-three/drei';
import { SRGBColorSpace, ACESFilmicToneMapping } from 'three';
import Model from './Model';
import HeroOverlay from "./HeroOverlay";

const Hero = ({ onReady, isVisible }) => {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Hide interaction hint after first interaction
  useEffect(() => {
    const hideHint = () => setShowInteractionHint(false);

    window.addEventListener('click', hideHint, { once: true });
    window.addEventListener('touchstart', hideHint, { once: true });

    return () => {
      window.removeEventListener('click', hideHint);
      window.removeEventListener('touchstart', hideHint);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`h-screen w-full relative transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <Canvas
        dpr={[1, 2]}
        gl={{
          toneMapping: ACESFilmicToneMapping,
          outputColorSpace: SRGBColorSpace,
        }}
        camera={{ fov: 45, near: 0.1, far: 100, position: [3, 2, 5] }}
        style={{
          pointerEvents: 'auto',
          background: 'transparent'
        }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight intensity={0.8} position={[3, 5, 2]} castShadow />
        <Environment preset="studio" />

        <Model onLoaded={onReady} isVisible={isVisible} />

        {/* Only enable OrbitControls on desktop */}
        {!isMobile && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            domElement={undefined}
          />
        )}
      </Canvas>
      <div className="absolute inset-0 pointer-events-none" />
      <HeroOverlay />
    </div>
  );
};

export default Hero;