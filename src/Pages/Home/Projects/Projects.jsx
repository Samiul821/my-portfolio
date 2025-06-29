import React from "react";
import { Link } from "react-router-dom";
import projects from "../../../assets/projects.json";

const Projects = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="3000"
      id="projects"
      className="bg-slate-950 py-16 px-6 md:px-[10%] text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400">
          Projects
        </h2>
        <p className="text-gray-400 mt-2 text-base sm:text-lg">
          Showcasing my best works
        </p>
      </div>

      <div className="space-y-10">
        {projects.map((project) => (
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            key={project.id}
            className="bg-slate-900 rounded-xl shadow-xl p-6 lg:p-12 flex flex-col lg:flex-row space-x-12 gap-6 hover:shadow-indigo-600/10 transition
             lg:min-h-[340px]"
          >
            {/* Image */}
            <div className="w-full lg:w-5/12">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto lg:h-full object-cover rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-7/12 space-y-4">
              <h3 className="text-2xl font-bold text-indigo-300">
                {project.name}
              </h3>
              <p className="text-gray-300 text-sm">{project.description}</p>

              <ul className="list-disc ml-5 text-gray-400 text-sm space-y-1">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-indigo-700 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-md text-sm transition"
                >
                  Live Site
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-1.5 rounded-md text-sm transition"
                >
                  GitHub
                </a>
                <Link
                  to={`/projects/${project.id}`}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-md text-sm transition"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
