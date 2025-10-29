import { Link } from "react-router";
import ProjectCard from "../components/ProjectCard";
import Meta from "../components/Meta";
import GalleryAlbumCard from "../components/GalleryAlbumCard";
import projects from "../data/projects.json";
import albums from "../data/gallery-albums.json";
import { projectImages } from "../data/projectImages";
import { galleryImages } from "../data/galleryImages";
import { FEATURED_ALBUM_SLUGS } from "../data/featuredAlbums"

export default function Home() {
    const featured = (projects || []).filter(p => p.featured).slice(0, 3);

    return (
        <main className="min-h-screen">

            <Meta
                title="Knightworks — Reforge. Refactor. Release."
                description="Clean, reliable code — forged for performance, built to endure."
                canonical="https://knightworks.dev/"
            />

            {/* Hero */}
            <section className="max-w-6xl mx-auto px-4 py-16 animate-fadein [animation-delay:0ms]">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Reforge. Refactor. Release.
                </h1>
                <p className="text-[color:var(--subtext)] mt-3 max-w-xl">
                    Clean, reliable apps — forged for performance, built to endure.
                </p>
                <div className="mt-6 flex gap-3">
                    <Link
                        to="/projects"
                        className="px-4 py-2 rounded-xl bg-[color:var(--accent)] text-black font-semibold"
                    >
                        View Projects
                    </Link>
                    <Link
                        to="/about"
                        className="px-4 py-2 rounded-xl border border-[color:var(--border)]"
                    >
                        About
                    </Link>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="max-w-6xl mx-auto px-4 pb-12 animate-fadein [animation-delay:120ms]">
                <div className="mb-6 flex items-end justify-between">
                    <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
                    <Link to="/projects" className="text-sm text-[color:var(--subtext)] link-underline hover:opacity-80">
                        View all →
                    </Link>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(featured.length ? featured : projects.slice(0, 2)).map((p) => {
                        const img = projectImages[p.slug]?.hero;
                        const image = img ? img.src : p.image;
                        return <ProjectCard key={p.title} {...p} image={image} />;
                    })}
                </div>
            </section>

            {/* Featured Gallery*/}
            <section className="max-w-6xl mx-auto px-4 pb-12 animate-fadein [animation-delay:240ms]">
                <div className="mb-6 flex items-end justify-between">
                    <h2 className="text-2xl md:text-3xl font-bold">Gallery</h2>
                    <Link to="/gallery" className="text-sm text-[color:var(--subtext)] link-underline hover:opacity-80">
                        See more →
                    </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FEATURED_ALBUM_SLUGS.map(slug => {
                        const album = albums.find(a => a.slug === slug);
                        if (!album) return null;
                        const imgs = galleryImages[slug] || [];
                        const cover = imgs[0] || null;
                        const count = imgs.length;

                        return (
                            <GalleryAlbumCard
                                key={slug}
                                slug={slug}
                                title={album.title}
                                count={count}
                                cover={cover}
                            />
                        );
                    })}
                </div>
            </section>

            {/* Contact */}
            <section className="max-w-6xl mx-auto px-4 pb-16 animate-fadein [animation-delay:360ms]">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Contact</h2>
                <p className="text-[color:var(--subtext)]">Reach out via:</p>
                <div className="mt-3 flex gap-4 text-sm">
                    <a href="https://github.com/Xugknight" target="_blank" rel="noreferrer" className="underline decoration-dotted underline-offset-4">GitHub</a>
                    <Link to="/about" className="text-sm text-[color:var(--subtext)] link-underline hover:opacity-80">More →</Link>
                </div>
            </section>
        </main>
    );
}