import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-border bg-surface p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="text-sm text-accent">{project.tagline}</p>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-border px-3 py-1 text-xs font-medium transition-colors hover:bg-background"
        >
          GitHub ↗
        </a>
      </div>
      <p className="mt-4 text-sm text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
