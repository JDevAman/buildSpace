import React, { useState, useRef } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import skillsData from '../data/skills.json';
import Modal from './Modal';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const chartRef = useRef(null);

  const openModal = (skill) => {
    setActiveSkill(skill);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveSkill(null);
    setModalOpen(false);
  };

  const data = {
    labels: skillsData.map((s) => s.skill),
    datasets: [
      {
        label: 'Skill Proficiency',
        data: skillsData.map((s) => s.value),
        backgroundColor: 'rgba(220,38,38,0.2)',
        borderColor: 'rgba(220,38,38,1)',
        borderWidth: 2,
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: 'rgba(220,38,38,1)',
        pointHitRadius: 20,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      r: {
        min: 0,
        max: 100,
        angleLines: { color: '#4B5563' },
        grid: { color: '#374151' },
        pointLabels: {
          color: '#E5E7EB',
          font: { size: 14 },
        },
        ticks: {
          color: '#9CA3AF',
          backdropColor: 'transparent',
          stepSize: 25,
          z: 1,
          showLabelBackdrop: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => {
            const skillName = context.label;
            const score = context.raw;
            return `${skillName}: ${score} / 100`;
          },
        },
      },
    },
    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
    onHover: (event, chartElement) => {
      const target = event.native?.target || event.target;
      if (chartElement.length > 0) {
        target.style.cursor = 'pointer';
      } else {
        target.style.cursor = 'default';
      }
    }
  };

  const handleChartClick = (event) => {
    const chart = chartRef.current;
    if (!chart) return;

    const points = chart.getElementsAtEventForMode(
      event.nativeEvent,
      'nearest',
      { intersect: true },
      false
    );
    if (points.length) {
      const index = points[0].index;
      openModal(skillsData[index]);
    }
  };

  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 py-12 text-white">
      <h2 className="font-orbitron font-bold text-4xl sm:text-5xl text-white mb-12 text-center">
        Skills
      </h2>
      <div className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl aspect-square bg-gradient-to-br from-[#1f1f1f] to-black p-4 rounded-xl border border-gray-600 shadow-lg">
        <Radar ref={chartRef} data={data} options={options} onClick={handleChartClick} />
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal} title={activeSkill?.skill}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {activeSkill?.description.split(',').map((tech, i) => (
            <div
              key={i}
              className="bg-[#0A0B0B] text-white p-3 rounded-lg text-sm text-center
                         hover:bg-red-600 transition-all duration-300 cursor-pointer shadow-sm"
            >
              {tech.trim()}
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
};

export default Skills;
