// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-slate-900 text-white md:px-[5%] py-6 px-4 w-full shadow-md fixed z-50">
      <div className=" flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-1 text-3xl font-extrabold font-sans select-none"
          aria-label="Go to home"
        >
          <span className="text-white tracking-tight drop-shadow-md">&lt;</span>

          <span
            className="text-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500
               bg-clip-text text-transparent font-semibold"
            style={{ letterSpacing: "-0.04em" }}
          >
            samiul
          </span>

          <span
            className="text-gradient bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500
               bg-clip-text text-transparent font-semibold"
            style={{ letterSpacing: "-0.04em" }}
          >
            .dev
          </span>

          <span className="text-white tracking-tight drop-shadow-md">
            /&gt;
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-8 flex-1">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-400 border-b-2 border-indigo-400 pb-1"
                  : "hover:text-indigo-300 transition"
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            download
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 px-6 bg-slate-800 py-4 rounded-lg">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-400 font-semibold"
                    : "hover:text-indigo-300"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
          {/* Mobile Resume Button */}
          <li>
            <a
              href="/resume.pdf"
              download
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition w-full text-center"
            >
              Download CV
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
