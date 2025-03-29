import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
      <nav className="fixed top-0 left-0 right-0 py-3 px-5 rounded-b-lg  z-10">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-6 justify-center flex-1">
            <li><a href="#about" className="font-semibold text-gray-800 hover:text-yellow-300">About</a></li>
            <li><a href="#projects" className="font-semibold hover:text-yellow-300">Projects</a></li>
            <li><a href="#skills" className="font-semibold hover:text-yellow-300">Skills</a></li>
            <li><a href="#experience" className="font-semibold hover:text-yellow-300">Experience</a></li>
            <li><a href="#footer" className="font-semibold hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>
      </nav>
  );
};

export default Header;
