import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Import contact icons

export default function Contact() {
    return (
        <section className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="max-w-3xl mx-auto space-y-10 text-center">
                {/* Page heading */}
                <h1 className="text-4xl font-bold">Contact Me</h1>

                {/* Introductory text */}
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    I'm always open to connecting! Feel free to reach out through any of the platforms below.
                </p>

                {/* Contact Methods */}
                <div className="flex flex-col items-center gap-6">
                    {/* Email */}
                    <a
                        href="mailto:Zlin86135@gmail.com"
                        className="flex items-center gap-3 text-blue-600 hover:underline"
                    >
                        <FaEnvelope /> Zlin86135@gmail.com
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/zhuolan-lin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-blue-600 hover:underline"
                    >
                        <FaLinkedin /> https://www.linkedin.com/in/zhuolan-lin/
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/ZLin337"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-blue-600 hover:underline"
                    >
                        <FaGithub /> https://github.com/ZLin337
                    </a>
                </div>
            </div>
        </section>
    );
}
