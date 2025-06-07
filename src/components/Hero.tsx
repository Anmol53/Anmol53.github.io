"use client";

import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { Heading } from "./ui/Heading";
import { Link } from "./ui/Link";
import { Icon } from "./ui/Icon";
import { calculateExperience } from "@/utils/date";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <Section className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <Container maxWidth="xl">
        <Heading level={1} gradient className="text-center mb-6">
          Hi, I&apos;m Anmol Agrawal
        </Heading>

        <div className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 text-center h-[48px] sm:h-[56px] lg:h-[72px] flex items-center justify-center">
          <TypeAnimation
            sequence={[
              "Software Engineer III at Shaadi.com",
              2000,
              "Full Stack Developer",
              2000,
              "Building scalable web applications",
              2000,
              "Problem Solver",
              2000,
              "Tech Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-center leading-relaxed max-w-3xl mx-auto">
            A passionate Software Developer with over{" "}
            {calculateExperience("2021-01-01")} years of experience in building
            web applications. Currently working at People Interactive
            (Shaadi.com) where I contribute to developing and enhancing the
            Marketing Automation Platform. I specialize in full-stack
            development using modern technologies like React, Node.js, and cloud
            services.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            href="#contact"
            className={cn(
              "px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400",
              "text-white rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30",
              "transform hover:scale-[1.02] transition-all duration-200 text-sm sm:text-base"
            )}
          >
            Get in Touch
          </Link>
          <Link
            href="/resume.pdf"
            external
            className={cn(
              "inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700",
              "text-gray-900 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white rounded-xl",
              "ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-600",
              "shadow-lg shadow-gray-200/20 dark:shadow-black/20 hover:shadow-gray-200/40 dark:hover:shadow-black/40",
              "transform hover:scale-[1.02] transition-all duration-200 text-sm sm:text-base font-medium"
            )}
          >
            Download Resume
          </Link>
        </div>

        <div className="flex justify-center gap-4 sm:gap-6">
          <Link
            href="https://github.com/Anmol53"
            external
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg"
          >
            <Icon icon={FaGithub} size="lg" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/anmol-53/"
            external
            className="text-gray-600 dark:text-gray-400 hover:text-[#0A66C2] p-2 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg"
          >
            <Icon icon={FaLinkedin} size="lg" />
          </Link>
          <Link
            href="https://hashnode.com/@anmol53"
            external
            className="text-gray-600 dark:text-gray-400 hover:text-[#2962FF] p-2 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg"
          >
            <Icon icon={SiHashnode} size="lg" />
          </Link>
          <Link
            href="mailto:anmol.agrawal53@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-[#EA4335] p-2 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg"
          >
            <Icon icon={FaEnvelope} size="lg" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
