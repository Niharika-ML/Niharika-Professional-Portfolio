import React from 'react';
import { Brain, Cpu, Globe, ArrowRight, Layers } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const WhatIBuild: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Brain,
    Cpu,
    Globe,
  };

  return (
    <section id="what-i-build" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
          <span>02 / Core Focus</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          What I Build
        </h2>
        <div className="h-1 w-12 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-3" />
      </div>

      {/* 3 Large Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {PORTFOLIO_CONFIG.whatIBuild.map((item, index) => {
          const Icon = iconMap[item.icon] || Layers;
          return (
            <div
              key={item.title}
              className={`group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-slate-900/85 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] ${item.borderGlow} flex flex-col justify-between`}
            >
              {/* Subtle top accent gradient */}
              <div
                className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${
                  index === 0
                    ? 'from-sky-500 to-blue-500'
                    : index === 1
                    ? 'from-indigo-500 to-purple-500'
                    : 'from-purple-500 to-pink-500'
                } opacity-70 group-hover:opacity-100 transition-opacity`}
              />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 shadow-inner group-hover:border-sky-500/40 transition-colors">
                    <Icon className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Technologies List */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Primary Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/50 text-[11px] font-medium text-slate-300 group-hover:border-slate-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
