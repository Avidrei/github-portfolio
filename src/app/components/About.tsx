import { useState } from "react";

export default function About() {
    return (
        <section className="flex flex-col bg-(--color-bsblack) min-h-screen">
            <div className="flex flex-col ml-12 mt-15">
            <h2 className="text-6xl text-(--color-bswhite) font-pix font-medium">About Me</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                <div className="mt-10 mx-8 max-w-2xl px-4 text-(--color-bswhite) font-mont font-normal text-justify text-lg leading-8">
                    <p>
                    I’m currently pursuing a degree in Computer Science majoring in Data Science at University of Santo Tomas 
                    with a strong academic track record, including multiple Dean's List recognitions and topnotchers.
                    I have worked extensively with libraries and frameworks involving Python, JavaScript, and SQL, and love creating projects that combine software 
                    development and data analysis. In my previous roles, I have experienced building web applications, automating
                    data pipelines, generating business insights, and developed machine learning models to solve real-world problems.
                    </p>

                    <p className="mt-6">
                    When I’m not coding, I code games using engines such as Unity or Unreal, or languages like Java. In my free time, I also enjoy playing video games, 
                    reading manga, and exploring new technologies and frameworks to stay updated in the ever-evolving field of tech. 
                    </p>
                </div>
            </div>
        </section>
    )
}
