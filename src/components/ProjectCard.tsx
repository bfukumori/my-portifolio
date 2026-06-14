"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:bg-zinc-800/50 hover:border-zinc-700"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-zinc-100">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-emerald-400 mt-1">
            {project.architecture}
          </p>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link para ${project.title}`}
          >
            <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-zinc-300" />
          </a>
        )}
      </div>
      <p className="text-zinc-400 leading-relaxed">{project.description}</p>
      <ul className="flex flex-wrap gap-2 mt-auto pt-4">
        {project.metrics.map((metric, i) => (
          <li
            key={`${project.id}-metric-${i}`}
            className="rounded-full bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-300"
          >
            {metric}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
