export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  github: string;
};

export const projects: Project[] = [
  {
    name: "JobMatch",
    tagline: "AI-powered resume-to-job matching",
    description:
      "Upload a resume and let Claude score and rank live job listings against it. JobMatch scrapes multiple job boards in real time, then uses the Claude API to evaluate each listing's fit — skills, experience level, and more — with a match score and explanation for every result.",
    stack: [
      "FastAPI",
      "python-jobspy",
      "Anthropic SDK",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/brettfink1/jobmatch",
  },
];
