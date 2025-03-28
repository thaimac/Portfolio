import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className="min-w-screen bg-gray-200 px-20 pb-5 pt-1">
      <nav className="fixed top-0 left-0 right-0 py-3 px-5 bg-white bg-opacity-90 rounded-b-lg shadow-xl z-10">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-6 justify-center flex-1">
            <li><a href="#about" className="text-gray-800 hover:text-yellow-300">About</a></li>
            <li><a href="#projects" className="hover:text-yellow-300">Projects</a></li>
            <li><a href="#skills" className="hover:text-yellow-300">Skills</a></li>
            <li><a href="#experience" className="hover:text-yellow-300">Experience</a></li>
            <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
          <div className="flex justify-end space-x-4">
            <a href="mailto:tmcewen4@.com" className="text-black hover:text-gray-300">
              <FaEnvelope className="w-6 h-6 transition-colors duration-200" />
            </a>
            <a href="https://github.com/thaimac" className="text-black hover:text-gray-300">
              <FaGithub className="w-6 h-6 transition-colors duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/tyler-mcewen/" className="text-black hover:text-gray-300">
              <FaLinkedin className="w-6 h-6 transition-colors duration-200" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
