// Footer.js
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 text-black text-center">
      <p>
        <a href="mailto:tmcewen4@.com" className="inline-block mx-2">
          <FaEnvelope className="w-6 h-6 text-black hover:text-gray-300 transition-colors duration-200" />
        </a>
        <a href="https://github.com/thaimac" className="inline-block mx-2">
          <FaGithub className="w-6 h-6 text-black hover:text-gray-300 transition-colors duration-200" />
        </a>
        <a href="https://www.linkedin.com/in/tyler-mcewen/" className="inline-block mx-2">
          <FaLinkedin className="w-6 h-6 text-black hover:text-gray-300 transition-colors duration-200" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
