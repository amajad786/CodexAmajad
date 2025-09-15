import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Gym Management System",
    description:
      "A multi-tenant gym management software built with the MERN stack. Includes membership plans, attendance, and admin dashboard.",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...", // your base64 / image
    github: "https://github.com/yourusername/gym-management",
    live: "https://gym-management-demo.vercel.app",
  },
  {
    title: "E-Commerce Website",
    description:
      "Full-featured multi-vendor e-commerce platform with authentication, cart, payments, and seller dashboard.",
    image: "https://source.unsplash.com/800x600/?ecommerce,shopping",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-6 sm:px-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
      >
        🚀 My Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-500"
          >
            {/* Image with Overlay */}
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition"
                >
                  <Github size={18} /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition"
                >
                  <ExternalLink size={18} /> Live
                </a>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
