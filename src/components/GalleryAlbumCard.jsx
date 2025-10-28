import { Link } from "react-router";

export default function GalleryAlbumCard({ slug, title, count, cover }) {
    return (
        <Link
            to={`/gallery/${slug}`}
            className="block rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4
                 transition-transform duration-200 will-change-transform hover:-translate-y-0.5
                 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] focus-visible:focus-ring"
        >
            <div className="mb-3 aspect-[16/9] w-full rounded-xl bg-[color:var(--accent-muted)] overflow-hidden grid place-items-center">
                {cover ? (
                    <img
                        src={cover.src}
                        srcSet={cover.srcSet}
                        sizes={cover.sizes}
                        alt={`${title} cover`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                ) : (
                    <div className="text-[color:var(--subtext)] text-xs">No cover</div>
                )}
            </div>

            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{title}</h3>
                <div className="text-sm text-[color:var(--subtext)]">
                    {count} image{count === 1 ? "" : "s"}
                </div>
            </div>
        </Link>
    );
}