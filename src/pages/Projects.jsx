import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-10">
            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-[color:var(--text)]">Projects</h1>
                <p className="mt-2 text-[color:var(--subtext)]">
                    A few apps I have built and deployed.
                </p>
            </header>

            <section className="grid gap-6 sm:grid-cols-2">
                {projects.map((p) => (
                    <ProjectCard key={p.title} {...p} />
                ))}
            </section>
        </main>
    );
}