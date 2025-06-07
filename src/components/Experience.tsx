"use client";

import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { Heading } from "./ui/Heading";
import { Card } from "./ui/Card";
import { Tag } from "./ui/Tag";
import { Icon } from "./ui/Icon";
import { FaMapMarkerAlt } from "react-icons/fa";
import { experiences } from "@/constants/experience";

export function Experience() {
  return (
    <Section id="experience">
      <Container maxWidth="xl">
        <Heading level={2} gradient className="mb-8">
          Experience
        </Heading>

        <div className="relative">
          {/* Main timeline line - only visible on desktop */}
          <div className="absolute hidden md:block w-0.5 bg-gray-200 dark:bg-gray-800 h-full left-8 top-3" />

          <div className="space-y-12">
            {experiences.map((experience) => (
              <div
                key={`${experience.company}`}
                className="relative flex flex-col md:flex-row gap-4 md:gap-8 md:ml-0"
              >
                {/* Timeline dot and date - only visible on desktop */}
                <div className="hidden md:flex md:w-48 items-start">
                  <div className="relative flex items-center">
                    <div className="w-4 h-4 rounded-full border-2 border-blue-600 bg-white dark:bg-gray-900" />
                    <div className="w-8 h-[2px] bg-gray-200 dark:bg-gray-800" />
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {experience.duration}
                  </div>
                </div>

                {/* Mobile date */}
                <div className="md:hidden text-gray-600 dark:text-gray-400 font-medium mb-2">
                  {experience.duration}
                </div>

                {/* Content card */}
                <Card className="flex-1 p-6 dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-800 transition-colors duration-200">
                  <Heading level={3} gradient className="mb-1">
                    {experience.title}
                  </Heading>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                    <div className="text-blue-600 dark:text-blue-400 font-medium">
                      {experience.company}
                    </div>
                    <div className="hidden sm:block text-gray-400">•</div>
                    <div className="flex items-center">
                      <Icon icon={FaMapMarkerAlt} className="mr-1" />
                      {experience.location}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                    {experience.description.map((point, i) => (
                      <li key={i} className="pl-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <Tag
                        key={tag}
                        className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full"
                      >
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
