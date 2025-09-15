import React from "react";
import { motion } from "framer-motion";
import { Code, Laptop, User } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#ACDBFB]/70 via-white to-[#ACDBFB]/40 flex flex-col items-center py-20 px-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold text-gray-800 mb-12 text-center"
      >
        About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
      </motion.h1>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-14 items-center">
        {/* Left Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <img
              src="/me.png"
              alt="Profile"
              className="rounded-2xl shadow-2xl w-80 h-96 object-cover border-4 border-white"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition duration-300"></div>
          </div>
        </motion.div>

        {/* Right Side - About Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-8"
        >
          {/* Who Am I */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <User size={26} className="text-blue-500" /> Who Am I?
            </h2>
            <p className="text-gray-600 leading-relaxed mt-2">
              Hi 👋, I’m <span className="font-bold text-gray-800">Amajad Ansari</span>, a
              passionate{" "}
              <span className="text-blue-600 font-semibold">
                Frontend Developer
              </span>{" "}
              who loves crafting sleek, responsive, and user-friendly web apps. 
              My goal is to turn ideas into reality with{" "}
              <span className="text-purple-600 font-medium">clean code</span> and 
              <span className="text-green-600 font-medium"> modern design</span>.
            </p>
          </div>

          {/* What I Do */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <Laptop size={26} className="text-green-500" /> What I Do?
            </h2>
            <p className="text-gray-600 leading-relaxed mt-2">
              I specialize in <span className="font-semibold text-gray-800">React.js</span> and{" "}
              <span className="font-semibold text-gray-800">TailwindCSS</span> to
              build stunning UIs, powered by{" "}
              <span className="font-semibold text-gray-800">JavaScript</span> &
              <span className="font-semibold text-gray-800"> TypeScript</span>. 
              Currently diving into{" "}
              <span className="font-semibold text-indigo-600">Flutter</span> for
              cross-platform mobile apps 🚀.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <Code size={26} className="text-purple-500" /> Skills
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3">
              {["HTML / CSS", "JavaScript", "TypeScript", "Flutter", "React.js", "Angular", "Git & GitHub"].map(
                (skill, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white shadow-md rounded-xl px-4 py-2 text-center font-medium text-gray-700 cursor-pointer hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition"
                  >
                    {skill}
                  </motion.li>
                )
              )}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
