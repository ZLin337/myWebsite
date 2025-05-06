// src/pages/projects/EnglishLearningSystem.jsx
export default function EnglishLearningSystem() {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Pet Recognizer</h1>
            <p className="mb-4">
                This project involved training a machine learning model to recognize and classify different pet breeds using image data.
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Used EfficientNet for accurate classification.</li>
                <li>Worked on data collection, preprocessing, and training pipelines.</li>
                <li>Developed result visualization and evaluation modules.</li>
            </ul>
            <p className="text-gray-600">Technologies: Python, TensorFlow, EfficientNet</p>
        </div>
    );
}
