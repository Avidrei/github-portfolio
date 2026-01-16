"use client";

import Skills from "./components/Skills";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";



export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Section : Hero Banner*/}
      <Hero />
      {/* Section : About Me */}
      <About />

      {/* Section : Skills / Tech Stack */}
      <Skills />
      
      {/* Section : Projects */}
      <Projects />
      {/* Section : Skills */}
    </main>
  );
}

