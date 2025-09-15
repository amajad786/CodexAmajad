import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Introduce() {
  return (
    <section
      className="relative bg-gradient-to-br from-white via-white to-[#E6F7FF] py-20 px-6 sm:px-12 overflow-hidden"
      id="about"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-20 left-10 w-56 h-56 bg-cyan-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-bounce"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              LET ME{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                INTRODUCE
              </span>{" "}
              MYSELF
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
              I fell in love with programming and have gained solid experience in
              building{" "}
              <span className="text-cyan-600 font-semibold">modern, responsive web interfaces</span>{" "}
              🤷‍♂
              <br />
              <br />
              I am fluent in classics like{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent font-semibold">
                HTML, CSS, and JavaScript
              </span>
              .
              <br />
              <br />
              My field of interest lies in creating{" "}
              <span className="text-cyan-600 font-semibold">
                seamless user experiences
              </span>{" "}
              and crafting{" "}
              <span className="text-cyan-600 font-semibold">
                interactive, visually appealing websites
              </span>{" "}
              and also in areas related to{" "}
              <span className="text-cyan-600 font-semibold">Web Development</span>.
              <br />
              <br />
              Whenever possible, I channel my passion into working with{" "}
              <span className="text-cyan-600 font-semibold">Node.js</span> and{" "}
              <span className="text-cyan-600 font-semibold">
                Modern JavaScript Libraries & Frameworks
              </span>{" "}
              like{" "}
              <span className="text-cyan-600 font-semibold">React.js and Angular.js</span>.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2500}>
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl opacity-40 group-hover:opacity-60 transition"></div>
                <img
                  src="/Avtar.png"
                  alt="avatar"
                  className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-xl border-4 border-white"
                />
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:mt-16 text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            FIND ME ON
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mt-2">
            Feel free to{" "}
            <span className="text-cyan-600 font-semibold">connect</span> with me
          </p>
          <ul className="flex justify-center md:justify-start items-center gap-6 mt-4 text-2xl sm:text-3xl">
            <li>
              <a
                href="https://github.com/amajad786/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-600 transition transform hover:scale-110"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/easyamajadansari/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-600 transition transform hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/amajadansari.official/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-600 transition transform hover:scale-110"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
