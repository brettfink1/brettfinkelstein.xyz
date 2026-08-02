import type { Metadata } from "next";
import { education, experience } from "@/data/resume";
import { skillGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume — Brett Finkelstein",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
        <a
          href="/resume.pdf"
          download
          className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Download PDF
        </a>
      </div>

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          Experience
        </h2>
        <div className="mt-6 flex flex-col gap-10">
          {experience.map((job) => (
            <div key={job.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">{job.company}</h3>
                <span className="text-sm text-muted">{job.location}</span>
              </div>
              <div className="mt-4 flex flex-col gap-6 border-l border-border pl-5">
                {job.roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h4 className="text-sm font-medium">{role.title}</h4>
                      <span className="text-xs text-muted">{role.period}</span>
                    </div>
                    <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-muted">
                      {role.highlights.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          Education
        </h2>
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="font-semibold">{education.school}</h3>
          <span className="text-sm text-muted">{education.location}</span>
        </div>
        <p className="text-sm text-muted">{education.degree}</p>
      </section>

      <section className="mt-12">
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
