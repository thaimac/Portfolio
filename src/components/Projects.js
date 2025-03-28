// Projects.js
import React from "react";

const projects = [
  {
    image: "finance-pilot.png",
    name: "FinancePilot",
    description: `Built using React.js. Node.js, Express, and PostgreSQL, FinancePilot is a personal finance solution designed to provide users 
    with a full spectrum solution for tracking their investment performance, researching stocks, and managing their personal balance sheet.`,
    link: "https://github.com/your-project-link",
    demo: "https://your-project-demo-link.com",
  },
  {
    image: "workout-builder.png",
    name: "Workout Builder",
    description: `Written using Kotlin, "WorkoutBuilder aspires to construct a finely tuned and personalized exercise routine for the user. 
    Regardless of whether the user's goals are to build strength and muscle, flexibility and endurance, or simply to become the greatest 
    version of yourself, we are confident in our ability to provide you with the personalized roadmap to get there.`,
    link: "https://github.com/thaimac/WorkoutBuilder",
    demo: "https://your-project-demo-link.com",
  },
  {
    image: "pie-builder.png",
    name: "PieBuilder",
    description: `Written using Kotlin, PieBuilder is an investment portfolio composition recommendation app designed to provide the user 
    with a personalized, one of a kind portfolio, recommending various stocks, index funds, etc. that are best suited to their situation 
    and personality characteristics.`,
    link: "https://github.com/thaimac/PieBuilder",
    demo: "https://your-project-demo-link.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={project.image} alt="Tyler McEwen" className="rounded-full h-160 w-160 mx-auto" />
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-2">{project.description}</p>
            <div className="mt-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600">Code</a>
              {project.demo && <span className="mx-2">|</span>}
              {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600">Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
