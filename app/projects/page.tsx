import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-3 text-3xl font-semibold tracking-tight">projects</h1>
      <hr className="page-title-divider" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="group block rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-neutral-200/40 dark:hover:shadow-neutral-900/40 backdrop-blur-md bg-white/40 dark:bg-neutral-900/40"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Thumbnail */}
            <div className="aspect-[16/9] relative bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 overflow-hidden">
              {project.thumbnail ? (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-600">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-4">
              <h2 className="font-medium text-black dark:text-white mb-1 text-mlg">
                {project.title}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
