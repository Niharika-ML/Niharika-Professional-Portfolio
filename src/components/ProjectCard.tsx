import React from 'react';
import { ExternalLink, Github, ArrowUpRight, CheckCircle, Info } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div
      onClick={() => onOpenModal(project)}
      className="group relative rounded-3xl border border-slate-800/90 bg-slate-900/50 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)] cursor-pointer flex flex-col justify-between"
    >
      {/* Top Metadata Header */}
      <div>
        <div className="flex items-center justify-between gap-2 pb-3">
          <div className="flex items-center gap-2 text-xs text-sky-400 font-mono">
            <span>{project.category[0]}</span>
            {project.tag && (
              <>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400">{project.tag}</span>
              </>
            )}
          </div>
          
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(project);
            }}
            aria-label={`View details for ${project.title}`}
            className="flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-sky-300 transition-colors"
          >
            <span>Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-sm text-slate-300 leading-relaxed font-normal line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Problem & Solution Snippet */}
        <div className="mt-4 space-y-2 rounded-2xl bg-slate-950/50 p-3.5 border border-slate-800/70 text-xs">
          <div>
            <span className="font-mono text-[10px] uppercase text-amber-400 tracking-wider">Problem: </span>
            <span className="text-slate-400 line-clamp-2">{project.problem}</span>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase text-sky-400 tracking-wider">Solution: </span>
            <span className="text-slate-300 line-clamp-2">{project.solution}</span>
          </div>
        </div>

        {/* Key Feature Highlight */}
        <div className="mt-4 flex items-start gap-2 text-xs text-slate-400">
          <CheckCircle className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
          <span className="line-clamp-1 text-slate-300 font-medium">
            {project.features[0]}
          </span>
        </div>
      </div>

      {/* Footer: Technologies & External Action Buttons */}
      <div className="mt-6 pt-4 border-t border-slate-800/70 space-y-4">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-lg bg-slate-800/80 border border-slate-700/50 text-[11px] font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded-lg bg-slate-800/40 text-[11px] text-slate-400 font-mono">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 pt-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/70 px-3 py-2 text-xs font-semibold text-slate-200 hover:border-slate-500 hover:bg-slate-700 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-sky-500/20 border border-sky-500/40 px-3 py-2 text-xs font-semibold text-sky-300 hover:bg-sky-500/30 hover:border-sky-400 transition-colors shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
