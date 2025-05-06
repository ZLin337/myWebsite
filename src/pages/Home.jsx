export default function Home() {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Hi, I'm Zhuolan Lin 👋
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-6">
                I'm a passionate web developer building full-stack React applications with clean design and powerful functionality.
            </p>

            {/* Call-to-Action Button */}
            <a
                href="/projects"
                className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded shadow transition duration-300"
            >
                View Projects
            </a>
        </section>
    );
}
