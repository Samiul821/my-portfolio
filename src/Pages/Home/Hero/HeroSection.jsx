import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import profileImage from "../../../assets/rsz_1image_9.png"
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const changingWords = [
    "MERN Stack Developer",
    "Frontend Developer",
    "React Enthusiast",
    "JavaScript Ninja",
    "Node.js Backend Developer",
    "Passionate Coder",
  ];

  return (
    <section id="home" className="relative min-h-[500px] md:h-[700px] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-[10%] py-16 bg-slate-950 text-white font-body overflow-hidden">
      {/* 🔵 Light Animated BG Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-500 blur-[150px] rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-500 blur-[150px] rounded-full opacity-20 animate-ping" />
      <div className="absolute top-[40%] left-[40%] w-[200px] h-[200px] bg-blue-600 blur-[100px] rounded-full opacity-25 animate-pulse" />

      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6 z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
          Hi, I'm <span className="text-indigo-400">Samiul</span>
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-indigo-300">
          <Typewriter
            words={changingWords}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          Hello! I am Samiul from Bangladesh. Passionate about building modern,
          clean, and scalable web applications.
        </p>

        <div className="flex justify-center md:justify-start gap-6 text-3xl mt-2">
          <a
            href="https://github.com/Samiul821"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/md-samiul-islam890/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/SmSamiul890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Download CV Button */}
        <div className="mt-6">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-xl 
               transition duration-300 transform hover:-translate-y-1 hover:scale-105
               focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50
               active:scale-95 active:bg-indigo-800"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center z-10">
        <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg hover:scale-105 transition duration-300">
          <img
            src={profileImage}
            alt="Samiul's profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
