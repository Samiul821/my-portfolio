import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import projects from "../../../../public/projects.json";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  const particlesInit = async (main) => {
    // you can initialize custom shapes or presets here
    await loadFull(main);
  };

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white font-body px-6 md:px-[10%]"
      >
        <h2 className="text-3xl font-bold text-indigo-400 mb-4">
          Project not found
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition transform hover:scale-105 shadow-lg"
        >
          Go Back
        </button>
      </motion.div>
    );
  }

  return (
    <section
      className="min-h-screen relative text-white font-body px-6 md:px-[10%] py-16 overflow-hidden
             bg-gradient-to-r from-gray-950 via-indigo-950 to-gray-950"
    >
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: "#000000",
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#8b5cf6" },
            links: {
              color: "#8b5cf6",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: { enable: false },
            move: {
              directions: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Content & motion animations here (same as before) */}
      {/* ... তোমার আগের কোড রাখো ... */}

      {/* উদাহরণ: */}
      <motion.button
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mb-8 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md transition shadow-lg"
      >
        ← Back
      </motion.button>

      <motion.div
        className="flex flex-col md:flex-row gap-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left: Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={project.image}
            alt={project.name}
            className="rounded-lg shadow-lg w-full object-cover max-h-[400px]"
          />
        </motion.div>

        {/* Right: Details */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-indigo-400">{project.name}</h1>

          <p className="text-gray-300 text-lg">{project.description}</p>

          {/* Stack */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">
              Technology Stack
            </h3>
            <ul className="flex flex-wrap gap-3">
              {project.stack.map((tech, idx) => (
                <li
                  key={idx}
                  className="bg-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">
              Features
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">
              Challenges
            </h3>
            <p className="text-gray-400">{project.challenges}</p>
          </div>

          {/* Improvements */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">
              Potential Improvements
            </h3>
            <p className="text-gray-400">{project.improvements}</p>
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md transition shadow-lg"
            >
              Live Demo
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md transition shadow-lg"
            >
              GitHub Repo
            </motion.a>
            
            <Link
              to="/"
              className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md transition shadow-lg"
            >
              Back to Projects
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectDetails;
