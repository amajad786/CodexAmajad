import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 bg-[#0d1b2a]/90 backdrop-blur-md shadow-lg px-6 py-1 flex items-center justify-between"
    >
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-39 md:w-40 rounded-full object-cover hover:scale-105 transition-transform"
        />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-lg font-medium">
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            className={({ isActive }) =>
              `relative transition-all duration-300 ${
                isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-300"
              }`
            }
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        ))}
        <a
          href="https://github.com/amajad786/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl px-4 py-2 shadow-md transition-transform transform hover:scale-105"
        >
          Github
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-cyan-400 hover:scale-110 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 right-0 bg-[#0d1b2a]/90 backdrop-blur-md rounded-b-2xl border-t-1 border-gray-200 shadow-xl flex flex-col px-2  gap-4 py-4 text-lg font-medium md:hidden"
          >
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `w-full py-2 px-4 rounded-lg transition-all ${
                    isActive
                      ? "text-cyan-400 bg-cyan-900/40"
                      : "text-gray-300 hover:text-cyan-300 hover:bg-cyan-800/20"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="https://github.com/amajad786/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl px-4 py-2 shadow-md transition-transform transform hover:scale-105"
            >
              Github
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
