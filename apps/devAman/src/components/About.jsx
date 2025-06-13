import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <h2 className="font-orbitron font-bold text-4xl sm:text-5xl text-white mb-12 text-center">
        About
      </h2>

      <div className="flex flex-col md:flex-row justify-around items-center gap-10">
        <div className="w-40 h-40 md:w-60 md:h-60">
          <motion.img
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src="/static/scout_emblem.png"
            alt="Scout Regiment Emblem"
            className="w-full h-full object-contain shadow-md"
            draggable={false}
          />
        </div>

        <motion.div
          className="flex flex-col gap-6 w-full max-w-2xl cursor-pointer"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97, rotateZ: -1 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            className="bg-gradient-to-br from-[#1f1f1f] to-black p-7 rounded-xl shadow-md"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-[var(--font-header-Orbitron)] text-white mb-4">
              To All Subjects of Ymir,
            </h2>
            <div className="text-gray-300 font-[var(--font-header-bebas)] font-medium text-base sm:text-lg leading-relaxed">
              I'm Aman — a full-stack developer passionate about building impactful solutions.
              Fueled by the mindset of <strong className='italic text-red-700'>Kaizen</strong> — <span className='italic'>
                'A striver who grows daily to chase freedom through code'.
              </span>
              <Typewriter
                options={{
                  strings: [
                    "I craft cross-platform, responsive, & user-friendly frontend apps.",
                    "I craft from monolithic to microservices for scalability.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 30,
                  deleteSpeed: 10,
                }}
              />

            </div>
          </motion.div>
        </motion.div >
      </div >
    </section >
  );
}
