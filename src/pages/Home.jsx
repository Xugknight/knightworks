import ProjectCard from '../components/ProjectCard';
import GalleryItem from '../components/GalleryItem';
import projects from '../data/projects.json';
import gallery from '../data/gallery.json';

export default function Home() {
    return (
        <main className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
            {/* Hero */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Build. Ship. Iterate.
                </h1>
                <p className="text-[color:var(--subtext)] mt-3 max-w-xl">
                    Full-stack developer crafting clean, performant apps.
                </p>
                <div className="mt-6 flex gap-3">
                    <a href="#projects" className="px-4 py-2 rounded-xl bg-[color:var(--accent)] text-black font-semibold">View Projects</a>
                    <a href="#contact" className="px-4 py-2 rounded-xl border border-[color:var(--border)]">Contact</a>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="max-w-6xl mx-auto px-4 pb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Projects</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
                </div>
            </section>

            {/* Bootcamp Gallery */}
            <section id="gallery" className="max-w-6xl mx-auto px-4 pb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Bootcamp Gallery</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {gallery.map((g) => <GalleryItem key={g.title} {...g} />)}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="max-w-6xl mx-auto px-4 pb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Contact</h2>
                <p className="text-[color:var(--subtext)]">Reach out via:</p>
                <div className="mt-3 flex gap-4 text-sm">
                    <a href="https://github.com/Xugknight" target="_blank" className="underline decoration-dotted underline-offset-4">GitHub</a>
                    {/* <a href="https://linkedin.com/in/you" target="_blank" className="underline decoration-dotted underline-offset-4">LinkedIn</a>
                    <a href="mailto:you@domain.dev" className="underline decoration-dotted underline-offset-4">Email</a> */}
                </div>
            </section>
        </main>
    );
}