"use client";

import Skills from "./components/Skills";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Reveal from "./components/Reveal";


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Section : Hero Banner*/}
      <Reveal><Hero /></Reveal>
      
      <div className="bg-bsblack">
      {/* Section : About Me */}
      <Reveal><About /></Reveal>

      {/* Section : Skills / Tech Stack */}
      <Reveal><Skills /></Reveal>
      </div>
      
      {/* Section : Projects */}
      <Reveal><Projects /></Reveal>

      {/* Section : Skills */}
    </main>
  );
}

