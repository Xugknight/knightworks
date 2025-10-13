import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import Meta from "../components/Meta";
import { projectImages } from "../data/projectImages";

export default function Projects() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-10">

            <Meta
                title="Projects — Knightworks"
                description="Live links and repo links. All deployed projects."
                canonical="https://knightworks.dev/projects"
            />

            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-[color:var(--text)]">Projects</h1>
                <p className="mt-2 text-[color:var(--subtext)]">
                    A few apps I have built and deployed.
                </p>
            </header>

            <section className="grid gap-6 sm:grid-cols-2">
                {projects.map((p) => {
                    const img = projectImages[p.slug]?.hero;
                    const image = img ? img.src : p.image;
                    return <ProjectCard key={p.title} {...p} image={image} />;
                })}
            </section>
        </main>
    );
}