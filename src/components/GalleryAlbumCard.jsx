import { Link } from "react-router";

export default function GalleryAlbumCard({ slug, title, count, cover }) {
    return (
        <Link
            to={`/gallery/${slug}`}
            className="block rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] overflow-hidden hover:opacity-95 transition-transform duration-200 hover:-translate-y-0.5"
        >
            <div className="aspect-[16/9] bg-[color:var(--accent-muted)]">
                {cover && (
                    <img
                        src={cover.src}
                        srcSet={cover.srcSet}
                        sizes={cover.sizes}
                        alt={`${title} cover`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                )}
            </div>
            <div className="p-3">
                <div className="font-semibold">{title}</div>
                <div className="text-sm text-[color:var(--subtext)]">
                    {count} image{count === 1 ? "" : "s"}
                </div>
            </div>
        </Link>
    );
}