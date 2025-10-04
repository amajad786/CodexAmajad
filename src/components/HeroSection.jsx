import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function HeroSection() {
 const navigate = useNavigate();
  const phone = "+919695345078"; // replace with target number (country code + number, but WITHOUT +)
  const message = "Hello! I want to know about."; // custom message

  const openWhatsApp = () => {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encoded}`;
    // open in new tab/window safely
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const texts = [
    "Frontend Developer",
    "React.js Developer",
    "Angular.js Developer",
    "Creative Web Designer",
    "Responsive Design Expert",
    "Freelancer",
   "Full Stack Developer"
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 50 : 120
    );

    if (!reverse && subIndex === texts[index].length + 1) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="relative bg-gradient-to-br from-[#ACDBFB]/60 via-white to-white md:min-h-screen flex flex-col-reverse sm:flex-row items-center px-4 sm:px-12 py-20 gap-8 sm:gap-12 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-bounce"></div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6 text-center sm:text-left z-10"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Amajad Ansari
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl">
          A passionate frontend developer who loves crafting{" "}
          <span className="font-semibold text-cyan-600">modern</span>,{" "}
          <span className="font-semibold text-cyan-600">responsive</span>, and{" "}
          <span className="font-semibold text-cyan-600">user-friendly</span> web
          interfaces.
        </p>

        {/* Typing Animation */}
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-cyan-700">
          {texts[index].substring(0, subIndex)}
          <span className="border-r-2 border-cyan-700 animate-pulse ml-1"></span>
        </h2>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center sm:justify-start mt-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            onClick={()=>navigate("/projects")}
            className="cursor-pointer px-5 py-2 rounded-full bg-cyan-600 text-white font-semibold shadow-md hover:bg-cyan-700 transition"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            onClick={openWhatsApp}
            className="cursor-pointer px-5 py-2 rounded-full bg-white border border-cyan-600 text-cyan-600 font-semibold shadow-md hover:bg-cyan-50 transition"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center sm:justify-end z-10"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
          <img
            src="/me.png"
            alt="Smart Coder"
            className="relative h-56 w-56 sm:h-80 sm:w-80 md:h-96 md:w-96 shadow-2xl rounded-full object-cover border-4 border-white"
          />
        </div>
      </motion.div>
    </div>
  );
}
