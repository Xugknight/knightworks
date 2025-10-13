import Meta from "../components/Meta";

export default function About() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12">

            <Meta
                title="About — Knightworks"
                description="Full-stack developer blending clean design with reliable engineering."
                canonical="https://knightworks.dev/about"
            />

            <h1 className="text-3xl font-semibold text-[color:var(--text)] mb-6">
                About Me
            </h1>

            <p className="text-lg text-[color:var(--subtext)] leading-relaxed mb-6">
                Hi! I am a full-stack developer who loves building applications that blend
                clean design with solid functionality. I enjoy taking ideas from scratch and
                turning them into polished web experiences.
            </p>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-[color:var(--text)] mb-3">
                    What I’m working on
                </h2>
                <ul className="list-disc list-inside space-y-2 text-[color:var(--subtext)]">
                    <li>Sharpening my skills in modern web stacks (React, Node, Django).</li>
                    <li>Expanding my portfolio with projects that push both design and functionality.</li>
                    <li>Brainstorming bigger ideas once my current lineup feels complete.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-[color:var(--text)] mb-3">
                    Skills
                </h2>
                <ul className="mt-2 grid grid-cols-2 gap-2 text-[color:var(--subtext)]">
                    <li>React / Vite / Tailwind</li>
                    <li>Node / Express</li>
                    <li>PostgreSQL / MongoDB</li>
                    <li>Django / REST APIs</li>
                    <li>Git / GitHub / Postman</li>
                    <li>Heroku / Cloudflare Pages / Neon</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-[color:var(--text)] mb-3">
                    Outside of Dev
                </h2>
                <p className="text-[color:var(--subtext)]">
                    When I’m not coding, you’ll probably find me gaming 🎮, lifting 🏋🏼‍♂️, or
                    diving into a new hobby. I like exploring and learning skills both
                    inside and outside of tech.
                </p>
            </section>

            <section>
                <h2 className="mt-8 mb-2 text-lg font-medium text-[color:var(--text)]">Contact</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                    <a href="mailto:info@knightworks.dev" className="rounded-lg bg-[color:var(--text)] px-3 py-1.5 text-[color:var(--bg)] text-sm hover:opacity-90">Email</a>
                    <a href="https://github.com/Xugknight" target="_blank" rel="noreferrer" className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-sm hover:opacity-90">GitHub</a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-sm hover:opacity-90">LinkedIn</a>
                </div>
            </section>
        </main>
    );
}