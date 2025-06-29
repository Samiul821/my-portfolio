import React from "react";
import Marquee from "react-fast-marquee";

const Skills = ({ skils = [] }) => {
  const mid = Math.ceil(skils.length / 2);
  const firstLine = skils.slice(0, mid);
  const secondLine = skils.slice(mid);

  return (
    <section data-aos="fade-up"
     data-aos-duration="2000" id="skills" className="bg-slate-950 py-16 px-6 md:px-[10%] text-white font-body">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400">
          My Skills
        </h2>
        <p className="text-gray-400 mt-2 text-base sm:text-lg">
          Tools & Technologies I use
        </p>
      </div>

      {/* 🔹 first line Marquee */}
      <Marquee gradient={false} speed={50}>
        <div className="flex gap-12">
          {[...firstLine, ...firstLine].map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center w-28 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="w-12 h-12 mb-2"
              />
              <h4 className="text-sm font-semibold text-indigo-300">
                {skill.title}
              </h4>
              <p className="text-xs text-gray-400 text-center">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </Marquee>

      {/* 🔹 second line Marquee */}
      <Marquee gradient={false} speed={50} direction="right" className="mt-8">
        <div className="flex gap-12">
          {[...secondLine, ...secondLine].map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center w-28 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="w-12 h-12 mb-2"
              />
              <h4 className="text-sm font-semibold text-indigo-300">
                {skill.title}
              </h4>
              <p className="text-xs text-gray-400 text-center">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Skills;
