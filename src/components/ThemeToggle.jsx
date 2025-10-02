import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getInitialTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return getSystemTheme();
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState(getInitialTheme);
    const [userSet, setUserSet] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved === "light" || saved === "dark";
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") root.classList.add("dark");
        else root.classList.remove("dark");
    }, [theme]);

    useEffect(() => {
        if (userSet) return;
        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = () => setTheme(mql.matches ? "dark" : "light");
        mql.addEventListener?.("change", handler);
        return () => mql.removeEventListener?.("change", handler);
    }, [userSet]);

    const toggle = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        setUserSet(true);
        localStorage.setItem(STORAGE_KEY, next);
    };

    return (
        <button
            onClick={toggle}
            className="p-2 rounded hover:bg-[color:var(--surface)]/60 transition-colors"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light" : "Switch to dark"}
        >
            {theme === "dark" ? "☀️" : "🌙"}
        </button>
    );
}