export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-[color:var(--bg)]/80 backdrop-blur border-b border-[color:var(--border)]">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-[color:var(--text)] text-[color:var(--bg)] grid place-items-center">
                    {/* use the SVG as a mask by setting text color / or just <img src> */}
                    <img src="/src/assets/logo-xk.svg" alt="XK logo" className="w-5 h-5" />
                </div>
                <nav className="flex items-center gap-4 text-sm text-[color:var(--subtext)]">
                    <a href="#projects" className="hover:opacity-80">Projects</a>
                    <a href="#gallery" className="hover:opacity-80">Gallery</a>
                    <a href="#contact" className="hover:opacity-80">Contact</a>
                </nav>
            </div>
        </header>
    );
}