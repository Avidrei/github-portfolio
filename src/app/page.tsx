"use client";

import Skills from "./components/Skills";
import About from "./components/About";
import Hero from "./components/Hero";



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

      {/* Section : Skills */}
    </main>
  );
}

