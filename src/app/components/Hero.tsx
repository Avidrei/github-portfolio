"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen bg-color-var text-bsblack">
      
      {/* Floating Bubbles */}

      <h1 className="text-5xl md:text-7xl lg:text-[5.25rem] font-pix font-medium z-10">
        Hi, I&apos;m Avidrei
      </h1>

      <p className="mx-5 mt-3 text-sm md:text-lg lg:text-xl lg:mt-6  font-mont max-w-3xl text-center z-10">
        A Data Scientist, Software Engineer and Full Stack Developer
      </p>

      <div className="text-2xl md:text-4xl lg:text-5xl mt-3 lg:mt-6 flex space-x-5 md:space-x-8 lg:space-x-10 z-10">
        <FaGithub className="hover:text-bsgold transition" />
        <FaLinkedin className="hover:text-bsgold transition" />
        <MdEmail className="hover:text-bsgold transition" />
      </div>
    </section>
  );
}
