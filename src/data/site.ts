export const site = {
  name: "Brett Finkelstein",
  role: "Software Engineer III @ Chubb Insurance",
  location: "Philadelphia, PA",
  email: "brettfinkelstein1@gmail.com",
  github: "https://github.com/brettfink1",
  linkedin: "https://www.linkedin.com/in/brettfinkelstein1",
  bio: "I'm a software engineer with 5+ years of experience building full-stack and data-driven applications, from GenAI-powered tools to large-scale data pipelines. Lately I've been exploring what LLMs can do for developer productivity, like the AI job-matching tool below.",
} as const;

export const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "Java", "JavaScript", "Node.js", "SQL"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "Jenkins", "Kubernetes", "Git"],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "Angular",
      "React",
      "Flask",
      "FastAPI",
      "Plotly",
      "Hugging Face",
      "Gensim",
      "PySpark",
    ],
  },
  {
    category: "Data Platforms",
    skills: [
      "Snowflake",
      "PostgreSQL",
      "SSMS",
      "Databricks",
      "Azure Data Lake",
      "DynamoDB",
    ],
  },
] as const;
