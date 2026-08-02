import Image from "next/image";
import Link from "next/link";
import headshot from "@/assets/headshot.jpeg";
import { site, skillGroups } from "@/data/site";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <section className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:gap-10 sm:text-left">
        <Image
          src={headshot}
          alt={site.name}
          width={144}
          height={144}
          preload
          className="h-36 w-36 rounded-full object-cover ring-1 ring-border"
        />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            {site.name}
          </h1>
          <p className="mt-1 text-accent font-medium">{site.role}</p>
          <p className="mt-4 max-w-xl text-muted">{site.bio}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
            <Link
              href="/projects"
              className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              View Projects
            </Link>
            <Link
              href="/resume"
              className="rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-surface"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-surface"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          Skills
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium">{group.category}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
