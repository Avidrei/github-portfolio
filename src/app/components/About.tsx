export default function About() {
    return (
        <section className="flex flex-col bg-bsblack min-h-screen">
            <div className="flex flex-col ml-19 mt-15">
            <h2 className="text-6xl text-bswhite font-pix font-medium">About Me</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 mb-20">
                <div className="mt-10 mx-15 max-w-2xl px-4 text-bswhite font-mont font-normal text-justify text-lg leading-8">
                    <p>
                    I&apos;m currently pursuing a degree in Computer Science majoring in Data Science at University of Santo Tomas 
                    with a strong academic track record, including multiple Dean&apos;s List recognitions and topnotchers.
                    I have worked extensively with libraries and frameworks involving Python, JavaScript, and SQL, and love creating projects that combine software 
                    development and data analysis. In my previous roles, I have experienced building web applications, automating
                    data pipelines, generating business insights, and developed machine learning models to solve real-world problems.
                    </p>

                    <p className="mt-6">
                    When I&apos;m not coding, I code games using engines such as Unity or Unreal, or languages like Java. In my free time, I also enjoy playing video games, 
                    reading manga, and exploring new technologies and frameworks to stay updated in the ever-evolving field of tech. 
                    </p>
                </div>
            </div>

            <div className="flex justify-center mt-5 mb-25">
                <div className="w-4/5 h-1 bg-bswhite"></div>
            </div>
        </section>
    )
}
