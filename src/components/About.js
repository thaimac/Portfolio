// About.js
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col justify-center items-center text-center p-6">
        <div className="bg-gray-300 rounded bg-opacity-75 p-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-black mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I'm Tyler McEwen.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Data Science Engineer | Software & Finance Enthusiast
        </motion.p>
        <motion.div
          className="flex space-x-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href="mailto:tmcewen4@.com" className="text-black hover:text-gray-300">
            <FaEnvelope className="w-6 h-6 transition-colors duration-200" />
          </a>
          <a href="https://github.com/thaimac" className="text-black hover:text-gray-300">
            <FaGithub className="w-6 h-6 transition-colors duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/tyler-mcewen/" className="text-black hover:text-gray-300">
            <FaLinkedin className="w-6 h-6 transition-colors duration-200" />
          </a>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
