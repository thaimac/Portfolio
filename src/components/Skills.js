// Skills.js
import React from "react";

const skills = [
  "ReactJS", "JavaScript", "NodeJS", "HTML5", "CSS3", "Docker", "Git", "Kubernetes", "AWS", "PostgreSQL", "MySQL"
];

const Skills = () => {
  return (
    <section id="skills" className="py-8">
      <h2 className="text-3xl font-bold text-center">My Skills</h2>
      <div className="flex flex-wrap justify-center mt-4">
        {skills.map((skill, index) => (
          <span key={index} className="m-2 p-2 bg-gray-200 rounded-lg">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
