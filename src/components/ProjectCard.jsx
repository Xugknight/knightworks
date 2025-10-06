export default function ProjectCard({ title, desc, tags = [], image, live, code }) {
    return (
        <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 transition-transform duration-200 will-change-transform hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <div className="mb-3 aspect-[16/9] w-full rounded-xl bg-[color:var(--accent-muted)] overflow-hidden grid place-items-center">
                {image ? <img src={image} alt={`${title} screenshot`} className="w-full h-full object-cover" /> : (
                    <div className="text-[color:var(--subtext)] text-xs">screenshot</div>
                )}
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-[color:var(--subtext)] mt-1">{desc}</p>
            <div className="flex flex-wrap gap-2 mt-3">
                {tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md border border-[color:var(--border)] bg-[color:var(--accent-muted)]">{t}</span>
                ))}
            </div>
            <div className="flex gap-2 mt-4">
                {live && <a href={live} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-[color:var(--accent)] text-black font-semibold focus-visible:focus-ring">Live</a>}
                {code && <a href={code} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border border-[color:var(--border)] hover:bg-white/5 focus-visible:focus-ring">GitHub</a>}
            </div>
        </div>
    );
}