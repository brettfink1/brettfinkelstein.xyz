export const experience = [
  {
    company: "Chubb Insurance",
    location: "Philadelphia, PA",
    roles: [
      {
        title: "Software Engineer III",
        period: "Mar. 2026 – Present",
        highlights: [
          "Led Signal+ development using Python, Databricks, and Snowflake, automating ingestion, transformation, and model monitoring workflows to detect data drift and track loss, reducing monitoring timelines from months to weeks.",
          "Created and designed the Account Data Strategy pipeline in Databricks, architecting scalable ingestion and standardization workflows for massive brokerage datasets to enable governed, enterprise-wide downstream consumption in Snowflake.",
          "Building Smart Mapper, an AI-agent driven workflow that maps agency book-of-business columns to the Account Data Strategy standard and persists approved mappings to Snowflake, reducing a manual hours-long process to minutes.",
        ],
      },
      {
        title: "Software Engineer II",
        period: "Apr. 2024 – Mar. 2026",
        highlights: [
          "Led frontend development of GenAI-powered web applications for regulatory analysis using Angular, TypeScript, and Node.js, while owning the RAG pipeline frontend and streamlining workflow efficiency across business units, earning a global recognition award.",
          "Deployed and managed application services with Kubernetes (K8s) to ensure scalability, reliability, and rapid iteration.",
          "Modernized the ChubbIQ project by automating agency data ingestion and lead generation with Databricks (PySpark, SQL, Azure Data Lake), reducing new agency onboarding time by 70%.",
          "Analyzed underwriter-agent communications with SQL to surface actionable relationship insights, earning a global innovation award.",
        ],
      },
    ],
  },
  {
    company: "The Vanguard Group",
    location: "Malvern, PA",
    roles: [
      {
        title: "Software Engineer II",
        period: "Sep. 2022 – Apr. 2024",
        highlights: [
          "Modernized a Python, Flask, and JavaScript web application into a centralized AWS job management platform, enabling researchers to launch, monitor, and debug data jobs through the UI.",
          "Built and managed AWS SageMaker pipelines for ML/NLP models including Word2Vec, Doc2Vec, and a custom BERT model trained on SEC filings and earnings call transcripts, unlocking spoken-word analysis as a new investment signal.",
          "Collaborated with traders to engineer a live financial analysis tool in Python, integrating OneTick market data to deliver real-time global market insights.",
        ],
      },
      {
        title: "Software Engineer I",
        period: "Jun. 2021 – Sep. 2022",
        highlights: [
          "Designed and deployed Portfolio Analyzer, a Flask web application on AWS ECS giving research and portfolio managers a centralized platform to compare stocks across data sources, contributing to millions of dollars of Alpha.",
          "Engineered an automated data pipeline using AWS Lambda, SQS, and DynamoDB to stream Federal Reserve Economic Data (FRED) directly to Quantitative Equity Group researchers.",
          "Led the upgrade of research and production systems to a higher Python version, including package updates and compatibility fixes across team workflows.",
        ],
      },
    ],
  },
] as const;

export const education = {
  school: "University of Massachusetts Amherst",
  location: "Amherst, MA",
  degree: "B.S. in Computer Science",
} as const;
