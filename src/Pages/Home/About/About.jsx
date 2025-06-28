import React from "react";

const About = () => {
  return (
    <section className="relative z-10 px-6 md:px-[10%] py-16 bg-slate-950 text-white font-body">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400">
          About Me
        </h2>
        <p className="text-gray-400 mt-2 text-base sm:text-lg max-w-xl mx-auto">
          Who I am and what I love to do
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left image / Optional avatar */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/about-image.png"
            alt="Samiul illustration"
            className="w-72 h-72 object-cover rounded-xl border-4 border-indigo-500 shadow-xl"
          />
        </div>

        {/* Right content */}
        <div className="w-full md:w-2/3 space-y-6 text-gray-300 text-justify">
          <p>
            Hello! I’m Md{" "}
            <span className="text-indigo-400 font-semibold">Samiul</span> Islam, a
            passionate{" "}
            <span className="text-indigo-300">MERN Stack Developer</span> from
            Bangladesh. My journey started with curiosity and has grown into a
            deep love for crafting modern, efficient, and beautiful web
            applications.
          </p>
          <p>
            I specialize in building full-stack solutions using MongoDB,
            Express, React, and Node.js. I enjoy solving problems, learning new
            technologies, and turning creative ideas into reality through clean
            and optimized code.
          </p>
          <p>
            Beyond coding, I’m interested in design, writing clean
            documentation, and continuously improving user experiences. In my
            free time, I love reading, playing sports, and reflecting on how I
            can become better — as a developer and as a human being.
          </p>
          <p className="text-indigo-400 font-medium">
            Let's build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
