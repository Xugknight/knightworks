export default function NotFound() {
    return (
        <main className="min-h-[60vh] grid place-items-center px-4">
            <div className="max-w-xl text-center bg-[color:var(--surface)] border border-[color:var(--border)] rounded-2xl p-8">
                <h1 className="text-3xl font-bold mb-2">404 — Not found</h1>
                <p className="text-[color:var(--subtext)]">
                    The page you’re looking for doesn’t exist or moved.
                </p>
                <div className="mt-4 flex gap-3 justify-center">
                    <a href="/" className="px-4 py-2 rounded-xl bg-[color:var(--accent)] text-black font-semibold">Go home</a>
                    <a href="/projects" className="px-4 py-2 rounded-xl border border-[color:var(--border)]">See projects</a>
                </div>
            </div>
        </main>
    );
}