export default function Projects() {
    
    {/* Project Cells Array */}
    const projects = [
    {
        title: "S.M.I.L.E. System",  
        image: "/images/Smile.png",       
        description: "Also known as Scheduling, Management and Information Logs Engine, is a web application for a dental clinic named Smile Solutions Corporation that streamline booking operations and upgrade record management through provision of a cloud storage accessible to all of the company's branches",
        link: "https://smile-two.vercel.app",
    },
    {
        title: "Cornelia Charms Website",
        image: "/images/Cornelia.png",
        description: "E-commerce web application for a handmade charms accessories store for enhancing marketing operations, viewing and generating business analytics, and providing a digital storage system.",
        link: "https://cornelia-charms-next.vercel.app/",
    },
        {
        title: "SCC Detection System",
        image: "/images/Thesis.png",
        description: "A finished thesis project that employs the usage of Hybrid CNN-ViT architectures for efficient and capable SCC detection through preprocessed histopathological images.",
        link: "https://github.com/Avidrei/SCC_ML",
    },
    // Add more projects as needed
    ];
    
    return (
        <section className="flex flex-col bg-bswhite min-h-screen my-10 mx-12">
            <div className="flex flex-col text-right ">
                <h2 className="text-6xl text-bsblack font-pix font-medium mb-10">Projects</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <div
                key={project.title}
                className="m-3 p-7 border border-bssilver rounded-lg hover:shadow-lg transition-shadow bg-bsblack flex flex-col"
                >
                <h3 className="text-2xl font-pix font-semibold text-bswhite mb-4">
                    {project.title}
                </h3>

                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover rounded-md"
                />

                <p className="text-bswhite text-justify font-mont font-normal mt-6 mb-6">
                    {project.description}
                </p>

                <a
                    href={project.link}
                    className="text-bsgold font-mont font-medium hover:underline mt-auto"
                >
                    View Project
                </a>
                </div>
            ))}
            </div>

        </section>
    )
}