import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect } from "react";

const Loader = ({ progress }) => {
  const progressMotion = useMotionValue(0);
  const smoothProgress = useSpring(progressMotion, {
    stiffness: 80,
    damping: 15,
    mass: 1,
  });

  const progressWidth = useTransform(smoothProgress, (val) => `${val.toFixed(0)}%`);

  useEffect(() => {
    const clamped = Math.max(0, Math.min(100, progress || 0));
    progressMotion.set(clamped);
  }, [progress]);

  return (
    <motion.div className="h-screen min-h-[500px] w-full flex flex-col items-center justify-center text-white bg-black px-4">
      <motion.img
        src="static/logo.png"
        alt="Loading"
        animate={{ opacity: 1, scale: 1, rotate: [-30, 30, 0] }}
        transition={{ duration: 2 }}
        className="mb-2 md:mb-4 lg:mb-8 rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 border-4 border-[var(--color-border-gray)]"
      />

      <motion.p
        className="mb-4 font-[var(--font-header-orbitron)] text-[var(--color-text-heading)] font-semibold text-2xl text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
      >
        dev
        <motion.span
          animate={{ color: ['#ffffff', '#dc143c'] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
          className="inline-block"
        >
          Aman
        </motion.span>
      </motion.p>

      <div className="mb-2 md:mb-2 lg:mb-4 h-2 w-32 sm:w-48 md:w-64 lg:w-80 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[var(--color-accent-red)]"
          style={{ width: progressWidth }}
        />
      </div>

      <motion.p
        className="italic font-[var(--font-body)] text-[var(--color-accent-red)] font-semibold text-md text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
      >
        心臓を捧げよ .
      </motion.p>
    </motion.div>
  );
};

export default Loader;
