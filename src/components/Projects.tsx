import React, { useState } from 'react';
import { PORTFOLIO_CONFIG, Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Sparkles, Filter } from 'lucide-react';

interface ProjectsProps {
  onOpenProjectModal: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenProjectModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = [
    'All',
    'AI / ML',
    'Data Science',
    'AI Agents',
    'Computer Vision',
    'Web Applications',
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? PORTFOLIO_CONFIG.projects
      : PORTFOLIO_CONFIG.projects.filter((p) =>
          p.category.includes(
            activeFilter as
              | 'AI / ML'
              | 'Data Science'
              | 'AI Agents'
              | 'Computer Vision'
              | 'Web Applications'
          )
        );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
            <span>04 / Selected Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-base text-slate-400 mt-2">
            Turning ideas into working solutions.
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Project count indicator */}
        <div className="text-xs font-mono text-slate-400">
          Showing <span className="text-sky-300 font-semibold">{filteredProjects.length}</span> of{' '}
          {PORTFOLIO_CONFIG.projects.length} projects
        </div>
      </div>

      {/* Interactive Filter Pills (Segmented Button Group) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 whitespace-nowrap ${
                  isActive
                    ? 'bg-sky-500 text-white shadow-[0_0_15px_rgba(56,189,248,0.35)] font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenModal={onOpenProjectModal}
          />
        ))}
      </div>
    </section>
  );
};
