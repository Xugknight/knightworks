export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-[color:var(--bg)]/80 backdrop-blur border-b border-[color:var(--border)]">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo: inherits color from text */}
                <div className="text-[color:var(--text)]">
                    <svg
                        width="48" height="28" viewBox="0 0 100 60"
                        className="block" aria-label="XK logo"
                    >
                        <g fill="currentColor">
                            {/* center bar, width=14, height aligned with wedges */}
                            <rect x="43" y="12" width="14" height="36" rx="1.5" />
                            {/* left mirrored K arm */}
                            <path d="M8 12 H28 L50 30 L28 48 H8 L30 30 Z" />
                            {/* right mirrored K arm */}
                            <path d="M92 12 H72 L50 30 L72 48 H92 L70 30 Z" />
                        </g>
                    </svg>
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