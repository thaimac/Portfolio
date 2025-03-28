// Header.js
import React from "react";

const Header = () => {
  return (
      <div className="min-w-screen bg-gray-200 px-20 pb-5 pt-1">
      <nav className="fixed top-0 left-0 right-0 py-3 px-5 bg-white bg-opacity-90 rounded-b-lg shadow-xl z-10">
      <div class="-mx-1">
        <ul className="flex justify-center space-x-6">
          <li><a href="#about" className="text-gray-800 hover:text-yellow-300">About</a></li>
          <li><a href="#projects" className="hover:text-yellow-300">Projects</a></li>
          <li><a href="#skills" className="hover:text-yellow-300">Skills</a></li>
          <li><a href="#experience" className="hover:text-yellow-300">Experience</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>
        </div>
      </nav>
      </div>
  );
};

export default Header;
