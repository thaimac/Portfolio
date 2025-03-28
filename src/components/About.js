// About.js
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center">About Me</h2>
      <div className="max-w-lg mx-auto mt-4 text-center">
        <img src="avatar.jpg" alt="Tyler McEwen" className="rounded-full h-24 w-24 flex items-center justify-center mx-auto" />
        <p className="mt-4">
        Hello! My name is Tyler and I am a data science engineer with a passion for building cool things that make an impact
        on the lives of others. My professional experience has largely centered around deploying and supporting cloud infrastructure, while my
        personal projects have always sat between two of my greatest interests - software and finance.
        </p>
      </div>
      </div>
    </section>
  );
};

export default About;
