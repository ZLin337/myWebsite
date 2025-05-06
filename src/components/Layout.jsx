import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white">
            <Navbar />
            <main className="p-6">
                <Outlet />
            </main>
        </div>
    );
}
