import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

// Reusable NavLink with active highlight
const NavLink = ({ to, label, onClick }) => {
    const { pathname } = useLocation();
    const isActive = pathname === to;

    return (
        <Link
            to={to}
            onClick={onClick}
            className={`relative px-4 py-2 transition-all duration-200 hover:text-blue-500 dark:hover:text-blue-400 ${isActive ? "font-bold text-blue-600 dark:text-white" : "text-gray-700 dark:text-gray-300"}
                `}
        >
            <span className="relative group">
                {label}
                {/* Bottom border underline animation */}
                <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 transform bg-blue-500 transition-transform duration-300 group-hover:scale-x-100 ${isActive ? "scale-x-100" : ""
                        }`}
                />
            </span>
        </Link>
    );
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle mobile menu visibility
    // 控制手机端菜单开关
    const toggleMenu = () => setIsOpen(!isOpen);

    // Close menu after clicking a link
    // 点击链接后自动关闭手机菜单
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="bg-white dark:bg-gray-800 shadow px-4 py-3">

            <div className="flex items-center justify-between max-w-6xl mx-auto">
                {/* Logo or brand name */}
                {/* 网站 Logo 或名称 */}
                <div className="text-xl font-bold">MySite</div>

                {/* Mobile hamburger toggle button */}
                {/* 手机端菜单按钮 */}
                <button
                    className="md:hidden block text-gray-600 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            // Close icon (X)
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            // Hamburger icon (three lines)
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>

                </button>

                {/* Desktop navigation links */}
                {/* 桌面端导航链接 */}
                <div className="hidden md:flex gap-6">
                    <NavLink to="/" label="Home" />
                    <NavLink to="/about" label="About" />
                    <NavLink to="/projects" label="Projects" />
                    <NavLink to="/blog" label="Blog" />
                    <NavLink to="/contact" label="Contact" />
                    <DarkModeToggle />
                </div>
            </div>

            {/* Mobile dropdown navigation */}
            {/* 手机端展开导航菜单 */}
            {isOpen && (
                <div className="mt-3 flex flex-col gap-3 md:hidden">
                    <NavLink to="/" label="Home" onClick={closeMenu} />
                    <NavLink to="/about" label="About" onClick={closeMenu} />
                    <NavLink to="/projects" label="Projects" onClick={closeMenu} />
                    <NavLink to="/blog" label="Blog" onClick={closeMenu} />
                    <NavLink to="/contact" label="Contact" onClick={closeMenu} />
                    <DarkModeToggle />
                </div>
            )}
        </nav>
    );
}
