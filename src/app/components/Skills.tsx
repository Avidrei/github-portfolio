"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { TbBrandCSharp, TbBrandNextjs } from "react-icons/tb";
import { FaPython, FaJsSquare, FaReact, FaNodeJs, FaJava, FaGit, FaDocker, FaFigma } from "react-icons/fa";
import { SiNumpy, SiScikitlearn, SiTensorflow, SiPytorch, SiTailwindcss, SiCplusplus, 
       SiPandas, SiKeras, SiTableau, SiJupyter, SiAdobephotoshop, SiAdobeillustrator, SiCanva, SiRenpy, 
       SiUnrealengine, SiUnity, SiMongodb, SiCss3, SiHtml5 } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";

type Skill = { name: string; icon: ReactNode };

export default function SkillsSection() {
  const categories = ["Languages", "Frameworks & Libraries", "Data Science & ML", "Tools & Platforms", "Soft Skills"];

  const skills: Record<string, Skill[]> = {
    Languages: [
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
      { name: "Jupyter Notebooks", icon: <SiJupyter /> },
      { name: "Tableau", icon: <SiTableau /> },
      { name: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
      { name: "Adobe Illustrator", icon: <SiAdobeillustrator /> },
      { name: "Figma", icon: <FaFigma /> },
      { name: "Canva", icon: <SiCanva /> },
      { name: "Renpy", icon: <SiRenpy /> },
      { name: "Unreal Engine", icon: <SiUnrealengine /> },
      { name: "Unity", icon: <SiUnity /> }
    ],
    "Soft Skills": [
      { name: "Communication", icon: <></> },
      { name: "Teamwork", icon: <></> },
      { name: "Problem Solving", icon: <></> },
      { name: "Adaptability", icon: <></> },
      { name: "Leadership", icon: <></> }
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section className="flex flex-col bg-bsblack py-10 min-h-screen">
    {/* Skills Text*/}
    <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl font-pix text-bswhite">Skills </h2>
        <h3 className="mt-3 mb-5 text-xl font-mont text-bswhite">Get to know my strengths and capabilities.</h3>
    </div>
    <div className="flex mx-10">
      {/* Left Nav */}
      <nav className="w-1/4 border-r-3 border-bssilver p-5 flex flex-col space-y-4 sticky top-0 h-8/12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-left font-mont text-lg font-medium text-(--color-bswhite) px-4 py-4 rounded 
              hover:bg-(--color-bsgold) hover:text-bsblack transition-colors 
              ${selectedCategory === cat ? "bg-bsgold text-bsblack" : ""}`}> {cat}
          </button>
        ))}
      </nav>

      {/* Right Content */}
      <div className="flex-1 py-6 px-7 overflow-y-auto">
        <h2 className="text-5xl font-pix text-bswhite font-medium mb-10">{selectedCategory}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {(skills[selectedCategory] ?? []).map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 py-2 px-5 border rounded bg-bswhite border-bssilver text-bsgold text-shadow-bsblack hover:text-bsblack hover:bg-bsgold hover:border-bsgold transition-colors">
              {skill.icon && <span className="text-2xl">{skill.icon}</span>}
              <span className="py-3 font-mont text-md font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
