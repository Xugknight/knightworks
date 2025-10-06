import { Link, useLocation } from "react-router";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const { pathname } = useLocation();

    const navLink = (to, label) => {
        const isActive = pathname === to;
        return (
            <Link
                to={to}
                className={[
                    "text-sm link-underline transition-opacity",
                    isActive
                        ? "text-[color:var(--text)]"
                        : "text-[color:var(--subtext)] hover:opacity-80"
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
            >
                {label}
            </Link>
        );
    };

    return (
        <header className="sticky top-0 z-50 bg-[color:var(--header)]/90 backdrop-blur border-b border-[color:var(--header-border)]">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between text-[color:var(--text)]">
                <Link to="/" aria-label="Home" className="inline-block">
                    <svg width="48" height="28" viewBox="0 0 100 60" className="block" role="img" aria-label="XK logo">
                        <g fill="currentColor">
                            <rect x="43" y="12" width="14" height="36" rx="1.5" />
                            <path d="M8 12 H28 L50 30 L28 48 H8 L30 30 Z" />
                            <path d="M92 12 H72 L50 30 L72 48 H92 L70 30 Z" />
                        </g>
                    </svg>
                </Link>

                <nav className="flex items-center gap-4">
                    {navLink("/projects", "Projects")}
                    {navLink("/gallery", "Gallery")}
                    {navLink("/about", "About")}
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}