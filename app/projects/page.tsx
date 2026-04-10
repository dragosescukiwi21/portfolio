import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";
import {
  SiCplusplus,
  SiPython,
  SiFlask,
  SiDocker,
  SiDialogflow,
  SiAstro,
  SiTypescript,
  SiGooglecloud,
  SiLangchain
} from "react-icons/si";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

const techIcons: Record<string, React.ReactNode> = {
  "C++": <img src="https://skillicons.dev/icons?i=cpp" alt="C++" className="w-5 h-5 hover:scale-110 transition-transform" />,
  "Python": <img src="https://skillicons.dev/icons?i=py" alt="Python" className="w-5 h-5 hover:scale-110 transition-transform" />,
  "Flask": <img src="https://skillicons.dev/icons?i=flask" alt="Flask" className="w-5 h-5 hover:scale-110 transition-transform" />,
  "Docker": <img src="https://skillicons.dev/icons?i=docker" alt="Docker" className="w-5 h-5 hover:scale-110 transition-transform" />,
  "Dialogflow": <SiDialogflow title="Dialogflow" color="#FF9800" className="w-5 h-5 hover:scale-110 transition-transform" />,
  "Astro": <img src="https://skillicons.dev/icons?i=astro" alt="Astro" className="w-5 h-5 hover:scale-110 transition-transform" />,
  "LangChain": <SiLangchain title="LangChain" color="#1C3C3C" className="w-5 h-5 dark:text-[#1C3C3C] bg-white rounded-full hover:scale-110 transition-transform p-[2px]" />,
  "TypeScript": <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" className="w-5 h-5 hover:scale-110 transition-transform" />,
  "Google AI Vision": <img src="https://skillicons.dev/icons?i=gcp" alt="Google Cloud" className="w-5 h-5 hover:scale-110 transition-transform" />,
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-3 text-3xl font-semibold tracking-tight">projects</h1>
      <hr className="page-title-divider" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-neutral-200/40 dark:hover:shadow-neutral-900/40 backdrop-blur-md bg-white/40 dark:bg-neutral-900/40"
          >
            {/* Title */}
            <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
              {project.title}
            </h2>

            {/* Badges as Icons */}
            {project.tech && project.tech.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, i) => (
                  <div key={i} className="flex items-center justify-center">
                    {techIcons[tech] || (
                      <span className="px-2 py-1 text-xs font-medium bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 rounded-md">
                        {tech}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Description */}
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>

            {/* Redirect Button */}
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-lg transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-200"
            >
              View Project
              <svg
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
