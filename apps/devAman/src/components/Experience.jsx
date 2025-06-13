import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import experiences from '../data/experience.json';

const Experience = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="experience" className="max-w-5xl mx-auto p-6">
      <h2 className="font-orbitron font-bold text-4xl sm:text-5xl text-white mb-12 text-center">
        Experience
      </h2>

      <div className="flex">
        {/* Timeline Dots */}
        <div className="relative w-12 flex flex-col items-center">
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-600" />
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              onFocus={() => setHoveredId(exp.id)}
              onBlur={() => setHoveredId(null)}
              tabIndex={0}
              role="button"
              aria-label={`${exp.role} at ${exp.company}`}
              className={`cursor-pointer w-6 h-6 rounded-full z-10 mb-16 transition-colors duration-300
                ${hoveredId === exp.id ? 'bg-red-700' : 'bg-white'}
              `}
              style={{ marginTop: i === 0 ? 0 : '4rem' }}
            />
          ))}
        </div>

        {/* Experience Cards */}
        <div className="ml-10 flex flex-col justify-center flex-1 space-y-10">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: exp.id * 0.1 }}
              className={`bg-gradient-to-br from-[#1f1f1f] to-black border border-gray-600 p-6 rounded-xl shadow-md cursor-pointer transition-shadow duration-300
                ${hoveredId === exp.id ? 'shadow-[0_0_25px_rgba(160,32,32,0.6)]' : ''}
              `}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              tabIndex={0}
              onFocus={() => setHoveredId(exp.id)}
              onBlur={() => setHoveredId(null)}
              aria-expanded={hoveredId === exp.id}
              aria-controls={`exp-details-${exp.id}`}
            >
              <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
              <p className="italic text-gray-400 mb-1">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-3">{exp.period}</p>

              <AnimatePresence>
                {hoveredId === exp.id && (
                  <motion.div
                    key="details"
                    id={`exp-details-${exp.id}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 text-sm leading-relaxed overflow-hidden"
                  >
                    {Array.isArray(exp.details)
                      ? exp.details.map((line, idx) => <p key={idx} className="mb-1">{line}</p>)
                      : exp.details?.split('\n').map((line, idx) => <p key={idx} className="mb-1">{line}</p>)
                    }
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;