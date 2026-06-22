"use client";

import type { ReactNode } from "react";
import { TbBrandCSharp, TbBrandNextjs } from "react-icons/tb";
import { FaPython, FaJsSquare, FaReact, FaNodeJs, FaJava, FaGit, FaDocker, FaFigma } from "react-icons/fa";
import { SiNumpy, SiScikitlearn, SiTensorflow, SiPytorch, SiTailwindcss, SiCplusplus, 
       SiPandas, SiKeras, SiTableau, SiJupyter, SiAdobephotoshop, SiAdobeillustrator, SiCanva, SiRenpy, 
       SiUnrealengine, SiUnity, SiMongodb, SiCss3, SiHtml5 } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";

type Skill = { name: string; icon?: ReactNode };

export default function SkillsSection() {
  const skillsData: Record<string, Skill[]> = {
    "Languages": [
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "SQL", icon: <BsFiletypeSql /> },
      { name: "Java", icon: <FaJava/> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C#", icon: <TbBrandCSharp /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
    "Frameworks & Libraries": [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <TbBrandNextjs /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    "Data Science & ML": [
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "scikit-learn", icon: <SiScikitlearn /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "Keras", icon: <SiKeras /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    "Tools & Platforms": [
      { name: "Git & GitHub", icon: <FaGit /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Jupyter", icon: <SiJupyter /> },
      { name: "Tableau", icon: <SiTableau /> },
      { name: "Photoshop", icon: <SiAdobephotoshop /> },
      { name: "Illustrator", icon: <SiAdobeillustrator /> },
      { name: "Figma", icon: <FaFigma /> },
      { name: "Unreal Engine", icon: <SiUnrealengine /> },
      { name: "Unity", icon: <SiUnity /> }
    ],
    "Core Competencies": [
      { name: "Technical Communication" },
      { name: "Cross-functional Teamwork" },
      { name: "Analytical Problem Solving" },
      { name: "Agile Adaptability" },
    ]
  };

  return (
    <section className="bg-bsblack text-bswhite min-h-screen py-24 px-6 md:px-16 lg:px-24">
      {/* Title Header */}
      <div className="max-w-6xl w-full mx-auto mb-16 border-b border-neutral-900 pb-8">
        <h2 className="text-4xl md:text-5xl font-pix font-medium tracking-tight mb-3">
          Skills & Expertise
        </h2>
        <p className="font-mont text-sm md:text-base text-neutral-400">
          A breakdown of my technical toolkit and areas of specialization.
        </p>
      </div>

      {/* Grid Architecture */}
      <div className="max-w-6xl w-full mx-auto space-y-16">
        {Object.entries(skillsData).map(([category, items]) => (
          <div 
            key={category} 
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start border-b border-neutral-900 pb-12 last:border-0"
          >
            {/* Left: Category Label */}
            <div className="lg:col-span-3">
              <h3 className="font-pix text-lg text-neutral-400 font-medium tracking-wide lg:sticky lg:top-8">
                {category}
              </h3>
            </div>

            {/* Right: Skills Badges */}
            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 py-3 px-4 rounded-md border border-neutral-800 bg-neutral-950/40 text-neutral-300 hover:text-bswhite hover:border-neutral-600 transition-all duration-200 group"
                >
                  {skill.icon && (
                    <span className="text-xl text-neutral-500 group-hover:text-bsgold transition-colors duration-200">
                      {skill.icon}
                    </span>
                  )}
                  <span className="font-mont text-sm font-medium tracking-wide">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}