import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-6 px-4 md:px-[10%] text-center mt-12 space-y-4">
      {/* Logo centered */}
      <div
        className="flex justify-center"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <a
          href="#"
          className="flex items-center gap-1 text-3xl font-extrabold font-sans select-none"
          aria-label="Go to home"
        >
          <span className="text-white tracking-tight drop-shadow-md">&lt;</span>

          <span
            className="text-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold"
            style={{ letterSpacing: "-0.04em" }}
          >
            samiul
          </span>

          <span
            className="text-gradient bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold"
            style={{ letterSpacing: "-0.04em" }}
          >
            .dev
          </span>

          <span className="text-white tracking-tight drop-shadow-md">
            /&gt;
          </span>
        </a>
      </div>

      {/* Icons */}
      <div className="flex justify-center gap-6 text-xl">
        <a
          href="https://github.com/Samiul821"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/samiul-islam-40942a34a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/8801330624539"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Footer text */}
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Md Samiul. All rights reserved.
      </p>
      <p className="text-xs">
        Designed & built with 💙 using React & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
