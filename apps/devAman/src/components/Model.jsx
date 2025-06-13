import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useGLTF, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Model = ({ onLoaded, isVisible }) => {
    const { scene } = useGLTF('/models/scout_regiment.glb');
    const modelRef = useRef();
    const [scale, setScale] = useState(0.01);
    const [position, setPosition] = useState([0, 0, 0]);
    const [targetRotation, setTargetRotation] = useState([0, 0]);
    const [isInteracting, setIsInteracting] = useState(false);

    // Load callback
    useEffect(() => {
        if (scene && onLoaded) onLoaded();
    }, [scene, onLoaded]);

    // Handle responsive scaling and positioning
    const updateLayout = useCallback(() => {
        const aspect = window.innerWidth / window.innerHeight;
        let newScale = 0.0024;
        let newPos = [0, 0.1, 0];

        if (aspect < 1) {
            newScale = 0.0016;
            newPos = [0, 0.2, 0];
        } else if (aspect < 1.5) {
            newScale = 0.0018;
            newPos = [0, 0.2, 0];
        }

        setScale((prev) => (prev !== newScale ? newScale : prev));
        setPosition((prev) => (JSON.stringify(prev) !== JSON.stringify(newPos) ? newPos : prev));
    }, []);

    useEffect(() => {
        updateLayout();
        window.addEventListener('resize', updateLayout);
        return () => window.removeEventListener('resize', updateLayout);
    }, [updateLayout]);

    // Interaction activation logic
    const isWithinProximity = (x, y) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight * 0.5;
        const radius = Math.min(window.innerWidth, window.innerHeight) * 0.4;
        const dx = x - centerX;
        const dy = y - centerY;
        return dx * dx + dy * dy <= radius * radius;
    };

    const updateTargetRotation = (clientX, clientY) => {
        const x = (clientX / window.innerWidth) * 2 - 1;
        const y = -(clientY / window.innerHeight) * 2 + 1;
        setTargetRotation([x * 0.5, y * 0.5]);
    };

    // Interaction handlers
    useEffect(() => {
        if (!isVisible) return;

        const activateInteraction = (x, y) => {
            if (isWithinProximity(x, y)) {
                setIsInteracting(true);
                setTimeout(() => setIsInteracting(false), 3000);
            }
        };

        const handleInteractionMove = (x, y) => {
            if (isInteracting && isWithinProximity(x, y)) {
                updateTargetRotation(x, y);
            }
        };

        const handleClick = (e) => activateInteraction(e.clientX, e.clientY);
        const handleTouchStart = (e) => {
            if (e.touches.length === 1) {
                const { clientX, clientY } = e.touches[0];
                activateInteraction(clientX, clientY);
            }
        };
        const handleMouseMove = (e) => handleInteractionMove(e.clientX, e.clientY);
        const handleTouchMove = (e) => {
            if (e.touches.length === 1) {
                const { clientX, clientY } = e.touches[0];
                if (isInteracting && isWithinProximity(clientX, clientY)) {
                    e.preventDefault(); // Only prevent scrolling when actively rotating
                    handleInteractionMove(clientX, clientY);
                }
            }
        };

        window.addEventListener('click', handleClick);
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            window.removeEventListener('click', handleClick);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [isVisible, isInteracting]);

    // Smooth rotation toward target
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.x = THREE.MathUtils.lerp(
                modelRef.current.rotation.x,
                -targetRotation[1],
                0.1
            );
            modelRef.current.rotation.y = THREE.MathUtils.lerp(
                modelRef.current.rotation.y,
                targetRotation[0],
                0.1
            );
        }
    });

    return (
        <Center>
            <primitive ref={modelRef} object={scene} scale={scale} position={position} />
        </Center>
    );
};

useGLTF.preload('/models/scout_regiment.glb');
export default Model;
