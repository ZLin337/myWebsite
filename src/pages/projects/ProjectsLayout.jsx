// src/pages/projects/ProjectsLayout.jsx
import { Outlet } from "react-router-dom";

export default function ProjectsLayout() {
    return (
        <div className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 transition-colors">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
                My Projects
            </h2>
            <Outlet />
        </div>
    );
}
