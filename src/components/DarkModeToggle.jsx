import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false);

    // Check saved theme on load
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }
    }, []);

    // Toggle between light and dark mode
    const toggleDarkMode = () => {
        const root = document.documentElement;

        if (isDark) {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }

        setIsDark(!isDark);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="text-sm px-3 py-1 border rounded bg-gray-200 dark:bg-gray-700 dark:text-white transition"
        >
            {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
    );
}
