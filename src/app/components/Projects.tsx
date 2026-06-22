import { FiArrowUpRight } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "S.M.I.L.E. System",  
      image: "/images/Smile.png",       
      description: "A comprehensive Scheduling, Management, and Information Logs Engine engineered for multi-branch dental clinics. Streamlines real-time booking operations and modernizes record management through synchronized cloud infrastructure.",
      tags: ["Next.js", "Cloud Database", "Operations"],
      link: "https://smile-two.vercel.app",
    },
    {
      title: "Cornelia Charms",
      image: "/images/Cornelia.png",
      description: "An editorial E-commerce platform designed for an artisanal jewelry business. Integrates dynamic storefront marketing, custom business analytics dashboard, and automated inventory logistics architecture.",
      tags: ["React", "Analytics", "E-Commerce"],
      link: "https://cornelia-charms-next.vercel.app/",
    },
    {
      title: "SCC Detection System",
      image: "/images/Thesis.png",
      description: "A machine learning research framework implementing hybrid CNN-ViT (Vision Transformer) architectures. Achieves high-accuracy detection and classification of SCC through automated histopathological image processing pipelines.",
      tags: ["Python", "PyTorch", "Computer Vision"],
      link: "https://github.com/Avidrei/SCC_ML",
    },
  ];
    
  return (
    <section className="bg-bsblack text-bswhite min-h-screen py-24 px-6 md:px-16 lg:px-24">
      {/* Section Header */}
      <div className="max-w-6xl w-full mx-auto mb-16 border-b border-neutral-900 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-pix font-medium tracking-tight mb-3">
            Selected Works
          </h2>
          <p className="font-mont text-sm md:text-base text-neutral-400">
            A curated showcase of engineering applications and research initiatives.
          </p>
        </div>
      </div>

      {/* Modern Card Grid */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-neutral-950/40 border border-neutral-900 rounded-xl overflow-hidden hover:border-neutral-700 transition-all duration-300"
          >
            {/* Image Wrapper with Scale Effect */}
            <div className="w-full h-52 overflow-hidden bg-neutral-900 relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Tags Layer */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[10px] font-mont font-medium tracking-wider uppercase bg-neutral-900 text-neutral-400 px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title with Arrow Icon */}
              <h3 className="text-xl font-pix font-medium text-neutral-200 group-hover:text-bsgold flex items-center justify-between transition-colors duration-200 mb-3">
                <span>{project.title}</span>
                <FiArrowUpRight className="text-neutral-500 group-hover:text-bsgold transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </h3>

              {/* Description */}
              <p className="text-neutral-400 font-mont text-sm leading-relaxed text-left flex-grow mb-6">
                {project.description}
              </p>

              {/* Action Indicator */}
              <span className="text-xs font-mont font-semibold text-neutral-500 group-hover:text-bswhite transition-colors duration-200 mt-auto">
                Explore Case Study →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}