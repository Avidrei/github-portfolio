export default function About() {
    return (
        <section className="bg-bsblack text-bswhite min-h-screen flex flex-col justify-center px-6 py-20 md:px-16 lg:px-24">
            {/* Header Section */}
            <div className="max-w-6xl w-full mx-auto mb-12">
                <h2 className="text-4xl md:text-5xl font-pix font-medium tracking-tight">
                    About Me
                </h2>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                
                {/* Left Side: Bio Narrative */}
                <div className="lg:col-span-7 font-mont font-normal text-base md:text-lg text-neutral-300 leading-relaxed space-y-6 text-left">
                    <p>
                        I am currently pursuing a degree in Computer Science majoring in Data Science at the University of Santo Tomas. 
                        With a strong academic foundation—consistently earning Dean's List honors—I focus on the intersection of 
                        software development and data architecture. 
                    </p>
                    <p>
                        My experience spans building scalable web applications, automating data pipelines, and developing 
                        machine learning models to extract actionable business insights. I enjoy turning complex data challenges into 
                        clean, functional code.
                    </p>
                    <p className="text-sm md:text-base text-neutral-400">
                        Outside of data and core development, I build games in Unity and Unreal Engine, explore 
                        emerging tech frameworks, and keep up with game design trends.
                    </p>
                </div>

                {/* Right Side: Professional Quick-Facts (Fills the grid gap professionally) */}
                <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-neutral-800 pt-8 lg:pt-0 lg:pl-12 font-mont">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">Core Stack</h3>
                            <p className="text-sm text-neutral-300 leading-6">Python, JavaScript, SQL, Java, React, Next.js</p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">Specializations</h3>
                            <p className="text-sm text-neutral-300 leading-6">Data Analysis, Machine Learning Pipelines, Full-Stack Dev</p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">Education</h3>
                            <p className="text-sm text-neutral-300">B.S. Computer Science — Data Science</p>
                            <p className="text-xs text-neutral-500 mt-0.5">University of Santo Tomas</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}