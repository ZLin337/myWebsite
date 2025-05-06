// src/pages/ProjectsOverview.jsx

const projects = [
    {
        title: "Studyroo: Your AI-Powered Learning Companion",
        duration: "Jul 2024 – Present",
        affiliation: "The Australian National University",
        description: [
            "Studyroo provides students with 24/7 access to a personal AI tutor.",
            "I worked on enhancing UI/UX using React for responsive, engaging design.",
            "I served as project spokesperson and team leader.",
            "This is an ongoing project in collaboration with others."
        ],
        tech: ["React", "Tailwind", "AI", "UI/UX"],
        link: "https://studyroo-0eb14ff2cc5e.herokuapp.com/"
    },
    {
        title: "Pet Recognizer",
        duration: "Jul 2024 – Nov 2024",
        affiliation: "The Australian National University",
        description: [
            "Developed an ML model using EfficientNet to identify pet breeds.",
            "Contributed to the project paper and presentation delivery.",
            "Focused on deep learning model training and evaluation."
        ],
        tech: ["Python", "TensorFlow", "EfficientNet"],
        link: "/projects/pet-recogniser", // internal detail page
    },
    {
        title: "Unity Game (Mansion Escape)",
        duration: "Jul 2024 – Nov 2024",
        affiliation: "The Australian National University",
        description: [
            "Designed and developed a C#-based game with Unity.",
            "Received ‘Outstanding Game Award Honourable Mention’.",
            "Focused on immersive puzzle design and player experience."
        ],
        tech: ["Unity", "C#", "Game Design"],
        link: "https://play.unity.com/en/games/a0089eb9-ed68-4ac9-9e69-3a1ee5c00b35/mansion-escape"
    },
    {
        title: "Chinese Intangible Cultural Heritage Website",
        duration: "Feb 2024 – May 2024",
        affiliation: "The Australian National University",
        description: [
            "Independently built a responsive website to showcase Chinese cultural heritage.",
            "Implemented dynamic content loading and interactive design.",
            "Focused on preserving traditional crafts, arts, and festivals."
        ],
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://stuweb.cecs.anu.edu.au/~u7709177/index.html"
    },
    {
        title: "Python-based English Learning System",
        duration: "Feb 2023 – Jun 2023",
        affiliation: "Dalian Maritime University",
        description: [
            "Developed a personalized learning platform with tests, tracking, and a personal center.",
            "Supported movie-based learning and error diagnostics.",
            "Built using Flask and MySQL in a B/S model."
        ],
        tech: ["Flask", "Python", "MySQL", "HTML", "CSS", "JavaScript"],
        link: "/projects/english-learning-system", // internal detail page
    }
];

export default function ProjectsOverview() {
    return (
        <section className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 transition-colors">


            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">
                            {project.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{project.duration}</p>
                        <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">
                            {project.affiliation}
                        </p>
                        <ul className="text-gray-600 dark:text-gray-300 mb-3 list-disc list-inside space-y-1">
                            {project.description.map((line, i) => (
                                <li key={i}>{line}</li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 text-sm text-blue-600 dark:text-blue-400 mb-3">
                            {project.tech.map((techItem, i) => (
                                <span key={i} className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                                    {techItem}
                                </span>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-blue-600 hover:underline"
                        >
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
