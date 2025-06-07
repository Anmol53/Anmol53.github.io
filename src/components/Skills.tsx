"use client";

import { motion } from "framer-motion";
import { Marquee, SkillCard } from "./MarqueeWrapper";
import { Heading } from "./ui/Heading";

const skillsRow1 = [
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain",
    color: "text-[#F7DF1E]",
  },
  {
    name: "React",
    icon: "devicon-react-original",
    color: "text-[#61DAFB]",
  },
  {
    name: "Next.js",
    icon: "devicon-nextjs-plain",
    color: "text-white dark:text-white",
  },
  {
    name: "Redux",
    icon: "devicon-redux-original",
    color: "text-[#764ABC]",
  },
  {
    name: "HTML5",
    icon: "devicon-html5-plain",
    color: "text-[#E34F26]",
  },
  {
    name: "CSS3",
    icon: "devicon-css3-plain",
    color: "text-[#1572B6]",
  },
  {
    name: "Sass",
    icon: "devicon-sass-original",
    color: "text-[#CC6699]",
  },
  {
    name: "Bootstrap",
    icon: "devicon-bootstrap-plain",
    color: "text-[#7952B3]",
  },
  {
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-plain",
    color: "text-[#06B6D4]",
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain",
    color: "text-[#3178C6]",
  },
];

const skillsRow2 = [
  {
    name: "Node.js",
    icon: "devicon-nodejs-plain",
    color: "text-[#339933]",
  },
  {
    name: "Express",
    icon: "devicon-express-original",
    color: "text-white dark:text-white",
  },
  {
    name: "MongoDB",
    icon: "devicon-mongodb-plain",
    color: "text-[#47A248]",
  },
  {
    name: "Redis",
    icon: "devicon-redis-plain",
    color: "text-[#DC382D]",
  },
  {
    name: "Elasticsearch",
    icon: "devicon-elasticsearch-plain",
    color: "text-[#005571]",
  },
  {
    name: "Kafka",
    icon: "devicon-apachekafka-original",
    color: "text-white dark:text-white",
  },
  {
    name: "PostgreSQL",
    icon: "devicon-postgresql-plain",
    color: "text-[#4169E1]",
  },
  {
    name: "MySQL",
    icon: "devicon-mysql-plain",
    color: "text-[#4479A1]",
  },
  {
    name: "GraphQL",
    icon: "devicon-graphql-plain",
    color: "text-[#E10098]",
  },
  {
    name: "PHP",
    icon: "devicon-php-plain",
    color: "text-[#777BB4]",
  },
];

const skillsRow3 = [
  {
    name: "AWS",
    icon: "devicon-amazonwebservices-plain-wordmark",
    color: "text-[#FF9900]",
  },
  {
    name: "Docker",
    icon: "devicon-docker-plain",
    color: "text-[#2496ED]",
  },
  {
    name: "Git",
    icon: "devicon-git-plain",
    color: "text-[#F05032]",
  },
  {
    name: "Python",
    icon: "devicon-python-plain",
    color: "text-[#3776AB]",
  },
  {
    name: "Jest",
    icon: "devicon-jest-plain",
    color: "text-[#C21325]",
  },
  {
    name: "Jira",
    icon: "devicon-jira-plain",
    color: "text-[#0052CC]",
  },
  {
    name: "DataDog",
    icon: "custom-datadog",
    color: "text-[#632CA6]",
  },
  {
    name: "Kibana",
    icon: "devicon-kibana-plain",
    color: "text-[#005571]",
  },
  {
    name: "GitHub",
    icon: "devicon-github-original",
    color: "text-white dark:text-white",
  },
  {
    name: "Kubernetes",
    icon: "devicon-kubernetes-plain",
    color: "text-[#326CE5]",
  },
];

export function Skills() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Heading level={2} gradient className="mb-16 text-center">
            Technical Skills
          </Heading>

          <div className="space-y-16">
            <div className="rotate-[1deg]">
              <Marquee speed={50}>
                {skillsRow1.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </Marquee>
            </div>

            <div className="rotate-[-1deg]">
              <Marquee direction="right" speed={80}>
                {skillsRow2.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </Marquee>
            </div>

            <div className="rotate-[1deg]">
              <Marquee speed={65}>
                {skillsRow3.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </Marquee>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
