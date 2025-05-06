import React from "react";

export default function About() {
    return (
        <section className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Header and Introduction */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">About Me</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Hi! I’m a Computer Science graduate passionate about web development,
                        AI, and game design. I enjoy building responsive applications and solving
                        real-world problems with code.
                    </p>
                </div>

                {/* Education Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Education</h2>
                    <div className="mb-6">
                        <h3 className="font-semibold">
                            <a
                                href="https://www.anu.edu.au/"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                The Australian National University
                            </a>
                        </h3>
                        <p className="italic">Master of Computing</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">ACT, Australia · 07/2023 - Present</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">
                            <a
                                href="https://en.dlmu.edu.cn/"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Dalian Maritime University
                            </a>
                        </h3>
                        <p className="italic">Bachelor's Degree in Computer Science and Technology</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">China · 09/2019 - 07/2023</p>
                    </div>
                </div>

                <a
                    href="/resume.pdf"
                    download
                    className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Download Resume
                </a>

                {/* Skills Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Skills</h2>

                    {/* Programming Languages */}
                    <h3 className="font-semibold mb-2">Programming Languages</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS", "JavaScript", "React", "Java", "Python", "SQL", "C#", "C", "C++", "Matlab"].map((lang, i) => (
                            <span
                                key={i}
                                className="bg-blue-100 dark:bg-blue-800 text-sm px-2 py-1 rounded"
                            >
                                {lang}
                            </span>
                        ))}
                    </div>

                    {/* Areas of Expertise */}
                    <h3 className="font-semibold mb-2">Areas of Expertise</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {[
                            "Web Development",
                            "Project Management",
                            "Computer Vision",
                            "Deep Learning",
                            "Game Development (Unity)",
                            "Android Development"
                        ].map((area, i) => (
                            <span
                                key={i}
                                className="bg-blue-100 dark:bg-blue-800 text-sm px-2 py-1 rounded"
                            >
                                {area}
                            </span>
                        ))}
                    </div>

                    {/* Tools */}
                    <h3 className="font-semibold mb-2">Technologies & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Figma",
                            "Git",
                            "Trello",
                            "Anaconda",
                            "VMware",
                            "Unity Hub",
                            "Roboflow",
                            "wandb",
                            "Visual Studio Code",
                            "PyCharm"
                        ].map((tool, i) => (
                            <span
                                key={i}
                                className="bg-blue-100 dark:bg-blue-800 text-sm px-2 py-1 rounded"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
