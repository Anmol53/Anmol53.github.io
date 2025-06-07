"use client";

import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { Heading } from "./ui/Heading";
import { Card } from "./ui/Card";
import { Link } from "./ui/Link";
import { Tag } from "./ui/Tag";
import { Icon } from "./ui/Icon";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/constants/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <Section
      id="projects"
      className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"
    >
      <Container maxWidth="xl">
        <Heading level={2} gradient className="mb-12">
          Projects
        </Heading>
        <div className="grid gap-10">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group relative bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 transition-all duration-500 border border-gray-100 dark:border-gray-800 backdrop-blur-sm"
            >
              <div className="p-0 md:p-4 lg:p-8">
                <div className="flex justify-between items-start mb-6">
                  <Heading level={3} gradient>
                    {project.title}
                  </Heading>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <Tag
                      key={tag}
                      className="px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700 hover:shadow-md transition-all duration-300"
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <Link
                    href={project.liveLink}
                    external
                    className={cn(
                      "inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400",
                      "text-white rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30",
                      "transform hover:scale-[1.02] transition-all duration-200 text-sm sm:text-base font-medium"
                    )}
                  >
                    <span>View Live</span>
                    <Icon icon={FaExternalLinkAlt} className="ml-2" />
                  </Link>
                  <Link
                    href={project.githubLink}
                    external
                    className={cn(
                      "inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700",
                      "text-gray-900 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white rounded-xl",
                      "ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-600",
                      "shadow-lg shadow-gray-200/20 dark:shadow-black/20 hover:shadow-gray-200/40 dark:hover:shadow-black/40",
                      "transform hover:scale-[1.02] transition-all duration-200 text-sm sm:text-base font-medium"
                    )}
                  >
                    <Icon icon={FaGithub} className="mr-2" />
                    <span>View Code</span>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
