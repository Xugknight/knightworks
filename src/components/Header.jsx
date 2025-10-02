import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-[color:var(--bg)]/80 backdrop-blur border-b border-[color:var(--border)]">
            {/* set the base text color here so the logo (currentColor) inherits correctly */}
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between text-[color:var(--text)]">
                {/* Clickable logo */}
                <Link to="/" aria-label="Home" className="inline-block">
                    <svg
                        width="48" height="28" viewBox="0 0 100 60"
                        className="block"
                        role="img" aria-label="XK logo"
                    >
                        <g fill="currentColor">
                            <rect x="43" y="12" width="14" height="36" rx="1.5" />
                            <path d="M8 12 H28 L50 30 L28 48 H8 L30 30 Z" />
                            <path d="M92 12 H72 L50 30 L72 48 H92 L70 30 Z" />
                        </g>
                    </svg>
                </Link>

                <nav className="flex items-center gap-4 text-sm text-[color:var(--subtext)]">
                    <a href="#projects" className="hover:opacity-80">Projects</a>
                    <a href="#gallery" className="hover:opacity-80">Gallery</a>
                    <a href="#contact" className="hover:opacity-80">Contact</a>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}