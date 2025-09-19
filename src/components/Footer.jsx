import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react"; 
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const project = () => {
    navigate("/projects");
  };

  return (
    <footer className="bg-[#0d1b2a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 sm:grid-cols-1 gap-12">

        {/* Logo & About */}
        <div className="flex flex-col items-start space-y-4">
          <img
            src="/logo.png"
            alt="logo"
            className="w-40 object-cover  shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            Welcome to my <span className="text-yellow-500 font-semibold">Portfolio</span>.  
            Explore my work, projects, and journey in web development.  
            <br />
            <b className="text-yellow-600 font-bold">Thanks for visiting!</b>
          </p>
          {/* Socials */}
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/amajad786/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/easyamajadansari/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/amajadansari.official/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold border-b border-gray-600 pb-2">Contact</h2>
          <p className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Mail size={18} /> ansariamajad99@gmail.com
          </p>
          <p className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Phone size={18} /> +91 9695345078
          </p>
          <p className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <MapPin size={18} /> Padrauna, Kushinagar, Uttar Pradesh, India (274304)
          </p>
        </div>

        {/* Projects / Links */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold border-b border-gray-600 pb-2">Projects</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <span onClick={project} className="cursor-pointer hover:text-yellow-500 transition-colors">
                EduuXpert Website
              </span>
            </li>
            <li>
              <span onClick={project} className="cursor-pointer hover:text-yellow-500 transition-colors">
                Quiz App
              </span>
            </li>
            <li>
              <span onClick={project} className="cursor-pointer hover:text-yellow-500 transition-colors">
                Portfolio Website
              </span>
            </li>
            <li>
              <span onClick={project} className="cursor-pointer text-yellow-600 hover:text-yellow-400 font-medium">
                See More →
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0b1525] border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-yellow-500 font-semibold">Amajad Ansari</span> | All Rights Reserved
      </div>
    </footer>
  );
}
