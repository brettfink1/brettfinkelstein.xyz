# brettfinkelstein.xyz

Personal portfolio site — Home, Projects, Resume, and Contact.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- Light/dark theme follows OS preference (`prefers-color-scheme`), no manual toggle

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/` — routes (`/`, `/projects`, `/resume`, `/contact`)
- `src/components/` — shared UI (`Header`, `Footer`, `ProjectCard`)
- `src/data/` — site content (bio, skills, resume experience, projects)
- `public/resume.pdf` — downloadable resume

To add a new project, add an entry to `src/data/projects.ts`.

## Build

```bash
npm run build
npm start
```

## License

MIT — see [LICENSE](LICENSE).
