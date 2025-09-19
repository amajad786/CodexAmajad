import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "EduuXpert Website",
    description:
      "An educational platform website designed for learning resources, student engagement, and responsive UI.",
    image: "/eduuXpert.jpg",
    github: "https://github.com/amajad786/EduuXpert_website",
    live: "https://eduuxpert.com/",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "ShivSumitra Foundation NGO Website",
    description:
      "An NGO website for ShivSumitra Foundation highlighting mission, projects, donations, and community service.",
    image: "/ngo.png",
    github: "https://github.com/amajad786/ngo_app",
    live: "",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and professional experience with animations and responsive design.",
    image: "/CodexAmajad.png",
    github: "https://github.com/amajad786/CodexAmajad",
    live: "https://codexamajad.vercel.app/",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Quiz App",
    description:
      "A quiz application with authentication, timer, and score calculation. Built with React and Node.js.",
    image: "/quiz.png",
    github: "https://github.com/amajad786/quiz-app",
    live: "https://quiz-app-demo.vercel.app",
    tech: ["React", "Node.js", "MySQL", "Express"],
  },
  // {
  //   title: "Faste E-Commerce Frontend",
  //   description:
  //     "Frontend design for a multi-vendor e-commerce platform with modern UI and responsive product listings.",
  //   image: "https://source.unsplash.com/800x600/?ecommerce,shopping",
  //   github: "https://github.com/yourusername/faste-ecommerce",
  //   live: "https://faste-ecommerce.vercel.app",
  //   tech: ["React", "Tailwind CSS"],
  // },
  {
    title: "Netflix Website Clone",
    description:
      "A Netflix-inspired website clone featuring movies, TV shows, and video streaming UI.",
    image: "/Netflix.png",
    github: "https://github.com/amajad786/netflix-project",
    live: "https://netflix-clone-demo.vercel.app",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Music Application",
    description:
      "A music streaming web app with playlists, search functionality, and responsive player UI.",
    image: "/music.png",
    github: "https://github.com/amajad786/music_app",
    live: "https://music-app-demo.vercel.app",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Calorie Kitchen  Website",
    description:
      "A website to calculate daily calorie intake from kitchen recipes with a modern and simple UI.",
    image: "/Calorie-Kitchen.png",
    github: "https://github.com/amajad786/html-project",
    live: "https://kitchen-calorie.vercel.app",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
  },
  {
    title: "TechTheme",
    description:
      "A modern website theme showcasing technology blogs, news, and resources with a professional design.",
    image: "/techtheme.png",
    github: "https://github.com/amajad786/techtheme",
    live: "https://aiyoit.com/",
    tech: ["HTML", "CSS", "Bootstrap", "Core PHP" , "MySQL", "WordPress"],
  },
  {
    title: "Aiyoit Website",
    description:
      "A business website designed for Aiyoit company with professional sections, services, and contact details.",
    image: "/aiyoit.png",
    github: "https://github.com/amajad786/project-1",
    live: "https://aiyoit.vercel.app",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];


export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-6 sm:px-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
      >
        🚀 My Projects
      </motion.h2>

      {/* Project Cards */}
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
                className="w-full h-auto  transform group-hover:scale-110 transition duration-700"
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
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
