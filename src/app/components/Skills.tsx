"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { TbBrandCSharp } from "react-icons/tb";
import { FaPython, FaJsSquare, FaReact, FaNodeJs, FaJava, FaGit, FaDocker } from "react-icons/fa";
import { SiNumpy, SiScikitlearn, SiTensorflow, SiPytorch, SiTailwindcss, SiCplusplus, 
       SiPandas, SiKeras, SiTableau, SiJupyter} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";

type Skill = { name: string; icon: ReactNode };

export default function SkillsSection() {
  const categories = ["Languages", "Frameworks & Libraries", "Data Science & ML", "Tools & Platforms"];

  const skills: Record<string, Skill[]> = {
    Languages: [
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "SQL", icon: <BsFiletypeSql /> },
      { name: "Java", icon: <FaJava/> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C#", icon: <TbBrandCSharp /> },
    ],
    "Frameworks & Libraries": [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <FaReact /> },
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
    ],
    "Tools & Platforms": [
      { name: "Git & GitHub", icon: <FaGit /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Jupyter Notebooks", icon: <SiJupyter /> },
      { name: "Tableau", icon: <SiTableau /> },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section className="flex bg-(--color-bsblack) min-h-screen">
    <div>
        
    </div>
      {/* Left Nav */}
      <nav className="w-1/4 border-r-3 border-(--color-bssilver) p-5 flex flex-col space-y-4 sticky top-0 h-8/12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-left font-mont text-lg text-(--color-bswhite) px-4 py-4 rounded hover:bg-(--color-bsgold) hover:text-(--color-bswhite) transition-colors ${
              selectedCategory === cat ? "bg-(--color-bsgold) text-(--color-bs)" : ""}`}>
            {cat}
          </button>
        ))}
      </nav>

      {/* Right Content */}
      <div className="flex-1 py-6 px-7 overflow-y-auto">
        <h2 className="text-5xl font-pix text-(--color-bswhite) font-medium mb-10">{selectedCategory}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {(skills[selectedCategory] ?? []).map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 p-3 border rounded bg-(--color-bswhite) border-(--color-bssilver) hover:bg-(--color-bsgold) hover:border-(--color-bsgold) transition-colors">
              {skill.icon && <span className="text-(--color-bsblack text-2xl">{skill.icon}</span>}
              <span className="font-mont text-(--color-bsblack) text-lg font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
