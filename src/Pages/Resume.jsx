import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#ACDBFB]/70 via-white to-[#ACDBFB]/40 pt-24">
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
        >
          My Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-600 mb-10 max-w-2xl leading-relaxed"
        >
          A glimpse of my professional journey. You can explore it directly below or download a copy
          for later.
        </motion.p>

        {/* Download Button */}
        <motion.a
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href="/Amajad Ansari Resume.pdf"
          download="Amajad_Ansari_Resume.pdf"
          className="mb-10 inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white 
                     bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500  shadow-md transition-transform transform hover:scale-105"
        >
          <Download className="w-5 h-5" /> Download CV
        </motion.a>

        {/* Resume Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/40"
        >
          <iframe
            src="/Amajad Ansari Resume.pdf"
            title="Resume"
            width="100%"
            height={width > 786 ? "850px" : "600px"}
            className="rounded-2xl"
          ></iframe>
        </motion.div>
      </div>

      {/* Floating Download Button (for mobile convenience) */}
      <motion.a
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        href="/Amajad Ansari Resume.pdf"
        download="Amajad_Ansari_Resume.pdf"
        className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 
                   text-white shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <Download className="w-6 h-6" />
      </motion.a>
    </section>
  );
}

export default Resume;
