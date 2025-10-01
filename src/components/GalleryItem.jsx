export default function GalleryItem({ title, image }) {
    return (
        <div className="bg-[color:var(--surface)] border border-[color:var(--border)] rounded-xl p-3">
            <div className="aspect-[16/9] rounded-lg overflow-hidden bg-[color:var(--accent-muted)] grid place-items-center">
                {image ? <img src={image} alt={title} className="w-full h-full object-cover" /> : <div className="text-xs text-[color:var(--subtext)]">screenshot</div>}
            </div>
            <div className="mt-2 text-sm text-[color:var(--subtext)]">{title}</div>
        </div>
    );
}