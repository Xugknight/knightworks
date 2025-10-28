import { Link } from "react-router";
import Meta from "../components/Meta";
import albums from "../data/gallery-albums.json";
import { galleryImages } from "../data/galleryImages"
import GalleryAlbumCard from "../components/GalleryAlbumCard";

export default function GalleryIndex() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-10">
            <Meta title="Gallery — Knightworks" description="Screenshots organized by project." canonical="https://knightworks.dev/gallery" />
            <h1 className="text-3xl font-semibold mb-6">Gallery</h1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {albums.map(a => {
                    const cover = galleryImages[a.slug]?.[0];
                    return (
                        <GalleryAlbumCard
                            key={a.slug}
                            slug={a.slug}
                            title={a.title}
                            count={a.count}
                            cover={cover}
                        />
                    );
                })}
            </div>
        </main>
    );
}