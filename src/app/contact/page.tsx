import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Brett Finkelstein",
};

const links = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/brettfinkelstein1",
    href: site.linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/brettfink1",
    href: site.github,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-2 text-muted">
        Best way to reach me is email — happy to chat about roles, projects,
        or anything else.
      </p>
      <div className="mt-10 flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-border bg-surface px-6 py-4 transition-colors hover:bg-background"
          >
            <span className="text-sm font-medium">{link.label}</span>
            <span className="text-sm text-muted">{link.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
