export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer III",
    company: "People Interactive (Shaadi.com)",
    duration: "Feb 2022 - Present",
    location: "Mumbai, IN",
    description: [
      "Developing and enhancing an in-house Marketing Automation Platform that segments users and delivers targeted communications across multiple channels (Email, SMS, Push Notifications).",
      "Implemented user segmentation using Elastic Search to efficiently query and filter user profiles based on various attributes.",
      "Built scalable data pipelines using AWS services (Lambda, Kinesis, EC2, ECS) to process and sync user data.",
      "Designed and optimized campaign management system for creating, scheduling, and tracking multi-channel communications.",
      "Utilized Redis for caching and MongoDB for storing campaign data, improving system performance and response times.",
      "Implemented comprehensive monitoring using ELK Stack for tracking campaign deliveries and user engagement metrics."
    ],
    tags: [
      "React.js",
      "Node.js",
      "Python",
      "AWS Lambda",
      "AWS Kinesis",
      "Elastic Search",
      "Redis",
      "MongoDB"
    ]
  },
  {
    title: "Digital Specialist Engineer",
    company: "Infosys",
    duration: "Jan 2021 - Jan 2022",
    location: "Pune, IN",
    description: [
      "Worked as an ETL Developer focusing on data transformation and pipeline development.",
      "Developed Azure pipelines and migrated data transformation logic from SSIS into DBT.",
      "Implemented efficient data processing workflows using Azure services.",
      "Collaborated with teams to ensure smooth data migration and transformation processes."
    ],
    tags: ["Azure Data Factory", "Azure Synapse", "DBT", "ETL", "Data Engineering"]
  }
]; 