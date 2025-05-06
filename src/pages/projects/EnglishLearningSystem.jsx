// src/pages/projects/EnglishLearningSystem.jsx

export default function EnglishLearningSystem() {
    return (
        <section className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 transition-colors text-gray-800 dark:text-white">
            <h1 className="text-3xl font-bold mb-4">Python-based English Learning System</h1>
            <p className="text-sm italic mb-2">Feb 2023 – Jun 2023 | Dalian Maritime University</p>

            <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Developed a full-stack web application to support English language learning.</li>
                <li>Features included user login, testing modules, translation tools, and a personal center.</li>
                <li>Supported movie-based learning and error tracking for personalized learning paths.</li>
                <li>Built using Flask for the backend, with MySQL and basic HTML/CSS/JS for the frontend.</li>
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
                {["Flask", "Python", "MySQL", "HTML", "CSS", "JavaScript"].map((tech, i) => (
                    <span
                        key={i}
                        className="bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-2 py-1 rounded"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <a href="/projects" className="text-blue-500 hover:underline">
                ← Back to Projects
            </a>
        </section>
    );
}
