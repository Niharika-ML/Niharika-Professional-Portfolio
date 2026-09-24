import React, { useState } from 'react';
import { Terminal, Database, Cpu, Wrench, Sparkles, Check } from 'lucide-react';
import { PORTFOLIO_CONFIG, SkillCategory } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.ElementType> = {
    Programming: Terminal,
    'Data Science': Database,
    'Machine Learning': Cpu,
    Development: Wrench,
    'AI & Innovation': Sparkles,
  };

  const categories = ['All', ...PORTFOLIO_CONFIG.skills.map((c) => c.title)];

  const displayedCategories =
    selectedCategory === 'All'
      ? PORTFOLIO_CONFIG.skills
      : PORTFOLIO_CONFIG.skills.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start mb-10">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
          <span>03 / Technical Competency</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Skills &amp; Technologies
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
          Core technical toolkit cultivated through academic coursework, open-source building, and competitive hackathons.
        </p>
        <div className="h-1 w-12 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-3" />
      </div>

      {/* Interactive Category Filter Pills (Functional Buttons) */}
      <div className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            type="button"
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-sky-500 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCategories.map((cat) => {
          const Icon = categoryIcons[cat.title] || Sparkles;
          return (
            <div
              key={cat.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-md hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800/70 mb-4">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-100 text-base group-hover:text-sky-300 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                        skill.highlight
                          ? 'bg-slate-800/90 text-sky-200 border border-sky-500/40 shadow-[0_0_10px_rgba(56,189,248,0.15)] group-hover:border-sky-400/60'
                          : 'bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-slate-600 hover:text-white'
                      }`}
                    >
                      {skill.highlight && <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{cat.skills.length} competencies</span>
                <span className="text-sky-400/80">Active Practice</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
