// src/pages/Blog.jsx
import React from "react";

const posts = [
    {
        title: "How I Built My Portfolio Website",
        date: "May 2025",
        summary: "A walkthrough of the tech stack, design process, and challenges I faced.",
        link: "#",
    },
    {
        title: "Learning React as a Beginner",
        date: "April 2025",
        summary: "Sharing my journey and what helped me learn React effectively.",
        link: "#",
    },
];

export default function Blog() {
    return (
        <section className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-center">Blog</h1>
                <p className="text-center text-gray-600 dark:text-gray-300">
                    Notes, thoughts, and reflections on my tech journey.
                </p>

                <div className="space-y-6">
                    {posts.map((post, index) => (
                        <div key={index} className="border-b pb-4">
                            <h2 className="text-2xl font-semibold">{post.title}</h2>
                            <p className="text-sm text-gray-500">{post.date}</p>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">{post.summary}</p>
                            {post.link !== "#" && (
                                <a href={post.link} className="text-blue-600 hover:underline mt-1 inline-block">
                                    Read more →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
