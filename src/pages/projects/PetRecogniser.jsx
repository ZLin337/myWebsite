// src/pages/projects/PetRecogniser.jsx

export default function PetRecogniser() {
    return (
        <section className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 transition-colors text-gray-800 dark:text-white">
            <h1 className="text-3xl font-bold mb-4">Pet Recognizer</h1>
            <p className="text-sm italic mb-2">Jul 2024 – Nov 2024 | The Australian National University</p>

            <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Developed a machine learning model to identify pet breeds based on images.</li>
                <li>Trained the model using EfficientNet and achieved high accuracy.</li>
                <li>Collaborated on the project report and presentation.</li>
                <li>Focused on model training, evaluation, and result visualization.</li>
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "TensorFlow", "EfficientNet"].map((tech, i) => (
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
