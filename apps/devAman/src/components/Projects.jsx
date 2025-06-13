import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-black text-white">
      <h2 className="font-orbitron font-bold text-4xl sm:text-5xl text-white mb-12 text-center">Projects</h2>
      <Swiper
        modules={[Pagination, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        className="max-w-6xl custom-swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className="p-2 flex justify-center color-white"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="bg-gradient-to-br from-[#1f1f1f] to-black rounded-2xl overflow-hidden shadow-xl border border-gray-700 w-full"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <ul className="text-gray-300 mb-4 list-disc list-inside text-sm space-y-1">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-red-700 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm font-semibold">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:underline"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:underline"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-8"></div>
    </section>
  );
};

export default Projects;
