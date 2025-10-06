import Meta from "../components/Meta";

export default function Gallery() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-10">

            <Meta
                title="Gallery — Knightworks"
                description="Screenshots and smaller builds from labs and experiments."
                canonical="https://knightworks.dev/gallery"
            />

            <h1 className="text-3xl font-semibold text-[color:var(--text)]">Gallery</h1>
            <p className="mt-2 text-[color:var(--subtext)]">Screenshots here</p>
            {/* TODO: grid of thumbs (lightbox later) */}
        </main>
    );
}