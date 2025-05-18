import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-4 py-16 text-center bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 text-gray-900 dark:text-white">
            <div className="max-w-4xl mx-auto space-y-20">

                {/* 🔵 Background animated blobs */}
                <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
                    <div className="w-[600px] h-[600px] bg-blue-300 opacity-30 rounded-full blur-3xl animate-pulse absolute top-[-100px] left-[-100px]" />
                    <div className="w-[400px] h-[400px] bg-purple-400 opacity-20 rounded-full blur-2xl animate-ping absolute bottom-[-150px] right-[-80px]" />
                    {/* 🔹 Floating dots or icons */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="w-11 h-11 bg-yellow-300 rounded-full animate-ping absolute top-[20%] left-[15%]" />
                        <div className="w-9 h-9 bg-green-400 rounded-full animate-ping absolute top-[70%] left-[80%]" />
                        <div className="w-6 h-6 bg-pink-400 rounded-full animate-ping absolute top-[50%] left-[30%]" />
                        <div className="w-10 h-10 bg-cyan-300 rounded-full animate-bounce absolute top-[28%] left-[75%]" />
                        <div className="w-7 h-7 bg-indigo-400 rounded-full animate-pulse absolute top-[85%] left-[13%]" />

                        <div className="w-16 h-16 bg-blue-100 rounded-full animate-bounce absolute top-[30%] left-[50%]" />
                        <div className="w-8 h-8 bg-purple-300 rounded-full animate-ping absolute bottom-[10%] left-[30%]" />
                        <div className="w-12 h-12 bg-white/10 rounded-full animate-bounce absolute top-[15%] right-[10%] delay-200" />
                    </div>
                    {/* 🌀 Rotating emoji background */}
                    <div className="absolute w-[150px] h-[150px] text-[80px] text-blue-200 opacity-10 animate-spin-slow" style={{ top: "50%", left: "15%" }}>
                        🌐
                    </div>
                </div>

                {/* Hero Section */}
                <div className="relative z-10 max-w-4xl mx-auto space-y-20">
                    <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold">Get to Know Me</p>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-2">Hi, I'm Zhuolan Lin 👋</h1>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                        I'm a passionate web developer building full-stack React applications with clean design and powerful functionality.
                    </p>
                    <div className="flex justify-center flex-wrap gap-4">
                        <Link
                            to="/about"
                            className="px-5 py-3 bg-blue-600 text-white text-sm md:text-base rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition-all duration-200"
                        >
                            Learn More About Me
                        </Link>
                        <a
                            href="/resume.pdf"
                            download
                            className="px-5 py-3 border border-blue-600 text-blue-600 text-sm md:text-base rounded-lg hover:bg-blue-600 hover:scale-105 hover:text-white transition duration-200"
                        >
                            Download Resume
                        </a>
                        <Link
                            to="/contact"
                            className="px-5 py-3 border border-gray-400 text-gray-700 dark:text-gray-200 text-sm md:text-base rounded-lg hover:bg-blue-300 hover:scale-105 dark:hover:bg-gray-700 transition duration-200"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>

                {/* Featured Projects Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6 text-center">Featured Projects</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <Link
                            to="/projects/pet-recogniser"
                            className="block p-4 bg-white dark:bg-gray-800 shadow rounded hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-bold mb-2">Pet Recogniser</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Deep learning model using EfficientNet to classify pet breeds. Trained and evaluated with high accuracy.
                            </p>
                        </Link>
                        <Link
                            to="/projects/english-learning-system"
                            className="block p-4 bg-white dark:bg-gray-800 shadow rounded hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-bold mb-2">English Learning System</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Flask-based platform supporting personalized English learning, including movie-based testing and error tracking.
                            </p>
                        </Link>
                    </div>
                    <div className="text-center mt-6">
                        <Link
                            to="/projects"
                            className="text-blue-600 hover:underline"
                        >
                            View All Projects →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
