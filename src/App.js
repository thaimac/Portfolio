import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;

