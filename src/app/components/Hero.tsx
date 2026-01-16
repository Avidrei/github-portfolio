"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen bg-color-var text-[var(--color-bsblack)]">
      
      {/* Floating Bubbles */}

      <h1 className="sm:text-5xl lg:text-[5.25rem] font-pix font-medium z-10">
        Hi, I'm Avidrei
      </h1>

      <p className="mt-4 text-xl font-mont max-w-3xl text-center z-10">
        A humble Data Scientist, Software Engineer and Full Stack Developer
      </p>

      <div className="text-5xl mt-6 flex space-x-12 z-10">
        <FaGithub className="hover:text-(--color-bsgold) transition" />
        <FaLinkedin className="hover:text-(--color-bsgold) transition" />
        <MdEmail className="hover:text-(--color-bsgold) transition" />
      </div>
    </section>
  );
}
